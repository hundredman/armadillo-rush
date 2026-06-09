import * as THREE from 'three'
import './ui.css'
import armadilloSheetUrl from './assets/elthen/armadillo-sprite-sheet.png'
import slingshotIconUrl from './assets/game-icons/slingshot.svg'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { PostFX } from './renderer/postfx.js'
import { ParticleSystem } from './game/particles.js'
import { StateMachine, State } from './state.js'
import { PhysicsWorld } from './game/physics.js'
import {
  submitScore,
  fetchLeaderboard,
  getSavedPlayerName,
  savePlayerName,
} from './game/scoreboard.js'
import {
  DEFAULT_ISLAND_LAYOUT,
  createCurvedTerrain,
  damageTerrain,
  generateNextIslandSpec,
  updateTerrainChunks,
  updateTerrainCraters,
  getTerrainSlopeAngle,
  getTerrainTopY,
  isTerrainDamagedAt,
} from './game/terrain.js'
import {
  CAMERA_LERP,
  GRAVITY,
  MAX_SPEED,
  PX_PER_METER,
  SCORE,
  SLOWMO_SCALE,
  SLOWMO_SEC,
  STALL_DANGER_SEC,
  STALL_GAMEOVER_SEC,
  STALL_SPEED_RATIO,
} from './config.js'

/**
 * Entry point + game loop.
 *
 * Fixed-timestep accumulator loop:
 *   - Physics always steps at 1/60s — framerate-independent
 *   - Render once per rAF
 * Stage 1: state machine skeleton + background shader + placeholder islands +
 * camera tracking. Later stages hook in game/* modules here.
 */

const FIXED_DT = 1 / 60       // physics step (seconds)
const MAX_FRAME_DT = 0.25     // spiral-of-death guard after tab inactivity
const ARMADILLO_SIZE = 30
const LAUNCH_SPEED = 1600

// world bounds
const SEA_LEVEL_Y  = -360   // sea level — fall-out boundary
const MOON_TARGET_Y = 18000  // moon target altitude (px)
const SPLASH_GAMEOVER_DELAY = 0.42

// sling constants
const SLING_POS = new THREE.Vector2(-280, 0)  // sling center — starts at screen mid-height
const SLING_ARMADILLO_REST_Y = 70
const SLING_MAX_PULL = 120      // max pull distance (world px)
const SLING_MIN_PULL = 18       // cancel if pull is below this
const SLING_POWER_MIN = 0.78    // power ratio at minimum pull
const SLING_POWER_MAX = 1.0     // power ratio at maximum pull

// spawn new islands when this far ahead of camera viewport
const ISLAND_SPAWN_LOOKAHEAD = 22000
const INITIAL_PROCEDURAL_ISLANDS = 120
const ISLANDS_PER_SPAWN_TICK = 36

const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(40)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(58)
const UNDER_BREAK_SPEED = 320
const DAMAGE_SPEED_FULL = 700
const BOOST_ACCEL_PER_SEC = 1.2       // speedRatio/s gained while holding input
const BOOST_SPEED_LIMIT = 1.8
const BOOST_RELEASE_SPEED_KICK = 0.35
const BOOST_RELEASE_VERTICAL_KICK = 920
const ROLLING_FRICTION_PER_SEC = 0.18 // speedRatio/s lost to friction when no input
const SPACE_GRAVITY_RATIO = 0.28
const SPACE_GRAVITY_START = 0.62
const SPACE_GRAVITY_FULL = 0.86
const CLOUD_SPRING_VY = 760
const CLOUD_SPRING_VX_KEEP = 0.94
const TERRAIN_MIN_GAP = 12
const SKY_CLEAR_LOW = new THREE.Color(0x8edcff)
const SKY_CLEAR_MID = new THREE.Color(0x4f91dc)
const SKY_CLEAR_HIGH = new THREE.Color(0x111a46)
const SKY_CLEAR_SPACE = new THREE.Color(0x000010)

const TIPS = [
  'Hold to charge the slingshot — more power, more distance.',
  'Smashing through terrain gives you a speed burst on exit.',
  'Hold SPACE while rolling to accelerate, release to jump.',
  'Keep SPACE held in the air — the armadillo spins until landing.',
  'The higher you fly before hitting the sea, the stronger your bounce.',
  'Aim for the moon — height earns more points than distance.',
  'You have 3 lives. The sea will bounce you back — use them wisely.',
  'Speed is everything. Don\'t let it stall on the slopes.',
]

class Game {
  constructor() {
    const canvas = document.getElementById('game-canvas')
    this.renderer = new Renderer(canvas)
    this.background = new Background(this.renderer)
    this.postfx = new PostFX(
      this.renderer.renderer,
      this.renderer.scene,
      this.renderer.camera,
      this.background.scene,
      this.background.camera,
    )
    this.renderer.registerPostFX(this.postfx)
    this.particleSystem = new ParticleSystem()
    this.renderer.add(this.particleSystem.mesh)
    this.physics = new PhysicsWorld()
    this.sm = new StateMachine(State.TITLE)

    this.time = 0
    this.accumulator = 0
    this.lastNow = performance.now()
    this.velocity = new THREE.Vector2(0, 0)
    this.speedRatio = 0.75
    this.motion = {
      previous: new THREE.Vector3(),
      current: new THREE.Vector3(),
      render: new THREE.Vector3(),
      previousRot: 0,
      currentRot: 0,
      renderRot: 0,
    }
    // sling state
    this.slingDragging = false          // currently dragging
    this.slingPull = new THREE.Vector2(0, 0)  // pull vector (world coords)
    this.slingPower = 0                  // power ratio 0~1
    this.slingAngle = Math.PI / 4        // launch angle (radians)
    // Set true when TITLE/GAMEOVER click transitions to SLINGING — the same
    // pointer-up that dismissed the start screen must not trigger any gameplay
    // action (sling drag, hold-release, etc.).  Cleared on next pointerup.
    this._pendingPointerClear = false
    this.boostHeld = false
    this.boostHoldSource = null
    this.spinAngleVel = 0        // rad/s, positive = clockwise; persists across state transitions
    this._edgeFallGraceTimer = 0 // seconds remaining to still jump after falling off edge
    this.currentIsland = null
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length  // procedural generation index

    this.scenery = []
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.lastRating = 'READY'
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.flightPeakY = 0       // peak altitude during flight (for bounce strength)
    this.lives = 3
    this.doubleJumpUsed = false
    this.preBoostSource = null  // input pressed before landing — fires boost immediately on touch
    this.pointerIsDown = false
    this.spaceIsDown = false
    this.bestRecord = this._loadBestRecord()
    this.isPaused = false

    // Scoreboard state
    this.playerName = getSavedPlayerName() || ''
    this.showingNamePrompt = !this.playerName   // ask on first ever launch
    this.showingLeaderboard = false
    this.leaderboardEntries = []   // cached from last fetchLeaderboard() call
    this.pendingScoreEntry = null  // set after game over, cleared after submission
    this._tipIndex = Math.floor(Math.random() * TIPS.length)
    this.audio = null

    // landing ripple effect pool (max 4 simultaneous)
    this.ripples = []
    this._buildRipplePool()

    // sling snap animation
    this.slingSnapTime = 0       // elapsed time since launch snap

    // flame trail spawn cooldown (prevent per-frame emission)
    this.flameTrailCooldown = 0

    // camera follow target
    this.camTarget = new THREE.Vector2(SLING_POS.x, SLING_POS.y)
    this.camPos = new THREE.Vector2(SLING_POS.x, SLING_POS.y)
    this.ui = document.getElementById('ui-overlay')

    this._buildPlaceholderWorld()
    this._bindInput()

    // snap camera to sling position before first frame
    this.renderer.setCenter(SLING_POS.x, SLING_POS.y)

    if (import.meta.env.DEV) {
      this.sm.onChange((from, to) => console.log(`[state] ${from} -> ${to}`))
    }
  }

  // ── World build: sling + islands + armadillo ──
  _buildPlaceholderWorld() {
    this._buildSceneSkyPlane()
    this._buildWorldSea()
    this._buildScenery()
    this.staticIslands = []
    this.islands = []
    this._buildSling()

    this.armadillo = this._createArmadillo()
    this.renderer.add(this.armadillo)
    this._resetRun()
    this._syncMotionToArmadillo()

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240
  }

  /** Procedurally spawn additional islands. */
  _spawnNextIsland() {
    const last = this.islands[this.islands.length - 1]
    const spec = this._avoidTerrainOverlap(generateNextIslandSpec(last, this.islandIndex), last)
    this.islandIndex += 1
    const island = createCurvedTerrain(spec)
    this.renderer.add(island.mesh)
    this.islands.push(island)
    this.physics.addTerrain(island)
    this.maxHeightPx = Math.max(this.maxHeightPx, island.bounds.top + 240)
  }

  _avoidTerrainOverlap(spec, previousIsland) {
    if (!previousIsland) return spec
    const minLeft = previousIsland.bounds.right + TERRAIN_MIN_GAP
    const currentLeft = spec.x - spec.w / 2
    if (currentLeft >= minLeft) return spec
    return { ...spec, x: minLeft + spec.w / 2 }
  }

  _randomizeInitialTerrainSpec(baseSpec, index) {
    const shapePool = ['hill', 'valley', 'bowl', 'slope']
    const early = index < 8
    const nearSea = baseSpec.y < -160
    const yJitter = nearSea ? 44 : early ? 90 : 180
    return {
      ...baseSpec,
      x: baseSpec.x + (Math.random() - 0.5) * 90,
      y: baseSpec.y + (Math.random() - 0.5) * yJitter,
      w: Math.round(baseSpec.w * THREE.MathUtils.lerp(0.78, 0.96, Math.random())),
      depth: Math.max(20, Math.round(baseSpec.depth + (Math.random() - 0.5) * 18)),
      rimH: Math.max(12, Math.round(baseSpec.rimH + (Math.random() - 0.5) * 10)),
      shapeType: early ? baseSpec.shapeType : shapePool[Math.floor(Math.random() * shapePool.length)],
    }
  }

  _buildSling() {
    {
      const S = SLING_POS
      const tipL = new THREE.Vector2(S.x - 68, S.y + 116)
      const tipR = new THREE.Vector2(S.x + 68, S.y + 114)

      const texture = new THREE.TextureLoader().load(slingshotIconUrl)
      texture.colorSpace = THREE.SRGBColorSpace
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      const body = new THREE.Mesh(
        new THREE.PlaneGeometry(154, 154),
        new THREE.MeshBasicMaterial({
          map: texture,
          color: 0x7a513b,
          transparent: true,
          depthWrite: false,
        }),
      )
      body.position.set(S.x, S.y + 4, -0.08)
      body.rotation.z = 0.02

      const bodyShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(154, 154),
        new THREE.MeshBasicMaterial({
          map: texture,
          color: 0x26150f,
          transparent: true,
          opacity: 0.32,
          depthWrite: false,
        }),
      )
      bodyShadow.position.set(S.x + 3, S.y, -0.095)
      bodyShadow.rotation.z = body.rotation.z

      const woodMat = new THREE.MeshBasicMaterial({ color: 0x7b4f34 })
      const woodDarkMat = new THREE.MeshBasicMaterial({ color: 0x2b1811 })
      const woodHiMat = new THREE.MeshBasicMaterial({ color: 0xb77a52, transparent: true, opacity: 0.46 })
      const makeWoodSegment = (a, b, width, z, showTopCap = true) => {
        const dx = b.x - a.x
        const dy = b.y - a.y
        const len = Math.hypot(dx, dy)
        const group = new THREE.Group()
        group.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, z)
        group.rotation.z = Math.atan2(dy, dx) - Math.PI / 2

        const shadow = new THREE.Mesh(new THREE.BoxGeometry(width + 5, len, 1), woodDarkMat)
        shadow.position.set(2.5, -2.5, -0.006)
        const core = new THREE.Mesh(new THREE.BoxGeometry(width, len, 1), woodMat)
        const shine = new THREE.Mesh(new THREE.BoxGeometry(width * 0.22, len * 0.78, 1), woodHiMat)
        shine.position.set(-width * 0.22, 0, 0.008)

        group.add(shadow, core, shine)
        if (showTopCap) {
          const capTop = new THREE.Mesh(new THREE.CircleGeometry(width / 2, 24), woodMat)
          capTop.position.y = len / 2
          group.add(capTop)
        }
        return group
      }
      const stickTrunk = makeWoodSegment(
        new THREE.Vector2(S.x, S.y - 118),
        new THREE.Vector2(S.x, S.y + 14),
        19,
        -0.072,
        false,
      )
      const stickLeft = makeWoodSegment(
        new THREE.Vector2(S.x - 7, S.y + 4),
        tipL,
        16,
        -0.068,
      )
      const stickRight = makeWoodSegment(
        new THREE.Vector2(S.x + 7, S.y + 4),
        tipR,
        16,
        -0.086,
      )
      stickRight.traverse((obj) => {
        obj.renderOrder = 2
      })
      const forkJoint = new THREE.Mesh(new THREE.CircleGeometry(16, 32), woodMat)
      forkJoint.scale.set(1.04, 0.86, 1)
      forkJoint.position.set(S.x, S.y + 3, -0.058)

      const mkBandGeom = () => {
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Array(12).fill(0), 3))
        geometry.setIndex([0, 1, 2, 0, 2, 3])
        return geometry
      }
      const bandMat = new THREE.MeshBasicMaterial({
        color: 0x20110d,
        transparent: true,
        opacity: 0.96,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      this.slingBandL = new THREE.Mesh(mkBandGeom(), bandMat.clone())
      this.slingBandR = new THREE.Mesh(mkBandGeom(), bandMat.clone())
      this.slingBandL.renderOrder = 10
      this.slingBandR.renderOrder = 10
      const bandHiMat = new THREE.MeshBasicMaterial({
        color: 0x6d4c41,
        transparent: true,
        opacity: 0.58,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      this.slingBandHiL = new THREE.Mesh(mkBandGeom(), bandHiMat.clone())
      this.slingBandHiR = new THREE.Mesh(mkBandGeom(), bandHiMat.clone())
      this.slingBandHiL.renderOrder = 11
      this.slingBandHiR.renderOrder = 11

      const pouchShape = new THREE.Shape()
      pouchShape.moveTo(-24, 0)
      pouchShape.bezierCurveTo(-17, -17, 17, -17, 24, 0)
      pouchShape.bezierCurveTo(18, 13, -18, 13, -24, 0)
      pouchShape.closePath()
      const pouchRim = new THREE.Mesh(
        new THREE.ShapeGeometry(pouchShape, 18),
        new THREE.MeshBasicMaterial({
          color: 0x1f110d,
          transparent: true,
          opacity: 0.54,
          side: THREE.DoubleSide,
          depthTest: false,
          depthWrite: false,
        }),
      )
      pouchRim.scale.set(1.08, 1.16, 1)
      pouchRim.position.z = -0.02
      pouchRim.renderOrder = 6
      this.slingPouch = new THREE.Mesh(
        new THREE.ShapeGeometry(pouchShape, 18),
        new THREE.MeshBasicMaterial({
          color: 0x6b3f2b,
          depthTest: false,
          depthWrite: false,
        }),
      )
      this.slingPouch.position.z = -0.016
      this.slingPouch.renderOrder = 6
      const frontLipShape = new THREE.Shape()
      frontLipShape.moveTo(-22, -5)
      frontLipShape.bezierCurveTo(-15, -15, 15, -15, 22, -5)
      frontLipShape.bezierCurveTo(14, -1, -14, -1, -22, -5)
      frontLipShape.closePath()
      const pouchFront = new THREE.Mesh(
        new THREE.ShapeGeometry(frontLipShape, 18),
        new THREE.MeshBasicMaterial({
          color: 0x4b2a1e,
          transparent: true,
          opacity: 0.96,
          side: THREE.DoubleSide,
          depthTest: false,
          depthWrite: false,
        }),
      )
      pouchFront.position.z = 0.09
      pouchFront.renderOrder = 30
      const pouchHi = new THREE.Mesh(
        new THREE.CircleGeometry(3.8, 18),
        new THREE.MeshBasicMaterial({
          color: 0xc58a63,
          transparent: true,
          opacity: 0.34,
          depthTest: false,
          depthWrite: false,
        }),
      )
      pouchHi.scale.set(1.8, 0.58, 1)
      pouchHi.position.set(-6, -5, 0.012)
      pouchHi.renderOrder = 6
      this.slingPouchGroup = new THREE.Group()
      this.slingPouchGroup.add(pouchRim, this.slingPouch, pouchHi, pouchFront)

      this.renderer.add(stickTrunk)
      this.renderer.add(stickLeft)
      this.renderer.add(stickRight)
      this.renderer.add(bodyShadow)
      this.renderer.add(body)
      this.renderer.add(this.slingBandL)
      this.renderer.add(this.slingBandR)
      this.renderer.add(this.slingBandHiL)
      this.renderer.add(this.slingBandHiR)
      this.renderer.add(this.slingPouchGroup)

      this._forkTipU = { x: tipL.x, y: tipL.y }
      this._forkTipD = { x: tipR.x, y: tipR.y }

      const dottedMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 8, gapSize: 6, opacity: 0.5, transparent: true })
      const dottedGeom = new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 16 }, () => new THREE.Vector3(0, 0, 0)),
      )
      this.slingGuide = new THREE.Line(dottedGeom, dottedMat)
      this.slingGuide.visible = false
      this.slingGuide.computeLineDistances()
      this.renderer.add(this.slingGuide)
      return
    }

    // Wooden slingshot: round fork + dark rubber band + leather pocket.
    const S = SLING_POS

    const wood    = 0x6d4c41
    const woodDk  = 0x3e2723
    const woodMid = 0x8a5a3f
    const woodHi  = 0xb9825f

    const trunkBase = new THREE.Vector2(S.x, S.y - 74)
    const forkBase = new THREE.Vector2(S.x, S.y + 4)
    const tipL = new THREE.Vector2(S.x - 44, S.y + 73)
    const tipR = new THREE.Vector2(S.x + 44, S.y + 72)

    const makeCurvedBranch = (points, widths, z = -0.06) => {
      const left = []
      const right = []
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const prev = points[Math.max(0, i - 1)]
        const next = points[Math.min(points.length - 1, i + 1)]
        const dx = next.x - prev.x
        const dy = next.y - prev.y
        const len = Math.max(1, Math.hypot(dx, dy))
        const nx = -dy / len
        const ny = dx / len
        const w = widths[i]
        left.push(new THREE.Vector2(p.x + nx * w, p.y + ny * w))
        right.push(new THREE.Vector2(p.x - nx * w, p.y - ny * w))
      }

      const shape = new THREE.Shape()
      shape.moveTo(left[0].x, left[0].y)
      for (let i = 1; i < left.length; i++) {
        const prev = left[i - 1]
        const cur = left[i]
        shape.quadraticCurveTo(prev.x, prev.y, cur.x, cur.y)
      }
      for (let i = right.length - 1; i >= 0; i--) {
        const cur = right[i]
        const prev = right[Math.min(right.length - 1, i + 1)]
        shape.quadraticCurveTo(prev.x, prev.y, cur.x, cur.y)
      }
      shape.closePath()

      const core = new THREE.Mesh(
        new THREE.ShapeGeometry(shape, 18),
        new THREE.MeshBasicMaterial({ color: wood, side: THREE.DoubleSide }),
      )
      core.position.z = z

      const shadow = new THREE.Mesh(
        new THREE.ShapeGeometry(shape, 18),
        new THREE.MeshBasicMaterial({ color: woodDk, transparent: true, opacity: 0.88, side: THREE.DoubleSide }),
      )
      shadow.position.set(3, -3, z - 0.014)

      const highlightPts = points.map((p, i) => {
        const prev = points[Math.max(0, i - 1)]
        const next = points[Math.min(points.length - 1, i + 1)]
        const dx = next.x - prev.x
        const dy = next.y - prev.y
        const len = Math.max(1, Math.hypot(dx, dy))
        return new THREE.Vector3(p.x - dy / len * widths[i] * 0.36, p.y + dx / len * widths[i] * 0.36, z + 0.018)
      })
      const highlight = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(highlightPts),
        new THREE.LineBasicMaterial({ color: woodHi, transparent: true, opacity: 0.48 }),
      )

      const group = new THREE.Group()
      group.add(shadow, core, highlight)
      return group
    }

    const trunk = makeCurvedBranch([
      trunkBase,
      new THREE.Vector2(S.x - 2, S.y - 42),
      forkBase,
    ], [13, 12, 15], -0.075)
    const armL = makeCurvedBranch([
      forkBase,
      new THREE.Vector2(S.x - 24, S.y + 28),
      tipL,
    ], [13, 12, 9], -0.06)
    const armR = makeCurvedBranch([
      forkBase,
      new THREE.Vector2(S.x + 24, S.y + 27),
      tipR,
    ], [13, 12, 9], -0.055)
    const footShape = new THREE.Shape()
    footShape.moveTo(S.x - 28, S.y - 84)
    footShape.quadraticCurveTo(S.x, S.y - 94, S.x + 31, S.y - 84)
    footShape.quadraticCurveTo(S.x + 20, S.y - 73, S.x - 22, S.y - 75)
    footShape.quadraticCurveTo(S.x - 31, S.y - 78, S.x - 28, S.y - 84)
    const foot = new THREE.Mesh(
      new THREE.ShapeGeometry(footShape, 12),
      new THREE.MeshBasicMaterial({ color: woodDk, side: THREE.DoubleSide }),
    )
    foot.position.z = -0.095

    const crotch = new THREE.Mesh(
      new THREE.CircleGeometry(15, 32),
      new THREE.MeshBasicMaterial({ color: woodMid }),
    )
    crotch.scale.set(1.0, 0.86, 1)
    crotch.position.set(S.x, S.y + 4, -0.034)

    for (const knot of [
      { x: S.x - 6, y: S.y - 36, s: 4.2 },
      { x: S.x + 16, y: S.y + 26, s: 3.2 },
      { x: S.x - 25, y: S.y + 42, s: 3.0 },
    ]) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(knot.s * 0.45, knot.s, 18),
        new THREE.MeshBasicMaterial({ color: woodDk }),
      )
      ring.scale.y = 0.72
      ring.rotation.z = 0.35
      ring.position.set(knot.x, knot.y, -0.018)
      this.renderer.add(ring)
    }

    for (const tip of [tipL, tipR]) {
      const cap = new THREE.Mesh(
        new THREE.CircleGeometry(9.5, 24),
        new THREE.MeshBasicMaterial({ color: woodDk }),
      )
      cap.position.set(tip.x, tip.y, -0.02)
      const inner = new THREE.Mesh(
        new THREE.CircleGeometry(5.7, 20),
        new THREE.MeshBasicMaterial({ color: woodHi }),
      )
      inner.position.set(tip.x - 1.5, tip.y + 1.2, -0.01)
      this.renderer.add(cap)
      this.renderer.add(inner)
    }

    const mkBandGeom = () => {
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Array(12).fill(0), 3))
      geometry.setIndex([0, 1, 2, 0, 2, 3])
      return geometry
    }
    const bandMat = new THREE.MeshBasicMaterial({
      color: 0x2a1712,
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    this.slingBandL = new THREE.Mesh(mkBandGeom(), bandMat.clone())
    this.slingBandR = new THREE.Mesh(mkBandGeom(), bandMat.clone())
    const bandHiMat = new THREE.MeshBasicMaterial({
      color: 0x5d4037,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    this.slingBandHiL = new THREE.Mesh(mkBandGeom(), bandHiMat.clone())
    this.slingBandHiR = new THREE.Mesh(mkBandGeom(), bandHiMat.clone())

    // pocket
    const pouchShape = new THREE.Shape()
    pouchShape.moveTo(-20, 2)
    pouchShape.bezierCurveTo(-14, 13, 14, 13, 20, 2)
    pouchShape.bezierCurveTo(16, -12, -15, -12, -20, 2)
    pouchShape.closePath()
    this.slingPouch = new THREE.Mesh(
      new THREE.ShapeGeometry(pouchShape, 18),
      new THREE.MeshBasicMaterial({ color: 0x5a3525 }),
    )
    const pouchRim = new THREE.Mesh(
      new THREE.ShapeGeometry(pouchShape, 18),
      new THREE.MeshBasicMaterial({
        color: 0x2a1712,
        transparent: true,
        opacity: 0.32,
        side: THREE.DoubleSide,
      }),
    )
    pouchRim.scale.set(1.08, 1.12, 1)
    pouchRim.position.z = -0.006
    const pouchHi = new THREE.Mesh(
      new THREE.CircleGeometry(3.8, 18),
      new THREE.MeshBasicMaterial({ color: 0xb9825f, transparent: true, opacity: 0.5 }),
    )
    pouchHi.scale.set(1.8, 0.52, 1)
    pouchHi.position.set(-5, 4, 0.012)
    const pouchShade = new THREE.Mesh(
      new THREE.CircleGeometry(7.4, 22),
      new THREE.MeshBasicMaterial({ color: 0x2a1712, transparent: true, opacity: 0.26 }),
    )
    pouchShade.scale.set(2.3, 0.48, 1)
    pouchShade.position.set(3, -5, 0.014)
    const pouchGripL = new THREE.Mesh(
      new THREE.RingGeometry(3.4, 5.1, 18),
      new THREE.MeshBasicMaterial({ color: 0x2a1712, transparent: true, opacity: 0.72, side: THREE.DoubleSide }),
    )
    pouchGripL.scale.set(1.1, 0.62, 1)
    pouchGripL.position.set(-19.2, 2.2, 0.02)
    const pouchGripR = pouchGripL.clone()
    pouchGripR.position.set(19.2, 2.2, 0.02)
    const pouchStitch = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-13, 1.5, 0.018),
        new THREE.Vector3(-5, -1.5, 0.018),
        new THREE.Vector3(5, -1.5, 0.018),
        new THREE.Vector3(13, 1.5, 0.018),
      ]),
      new THREE.LineBasicMaterial({ color: 0xd1a06e, transparent: true, opacity: 0.55 }),
    )
    this.slingPouchGroup = new THREE.Group()
    this.slingPouchGroup.add(pouchRim, this.slingPouch, pouchShade, pouchHi, pouchGripL, pouchGripR, pouchStitch)

    const wrapMat = new THREE.MeshBasicMaterial({ color: 0x2a1712, transparent: true, opacity: 0.86, side: THREE.DoubleSide })
    const wrapHiMat = new THREE.MeshBasicMaterial({ color: 0xd1a06e, transparent: true, opacity: 0.34, side: THREE.DoubleSide })
    const makeWrap = (x, y, rot, scaleX = 1) => {
      const wrap = new THREE.Group()
      for (let i = 0; i < 3; i++) {
        const strap = new THREE.Mesh(new THREE.BoxGeometry(33, 4.4, 1), wrapMat)
        strap.position.set(x, y + (i - 1) * 5.3, -0.002 + i * 0.002)
        strap.rotation.z = rot
        strap.scale.x = scaleX
        wrap.add(strap)
        const hi = new THREE.Mesh(new THREE.BoxGeometry(20, 1.1, 1), wrapHiMat)
        hi.position.set(x - 2, y + (i - 1) * 5.3 + 1.2, 0.004 + i * 0.002)
        hi.rotation.z = rot
        hi.scale.x = scaleX
        wrap.add(hi)
      }
      return wrap
    }
    const forkWrap = makeWrap(S.x, S.y + 11, -0.08, 1.08)
    const leftWrap = makeWrap(S.x - 37, S.y + 62, 0.78, 0.72)
    const rightWrap = makeWrap(S.x + 37, S.y + 61, -0.76, 0.72)

    const grainMat = new THREE.LineBasicMaterial({ color: 0x2f1d17, transparent: true, opacity: 0.26 })
    const makeGrain = (points, z = -0.01) => new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points.map(([x, y]) => new THREE.Vector3(x, y, z))),
      grainMat,
    )
    const grains = [
      makeGrain([[S.x - 5, S.y - 70], [S.x - 7, S.y - 38], [S.x - 3, S.y - 7], [S.x - 9, S.y + 12]]),
      makeGrain([[S.x + 6, S.y - 64], [S.x + 4, S.y - 30], [S.x + 8, S.y - 2], [S.x + 5, S.y + 18]]),
      makeGrain([[S.x - 13, S.y + 12], [S.x - 25, S.y + 32], [S.x - 36, S.y + 61]]),
      makeGrain([[S.x + 13, S.y + 12], [S.x + 25, S.y + 31], [S.x + 38, S.y + 60]]),
    ]

    this.renderer.add(foot)
    this.renderer.add(trunk)
    this.renderer.add(armL)
    this.renderer.add(armR)
    this.renderer.add(crotch)
    this.renderer.add(forkWrap)
    this.renderer.add(leftWrap)
    this.renderer.add(rightWrap)
    for (const grain of grains) this.renderer.add(grain)
    this.renderer.add(this.slingBandL)
    this.renderer.add(this.slingBandR)
    this.renderer.add(this.slingBandHiL)
    this.renderer.add(this.slingBandHiR)
    this.renderer.add(this.slingPouchGroup)

    this._forkTipU = { x: tipL.x, y: tipL.y }
    this._forkTipD = { x: tipR.x, y: tipR.y }

    // launch guide dots (shown while dragging)
    const dottedMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 8, gapSize: 6, opacity: 0.5, transparent: true })
    const dottedGeom = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 16 }, (_, i) => new THREE.Vector3(0, 0, 0)),
    )
    this.slingGuide = new THREE.Line(dottedGeom, dottedMat)
    this.slingGuide.visible = false
    this.slingGuide.computeLineDistances()
    this.renderer.add(this.slingGuide)
  }

  _getSlingPocketPosition() {
    return new THREE.Vector2(
      SLING_POS.x + this.slingPull.x,
      SLING_POS.y + SLING_ARMADILLO_REST_Y + this.slingPull.y,
    )
  }

  _getSlingPouchRotation() {
    const pullRatio = THREE.MathUtils.clamp(this.slingPull.length() / SLING_MAX_PULL, 0, 1)
    const targetPocketRot = (this.slingDragging || this.slingSnapTime > 0)
      ? THREE.MathUtils.clamp((this.slingAngle - Math.PI / 2) * 0.38, -0.34, 0.34)
      : 0
    return targetPocketRot * THREE.MathUtils.smoothstep(pullRatio, 0.04, 0.26)
  }

  _getSlingArmadilloPosition() {
    const pocket = this._getSlingPocketPosition()
    const rot = this._getSlingPouchRotation()
    const pouchY = pocket.y - 12
    return new THREE.Vector2(
      pocket.x - Math.sin(rot) * 12,
      pouchY + Math.cos(rot) * 12,
    )
  }

  /** Update band + pocket + guide — called every frame from _update(). */
  _updateSlingVisuals() {
    const pocket = this._getSlingPocketPosition()
    let px = pocket.x
    let py = pocket.y

    // Post-launch band snap oscillation — applied while slingSnapTime > 0
    if (this.slingSnapTime > 0) {
      const snapT = 1 - this.slingSnapTime / 0.22    // 0→1 over time
      const decay = Math.exp(-snapT * 14)            // exponential decay
      const osc   = Math.sin(snapT * Math.PI * 5)   // 5 oscillations
      const amp   = 28 * decay * osc                // max ±28px
      px += amp * Math.cos(this.slingAngle + Math.PI)
      py += amp * Math.sin(this.slingAngle + Math.PI)
    }

    // Band: thick quad strip to avoid browser lineWidth limits.
    const updateBand = (mesh, tipX, tipY, pouX, pouY, widthScale = 1, z = 0.06, sideOffset = 0) => {
      const dx = pouX - tipX
      const dy = pouY - tipY
      const len = Math.max(1, Math.hypot(dx, dy))
      const nx = -dy / len
      const ny = dx / len
      const width = (5.5 + THREE.MathUtils.clamp(this.slingPull.length() / SLING_MAX_PULL, 0, 1) * 2.5) * widthScale
      const ox = nx * sideOffset
      const oy = ny * sideOffset
      const pos = mesh.geometry.attributes.position
      pos.setXYZ(0, tipX + ox + nx * width, tipY + oy + ny * width, z)
      pos.setXYZ(1, tipX + ox - nx * width, tipY + oy - ny * width, z)
      pos.setXYZ(2, pouX + ox - nx * width, pouY + oy - ny * width, z)
      pos.setXYZ(3, pouX + ox + nx * width, pouY + oy + ny * width, z)
      pos.needsUpdate = true
      mesh.geometry.computeBoundingSphere()
    }
    const pouchY = py - 12
    this.slingPouchGroup.rotation.z = this._getSlingPouchRotation()

    const cos = Math.cos(this.slingPouchGroup.rotation.z)
    const sin = Math.sin(this.slingPouchGroup.rotation.z)
    const pouchHalfWidth = 24
    const pouchLeftX = px - cos * pouchHalfWidth
    const pouchLeftY = pouchY - sin * pouchHalfWidth
    const pouchRightX = px + cos * pouchHalfWidth
    const pouchRightY = pouchY + sin * pouchHalfWidth
    updateBand(this.slingBandL, this._forkTipU.x, this._forkTipU.y, pouchLeftX, pouchLeftY)
    updateBand(this.slingBandR, this._forkTipD.x, this._forkTipD.y, pouchRightX, pouchRightY)
    updateBand(this.slingBandHiL, this._forkTipU.x, this._forkTipU.y, pouchLeftX, pouchLeftY, 0.34, 0.068, 2.6)
    updateBand(this.slingBandHiR, this._forkTipD.x, this._forkTipD.y, pouchRightX, pouchRightY, 0.34, 0.068, 2.6)

    // pocket group position
    this.slingPouchGroup.position.set(px, pouchY, 0.07)

    // guide dots (parabolic preview in launch direction) — starts from armadillo position
    if (this.slingDragging && this.slingPower > 0.05) {
      const speed = this.slingPower * LAUNCH_SPEED
      const vx = Math.cos(this.slingAngle) * speed
      const vy = Math.sin(this.slingAngle) * speed
      const startX = px
      const startY = py
      const pts = this.slingGuide.geometry.attributes.position
      for (let i = 0; i < 16; i++) {
        const t = i * 0.055
        pts.setXYZ(i,
          startX + vx * t,
          startY + vy * t - 0.5 * GRAVITY * t * t,
          0.05,
        )
      }
      pts.needsUpdate = true
      this.slingGuide.computeLineDistances()
      this.slingGuide.visible = true
    } else {
      this.slingGuide.visible = false
    }
  }

  /** Landing shockwave ripple ring pool (max 4). */
  _buildRipplePool() {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      wireframe: true,
      depthWrite: false,
    })
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.0, 32), mat.clone())
      ring.visible = false
      ring.renderOrder = 5
      this.renderer.add(ring)
      this.ripples.push({ mesh: ring, life: 0, maxLife: 0, x: 0, y: 0, maxRadius: 80 })
    }
  }

  /** Trigger a single ripple at a world position. */
  _spawnRipple(x, y, color = 0xffffff, maxRadius = 80, duration = 0.45) {
    const r = this.ripples.find((r) => r.life <= 0)
    if (!r) return
    r.x = x
    r.y = y
    r.life = duration
    r.maxLife = duration
    r.maxRadius = maxRadius
    r.mesh.material.color.set(color)
    r.mesh.position.set(x, y, 0.15)
    r.mesh.visible = true
  }

  _updateRipples(dt) {
    for (const r of this.ripples) {
      if (r.life <= 0) continue
      r.life -= dt
      if (r.life <= 0) {
        r.mesh.visible = false
        continue
      }
      const t = 1 - r.life / r.maxLife        // 0→1
      const radius = r.maxRadius * t
      const opacity = (1 - t) * 0.7
      // scale instead of rebuilding RingGeometry
      r.mesh.scale.setScalar(radius)
      r.mesh.material.opacity = opacity
    }
  }

  _buildScenery() {
    const sun = new THREE.Mesh(
      new THREE.CircleGeometry(58, 40),
      new THREE.MeshBasicMaterial({ color: 0xfff3b0, transparent: true, opacity: 0.85 }),
    )
    this._addScenery(sun, 0.04, 270, 210, 0.2)

    for (const spec of [
      { x: -360, y: -330, scale: 1.15, color: 0x2f4f5f, layer: 0.18 },
      { x: 120, y: -360, scale: 1.35, color: 0x355c65, layer: 0.14 },
      { x: 620, y: -345, scale: 1.05, color: 0x426b69, layer: 0.2 },
      { x: 1180, y: -365, scale: 1.25, color: 0x314c5b, layer: 0.16 },
    ]) {
      const mountain = this._createMountain(spec.color)
      mountain.scale.setScalar(spec.scale)
      this._addScenery(mountain, spec.layer, spec.x, spec.y, 0)
    }

    for (const spec of [
      { x: -260, y: 180, scale: 0.85, layer: 0.32, drift: 0.9 },
      { x: 320, y: 250, scale: 1.1, layer: 0.28, drift: 0.7 },
      { x: 900, y: 150, scale: 0.75, layer: 0.36, drift: 1.1 },
    ]) {
      const cloud = this._createCloud()
      cloud.scale.setScalar(spec.scale)
      this._addScenery(cloud, spec.layer, spec.x, spec.y, spec.drift)
    }
  }

  _addScenery(mesh, layer, baseX, baseY, drift) {
    mesh.position.set(baseX, baseY, -20)
    mesh.userData = { layer, baseX, baseY, drift }
    this.scenery.push(mesh)
    this.renderer.add(mesh)
  }

  _createMountain(color) {
    const group = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.72, side: THREE.DoubleSide })
    for (const [x, w, h] of [[-120, 220, 250], [40, 280, 320], [210, 190, 230]]) {
      const shape = new THREE.Shape()
      shape.moveTo(x - w / 2, 0)
      shape.lineTo(x, h)
      shape.lineTo(x + w / 2, 0)
      shape.closePath()
      group.add(new THREE.Mesh(new THREE.ShapeGeometry(shape), mat))
    }
    return group
  }

  _createCloud() {
    const group = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 })
    for (const [x, y, r] of [[-28, 0, 23], [0, 12, 30], [32, 3, 24], [58, -2, 16]]) {
      const puff = new THREE.Mesh(new THREE.CircleGeometry(r, 24), mat)
      puff.position.set(x, y, -21)
      group.add(puff)
    }
    return group
  }

  _buildWorldSea() {
    this.worldSea = new THREE.Group()
    const seaMat = new THREE.MeshBasicMaterial({
      color: 0x1597c8,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.worldSeaBody = new THREE.Mesh(new THREE.PlaneGeometry(2400, 520), seaMat)
    this.worldSeaBody.position.set(0, SEA_LEVEL_Y - 260, -40)
    this.worldSea.add(this.worldSeaBody)

    const foamMat = new THREE.LineBasicMaterial({
      color: 0xd9fbff,
      transparent: true,
      opacity: 0.78,
      depthTest: false,
    })
    const foamGeom = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 64 }, (_, i) => new THREE.Vector3(-1200 + (i / 63) * 2400, 0, 0)),
    )
    this.worldSeaFoam = new THREE.Line(foamGeom, foamMat)
    this.worldSeaFoam.position.set(0, SEA_LEVEL_Y, -39)
    this.worldSea.add(this.worldSeaFoam)

    this.renderer.add(this.worldSea)
  }

  _updateWorldSea() {
    if (!this.worldSea) return
    const width = Math.max(this.renderer.viewWidthPx * 1.4, 2400)
    this.worldSeaBody.scale.x = width / 2400
    this.worldSeaBody.position.x = this.camPos.x
    this.worldSeaFoam.position.x = this.camPos.x

    const pos = this.worldSeaFoam.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = -1200 + (i / (pos.count - 1)) * 2400
      const y = Math.sin(this.time * 1.8 + i * 0.42) * 5
      pos.setXYZ(i, x, y, 0)
    }
    pos.needsUpdate = true
  }

  _buildSceneSkyPlane() {
    this.sceneSkyMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform vec3 uBottom;
        uniform vec3 uTop;
        uniform float uSeaVis;
        void main() {
          float t = smoothstep(0.0, 1.0, vUv.y);
          vec3 col = mix(uBottom, uTop, t);
          float sea = (1.0 - smoothstep(0.16, 0.30, vUv.y)) * uSeaVis;
          vec3 seaCol = mix(vec3(0.06, 0.48, 0.72), vec3(0.16, 0.70, 0.88), smoothstep(0.0, 0.26, vUv.y));
          col = mix(col, seaCol, sea);
          float foam = (1.0 - smoothstep(0.012, 0.026, abs(vUv.y - 0.285))) * uSeaVis;
          col += vec3(0.65, 0.95, 1.0) * foam * 0.38;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      uniforms: {
        uBottom: { value: new THREE.Color(0x8edcff) },
        uTop: { value: new THREE.Color(0x4f91dc) },
        uSeaVis: { value: 1 },
      },
      depthTest: false,
      depthWrite: false,
    })
    this.sceneSkyPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.sceneSkyMaterial)
    this.sceneSkyPlane.position.z = -900
    this.sceneSkyPlane.renderOrder = -10000
    this.renderer.add(this.sceneSkyPlane)
  }

  _updateSceneSkyPlane(heightRatio) {
    if (!this.sceneSkyPlane) return
    const bottom = new THREE.Color()
    const top = new THREE.Color()

    if (heightRatio < 0.34) {
      const t = THREE.MathUtils.smoothstep(heightRatio, 0.04, 0.34)
      bottom.copy(SKY_CLEAR_LOW).lerp(SKY_CLEAR_MID, t * 0.65)
      top.copy(SKY_CLEAR_MID).lerp(SKY_CLEAR_HIGH, t * 0.35)
    } else if (heightRatio < 0.68) {
      const t = THREE.MathUtils.smoothstep(heightRatio, 0.34, 0.68)
      bottom.copy(SKY_CLEAR_MID).lerp(SKY_CLEAR_HIGH, t)
      top.copy(SKY_CLEAR_HIGH).lerp(SKY_CLEAR_SPACE, t * 0.45)
    } else {
      const t = THREE.MathUtils.smoothstep(heightRatio, 0.68, 0.90)
      bottom.copy(SKY_CLEAR_HIGH).lerp(SKY_CLEAR_SPACE, t)
      top.copy(SKY_CLEAR_SPACE)
    }

    this.sceneSkyMaterial.uniforms.uBottom.value.copy(bottom)
    this.sceneSkyMaterial.uniforms.uTop.value.copy(top)
    this.sceneSkyMaterial.uniforms.uSeaVis.value = 1 - THREE.MathUtils.smoothstep(heightRatio, 0.06, 0.26)
    this.sceneSkyPlane.position.x = this.camPos.x
    this.sceneSkyPlane.position.y = this.camPos.y
    this.sceneSkyPlane.scale.set(this.renderer.viewWidthPx * 1.08, this.renderer.viewHeightPx * 1.08, 1)
  }

  _createArmadillo() {
    {
      const group = new THREE.Group()
      const makeSpriteTexture = (frame, placement) => {
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')
        ctx.imageSmoothingEnabled = false

        const drawFallback = () => {
          ctx.clearRect(0, 0, 256, 256)
          ctx.fillStyle = 'rgba(50, 34, 28, 0.32)'
          ctx.beginPath()
          ctx.ellipse(128, 144, placement.dw / 2, placement.dh / 3, 0, 0, Math.PI * 2)
          ctx.fill()
        }
        drawFallback()

        const texture = new THREE.CanvasTexture(canvas)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.minFilter = THREE.NearestFilter
        texture.magFilter = THREE.NearestFilter

        const img = new Image()
        img.onload = () => {
          const source = document.createElement('canvas')
          source.width = frame.w
          source.height = frame.h
          const sourceCtx = source.getContext('2d')
          sourceCtx.imageSmoothingEnabled = false
          sourceCtx.drawImage(img, frame.x, frame.y, frame.w, frame.h, 0, 0, frame.w, frame.h)

          const imageData = sourceCtx.getImageData(0, 0, frame.w, frame.h)
          const { data } = imageData
          for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 242 && data[i + 1] > 242 && data[i + 2] > 242) data[i + 3] = 0
          }
          sourceCtx.putImageData(imageData, 0, 0)

          ctx.clearRect(0, 0, 256, 256)
          ctx.drawImage(source, placement.dx, placement.dy, placement.dw, placement.dh)
          texture.needsUpdate = true
        }
        img.src = armadilloSheetUrl
        return texture
      }

      const idleTexture = makeSpriteTexture(
        { x: 4, y: 21, w: 24, h: 11 },
        { dx: 10, dy: 42, dw: 236, dh: 150 },
      )
      const texture = makeSpriteTexture(
        { x: 169, y: 84, w: 11, h: 11 },
        { dx: 50, dy: 50, dw: 156, dh: 156 },
      )

      const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(18, 40),
        new THREE.MeshBasicMaterial({ color: 0x120b08, transparent: true, opacity: 0.24 }),
      )
      shadow.scale.set(1.18, 0.82, 1)
      shadow.position.set(1, -1, 0.04)

	      const sprite = new THREE.Mesh(
	        new THREE.PlaneGeometry(54, 54),
	        new THREE.MeshBasicMaterial({
	          map: idleTexture,
	          transparent: true,
	          depthWrite: false,
	        }),
      )
      sprite.position.z = 0.12
      sprite.renderOrder = 20

      group.add(shadow, sprite)
	      this.armadilloBody = sprite
	      this.armadilloShell = sprite
      this.armadilloSprite = sprite
      this.armadilloIdleTexture = idleTexture
      this.armadilloCurledTexture = texture
	      this.armadilloBodyMat = null
      this.armadilloShellMat = null
      this.armadilloShellBaseMat = sprite.material
      return group
    }

    const group = new THREE.Group()

    const shellMat = new THREE.MeshBasicMaterial({ color: 0x9b745d })
    const shellDarkMat = new THREE.MeshBasicMaterial({ color: 0x3a241d })
    const shellPlateMat = new THREE.MeshBasicMaterial({ color: 0x6f4d3d })
    const bellyMat = new THREE.MeshBasicMaterial({ color: 0xd6b28f })
    const faceMat = new THREE.MeshBasicMaterial({ color: 0xb98a6d })
    const faceLightMat = new THREE.MeshBasicMaterial({ color: 0xd0a184 })
    const tintMat = new THREE.MeshBasicMaterial({
      color: 0xff8a50,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide,
    })

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(18.6, 64),
      new THREE.MeshBasicMaterial({ color: 0x21140f, transparent: true, opacity: 0.28 }),
    )
    shadow.scale.set(1.04, 0.92, 1)
    shadow.position.set(0.8, -1.2, 0.045)

    const shell = new THREE.Mesh(new THREE.CircleGeometry(17, 64), shellMat)
    shell.scale.set(1, 1, 1)
    shell.position.set(0, 0, 0.07)

    const belly = new THREE.Mesh(new THREE.CircleGeometry(9.5, 36), bellyMat)
    belly.scale.set(0.92, 0.52, 1)
    belly.rotation.z = -0.72
    belly.position.set(3.8, -6.8, 0.08)

    const rim = new THREE.Mesh(
      new THREE.RingGeometry(15.1, 17.2, 56),
      new THREE.MeshBasicMaterial({
        color: 0x3e2723,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
      }),
    )
    rim.scale.set(1, 1, 1)
    rim.position.z = 0.09

    const tint = new THREE.Mesh(new THREE.RingGeometry(12.8, 17.4, 56), tintMat)
    tint.scale.set(1, 1, 1)
    tint.position.z = 0.1

    const bands = new THREE.Group()
    for (let i = 0; i < 5; i++) {
      const plate = new THREE.Mesh(
        new THREE.RingGeometry(7.8 + i * 1.65, 8.8 + i * 1.65, 38, 1, 2.46, 1.58),
        i % 2 === 0 ? shellDarkMat : shellPlateMat,
      )
      plate.position.set(-2.5 + i * 0.18, -0.4, 0.112 + i * 0.002)
      plate.rotation.z = -0.66 + i * 0.12
      plate.scale.set(1.02, 0.93, 1)
      bands.add(plate)
    }

    for (const [x, y, s] of [[-6.5, 7.5, 2.2], [-1.0, 9.2, 1.8], [4.6, 6.6, 2.0], [-8.4, -3.8, 1.7]]) {
      const scute = new THREE.Mesh(
        new THREE.CircleGeometry(s, 14),
        new THREE.MeshBasicMaterial({ color: 0xc29a7d, transparent: true, opacity: 0.72 }),
      )
      scute.position.set(x, y, 0.118)
      bands.add(scute)
    }

    const head = new THREE.Mesh(new THREE.CircleGeometry(6.6, 32), faceMat)
    head.scale.set(1.02, 0.78, 1)
    head.position.set(10.8, -2.5, 0.12)
    head.rotation.z = -0.45

    const snout = new THREE.Mesh(new THREE.CircleGeometry(4.6, 24), faceMat)
    snout.scale.set(1.18, 0.48, 1)
    snout.position.set(15.2, -5.1, 0.13)
    snout.rotation.z = -0.28

    const cheek = new THREE.Mesh(new THREE.CircleGeometry(3.1, 18), faceLightMat)
    cheek.scale.set(1.18, 0.62, 1)
    cheek.position.set(12.2, -5.2, 0.145)
    cheek.rotation.z = -0.32

    const nose = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), shellDarkMat)
    nose.position.set(18.8, -6.3, 0.15)

    const ear = new THREE.Mesh(new THREE.CircleGeometry(2.7, 16), shellDarkMat)
    ear.scale.set(0.82, 1.05, 1)
    ear.position.set(8.6, 2.8, 0.12)
    ear.rotation.z = -0.2

    const eye = new THREE.Mesh(new THREE.CircleGeometry(1.15, 12), new THREE.MeshBasicMaterial({ color: 0x111111 }))
    eye.position.set(13.4, -1.4, 0.16)
    const eyeSpark = new THREE.Mesh(new THREE.CircleGeometry(0.35, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }))
    eyeSpark.position.set(13.75, -1.05, 0.17)

    const tail = new THREE.Mesh(new THREE.BoxGeometry(10, 2.2, 1), shellDarkMat)
    tail.position.set(-13.5, 8.8, 0.08)
    tail.rotation.z = 0.58

    const tailTip = new THREE.Mesh(new THREE.CircleGeometry(2.2, 12), shellDarkMat)
    tailTip.position.set(-17.5, 11.2, 0.09)

    const footMat = new THREE.MeshBasicMaterial({ color: 0x33221c })
    const footA = new THREE.Mesh(new THREE.CircleGeometry(2.8, 16), footMat)
    footA.scale.set(1.45, 0.48, 1)
    footA.position.set(-3.8, -14.1, 0.1)
    const footB = footA.clone()
    footB.position.set(7.2, -12.8, 0.1)
    const clawMat = new THREE.MeshBasicMaterial({ color: 0xf5e1c4 })
    const clawA = new THREE.Mesh(new THREE.CircleGeometry(0.9, 8), clawMat)
    clawA.scale.set(1.0, 0.48, 1)
    clawA.position.set(-0.5, -14.5, 0.13)
    const clawB = clawA.clone()
    clawB.position.set(10.2, -13.2, 0.13)

    const shine = new THREE.Mesh(
      new THREE.CircleGeometry(3.8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 }),
    )
    shine.scale.set(1.35, 0.72, 1)
    shine.position.set(-6.6, 6.6, 0.13)

    group.add(
      shadow,
      tail,
      tailTip,
      shell,
      belly,
      bands,
      rim,
      tint,
      head,
      snout,
      cheek,
      ear,
      eye,
      eyeSpark,
      nose,
      footA,
      footB,
      clawA,
      clawB,
      shine,
    )
    this.armadilloBody = shell
    this.armadilloShell = shell
    this.armadilloBodyMat = tint.material
    this.armadilloShellMat = tint.material
    this.armadilloShellBaseMat = shell.material
    return group
  }

  _setArmadilloColor(color) {
    if (this.armadilloBodyMat) this.armadilloBodyMat.color.set(color)
    if (this.armadilloBodyMat) this.armadilloBodyMat.opacity = color === 0xff1744 ? 0.28 : 0.5
  }

  _setArmadilloCurled(isCurled) {
    if (!this.armadilloSprite || !this.armadilloIdleTexture || !this.armadilloCurledTexture) return
    const nextMap = isCurled ? this.armadilloCurledTexture : this.armadilloIdleTexture
    if (this.armadilloSprite.material.map !== nextMap) {
      this.armadilloSprite.material.map = nextMap
      this.armadilloSprite.material.needsUpdate = true
    }
    this.armadilloSprite.scale.set(isCurled ? 1 : 1.12, isCurled ? 1 : 1.01, 1)
  }

  _setArmadilloSprite(state) {
    this._setArmadilloCurled(state !== 'idle' || this.slingDragging)
  }

  _bindInput() {
    const handleControlButton = (event) => {
      const button = event.target instanceof Element
        ? event.target.closest('[data-action]')
        : null
      if (!button) return false
      event.preventDefault()
      event.stopPropagation()
      this._ensureAudio()
      const action = button.dataset.action
      if (action === 'pause') this._togglePause()
      if (action === 'restart') this._restartToTitle()
      if (action === 'boost') this._startBoostHold('pointer')
      if (action === 'leaderboard') this._openLeaderboard()
      if (action === 'leaderboard-close') this._closeLeaderboard()
      if (action === 'name-confirm') {
        const input = this.ui.querySelector('.name-input')
        this._confirmName(input ? input.value : '')
        // stay on TITLE — player clicks/taps the start screen to play
      }
      if (action === 'name-skip') {
        this._confirmName('Anonymous')
      }
      if (action === 'name-edit') {
        this.showingNamePrompt = true
        this._renderHud()
        // focus the input on next microtask so the element is in the DOM
        Promise.resolve().then(() => {
          const input = this.ui?.querySelector('.name-input')
          if (input) { input.focus(); input.select() }
        })
      }
      return true
    }

    // ── Sling drag (mouse + touch) ──
    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return
      if (this.showingNamePrompt || this.showingLeaderboard) return
      event.preventDefault()
      this._ensureAudio()
      this.pointerIsDown = true
      this._handlePointerDown(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointermove', (event) => {
      if (!this.slingDragging) return
      event.preventDefault()
      this._handlePointerMove(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointerup', (event) => {
      this.pointerIsDown = false
      // This pointer-up belongs to the click that dismissed the title/gameover
      // screen — ignore it entirely so it cannot accidentally start a sling drag
      // or trigger a hold-release on the first frame of SLINGING state.
      if (this._pendingPointerClear) {
        this._pendingPointerClear = false
        return
      }
      if (this.slingDragging) {
        event.preventDefault()
        this._handlePointerRelease()
        return
      }
      this._endHold('pointer')
    }, { passive: false })

    window.addEventListener('pointercancel', () => {
      this.pointerIsDown = false
      this._pendingPointerClear = false
      this.slingDragging = false
      this.slingPull.set(0, 0)
      this._setArmadilloCurled(false)
      this._cancelHold()
    })

    window.addEventListener('blur', () => {
      this._cancelHold()
    })

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this._cancelHold()
    })

    // keyboard
    window.addEventListener('keydown', (event) => {
      // Never intercept keyboard input while a text field has focus —
      // the player must be able to type freely in the nickname input.
      if (event.target instanceof HTMLInputElement) {
        if (event.code === 'Enter' && this.showingNamePrompt) {
          event.preventDefault()
          this._confirmName(event.target.value)
        }
        return
      }

      if (event.repeat) return
      if (event.code === 'Space') {
        event.preventDefault()
        if (this.sm.is(State.TITLE)) return
        this.spaceIsDown = true
        this._ensureAudio()
        this._handleKeyboardPress()
        return
      }
      if (event.code === 'Escape') {
        if (this.showingNamePrompt) { this.showingNamePrompt = false; return }
        if (this.showingLeaderboard) { this._closeLeaderboard(); return }
        event.preventDefault()
        this._togglePause()
      }
    }, { capture: true })

    window.addEventListener('keyup', (event) => {
      if (event.target instanceof HTMLInputElement) return
      if (event.code === 'Space') {
        event.preventDefault()
        this.spaceIsDown = false
        if (this.sm.is(State.TITLE)) return
        this._endHold('keyboard')
      }
    }, { capture: true })
  }

  /** Convert screen coordinates to world coordinates. */
  _screenToWorld(clientX, clientY) {
    const canvas = this.renderer.renderer.domElement
    const rect = canvas.getBoundingClientRect()
    // NDC (-1~1)
    const ndcX = ((clientX - rect.left) / rect.width)  * 2 - 1
    const ndcY = -(((clientY - rect.top)  / rect.height) * 2 - 1)
    // OrthographicCamera: NDC → world
    const cam = this.renderer.camera
    const halfW = (cam.right - cam.left) / 2
    const halfH = (cam.top   - cam.bottom) / 2
    return new THREE.Vector2(
      this.camPos.x + ndcX * halfW,
      this.camPos.y + ndcY * halfH,
    )
  }

  _handlePointerDown(clientX, clientY) {
    if (this.isPaused) return

    // ── State-specific input dispatch ──────────────────────────────────────
    // TITLE / GAMEOVER: start a new run.  Mark the pointer as "used for UI"
    // so the matching pointerup cannot start a sling drag or fire any action.
    if (this.sm.is(State.TITLE) || this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      this._pendingPointerClear = true  // consume this pointer gesture for UI only
      return
    }

    // SLINGING: begin sling drag
    if (this.sm.is(State.SLINGING)) {
      this.slingDragging = true
      this._handlePointerMove(clientX, clientY)
      return
    }

    // ROLLING: begin hold — accelerates while held, jumps on release
    if (this.sm.is(State.ROLLING)) {
      this._beginHold('pointer')
      return
    }

    // FLYING / FALLING: hold for spin only — no jump on release in air
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this._beginHold('pointer')
      return
    }
  }

  _handlePointerMove(clientX, clientY) {
    if (!this.slingDragging || !this.sm.is(State.SLINGING)) return

    const world = this._screenToWorld(clientX, clientY)
    // pull vector = touch pos - pocket rest pos (clamped)
    const raw = new THREE.Vector2(
      world.x - SLING_POS.x,
      world.y - (SLING_POS.y + SLING_ARMADILLO_REST_Y),
    )
    const len = Math.min(raw.length(), SLING_MAX_PULL)
    if (raw.length() > 0.001) raw.normalize().multiplyScalar(len)

    this.slingPull.copy(raw)
    this._setArmadilloCurled(true)

    // opposite of pull = launch direction
    if (len > SLING_MIN_PULL) {
      this.slingAngle = Math.atan2(-raw.y, -raw.x)
      this.slingPower = THREE.MathUtils.lerp(
        SLING_POWER_MIN, SLING_POWER_MAX,
        (len - SLING_MIN_PULL) / (SLING_MAX_PULL - SLING_MIN_PULL),
      )
    } else {
      this.slingPower = 0
    }

    const pocket = this._getSlingArmadilloPosition()
    this.armadillo.position.set(pocket.x, pocket.y, 0)
    this._syncMotionToArmadillo()
    this._updateSlingVisuals()
  }

  _handlePointerRelease() {
    if (!this.slingDragging) return
    this.slingDragging = false

    if (!this.sm.is(State.SLINGING)) return
    if (this.slingPower < 0.05) {
      // pull too weak — cancel and reset
      this.slingPull.set(0, 0)
      this._setArmadilloCurled(false)
      return
    }
    this._launchFromSling()
  }

  // ── Input hold / release ──────────────────────────────────────────────────
  // _beginHold: called on pointerdown or Space keydown (never auto-called).
  //   ROLLING  → sets boostHeld; acceleration runs in _updateRolling while true.
  //   FLYING/FALLING → sets boostHeld; spin runs in _update while true. No jump.
  _beginHold(source = 'pointer') {
    if (this.isPaused) return
    this._ensureAudio()
    this.boostHeld = true
    this.boostHoldSource = source
    // Buffer: if held in air and still down at landing, fires boost immediately
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.preBoostSource = source
    }
  }

  // _endHold: called on pointerup or Space keyup.
  //   ROLLING  → clears boostHeld, then jumps.
  //   FALLING (just fell off edge while held) → still jumps, within a short grace window.
  //   FLYING/FALLING (long airborne) → spin stops, no jump.
  _endHold(source = 'pointer') {
    if (this.isPaused) return
    if (!this.boostHeld || this.boostHoldSource !== source) return
    this.boostHeld = false
    this.boostHoldSource = null
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland(source)
    } else if (this.sm.is(State.FALLING) && this._edgeFallGraceTimer > 0) {
      // just fell off edge during a hold — treat release as a jump
      this._launchFromFallingEdge(source)
    } else {
      this.preBoostSource = null
    }
  }

  // _cancelHold: clears all hold state immediately (blur, pointercancel, pause).
  _cancelHold() {
    this.boostHeld = false
    this.boostHoldSource = null
    this.preBoostSource = null
  }

  // Legacy aliases — kept so boost button handler still works
  _startBoostHold(source) { this._beginHold(source) }
  _cancelBoostHold()       { this._cancelHold() }

  // Space keydown
  _handleKeyboardPress() {
    if (this.isPaused) return
    this._ensureAudio()

    // ── State-specific input dispatch ──────────────────────────────────────
    if (this.sm.is(State.TITLE)) return

    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }

    // SLINGING: Space does not launch — drag only
    if (this.sm.is(State.SLINGING)) return

    // ROLLING: begin hold — accelerates while held, jumps on release
    if (this.sm.is(State.ROLLING)) {
      this._beginHold('keyboard')
      return
    }

    // FLYING / FALLING: hold for spin only — no jump on release in air
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this._beginHold('keyboard')
      return
    }
  }

  _syncMotionToArmadillo() {
    if (!this.armadillo) return
    this.motion.previous.copy(this.armadillo.position)
    this.motion.current.copy(this.armadillo.position)
    this.motion.render.copy(this.armadillo.position)
    this.motion.previousRot = this.armadillo.rotation.z
    this.motion.currentRot = this.armadillo.rotation.z
    this.motion.renderRot = this.armadillo.rotation.z
  }

  _beginFixedStep() {
    if (!this.armadillo) return
    this.armadillo.position.copy(this.motion.current)
    this.armadillo.rotation.z = this.motion.currentRot
    this.motion.previous.copy(this.motion.current)
    this.motion.previousRot = this.motion.currentRot
  }

  _endFixedStep() {
    if (!this.armadillo) return
    this.motion.current.copy(this.armadillo.position)
    this.motion.currentRot = this.armadillo.rotation.z
  }

  _applyMotionInterpolation(alpha) {
    if (!this.armadillo) return this.motion.render
    this.motion.render.lerpVectors(this.motion.previous, this.motion.current, alpha)
    const angleDelta = this._shortestAngleDelta(this.motion.previousRot, this.motion.currentRot)
    this.motion.renderRot = this.motion.previousRot + angleDelta * alpha
    this.armadillo.position.copy(this.motion.render)
    this.armadillo.rotation.z = this.motion.renderRot
    return this.motion.render
  }

  _shortestAngleDelta(from, to) {
    return Math.atan2(Math.sin(to - from), Math.cos(to - from))
  }


  _resetRun() {
    this._tipIndex = Math.floor(Math.random() * TIPS.length)
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.spinAngleVel = 0
    this._edgeFallGraceTimer = 0
    this.slingDragging = false
    this._pendingPointerClear = false
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
    this.boostHeld = false
    this.boostHoldSource = null
    this.currentIsland = null
    this.physics.setGravity(GRAVITY)
    this._restoreTerrain()
    this._clearParticles()
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.lastRating = 'READY'
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.flightPeakY = 0
    this.isPaused = false
    this.lives = 3
    this.doubleJumpUsed = false
    this.preBoostSource = null
    this.armadillo.visible = true
    const pocket = this._getSlingArmadilloPosition()
    this.armadillo.position.set(pocket.x, pocket.y, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._setArmadilloCurled(false)
    this._updateSlingVisuals()
    this._syncMotionToArmadillo()
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.TITLE)
  }

  _restartToTitle() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.spinAngleVel = 0
    this._edgeFallGraceTimer = 0
    this.slingDragging = false
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
    this.boostHeld = false
    this.boostHoldSource = null
    this.currentIsland = null
    this.physics.setGravity(GRAVITY)
    this._restoreTerrain()
    this._clearParticles()
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.lastRating = 'READY'
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.flightPeakY = 0
    this.isPaused = false
    this.lives = 3
    this.doubleJumpUsed = false
    this.preBoostSource = null
    this.armadillo.visible = true
    const pocket = this._getSlingArmadilloPosition()
    this.armadillo.position.set(pocket.x, pocket.y, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._setArmadilloCurled(false)
    this._updateSlingVisuals()
    this._syncMotionToArmadillo()
    this.sm.current = State.TITLE
  }

  _restoreTerrain() {
    this.physics.removeAllTerrain()

    for (const island of this.islands ?? []) {
      this.renderer.remove(island.mesh)
    }

    this.staticIslands = []
    this.islands = []
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length

    let previousIsland = null
    for (let i = 0; i < DEFAULT_ISLAND_LAYOUT.length; i++) {
      const randomized = this._randomizeInitialTerrainSpec(DEFAULT_ISLAND_LAYOUT[i], i)
      const spec = this._avoidTerrainOverlap(randomized, previousIsland)
      const island = createCurvedTerrain(spec)
      this.renderer.add(island.mesh)
      this.islands.push(island)
      this.staticIslands.push(island)
      this.physics.addTerrain(island)
      previousIsland = island
    }

    for (let i = 0; i < INITIAL_PROCEDURAL_ISLANDS; i++) {
      this._spawnNextIsland()
    }

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240
  }

  _togglePause() {
    if (this.sm.is(State.GAMEOVER)) return
    this.isPaused = !this.isPaused
  }

  _launchFromSling() {
    if (!this.sm.transition(State.FLYING)) return

    const power = this.slingPower          // save before reset
    const speed = power * LAUNCH_SPEED
    this.speedRatio = power
    this.lastRating = 'LAUNCH'
    this.stallTime = 0
    this.slingSnapTime = 0.22              // start band snap animation
    this._setArmadilloColor(0xff1744)
    this._setArmadilloCurled(true)

    const vx = Math.cos(this.slingAngle) * speed
    const vy = Math.sin(this.slingAngle) * speed
    this.velocity.set(vx, vy)

    // Sync Planck body — position and velocity
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._syncMotionToArmadillo()

    // reset sling band after launch
    this.slingPull.set(0, 0)
    this.slingPower = 0

    this._carveLaunchPath()
    this._triggerLaunchImpact()
    this._playTone(220 + power * 260, 0.12, 0.08 + power * 0.06, 'square')
  }

  _launchFromIsland(source = 'auto') {
    if (!this.currentIsland) return
    if (!this.sm.transition(State.FALLING)) return
    const hadBoostInput = source === 'keyboard' || source === 'pointer'
    const launchAngle = hadBoostInput
      ? this._getExitLaunchAngle(this.currentIsland)
      : 0  // no input = horizontal exit, no vertical kick
    const inputStrength = hadBoostInput ? 1.0 : 0

    // edge-jump bonus: near the right 22% of an island, reward the player with
    // extra height and speed — releasing at the edge feels deliberate and skilled
    const islandWidth = this.currentIsland.bounds.right - this.currentIsland.bounds.left
    const edgeThreshold = islandWidth * 0.22
    const distFromRight = this.currentIsland.bounds.right - this.armadillo.position.x
    const edgeRatio = hadBoostInput
      ? THREE.MathUtils.clamp(1 - distFromRight / edgeThreshold, 0, 1)
      : 0
    const edgeVerticalBonus  = edgeRatio * 320   // up to +320 px/s upward kick
    const edgeSpeedBonus     = edgeRatio * 0.25  // up to +0.25 speedRatio

    if (hadBoostInput) {
      this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + (BOOST_RELEASE_SPEED_KICK + edgeSpeedBonus) * inputStrength)
    }

    const horizontalSpeed = this.speedRatio * MAX_SPEED
    const launchSpeed = Math.min(
      LAUNCH_SPEED,
      horizontalSpeed / Math.max(Math.cos(launchAngle), 0.35),
    )
    const vx = Math.cos(launchAngle) * launchSpeed
    const vy = Math.sin(launchAngle) * launchSpeed + (BOOST_RELEASE_VERTICAL_KICK + edgeVerticalBonus) * inputStrength
    this.velocity.set(vx, vy)

    // sync velocity to Planck body (prevents using stale landing velocity)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._syncMotionToArmadillo()

    this.currentIsland = null
    const isEdgeJump = edgeRatio > 0.5
    const strongBoost = inputStrength >= 0.45
    this.lastRating = isEdgeJump ? 'EDGE!' : strongBoost ? 'BOOST' : hadBoostInput ? 'HOP' : 'JUMP'
    this._setArmadilloColor(isEdgeJump ? 0xffffff : strongBoost ? 0xfff176 : hadBoostInput ? 0xffb74d : 0xff7043)
    this._spawnParticles(
      this.armadillo.position.x,
      this.armadillo.position.y,
      isEdgeJump ? 0xffffff : strongBoost ? 0xffd54f : hadBoostInput ? 0xffb74d : 0xff7043,
      isEdgeJump ? 20 : strongBoost ? 14 : hadBoostInput ? 8 : 6,
      isEdgeJump ? 320 : strongBoost ? 260 : hadBoostInput ? 150 : 120,
    )
    this._playTone(isEdgeJump ? 820 : strongBoost ? 680 : hadBoostInput ? 430 : 360, 0.08, 0.05, 'triangle')
  }

  // Called when player releases input within the grace window after falling off an edge.
  // Already in FALLING state — override velocity upward using current speedRatio.
  _launchFromFallingEdge(source) {
    const launchAngle = EXIT_LAUNCH_MIN_ANGLE  // conservative upward angle
    const speedBonus = source === 'keyboard' || source === 'pointer' ? BOOST_RELEASE_SPEED_KICK : 0
    this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + speedBonus)
    const horizontalSpeed = Math.max(this.speedRatio * MAX_SPEED, 200)  // ensure minimum forward speed
    const launchSpeed = Math.min(LAUNCH_SPEED, horizontalSpeed / Math.max(Math.cos(launchAngle), 0.35))
    const vx = Math.cos(launchAngle) * launchSpeed
    // Always positive (upward) — Math.sin of a clamped upward angle + the vertical kick
    const vy = Math.abs(Math.sin(launchAngle) * launchSpeed) + BOOST_RELEASE_VERTICAL_KICK
    this.velocity.set(vx, vy)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._edgeFallGraceTimer = 0
    this.lastRating = 'EDGE!'
    this._setArmadilloColor(0xffffff)
    this._spawnParticles(this.armadillo.position.x, this.armadillo.position.y, 0xffffff, 16, 280)
    this._playTone(820, 0.08, 0.05, 'triangle')
  }

  _getExitLaunchAngle(island) {
    if (!island) return THREE.MathUtils.degToRad(45)

    // Base angle is 48°. Slope nudges it slightly but the clamp (40°–58°) keeps
    // it clearly upward regardless of terrain angle at the release point.
    const slopeAngle = getTerrainSlopeAngle(island, this.armadillo.position.x)
    const slopeLift = THREE.MathUtils.clamp(slopeAngle, -0.2, 0.3) * 0.4
    return THREE.MathUtils.clamp(
      THREE.MathUtils.degToRad(48) + slopeLift,
      EXIT_LAUNCH_MIN_ANGLE,
      EXIT_LAUNCH_MAX_ANGLE,
    )
  }

  _update(dt) {
    if (this.isPaused) {
      if (this.sm.is(State.TITLE) || this.sm.is(State.SLINGING)) {
        this.camTarget.set(SLING_POS.x, SLING_POS.y)
      } else {
        this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
      }
      return
    }

    const simDt = this.slowmoTime > 0 ? dt * SLOWMO_SCALE : dt
    this.slowmoTime = Math.max(0, this.slowmoTime - dt)
    this.time += simDt
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this._edgeFallGraceTimer = Math.max(0, this._edgeFallGraceTimer - simDt)
      this._setArmadilloSprite('jump')
      this._updateFlight(simDt)
      if (this.boostHeld) {
        // drive spinAngleVel toward a fast target while held — smooth ramp up/down
        const targetSpin = Math.max(18, this.velocity.length() / (ARMADILLO_SIZE / 2))
        this.spinAngleVel = THREE.MathUtils.lerp(this.spinAngleVel, targetSpin, Math.min(1, simDt * 8))
      } else {
        // no input: bleed spin and tilt toward velocity direction
        this.spinAngleVel *= Math.pow(0.18, simDt)   // fast decay when released
      }
      this.armadillo.rotation.z -= this.spinAngleVel * simDt
    } else if (this.sm.is(State.ROLLING)) {
      this._setArmadilloSprite(Math.floor(this.time * 10) % 2 === 0 ? 'walk1' : 'walk2')
      this._updateRolling(simDt)
    } else if (this.sm.is(State.SLINGING)) {
      this._setArmadilloSprite('idle')
      this._updateSlinging()
    }
    this._updateSplashGameOver(simDt)
    this._updateParticles(simDt)
    this._updateEffects(dt)
    this._tickSlingSnap(dt)
    this._updateScenery()

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - SLING_POS.y)
    this.bestDistancePx = Math.max(this.bestDistancePx, this.armadillo.position.x - SLING_POS.x)

    // Procedural island spawn: flight/fall only (prevent infinite spawn during SLINGING)
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING) || this.sm.is(State.ROLLING)) {
      let spawnCount = 0
      while (
        this.islands[this.islands.length - 1].bounds.left - this.armadillo.position.x < ISLAND_SPAWN_LOOKAHEAD
        && spawnCount < ISLANDS_PER_SPAWN_TICK
      ) {
        this._spawnNextIsland()
        spawnCount++
      }
    }

    // TITLE/SLINGING: use sling center as camera target;
    // other states: follow armadillo
    if (this.sm.is(State.TITLE) || this.sm.is(State.SLINGING)) {
      this.camTarget.set(SLING_POS.x, SLING_POS.y)
    } else {
      this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
    }
  }

  _updateScenery() {
    for (const mesh of this.scenery) {
      const { layer, baseX, baseY, drift } = mesh.userData
      mesh.position.x = this.camTarget.x * layer + baseX + Math.sin(this.time * drift + baseX * 0.01) * 18
      mesh.position.y = this.camTarget.y * layer + baseY + Math.cos(this.time * drift + baseY * 0.01) * 6
    }
  }

  _updateSlinging() {
    // lock armadillo to pocket while dragging
    if (this.sm.is(State.SLINGING)) {
      const pocket = this._getSlingArmadilloPosition()
      this.armadillo.position.set(pocket.x, pocket.y, 0)
      this._setArmadilloCurled(this.slingDragging)
    }
    this._updateSlingVisuals()
  }

  _tickSlingSnap(dt) {
    if (this.slingSnapTime > 0) {
      this.slingSnapTime = Math.max(0, this.slingSnapTime - dt)
    }
  }

  _getHeightRatio(y = this.armadillo.position.y) {
    return THREE.MathUtils.clamp((y - SEA_LEVEL_Y) / (MOON_TARGET_Y - SEA_LEVEL_Y), 0, 1)
  }

  _getGravityPx() {
    const spaceT = THREE.MathUtils.smoothstep(this._getHeightRatio(), SPACE_GRAVITY_START, SPACE_GRAVITY_FULL)
    return THREE.MathUtils.lerp(GRAVITY, GRAVITY * SPACE_GRAVITY_RATIO, spaceT)
  }

  _updateFlight(dt) {
    const prevX    = this.armadillo.position.x
    const prevY    = this.armadillo.position.y
    const incomingVelocity = this.velocity.clone()

    // track peak altitude during flight (for bounce strength)
    this.flightPeakY = Math.max(this.flightPeakY, prevY)

    // Destruction pass — runs entirely in JS, never touches Planck this frame.
    // Finds all terrain the ball path overlaps, damages all of them, then manually
    // advances the ball past the last crater.  Planck is bypassed completely so
    // it can never apply restitution against freshly-rebuilt fixtures.
    if (this._tryDestroyTerrain(prevX, prevY, incomingVelocity, dt)) return

    // Normal flight — let Planck handle gravity + terrain collision.
    this.physics.setGravity(this._getGravityPx())
    this.physics.step(dt)
    const state = this.physics.getArmadilloState()

    this.armadillo.position.x = state.x
    this.armadillo.position.y = state.y
    this.velocity.set(state.vx, state.vy)

    const prevBottom = prevY - ARMADILLO_SIZE / 2
    const nextBottom = state.y - ARMADILLO_SIZE / 2

    if (this.physics.isGrounded() && this.velocity.y <= 180) {
      const groundedIsland = this._findGroundedIsland()
      if (groundedIsland) {
        this._landOnIsland(groundedIsland)
        return
      }
    }

    // ② downward landing — proximity check
    if (this.velocity.y <= 30) {
      const landedIsland = this._findLandingIsland(prevBottom, nextBottom)
      if (landedIsland) {
        this._landOnIsland(landedIsland)
        return
      }
    }

    // ③ moon reached — final goal
    if (state.y >= MOON_TARGET_Y) {
      this._reachMoon()
      return
    }

    // ④ fell into the sea
    if (state.y < SEA_LEVEL_Y) {
      this._beginSplashGameOver(state.x)
      return
    }

    // ⑤ below camera view — safety net
    if (state.y < this.camPos.y - 600) {
      this._beginSplashGameOver(state.x)
    }
  }

  _reachMoon() {
    if (this.sm.is(State.GAMEOVER)) return
    this.sm.transition(State.GAMEOVER)
    this.velocity.set(0, 0)
    this.lastRating = 'MOON'
    this._saveBestRecord()
    // moon reached — large particle burst
    this.particleSystem.spawnBurst(
      this.armadillo.position.x, this.armadillo.position.y,
      0xfff9c4, 48, 320,
    )
    this.particleSystem.spawnBurst(
      this.armadillo.position.x, this.armadillo.position.y,
      0x80deea, 32, 200,
    )
    this.trauma = 1.0
    this.flashTime = 0.6
    this._playTone(880, 0.4, 0.12, 'sine')
    setTimeout(() => this._playTone(1100, 0.3, 0.10, 'sine'), 180)
    setTimeout(() => this._playTone(1320, 0.5, 0.14, 'sine'), 380)
  }

  _findLandingIsland(prevBottom, nextBottom) {
    if (this.velocity.y > 30) return null   // still moving up fast
    const x = this.armadillo.position.x
    const bottom = this.armadillo.position.y - ARMADILLO_SIZE / 2
    for (const island of this.islands) {
      if (island.destroyed) continue
      const bounds = island.bounds
      const leftEdge = bounds.rampLeft ?? bounds.left
      // Only land on the top surface — reject anything past the right edge
      if (x < leftEdge - ARMADILLO_SIZE / 2 || x > bounds.right) continue
      if (x >= bounds.left && isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      // landed if bottom is near or below topY (proximity: 30px window)
      if (bottom <= topY + 15 && bottom >= topY - 30) return island
      // also catch the cross-through case
      if (prevBottom >= topY - 5 && nextBottom <= topY + 5) return island
    }
    return null
  }

  _findGroundedIsland() {
    const x = this.armadillo.position.x
    const bottom = this.armadillo.position.y - ARMADILLO_SIZE / 2
    let best = null
    let bestDist = Infinity

    for (const island of this.islands) {
      if (island.destroyed) continue
      const bounds = island.bounds
      // Only the top surface is valid ground — reject anything past the right edge
      if (x < bounds.left - ARMADILLO_SIZE || x > bounds.right) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      const dist = Math.abs(bottom - topY)
      if (dist < bestDist && dist <= 36) {
        best = island
        bestDist = dist
      }
    }

    return best
  }

  // Returns true if destruction happened this frame (caller must skip Planck step).
  // Scans the full predicted path, damages every terrain segment the ball crosses,
  // then manually places the ball just past the last crater so Planck never sees
  // intact terrain geometry this frame.
  _tryDestroyTerrain(prevX, prevY, incomingVelocity, dt) {
    const speed = incomingVelocity.length()
    if (speed < UNDER_BREAK_SPEED * 0.55) return false

    const gravity = this._getGravityPx()
    const nextX = prevX + incomingVelocity.x * dt
    const nextY = prevY + (incomingVelocity.y - gravity * dt * 0.5) * dt
    const steps = Math.max(4, Math.ceil(Math.hypot(nextX - prevX, nextY - prevY) / 10))

    // Collect all unique (island, x) hits along the predicted path
    const hits = []
    const hitKeys = new Set()

    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = THREE.MathUtils.lerp(prevX, nextX, t)
      const y = THREE.MathUtils.lerp(prevY, nextY, t)
      const lower = y - ARMADILLO_SIZE / 2

      for (const island of this.islands) {
        if (island.destroyed) continue
        if (x < island.bounds.left - ARMADILLO_SIZE / 2 || x > island.bounds.right + ARMADILLO_SIZE / 2) continue
        if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
        const topY = getTerrainTopY(island, x)
        // ball must be penetrating the terrain surface
        if (lower >= topY) continue
        if (y <= island.bounds.bottom) continue

        // ── Destruction direction gate ────────────────────────────────────
        // Require meaningful forward (horizontal) momentum OR a fast-enough
        // spin to act as a drill.  A straight-down fall must never destroy
        // terrain; the armadillo should land normally instead.
        //
        // Angle rule: horizontal component must be ≥ 55 % of total speed.
        // cos(56°) ≈ 0.56, so this rejects anything steeper than ~56° from
        // horizontal — covers nearly-vertical drops at any speed.
        const hasForwardMomentum = Math.abs(incomingVelocity.x) >= speed * 0.55

        // Spin rule: if the ball is spinning fast enough that rim tangential
        // speed exceeds UNDER_BREAK_SPEED it can punch through terrain even
        // on a steep approach (like a drill), but only if vx is still forward
        // (positive) so it won't destroy terrain it's flying away from.
        const rimSpeed = this.spinAngleVel * (ARMADILLO_SIZE / 2)
        const hasDrillSpin = rimSpeed >= UNDER_BREAK_SPEED && incomingVelocity.x > 0

        if (!hasForwardMomentum && !hasDrillSpin) continue

        const key = `${this.islands.indexOf(island)}:${Math.round(x / 10)}`
        if (hitKeys.has(key)) continue
        hitKeys.add(key)
        hits.push({ island, x, y })
      }
    }

    if (hits.length === 0) return false

    // Damage every hit zone
    const touched = new Set()
    for (const hit of hits) {
      const impactSpeed = speed
      const damage = hit.island.softBreak || impactSpeed < UNDER_BREAK_SPEED
        ? this._getSoftTerrainDamageProfile(impactSpeed)
        : this._getTerrainDamageProfile(impactSpeed)
      damageTerrain(hit.island, hit.x, damage.radius, damage.depth)
      touched.add(hit.island)
      this.particleSystem.spawnDirt(hit.x, hit.y, 28 + Math.floor(damage.force * 20))
    }

    // Rebuild physics fixtures for all touched terrain
    for (const island of touched) this.physics.addTerrain(island)

    // Advance ball manually along the incoming direction by one full dt,
    // then lift above any terrain it still overlaps.
    const angle = Math.atan2(incomingVelocity.y, incomingVelocity.x)
    let exitX = prevX + incomingVelocity.x * dt
    let exitY = prevY + (incomingVelocity.y - gravity * dt * 0.5) * dt

    // Ensure the ball is fully above all hit terrain surfaces
    for (const island of touched) {
      if (isTerrainDamagedAt(island, exitX, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, exitX)
      if (exitY - ARMADILLO_SIZE / 2 < topY) {
        exitY = topY + ARMADILLO_SIZE / 2 + 4
      }
    }

    // Preserve velocity direction, apply a modest speed-through bonus
    const exitSpeed = Math.max(speed, speed * 1.05 + 60)
    const exitVx = Math.cos(angle) * exitSpeed
    const exitVy = Math.sin(angle) * exitSpeed
    this.speedRatio = Math.min(this.speedRatio + 0.25, BOOST_SPEED_LIMIT)

    this.armadillo.position.set(exitX, exitY, 0)
    this.velocity.set(exitVx, exitVy)

    // Push Planck body to exit position and zero contact state —
    // setArmadilloPos also zeroes velocity and angular velocity, so call
    // setArmadilloVelocity immediately after to restore exit velocity.
    this.physics.setArmadilloPos(exitX, exitY)
    this.physics.setArmadilloVelocity(exitVx, exitVy)

    this._setArmadilloColor(0xffd54f)
    this._triggerImpact(0.45, 0x6d4c41, exitX, exitY)
    return true
  }

  _breakTerrainAt(terrain, x = this.armadillo.position.x, y = this.armadillo.position.y, impactVelocity = this.velocity, refreshPhysics = true) {
    const impactSpeed = impactVelocity.length()
    const damage = terrain.softBreak || impactSpeed < UNDER_BREAK_SPEED
      ? this._getSoftTerrainDamageProfile(impactSpeed)
      : this._getTerrainDamageProfile(impactSpeed)
    damageTerrain(terrain, x, damage.radius, damage.depth)
    if (refreshPhysics) {
      this.physics.addTerrain(terrain)
      // only sync velocity when we're the sole owner of the physics state
      this.physics.setArmadilloVelocity(impactVelocity.x, impactVelocity.y)
    }
    // when called from _breakTerrainHits (refreshPhysics=false), velocity is set
    // there after all hits are processed — do not touch it here
    this.particleSystem.spawnDirt(x, y, 32 + Math.floor(damage.force * 24))
    this._setArmadilloColor(0xffd54f)
    this._triggerImpact(0.52 + damage.depth * 0.2, 0x6d4c41, x, y)
  }

  _getTerrainDamageProfile(speed) {
    const force = THREE.MathUtils.clamp((speed - UNDER_BREAK_SPEED) / (DAMAGE_SPEED_FULL - UNDER_BREAK_SPEED), 0, 1)
    return {
      force,
      depth: 0.7 + force * 1.1,
      radius: 44 + force * 62,
    }
  }

  _getSoftTerrainDamageProfile(speed) {
    const force = THREE.MathUtils.clamp(speed / UNDER_BREAK_SPEED, 0.35, 1)
    return {
      force,
      depth: 1.1 + force * 0.6,
      radius: 54 + force * 48,
    }
  }

  _carveLaunchPath() {
    const forward = new THREE.Vector2(Math.cos(this.slingAngle), Math.sin(this.slingAngle))
    const start = this.armadillo.position
    const samples = [0, 34, 68, 102]
    for (const sample of samples) {
      const x = start.x + forward.x * sample
      const y = start.y + forward.y * sample
      for (const island of this.islands) {
        if (island.destroyed) continue
        if (x < island.bounds.left - ARMADILLO_SIZE || x > island.bounds.right + ARMADILLO_SIZE) continue
        if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE)) continue
        const topY = getTerrainTopY(island, x)
        const overlaps = y + ARMADILLO_SIZE / 2 >= island.bounds.bottom
          && y - ARMADILLO_SIZE / 2 <= topY
        if (!overlaps) continue

        const damage = this._getTerrainDamageProfile(this.velocity.length())
        damageTerrain(island, x, damage.radius, damage.depth)
        this.physics.addTerrain(island)
        this._triggerImpact(0.45 + damage.force * 0.35, 0x6d4c41, x, y)
      }
    }
  }

  _triggerLaunchImpact() {
    const force = THREE.MathUtils.clamp((this.slingPower - SLING_POWER_MIN) / (SLING_POWER_MAX - SLING_POWER_MIN), 0, 1)
    const strength = 0.35 + force * 0.65
    const burstX = SLING_POS.x + Math.cos(this.slingAngle) * 68
    const burstY = SLING_POS.y + 10 + Math.sin(this.slingAngle) * 68
    this.trauma = Math.min(1, this.trauma + strength)
    this.flashTime = Math.max(this.flashTime, force > 0.85 ? 0.18 : 0.09)
    this.slowmoTime = Math.max(this.slowmoTime, force > 0.85 ? SLOWMO_SEC * 1.8 : SLOWMO_SEC)
    this._spawnParticles(burstX, burstY, force > 0.85 ? 0xfff176 : 0xff7043, force > 0.85 ? 16 : 9, 220 + force * 260)
    if (force > 0.85) this._setArmadilloColor(0xfff176)
  }

  _landOnIsland(island) {
    if (island.biome === 'cloud') {
      this._springFromCloudIsland(island)
      return
    }

    this.currentIsland = island
    this.doubleJumpUsed = false
    const hSpeed = Math.abs(this.velocity.x)
    const impactSpeed = this.velocity.length()
    // Landing speed: take the best of horizontal velocity and spin-implied speed,
    // so a player who was spinning fast in air doesn't lose momentum on touchdown
    const speedFromH    = hSpeed / MAX_SPEED
    const speedFromSpin = (this.spinAngleVel * (ARMADILLO_SIZE / 2)) / MAX_SPEED
    const landedSpeedRatio = Math.min(BOOST_SPEED_LIMIT, Math.max(speedFromH, speedFromSpin * 0.75))
    this.speedRatio = landedSpeedRatio
    // Snap spinAngleVel to the contact-roll speed immediately so rotation
    // matches forward movement from the very first ground frame
    this.spinAngleVel = landedSpeedRatio * MAX_SPEED / (ARMADILLO_SIZE / 2)
    this.velocity.set(0, 0)
    this.physics.setArmadilloVelocity(0, 0)
    this.armadillo.position.y = getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.lastRating = 'ROLL'

    const dirtCount = impactSpeed > 700 ? 22 : 12
    this.particleSystem.spawnDirt(
      this.armadillo.position.x,
      this.armadillo.position.y - ARMADILLO_SIZE / 2,
      dirtCount,
    )

    // landing shockwave ripple
    const rippleRadius = 40 + this.speedRatio * 100
    this._spawnRipple(
      this.armadillo.position.x,
      this.armadillo.position.y - ARMADILLO_SIZE / 2,
      0xffffff,
      rippleRadius,
      0.38,
    )
    this._triggerImpact(0.18 + this.speedRatio * 0.22, 0x6d4c41, this.armadillo.position.x, this.armadillo.position.y)

    // auto-transition to ROLLING
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }

    // Determine new boostHeld state atomically — no cancel+re-begin gap.
    // If input is still physically down, keep/start boost; otherwise clear all hold state.
    if (this.pointerIsDown) {
      this.boostHeld = true
      this.boostHoldSource = 'pointer'
      this.preBoostSource = null
    } else if (this.spaceIsDown) {
      this.boostHeld = true
      this.boostHoldSource = 'keyboard'
      this.preBoostSource = null
    } else {
      this.boostHeld = false
      this.boostHoldSource = null
      this.preBoostSource = null
    }
  }

  _springFromCloudIsland(island) {
    // cloud landing: treat like a normal landing but give a speed + launch bonus
    this.currentIsland = island
    const hSpeed = Math.abs(this.velocity.x)
    const landedSpeedRatio = Math.min(BOOST_SPEED_LIMIT, hSpeed / MAX_SPEED)
    // Cloud bonus: land at actual speed + 0.40 bonus, capped at limit
    this.speedRatio = Math.min(BOOST_SPEED_LIMIT, landedSpeedRatio + 0.40)
    this.spinAngleVel = this.speedRatio * MAX_SPEED / (ARMADILLO_SIZE / 2)
    this.velocity.set(0, 0)
    this.physics.setArmadilloVelocity(0, 0)
    this.armadillo.position.y = getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }
    if (this.pointerIsDown) {
      this.boostHeld = true
      this.boostHoldSource = 'pointer'
      this.preBoostSource = null
    } else if (this.spaceIsDown) {
      this.boostHeld = true
      this.boostHoldSource = 'keyboard'
      this.preBoostSource = null
    } else {
      this.boostHeld = false
      this.boostHoldSource = null
      this.preBoostSource = null
    }
    this.lastRating = 'CLOUD'
    this._setArmadilloColor(0xd8f4ff)
    this._spawnRipple(this.armadillo.position.x, this.armadillo.position.y - ARMADILLO_SIZE / 2, 0xd8f4ff, 120, 0.42)
    this._spawnParticles(this.armadillo.position.x, this.armadillo.position.y, 0xffffff, 12, 160)
    this._playTone(620, 0.10, 0.05, 'triangle')
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.bounds
    if (this.boostHeld) {
      // Acceleration scales with current speed: faster spin = stronger push.
      // At speedRatio 0, accel is 50% of max; at speedRatio 1.0, it's 100%.
      const spinFactor = 0.5 + this.speedRatio * 0.5
      this.speedRatio = THREE.MathUtils.clamp(
        this.speedRatio + (BOOST_ACCEL_PER_SEC * spinFactor - ROLLING_FRICTION_PER_SEC) * dt,
        0,
        BOOST_SPEED_LIMIT,
      )
      this.lastRating = 'HOLD'
      this._setArmadilloColor(0xffb74d)
    } else {
      // no input: friction only
      this.speedRatio = THREE.MathUtils.clamp(
        this.speedRatio - ROLLING_FRICTION_PER_SEC * dt,
        0,
        BOOST_SPEED_LIMIT,
      )
    }

    const moveX = this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.x += moveX
    if (isTerrainDamagedAt(this.currentIsland, this.armadillo.position.x, ARMADILLO_SIZE / 2)) {
      this._fallOff()
      return
    }
    // snap y to terrain top — follows slope naturally
    this.armadillo.position.y = getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2

    // ground spin: drive rotation from speedRatio so it always matches forward speed.
    // spinAngleVel converges quickly so air→ground transition feels continuous.
    const contactSpin = this.speedRatio * MAX_SPEED / (ARMADILLO_SIZE / 2)  // rad/s
    const spinTarget = this.boostHeld
      ? Math.max(contactSpin, 10 + this.speedRatio * 18)   // held: visibly spinning even when slow
      : contactSpin
    this.spinAngleVel = THREE.MathUtils.lerp(this.spinAngleVel, spinTarget, Math.min(1, dt * 14))
    this.armadillo.rotation.z -= this.spinAngleVel * dt

    this._updateStallState(dt)

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      this.armadillo.position.x = bounds.right + ARMADILLO_SIZE
      this._fallOff()
    }
  }


  _fallOff() {
    if (!this.currentIsland) return
    // If input is already held at the moment we fall off the right edge, fire the
    // edge jump immediately — no grace timer needed and no risk of the downward
    // velocity from _fallOff overriding the jump.
    if (this.boostHeld) {
      const jumpSource = this.boostHoldSource || 'pointer'
      this.currentIsland = null
      if (!this.sm.transition(State.FALLING)) return
      this._launchFromFallingEdge(jumpSource)
      return
    }
    if (!this.sm.transition(State.FALLING)) return
    const vx = this.speedRatio * MAX_SPEED
    this.velocity.set(vx, 0)  // pure horizontal exit — no downward vy from slope
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, 0)
    this._syncMotionToArmadillo()
    // grace window: if input is released within 120ms after falling off edge, still jump
    this._edgeFallGraceTimer = 0.12
    this.currentIsland = null
  }

  _updateStallState(dt) {
    if (this.speedRatio <= STALL_SPEED_RATIO) {
      this.stallTime += dt
      if (this.stallTime >= STALL_GAMEOVER_SEC) {
        this._gameOver('STOP')
      }
      return
    }

    this.stallTime = 0
  }

  _triggerImpact(strength, color, x, y) {
    this.trauma = Math.min(1, this.trauma + strength)
    this.flashTime = Math.max(this.flashTime, 0.12)
    this.slowmoTime = Math.max(this.slowmoTime, SLOWMO_SEC)
    this._spawnParticles(x, y, color)
    this._playTone(90 + strength * 90, 0.08, 0.06 + strength * 0.05, 'sawtooth')
  }

  _spawnParticles(x, y, color, maxCount = 12, baseSpeed = 120) {
    this.particleSystem.spawnBurst(x, y, color, maxCount, baseSpeed)
  }

  _tryDoubleJump() {
    if (this.doubleJumpUsed) return
    this.doubleJumpUsed = true

    // kick upward — preserve horizontal velocity, add vertical impulse
    const jumpVy = Math.max(this.velocity.y, 0) + 620
    this.velocity.set(this.velocity.x, jumpVy)
    this.physics.setArmadilloVelocity(this.velocity.x, jumpVy)
    this._syncMotionToArmadillo()
    this._playTone(480, 0.14, 0.08, 'sine')
    this._spawnParticles(this.armadillo.position.x, this.armadillo.position.y, 0xffd54f, 8, 160)
  }

  _triggerSplashEffect(x = this.armadillo.position.x) {
    const y = SEA_LEVEL_Y + 4
    this._spawnRipple(x, y, 0xd9fbff, 190, 0.72)
    this._spawnRipple(x, y - 8, 0x4dd0e1, 130, 0.58)
    this.particleSystem.spawnBurst(x, y + 12, 0x8be9ff, 34, 260)
    this.particleSystem.spawnBurst(x, y + 4, 0xffffff, 18, 180)
    this.trauma = Math.min(1, this.trauma + 0.72)
    this.flashTime = Math.max(this.flashTime, 0.12)
    this._playTone(120, 0.16, 0.08, 'sine')
  }

  _beginSplashGameOver(x = this.armadillo.position.x) {
    if (this.splashStarted || this.sm.is(State.GAMEOVER)) return

    this._triggerSplashEffect(x)
    this.splashStarted = true
    this.lives = Math.max(0, this.lives - 1)

    if (this.lives > 0) {
      // still have lives — bounce back up automatically
      this._doSeaBounce(x)
      this.splashStarted = false  // allow future splashes
      this.doubleJumpUsed = false  // reset double-jump on sea bounce
    } else {
      this.splashGameOverTimer = SPLASH_GAMEOVER_DELAY
      this.lastRating = 'SPLASH'
      this.armadillo.visible = false
      this.armadillo.position.set(x, SEA_LEVEL_Y - ARMADILLO_SIZE, 0)
      this.velocity.set(0, 0)
      this.physics.setArmadilloPos(x, SEA_LEVEL_Y - ARMADILLO_SIZE)
      this.physics.setArmadilloVelocity(0, 0)
      this._syncMotionToArmadillo()
    }
  }

  _doSeaBounce(x = this.armadillo.position.x) {
    // find nearest landable island ahead (prefer forward, accept slightly behind)
    let targetIsland = null
    let bestScore = Infinity
    for (const island of this.islands) {
      if (island.destroyed) continue
      if (island.bowlCenter < x - 400) continue   // too far behind
      if (island.bowlCenter > x + 4000) continue  // too far ahead
      // score: prefer closer, prefer lower (easier to land)
      const dist = Math.abs(island.bowlCenter - x)
      const score = dist + Math.max(0, island.bounds.top - x) * 0.1
      if (score < bestScore) {
        bestScore = score
        targetIsland = island
      }
    }

    // teleport onto left portion of island — 15% from left edge gives more room to recover
    const landX = targetIsland
      ? targetIsland.bounds.left + (targetIsland.bounds.right - targetIsland.bounds.left) * 0.15
      : x
    const landY = targetIsland
      ? getTerrainTopY(targetIsland, landX) + ARMADILLO_SIZE / 2 + 4
      : SEA_LEVEL_Y + ARMADILLO_SIZE / 2 + 4

    // keep horizontal momentum, add upward pop so it doesn't immediately re-land hard
    const bounceVx = this.velocity.x * 0.80
    const bounceVy = 380

    // speed bonus on rescue — feel rewarded, not punished
    this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + 0.35)

    this.armadillo.visible = true
    this.armadillo.position.set(landX, landY, 0)
    this.velocity.set(bounceVx, bounceVy)
    this.physics.setArmadilloPos(landX, landY)
    this.physics.setArmadilloVelocity(bounceVx, bounceVy)
    this.flightPeakY = landY
    this._cancelBoostHold()
    this._syncMotionToArmadillo()
    this._playTone(320, 0.22, 0.12, 'sine')
    this._spawnParticles(landX, landY, 0x64b5f6, 16, 200)
  }

  _updateSplashGameOver(dt) {
    if (this.splashGameOverTimer <= 0 || this.sm.is(State.GAMEOVER)) return
    this.splashGameOverTimer = Math.max(0, this.splashGameOverTimer - dt)
    if (this.splashGameOverTimer > 0) return
    this._gameOver('SPLASH')
  }

  _updateParticles(dt) {
    this.particleSystem.update(dt, this._getGravityPx())
    this._updateRipples(dt)
    this._updateFlameTrail(dt)
    // terrain chunk + crater animation
    for (const island of this.islands) {
      updateTerrainChunks(island, dt)
      updateTerrainCraters(island, dt)
    }
  }

  // emit flame trail at speedRatio ≥ 0.42
  // visually hint terrain destruction possible while rolling
  _updateFlameTrail(dt) {
    const FLAME_THRESHOLD = 0.42
    const isActive = (this.sm.is(State.ROLLING) || this.sm.is(State.FLYING) || this.sm.is(State.FALLING))
      && this.speedRatio >= FLAME_THRESHOLD

    this.flameTrailCooldown = Math.max(0, this.flameTrailCooldown - dt)
    if (!isActive || this.flameTrailCooldown > 0) return

    const intensity = THREE.MathUtils.clamp((this.speedRatio - FLAME_THRESHOLD) / (1 - FLAME_THRESHOLD), 0, 1)
    const interval = THREE.MathUtils.lerp(0.045, 0.015, intensity)  // denser at higher speed
    this.flameTrailCooldown = interval

    const velAngle = this.sm.is(State.ROLLING)
      ? 0  // ROLLING moves right, flames go left (behind)
      : Math.atan2(this.velocity.y, this.velocity.x)

    this.particleSystem.spawnFlameTrail(
      this.armadillo.position.x,
      this.armadillo.position.y,
      intensity,
      velAngle,
    )
  }

  _clearParticles() {
    this.particleSystem.clear()
  }

  _updateEffects(dt) {
    this.trauma = Math.max(0, this.trauma - dt * 1.8)
    this.flashTime = Math.max(0, this.flashTime - dt)
  }

  _gameOver(reason) {
    if (this.sm.is(State.GAMEOVER)) return
    this.sm.transition(State.GAMEOVER)
    this.velocity.set(0, 0)
    this.lastRating = reason
    this._saveBestRecord()
    this._submitRunScore()

    if (reason === 'SPLASH' && !this.splashStarted) {
      this._triggerSplashEffect(this.armadillo.position.x)
    } else {
      this._playTone(96, 0.22, 0.1, 'triangle')
    }
  }

  _submitRunScore() {
    const heightM   = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    const score     = this._getScore()
    const moonClear = this.lastRating === 'MOON'
    const name      = this.playerName || 'Anonymous'
    submitScore(name, score, heightM, distanceM, moonClear)
      .then(entry => { this.pendingScoreEntry = entry })
      .catch(() => {})
  }

  async _openLeaderboard() {
    this.leaderboardEntries = await fetchLeaderboard(15)
    this.showingLeaderboard = true
  }

  _closeLeaderboard() {
    this.showingLeaderboard = false
  }

  _confirmName(name) {
    this.playerName = name.trim().slice(0, 16) || 'Anonymous'
    savePlayerName(this.playerName)
    this.showingNamePrompt = false
  }

  _ensureAudio() {
    if (this.audio) {
      if (this.audio.state === 'suspended') this.audio.resume()
      return
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    this.audio = new AudioContext()
  }

  _playTone(frequency, duration, volume, type = 'sine') {
    if (!this.audio || this.audio.state !== 'running') return

    const now = this.audio.currentTime
    const osc = this.audio.createOscillator()
    const gain = this.audio.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(frequency, now)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    osc.connect(gain)
    gain.connect(this.audio.destination)
    osc.start(now)
    osc.stop(now + duration + 0.02)
  }

  _getScore() {
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    return heightM * SCORE.perM_height
      + distanceM * SCORE.perM_distance
  }

  _loadBestRecord() {
    try {
      return JSON.parse(localStorage.getItem('armadillo-rush-best')) ?? { score: 0, heightM: 0, distanceM: 0 }
    } catch {
      return { score: 0, heightM: 0, distanceM: 0 }
    }
  }

  _saveBestRecord() {
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    const score = this._getScore()
    if (score <= this.bestRecord.score) return

    this.bestRecord = { score, heightM, distanceM }
    try {
      localStorage.setItem('armadillo-rush-best', JSON.stringify(this.bestRecord))
    } catch {
      // storage failure must not interrupt play
    }
  }

  _render(dt, alpha = 1) {
    const renderPos = this._applyMotionInterpolation(alpha)
    // camera lerp — faster during FLYING (look ahead), smooth otherwise
    const cameraLerp = this.sm.is(State.FLYING) ? CAMERA_LERP * 1.5 : CAMERA_LERP
    const cameraBlend = 1 - Math.pow(1 - cameraLerp, Math.max(0.001, (dt ?? FIXED_DT) * 60))
    const cameraTargetX = this.sm.is(State.TITLE) || this.sm.is(State.SLINGING) ? this.camTarget.x : renderPos.x
    const cameraTargetY = this.sm.is(State.TITLE) || this.sm.is(State.SLINGING) ? this.camTarget.y : renderPos.y
    this.camPos.x += (cameraTargetX - this.camPos.x) * cameraBlend
    this.camPos.y += (cameraTargetY - this.camPos.y) * cameraBlend
    const shake = this.trauma * this.trauma * 16
    const shakeX = (Math.random() - 0.5) * shake
    const shakeY = (Math.random() - 0.5) * shake
    this.renderer.setCenter(this.camPos.x, this.camPos.y, shakeX, shakeY)

    // background height progress — fixed to MOON_TARGET_Y
    const heightRatio = this._getHeightRatio()
    this._updateRendererClearSky(heightRatio)
    this._updateSceneSkyPlane(heightRatio)
    this._updateWorldSea()
    this.background.update(heightRatio, this.time)

    // update PostFX then render (BackgroundPass → RenderPass → Effects)
    this.postfx.update(this.trauma, heightRatio, dt ?? FIXED_DT)
    this.postfx.render(dt ?? FIXED_DT)
    this._renderHud()
  }

  _updateRendererClearSky(heightRatio) {
    const color = new THREE.Color()
    if (heightRatio < 0.34) {
      color.copy(SKY_CLEAR_LOW).lerp(SKY_CLEAR_MID, THREE.MathUtils.smoothstep(heightRatio, 0.04, 0.34))
    } else if (heightRatio < 0.68) {
      color.copy(SKY_CLEAR_MID).lerp(SKY_CLEAR_HIGH, THREE.MathUtils.smoothstep(heightRatio, 0.34, 0.68))
    } else {
      color.copy(SKY_CLEAR_HIGH).lerp(SKY_CLEAR_SPACE, THREE.MathUtils.smoothstep(heightRatio, 0.68, 0.90))
    }
    this.renderer.renderer.setClearColor(color, 1)
  }

  _renderHud() {
    if (!this.ui) return
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    const score = this._getScore()
    const speed = Math.round(this.speedRatio * 100)
    const slingDeg = Math.round(THREE.MathUtils.radToDeg(this.slingAngle))
    const slingPowerPct = Math.round(this.slingPower * 100)
    const pullLen = this.slingPull.length()
    const pullPct = Math.round(THREE.MathUtils.clamp(pullLen / SLING_MAX_PULL, 0, 1) * 100)

    const showBoostButton = !this.sm.is(State.TITLE)
      && !this.sm.is(State.SLINGING)
      && !this.sm.is(State.GAMEOVER)
    const showControlRow = !this.isPaused
      && !this.sm.is(State.TITLE)
      && !this.sm.is(State.GAMEOVER)
    const boostButtonActive = this.boostHeld
    const boostButtonReady = this.sm.is(State.ROLLING)

    const action = this.splashGameOverTimer > 0
      ? 'Sinking...'
      : this.sm.is(State.TITLE)
      ? 'Click to sling'
      : this.sm.is(State.SLINGING)
        ? this.slingDragging ? 'Release to launch!' : 'Drag to aim'
      : this.sm.is(State.ROLLING)
        ? 'Button / Space: boost on yellow slopes or end zone'
      : this.sm.is(State.GAMEOVER)
        ? 'Click / Space → restart'
        : 'In flight...'

    const pauseLabel = this.isPaused ? 'Resume' : 'Pause'
    const phaseText = this.isPaused ? 'PAUSED' : this.sm.current
    const dangerText = this.stallTime >= STALL_DANGER_SEC
      ? `<div class="hud-danger">DANGER ${Math.max(0, STALL_GAMEOVER_SEC - this.stallTime).toFixed(1)}s</div>`
      : ''

    // distance remaining to moon
    const moonDistM = Math.max(0, Math.floor((MOON_TARGET_Y - this.armadillo.position.y) / PX_PER_METER))
    const moonDistText = moonDistM > 0 ? `${moonDistM}m` : '🌕 REACHED!'

    // sling power meter (shown while dragging)
    const slingMeter = this.sm.is(State.SLINGING) ? `
      <div class="meter meter-power">
        <div class="meter-fill power-fill" style="width:${pullPct}%"></div>
      </div>` : ''

    const isMoonClear = this.lastRating === 'MOON'
    const gameOverTitle = isMoonClear ? '🌕 MOON REACHED!' : (this.lastRating === 'SPLASH' ? '🌊 SPLASH!' : 'GAME OVER')
    const gameOverTitleClass = isMoonClear ? 'result-title moon-clear' : 'result-title'

    const isGameActive = !this.sm.is(State.TITLE)
    const heartsHTML = [1,2,3].map(i => {
      const full = i <= this.lives
      return `<svg class="heart-pixel ${full ? 'heart-full' : 'heart-empty'}" width="20" height="20" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="1" y="2" width="3" height="1"/><rect x="6" y="2" width="3" height="1"/>
        <rect x="0" y="3" width="4" height="1"/><rect x="5" y="3" width="4" height="1"/>
        <rect x="0" y="4" width="9" height="1"/>
        <rect x="0" y="5" width="9" height="1"/>
        <rect x="1" y="6" width="7" height="1"/>
        <rect x="2" y="7" width="5" height="1"/>
        <rect x="3" y="8" width="3" height="1"/>
        <rect x="4" y="9" width="1" height="1"/>
      </svg>`
    }).join('')

    // ── Leaderboard rows HTML ──────────────────────────────────────────────
    const lbRowsHtml = this.leaderboardEntries.length === 0
      ? '<div class="leaderboard-empty">No scores yet — be the first!</div>'
      : this.leaderboardEntries.map(e => {
          const isSelf = e.name === this.playerName
          const medal = e.rank === 1 ? '🥇' : e.rank === 2 ? '🥈' : e.rank === 3 ? '🥉' : e.rank
          const moonBadge = e.moonClear ? ' 🌕' : ''
          return `
            <div class="lb-row${isSelf ? ' lb-self' : ''}">
              <span class="lb-rank${e.rank <= 3 ? ' top3' : ''}">${medal}</span>
              <span class="lb-name">${e.name}${moonBadge}</span>
              <span class="lb-score">${e.score.toLocaleString()}</span>
              <span class="lb-meta">${e.heightM}m high · ${e.distanceM}m far</span>
            </div>`
        }).join('')

    // ── Rank summary for game-over card ───────────────────────────────────
    const rankText = this.pendingScoreEntry
      ? `<div><span>RANK</span><strong>#${this.pendingScoreEntry.rank}</strong></div>`
      : ''

    this.ui.innerHTML = `
      ${isGameActive ? `<div class="lives-hud">${heartsHTML}</div>` : ''}
      <div class="hud-panel hud-stats">
        <div><span>STATE</span><strong>${phaseText}</strong></div>
        <div><span>SCORE</span><strong>${score}</strong></div>
        <div><span>HEIGHT</span><strong>${heightM}m</strong></div>
        <div><span>DIST</span><strong>${distanceM}m</strong></div>
        <div><span>TO MOON</span><strong>${moonDistText}</strong></div>
        <div><span>SPEED</span><strong>${speed}%</strong></div>
        <div><span>ANGLE</span><strong>${slingDeg}°</strong></div>
        <div><span>POWER</span><strong>${slingPowerPct}%</strong></div>
        ${dangerText}
      </div>

      ${slingMeter}

      ${this.sm.is(State.TITLE) && !this.showingNamePrompt ? `
        <div class="start-layer">
          <div class="start-title">ARMADILLO RUSH</div>
          <div class="start-subtitle">🌊 Sea → ☁️ Sky → 🌕 Moon</div>
          <div class="start-subtitle">Click to start slinging</div>
          <div class="start-best">BEST ${this.bestRecord.score}</div>
          <div class="start-tip">💡 ${TIPS[this._tipIndex]}</div>
          <button type="button" class="clickable name-edit-btn" data-action="name-edit">👤 ${this.playerName || 'Set nickname'}</button>
        </div>
      ` : ''}
      ${this.flashTime > 0 ? `<div class="flash-layer" style="opacity:${this.flashTime * 1.6}"></div>` : ''}
      ${this.sm.is(State.GAMEOVER) ? `
        <div class="modal-layer">
          <div class="result-card">
            <div class="${gameOverTitleClass}">${gameOverTitle}</div>
            <div class="result-grid">
              <div><span>SCORE</span><strong>${score}</strong></div>
              <div><span>HEIGHT</span><strong>${heightM}m</strong></div>
              <div><span>DIST</span><strong>${distanceM}m</strong></div>
              <div><span>BEST</span><strong>${this.bestRecord.score}</strong></div>
              ${rankText}
            </div>
            <button type="button" class="clickable primary-button" data-action="leaderboard">Leaderboard</button>
            <button type="button" class="clickable secondary-button" data-action="restart">Retry</button>
          </div>
        </div>
      ` : ''}

      ${this.isPaused ? `
        <div class="pause-layer">
          <div class="pause-menu">
            <div class="pause-title">PAUSED</div>
            <button type="button" class="clickable primary-button" data-action="pause">Resume</button>
            <button type="button" class="clickable secondary-button" data-action="restart">Restart</button>
          </div>
        </div>
      ` : ''}

      ${showControlRow ? `
        <div class="control-row">
          <button type="button" class="clickable secondary-button" data-action="pause">${pauseLabel}</button>
          <button type="button" class="clickable primary-button" data-action="restart">Restart</button>
        </div>
      ` : ''}

      ${this.showingLeaderboard ? `
        <div class="leaderboard-layer">
          <div class="leaderboard-card">
            <div class="leaderboard-title">LEADERBOARD</div>
            <div class="leaderboard-list">${lbRowsHtml}</div>
            <div class="leaderboard-actions">
              <button type="button" class="clickable secondary-button" data-action="leaderboard-close">Close</button>
            </div>
          </div>
        </div>
      ` : ''}

      ${this.showingNamePrompt ? `
        <div class="name-layer">
          <div class="name-card">
            <div class="name-card-title">Your nickname</div>
            <div class="name-card-sub">Shown on the leaderboard. Max 16 characters.</div>
            <input class="name-input clickable" type="text" maxlength="16"
              placeholder="Enter nickname…"
              value="${this.playerName === 'Anonymous' ? '' : (this.playerName || '')}"
              autocomplete="off" spellcheck="false" />
            <button type="button" class="clickable primary-button" data-action="name-confirm">Save</button>
            <button type="button" class="clickable secondary-button" data-action="name-skip">Use Anonymous</button>
          </div>
        </div>
      ` : ''}

      ${showBoostButton && !this.isPaused ? `
        <button type="button" class="clickable boost-button ${boostButtonActive ? 'is-pressed' : ''} ${boostButtonReady ? 'is-ready' : ''}" data-action="boost" aria-label="Boost">
          <span class="boost-button-core">BOOST</span>
        </button>
      ` : ''}

      <div class="action-hint ${showBoostButton && !this.isPaused ? 'is-above-boost' : ''}">${action}</div>
    `
  }

  loop() {
    const now = performance.now()
    let frameDt = (now - this.lastNow) / 1000
    this.lastNow = now
    if (frameDt > MAX_FRAME_DT) frameDt = MAX_FRAME_DT

    this.accumulator += frameDt
    while (this.accumulator >= FIXED_DT) {
      this._beginFixedStep()
      this._update(FIXED_DT)
      this._endFixedStep()
      this.accumulator -= FIXED_DT
    }
    const alpha = THREE.MathUtils.clamp(this.accumulator / FIXED_DT, 0, 1)
    this._render(frameDt, alpha)
    requestAnimationFrame(() => this.loop())
  }

  start() {
    requestAnimationFrame(() => this.loop())
  }
}

const game = new Game()
game.start()
