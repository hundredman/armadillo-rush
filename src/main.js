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
  getTopEntry,
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
  isTerrainFullyDestroyed,
} from './game/terrain.js'
import {
  ITEM_SPAWN_TABLE,
  ITEM_ROCKET_DURATION,
  ITEM_BOOST_DURATION,
  ITEM_COLLECT_RADIUS,
  ROCKET_VX,
  ROCKET_VY,
  BOOST_VY_BONUS,
  BOOST_VX_MULT,
  BOOST_MIN_ANGLE,
  BOOST_SPEED_BONUS,
  BOOST_PASSIVE_SPEED,
  createItem,
  getProceduralItemSpec,
  updateItems,
  checkItemCollection,
  markCollected,
} from './game/items.js'
import {
  CAMERA_LERP,
  GRAVITY,
  MAX_SPEED,
  PX_PER_METER,
  SCORE,
  SLOWMO_SCALE,
  SLOWMO_SEC,
  STALL_DANGER_SEC,
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
// Distance behind the camera beyond which passed islands/items are culled.
// Far larger than the viewport half-width and the respawn look-back (~400px),
// so culling can never remove anything still relevant to gameplay.
const CULL_BEHIND_PX = 2800

const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(40)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(58)
const UNDER_BREAK_SPEED = 320
const DAMAGE_SPEED_FULL = 700
const BOOST_ACCEL_PER_SEC = 1.7       // speedRatio/s gained while holding input (reduced for smoother feel)
const BOOST_SPEED_LIMIT = 1.8
const BOOST_RELEASE_SPEED_KICK = 0.28  // reduced from 0.50 — less abrupt speed spike on release
const BOOST_RELEASE_VERTICAL_KICK = 820  // reduced from 980 — softer upward launch
const ROLLING_FRICTION_PER_SEC = 0.28 // speedRatio/s lost to friction when no input
const SPACE_GRAVITY_RATIO = 0.28
const SPACE_GRAVITY_START = 0.62
const SPACE_GRAVITY_FULL = 0.86
// Open-air fall acceleration (cloud + space layers only)
// Activates when falling downward with no terrain detected below within
// FALL_ACCEL_PROBE_PX.  Ramps up linearly with fall distance up to the
// FALL_ACCEL_MAX multiplier applied on top of current gravity.
const FALL_ACCEL_CLOUD_START  = 0.30   // heightRatio where effect begins (top of cloud layer)
const FALL_ACCEL_MAX_MULT     = 1.8    // peak extra-gravity multiplier (fraction of current gravity)
const FALL_ACCEL_PROBE_PX     = 320    // downward scan distance: if terrain found within this, skip
const FALL_ACCEL_RAMP_PX      = 400    // fall distance (from peak) over which mult ramps 0→max
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
    this.slingDragging = false
    this.slingPull = new THREE.Vector2(0, 0)
    this.slingPower = 0                  // power ratio 0~1
    this.slingAngle = Math.PI / 4        // launch angle (radians)
    // Set true when TITLE/GAMEOVER click transitions to SLINGING — the same
    // pointer-up that dismissed the start screen must not trigger any gameplay
    // action (sling drag, hold-release, etc.).  Cleared on next pointerup.
    this._pendingPointerClear = false
    // Set true once the first pointerup after entering SLINGING fires — prevents
    // accidental double-tap from immediately starting a sling drag.
    this._slingReady = false
    // performance.now() timestamp before which sling drag is blocked.
    // Absorbs double-click / fast re-click bleed from the title start button.
    this._slingBlockUntil = 0
    // Set true once the tutorial screen has been rendered — skip rebuilding the
    // static TITLE DOM every frame so the button is stable and `:active` shows.
    // Stores the last-rendered language key ('ko'/'en') so a lang toggle forces a rebuild.
    this._tutorialRendered = false
    // Tutorial language: 'ko' = 한국어 (default), 'en' = English
    this._tutorialLang = 'ko'
    // Cached key for GAMEOVER HUD — only rebuilds when content actually changes
    // (pendingScoreEntry rank, showingLeaderboard, isPaused).  Prevents
    // per-frame innerHTML replacement from destroying the nickname text input.
    this._lastGameOverKey = null
    this.boostHeld = false
    this.boostHoldSource = null
    this.spinAngleVel = 0        // rad/s, positive = clockwise; persists across state transitions
    this._edgeFallGraceTimer = 0 // seconds remaining to still jump after falling off edge
    this._spawnGraceTimer = 0    // frames to skip Planck contact resolution after teleport
    this._pendingTerrainRebuild = new Set()  // islands to re-add fixtures when grace ends
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
    this.preBoostSource = null  // input pressed before landing — fires boost immediately on touch
    this.pointerIsDown = false
    this.spaceIsDown = false
    this.bestRecord = this._loadBestRecord()
    this.isPaused = false

    // Scoreboard state
    this.playerName = getSavedPlayerName() || ''
    this.showingLeaderboard = false
    this.leaderboardEntries = []   // cached from last fetchLeaderboard() call
    this.pendingScoreEntry = null  // set after game over, cleared after submission
    this._lbScrollPending = false  // when true, scroll the leaderboard to the self row on next render

    // Respawn state — armadillo hovers at spawn position until player inputs
    this._respawnWaiting = false
    this._respawnPos = null
    this._tipIndex = Math.floor(Math.random() * TIPS.length)
    this.audio = null

    // Item system
    this.items = []            // all spawned item objects
    this.activeRocket = null   // { timeLeft } or null — overrides velocity each frame
    // True from the moment a rocket's thrust ends until the next landing.  While
    // coasting AND descending, terrain destruction is suppressed so the high
    // horizontal exit speed can't bulldoze through terrain — landing/collision
    // must work normally on the way down.
    this._rocketCoasting = false
    this.activeBoost = null   // { timeLeft } or null — bonus on next jump

    // landing ripple effect pool (max 4 simultaneous)
    this.ripples = []
    this._buildRipplePool()

    // sling snap animation
    this.slingSnapTime = 0       // elapsed time since launch snap

    // flame trail spawn cooldown (prevent per-frame emission)
    this.flameTrailCooldown = 0
    // rolling dust spawn cooldown
    this._dustTimer = 0
    // throttle for off-screen island/item culling (seconds)
    this._cullTimer = 0

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

    this._renderHud()
  }

  // ── World build: sling + islands + armadillo ──
  _buildPlaceholderWorld() {
    this._buildSceneSkyPlane()
    this._buildWorldSea()
    this._buildScenery()
    this.islands = []
    this._buildSling()

    this.armadillo = this._createArmadillo()
    this.renderer.add(this.armadillo)

    // ── Shadow — a contact patch whose TOP edge is rebuilt each frame to follow
    // the terrain surface directly below the armadillo.  Instead of drawing a
    // full oval (which floats wherever it overhangs an island edge), the geometry
    // itself is clipped to the valid terrain span: a triangle strip hugging the
    // ground line, tapering to nothing at the horizontal ends.  This guarantees
    // the shadow only ever appears on terrain.  Painted on top of the terrain
    // (depthTest:false, renderOrder between terrain 0 and the armadillo 20).
    this._shadowSamples = 40   // denser sampling → smoother top edge on steep slopes
    const shadowGeo = new THREE.BufferGeometry()
    shadowGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(this._shadowSamples * 2 * 3), 3),
    )
    const shadowIdx = []
    for (let i = 0; i < this._shadowSamples - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1
      shadowIdx.push(a, b, d, a, d, c)
    }
    shadowGeo.setIndex(shadowIdx)
    this.armadilloShadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({
        color: 0x0a0c1a,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    )
    this.armadilloShadow.position.z = 0.05   // above grass/ridge, below the armadillo
    this.armadilloShadow.renderOrder = 5     // after terrain, before the armadillo
    this.armadilloShadow.frustumCulled = false  // vertices are baked in world space
    this.renderer.add(this.armadilloShadow)

    this._resetRun()
    this._syncMotionToArmadillo()
  }

  /** Procedurally spawn additional islands. */
  _spawnNextIsland() {
    const last = this.islands[this.islands.length - 1]
    const spec = this._avoidTerrainOverlap(generateNextIslandSpec(last, this.islandIndex), last)
    const idx = this.islandIndex
    this.islandIndex += 1
    const island = createCurvedTerrain(spec)
    this.renderer.add(island.mesh)
    this.islands.push(island)
    this.physics.addTerrain(island)
    if (this.items) this._trySpawnItemForIsland(island, idx)
  }

  /**
   * Remove islands and items that the camera has scrolled far past.  Their
   * physics bodies and meshes are freed so a long run does not accumulate
   * unbounded arrays / GPU memory.  Always keeps a generous buffer behind the
   * camera (respawn only ever looks ~400px back) and never culls the island the
   * armadillo is currently rolling on.
   */
  _cullBehind() {
    const cutoff = this.camPos.x - CULL_BEHIND_PX
    // The cutoff sits well behind the viewport, so islands ahead of the camera
    // are always retained — this can never empty the array or remove the
    // newest island used to drive procedural spawning.
    const kept = []
    for (const island of this.islands) {
      if (island !== this.currentIsland && island.bounds.right < cutoff) {
        this.physics.removeTerrain(island)
        this.renderer.remove(island.mesh)
        this._pendingTerrainRebuild.delete(island)
        this._disposeObject(island.mesh)
        continue
      }
      kept.push(island)
    }
    this.islands = kept

    const keptItems = []
    for (const item of this.items) {
      if (item.x < cutoff) {
        this.renderer.remove(item.mesh)
        this._disposeObject(item.mesh)
        continue
      }
      keptItems.push(item)
    }
    this.items = keptItems
  }

  /** Recursively dispose geometries and materials of a mesh/group tree. */
  _disposeObject(obj) {
    obj.traverse((node) => {
      if (node.geometry) node.geometry.dispose()
      const mat = node.material
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.())
      else if (mat) mat.dispose?.()
    })
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

      group.add(sprite)
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
      // preventDefault() above stops the click from moving focus, so a focused
      // nickname input would keep focus and freeze _renderHud (its guard skips
      // rebuilds while a .name-input is focused).  Explicitly blur it so the UI
      // can update after the button action (register / leaderboard / restart).
      const active = document.activeElement
      if (active && active.classList && active.classList.contains('name-input')) active.blur()
      this._ensureAudio()
      const action = button.dataset.action
      if (action === 'pause') this._togglePause()
      if (action === 'restart') this._restartToTitle()
      if (action === 'boost') this._startBoostHold('pointer')
      if (action === 'leaderboard') this._openLeaderboard()
      if (action === 'leaderboard-close') this._closeLeaderboard()
      if (action === 'start-game') {
        this._resetRun()
        this.sm.transition(State.SLINGING)
        // Consume the matching pointerup so it cannot bleed into sling drag
        this._pendingPointerClear = true
      }
      if (action === 'score-save') {
        const input = this.ui.querySelector('.name-input')
        this._saveScoreWithName(input ? input.value : '')
      }
      if (action === 'toggle-lang') {
        this._tutorialLang = this._tutorialLang === 'ko' ? 'en' : 'ko'
      }
      return true
    }

    // ── Sling drag (mouse + touch) ──
    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return
      if (this.showingLeaderboard) return
      // Any click inside the UI overlay (but not the canvas) stays in UI land.
      if (event.target instanceof Element && event.target.closest('#ui-overlay')) return
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
      // Consume the pointer-up that dismissed the title/gameover start screen.
      if (this._pendingPointerClear) {
        this._pendingPointerClear = false
        // The start-screen gesture is now fully consumed — sling drag is open.
        if (this.sm.is(State.SLINGING)) this._slingReady = true
        return
      }
      // Skip gameplay actions if any text input has focus (e.g. nickname entry
      // in the game-over card) — the user may be lifting their finger after
      // interacting with the input field.
      if (document.activeElement && document.activeElement.classList.contains('name-input')) return
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
        if (event.code === 'Enter') {
          // Enter in game-over name input saves the score
          event.preventDefault()
          this._saveScoreWithName(event.target.value)
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

  // World coordinates → CSS pixel position on screen (used for HUD elements that track world objects)
  _worldToScreen(wx, wy) {
    const canvas = this.renderer.renderer.domElement
    const W = canvas.clientWidth
    const H = canvas.clientHeight
    const cam = this.renderer.camera
    const halfW = (cam.right - cam.left) / 2
    const halfH = (cam.top   - cam.bottom) / 2
    return {
      x: (wx - this.camPos.x) / halfW * (W / 2) + W / 2,
      y: -(wy - this.camPos.y) / halfH * (H / 2) + H / 2,
    }
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

    // SLINGING: begin sling drag — only after at least one pointerup has fired
    // since entering SLINGING (_slingReady = true).  This prevents an accidental
    // double-tap (user presses start button, then immediately taps the sling area
    // thinking the first press failed) from launching the sling.
    if (this.sm.is(State.SLINGING)) {
      if (!this._slingReady) return
      // Time-based dead zone: absorbs double-click bleed from the start button
      if (performance.now() < this._slingBlockUntil) return
      this.slingDragging = true
      this._handlePointerMove(clientX, clientY)
      return
    }

    // ROLLING: begin hold — accelerates while held, jumps on release
    if (this.sm.is(State.ROLLING)) {
      this._beginHold('pointer')
      return
    }

    // FLYING / FALLING: if waiting for respawn input, activate drop
    if ((this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) && this._respawnWaiting) {
      this._activateRespawn()
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

    // FLYING / FALLING: if waiting for respawn input, activate drop
    if ((this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) && this._respawnWaiting) {
      this._activateRespawn()
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


  // Run-state reset shared by _resetRun and _restartToTitle.  ONLY fields/effects
  // that are reset IDENTICALLY in both belong here — anything that differs stays
  // in the individual functions so their distinct intent is preserved.
  _resetCommonRunState() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.spinAngleVel = 0
    this._edgeFallGraceTimer = 0
    this.slingDragging = false
    this._slingReady = false
    this._tutorialRendered = false
    this._lastGameOverKey = null
    this._respawnWaiting = false
    this._respawnPos = null
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
    this.preBoostSource = null
    this.activeRocket = null
    this._rocketCoasting = false
    this.activeBoost = null
    this.armadillo.visible = true
    const pocket = this._getSlingArmadilloPosition()
    this.armadillo.position.set(pocket.x, pocket.y, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._setArmadilloCurled(false)
    this._updateSlingVisuals()
    this._syncMotionToArmadillo()
  }

  _resetRun() {
    // Run-start specifics (NOT shared with title restart): fresh tip, hard-clear
    // physical input, arm the pointer-clear + 300 ms sling dead-zone so the
    // start-button gesture can't bleed into gameplay, and drop any pending
    // terrain-rebuild / spawn grace.  Set before the common reset so they precede
    // _restoreTerrain() exactly as in the original ordering.
    this._tipIndex = Math.floor(Math.random() * TIPS.length)
    this.pointerIsDown = false
    this.spaceIsDown = false
    this._pendingPointerClear = true
    this._slingBlockUntil = performance.now() + 300
    this._spawnGraceTimer = 0
    this._pendingTerrainRebuild.clear()
    this._resetCommonRunState()
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.TITLE)
  }

  _restartToTitle() {
    // Title restart differs only in the ending: force the state straight to
    // TITLE (the run is being abandoned, not started).
    this._resetCommonRunState()
    this.sm.current = State.TITLE
  }

  _restoreTerrain() {
    this.physics.removeAllTerrain()

    for (const island of this.islands ?? []) {
      this.renderer.remove(island.mesh)
    }

    this.islands = []
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length

    let previousIsland = null
    for (let i = 0; i < DEFAULT_ISLAND_LAYOUT.length; i++) {
      const randomized = this._randomizeInitialTerrainSpec(DEFAULT_ISLAND_LAYOUT[i], i)
      const spec = this._avoidTerrainOverlap(randomized, previousIsland)
      const island = createCurvedTerrain(spec)
      this.renderer.add(island.mesh)
      this.islands.push(island)
      this.physics.addTerrain(island)
      previousIsland = island
    }

    for (let i = 0; i < INITIAL_PROCEDURAL_ISLANDS; i++) {
      this._spawnNextIsland()
    }

    this._buildItems()
  }

  _buildItems() {
    for (const item of this.items ?? []) this.renderer.remove(item.mesh)
    this.items = []

    for (const entry of ITEM_SPAWN_TABLE) {
      const island = this.islands[entry.islandIndex]
      if (!island) continue

      // Randomize x-offset within the island's safe interior (±60 px, clamped)
      const xJitter = (Math.random() - 0.5) * 120
      const islandHalfW = (island.bounds.right - island.bounds.left) * 0.38
      const clampedOffsetX = THREE.MathUtils.clamp(
        entry.offsetX + xJitter,
        -islandHalfW, islandHalfW,
      )

      // Occasionally swap Boost↔Rocket within the same section (~30% chance)
      // Hearts are never swapped — they're fixed milestone rewards.
      let type = entry.type
      if (type !== 'heart' && Math.random() < 0.30) {
        type = type === 'rocket' ? 'boost' : 'rocket'
      }

      // Small y-offset jitter so items aren't all at identical heights
      const yJitter = Math.random() * 16

      const wx = island.bowlCenter + clampedOffsetX
      const terrainY = getTerrainTopY(island, wx)
      const wy = terrainY + entry.offsetY + yJitter
      const item = createItem(type, wx, wy)
      this.renderer.add(item.mesh)
      this.items.push(item)
    }
  }

  /** Spawn item for a procedurally generated island (if any). */
  _trySpawnItemForIsland(island, islandIndex) {
    const spec = getProceduralItemSpec(islandIndex)
    if (!spec) return

    // Jitter position and occasionally swap non-heart types
    const xJitter = (Math.random() - 0.5) * 80
    const islandHalfW = (island.bounds.right - island.bounds.left) * 0.38
    const clampedOffsetX = THREE.MathUtils.clamp(spec.offsetX + xJitter, -islandHalfW, islandHalfW)
    let type = spec.type
    if (type !== 'heart' && Math.random() < 0.25) {
      type = type === 'rocket' ? 'boost' : 'rocket'
    }
    const wx = island.bowlCenter + clampedOffsetX
    const terrainY = getTerrainTopY(island, wx)
    const wy = terrainY + spec.offsetY + Math.random() * 14
    const item = createItem(type, wx, wy)
    this.renderer.add(item.mesh)
    this.items.push(item)
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

  // ── Shared jump/launch helpers ────────────────────────────────────────────
  // Boost-aware angle/speed math common to every jump type.  Given the base
  // launch angle and the horizontal speed to convert, it applies the Boost item's
  // angle floor, speed recompute and forward multiplier IDENTICALLY everywhere.
  // Each caller still adds its own vertical kick, floors and bonuses afterward, so
  // the distinct feel of island / edge-fall / hill-crest jumps is preserved.
  _computeBoostedLaunch(baseAngle, horizontalSpeed) {
    const baseLaunchSpeed = Math.min(LAUNCH_SPEED, horizontalSpeed / Math.max(Math.cos(baseAngle), 0.35))
    const hasBoost = !!this.activeBoost
    const angle = hasBoost ? Math.max(baseAngle, BOOST_MIN_ANGLE) : baseAngle
    const launchSpeed = hasBoost
      ? Math.min(LAUNCH_SPEED, horizontalSpeed / Math.max(Math.cos(angle), 0.35))
      : baseLaunchSpeed
    const vx = Math.cos(angle) * launchSpeed * (hasBoost ? BOOST_VX_MULT : 1)
    const sinComponent = Math.sin(angle) * launchSpeed
    const boostVyBonus = hasBoost ? BOOST_VY_BONUS : 0
    return { hasBoost, vx, sinComponent, boostVyBonus }
  }

  // Push a freshly computed launch velocity into both the JS and Planck state —
  // identical in every jump path.  Callers handle their own follow-up afterward
  // (motion sync for island/crest, grace-timer reset for edge-fall).
  _commitLaunchVelocity(vx, vy) {
    this.velocity.set(vx, vy)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
  }

  // Identical visual + audio feedback for a Boost-enhanced jump.
  _boostLaunchFeedback() {
    this.lastRating = 'BOOST!'
    this._setArmadilloColor(0xffd600)
    this._spawnParticles(this.armadillo.position.x, this.armadillo.position.y, 0xffd600, 20, 320)
    this._playTone(1040, 0.10, 0.08, 'triangle')
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
    // Boost stays active for its full duration — NOT consumed on use.
    const { hasBoost, vx: launchVx, sinComponent, boostVyBonus } =
      this._computeBoostedLaunch(launchAngle, horizontalSpeed)
    // Always exit moving rightward — a corner snap can produce zero or negative vx
    const minVx = Math.max(horizontalSpeed * 0.4, 120)
    const vx = Math.max(launchVx, minVx)
    // Ensure vy is always upward — corner geometry can produce a downward normal
    const vyRaw = sinComponent + (BOOST_RELEASE_VERTICAL_KICK + edgeVerticalBonus) * inputStrength + boostVyBonus
    const vy = Math.max(vyRaw, 200)

    // sync velocity to Planck body (prevents using stale landing velocity)
    this._commitLaunchVelocity(vx, vy)
    this._syncMotionToArmadillo()

    this.currentIsland = null
    const isEdgeJump = edgeRatio > 0.5
    const strongBoost = inputStrength >= 0.45
    if (hasBoost) {
      this._boostLaunchFeedback()
    } else {
      this.lastRating = isEdgeJump ? 'EDGE!' : strongBoost ? 'BOOST' : hadBoostInput ? 'HOP' : 'JUMP'
      this._setArmadilloColor(isEdgeJump ? 0xffffff : strongBoost ? 0xfff176 : hadBoostInput ? 0xffb74d : 0xff7043)
      this._spawnParticles(
        this.armadillo.position.x, this.armadillo.position.y,
        isEdgeJump ? 0xffffff : strongBoost ? 0xffd54f : hadBoostInput ? 0xffb74d : 0xff7043,
        isEdgeJump ? 20 : strongBoost ? 14 : hadBoostInput ? 8 : 6,
        isEdgeJump ? 320 : strongBoost ? 260 : hadBoostInput ? 150 : 120,
      )
      this._playTone(isEdgeJump ? 820 : strongBoost ? 680 : hadBoostInput ? 430 : 360, 0.08, 0.05, 'triangle')
    }
  }

  // Called when player releases input within the grace window after falling off an edge.
  // Already in FALLING state — override velocity upward using current speedRatio.
  _launchFromFallingEdge(source) {
    const launchAngle = EXIT_LAUNCH_MIN_ANGLE  // conservative upward angle
    const speedBonus = source === 'keyboard' || source === 'pointer' ? BOOST_RELEASE_SPEED_KICK : 0
    this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + speedBonus)
    const horizontalSpeed = Math.max(this.speedRatio * MAX_SPEED, 200)  // ensure minimum forward speed
    // Boost stays active — NOT consumed on use.  No minVx clamp here (edge-fall
    // keeps its softer exit), and the full vertical kick always applies.
    const { hasBoost, vx, sinComponent, boostVyBonus } =
      this._computeBoostedLaunch(launchAngle, horizontalSpeed)
    const vy = Math.abs(sinComponent) + BOOST_RELEASE_VERTICAL_KICK + boostVyBonus
    this._commitLaunchVelocity(vx, vy)
    this._edgeFallGraceTimer = 0
    if (hasBoost) {
      this._boostLaunchFeedback()
    } else {
      this.lastRating = 'EDGE!'
      this._setArmadilloColor(0xffffff)
      this._spawnParticles(this.armadillo.position.x, this.armadillo.position.y, 0xffffff, 16, 280)
      this._playTone(820, 0.08, 0.05, 'triangle')
    }
  }

  // Fired when the armadillo crosses the peak of a hill while rolling.
  // Bonus scales with speedRatio; boostHeld gives extra kick.
  _launchFromHillCrest() {
    const island = this.currentIsland
    if (!island) return
    if (!this.sm.transition(State.FALLING)) return

    const crestBonus    = this.boostHeld ? 1.0 : 0.55        // held = full bonus, free = half
    const speedBonus    = this.boostHeld ? BOOST_RELEASE_SPEED_KICK * 0.7 : 0
    this.speedRatio     = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + speedBonus)

    // Launch angle: crest always sends the ball upward, biased slightly forward
    const launchAngle   = THREE.MathUtils.degToRad(52)        // steeper than edge jump — hill pops up
    const horizontalSpeed = this.speedRatio * MAX_SPEED
    // Crest keeps its own speed-scaled vertical kick on top of the shared math.
    const crestKick     = BOOST_RELEASE_VERTICAL_KICK * 0.55 * crestBonus * this.speedRatio
    const { hasBoost, vx, sinComponent, boostVyBonus } =
      this._computeBoostedLaunch(launchAngle, horizontalSpeed)
    const vy            = Math.abs(sinComponent) + crestKick + boostVyBonus

    this._commitLaunchVelocity(vx, vy)
    this._syncMotionToArmadillo()
    this.currentIsland  = null

    const isHeld        = this.boostHeld
    if (hasBoost) {
      this._boostLaunchFeedback()
    } else {
      this.lastRating     = isHeld ? 'CREST!' : 'CREST'
      this._setArmadilloColor(isHeld ? 0xfff176 : 0xaed581)
      this._spawnParticles(
        this.armadillo.position.x, this.armadillo.position.y,
        isHeld ? 0xfff176 : 0xdce775,
        isHeld ? 16 : 10,
        isHeld ? 260 : 180,
      )
    }
    this._playTone(isHeld ? 700 : 560, 0.07, 0.05, 'triangle')
  }

  _getExitLaunchAngle(island) {
    if (!island) return THREE.MathUtils.degToRad(45)

    const ax = this.armadillo.position.x

    // Near the right edge the terrain surface curves sharply downward or turns
    // vertical (the side wall).  The slope sampler will return a near-vertical
    // or negative angle there, which would send the ball sideways or downward.
    // Override to a safe fixed angle for any position within two ball-widths of
    // the right edge so the jump always escapes upward.
    const distFromRight = island.bounds.right - ax
    if (distFromRight < ARMADILLO_SIZE * 2) {
      return THREE.MathUtils.degToRad(52)   // safe steep-ish upward angle
    }

    // Normal case: base 48°, terrain slope nudges it slightly.
    // Only allow the slope to push the angle upward (positive slopeLift), never
    // downward — a descending slope should not reduce the launch angle below 48°.
    const slopeAngle = getTerrainSlopeAngle(island, ax)
    const slopeLift = THREE.MathUtils.clamp(slopeAngle, 0, 0.3) * 0.4
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
      this._setArmadilloSprite('jump')
      if (this._respawnWaiting) {
        // Freeze at respawn position until player presses Space / Click
        const rp = this._respawnPos
        this.armadillo.position.set(rp.x, rp.y, 0)
        this.physics.setArmadilloPos(rp.x, rp.y)
        this.physics.setArmadilloVelocity(0, 0)
        this.velocity.set(0, 0)
        this._syncMotionToArmadillo()
      } else {
        this._edgeFallGraceTimer = Math.max(0, this._edgeFallGraceTimer - simDt)
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
      }
    } else if (this.sm.is(State.ROLLING)) {
      this._setArmadilloSprite(Math.floor(this.time * 10) % 2 === 0 ? 'walk1' : 'walk2')
      this._updateRolling(simDt)
    } else if (this.sm.is(State.SLINGING)) {
      this._setArmadilloSprite('idle')
      this._updateSlinging()
    }
    this._updateSplashGameOver(simDt)
    this._updateParticles(simDt)
    this._updateItems(simDt)
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

      // Cull islands/items that the camera has long passed so the active arrays
      // (and their physics bodies / meshes) stay bounded over a long run.
      this._cullTimer -= dt
      if (this._cullTimer <= 0) {
        this._cullTimer = 0.5
        this._cullBehind()
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

    // Rocket drive — bypass Planck entirely for the thrust duration.
    // Gravity is ignored; velocity is held constant at ROCKET_ANGLE (25°) upward-forward.
    // Moon/sea boundary checks still run after this block.
    if (this.activeRocket) {
      this.activeRocket.timeLeft -= dt
      const done = this.activeRocket.timeLeft <= 0
      if (done) this.activeRocket = null

      this.armadillo.position.x += ROCKET_VX * dt
      this.armadillo.position.y += ROCKET_VY * dt
      this.velocity.set(ROCKET_VX, ROCKET_VY)
      this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
      this.physics.setArmadilloVelocity(ROCKET_VX, ROCKET_VY)
      this.flightPeakY = Math.max(this.flightPeakY, this.armadillo.position.y)

      // Flame trail at back of armadillo
      this._spawnParticles(
        this.armadillo.position.x - ROCKET_VX * dt * 0.6,
        this.armadillo.position.y - ROCKET_VY * dt * 0.6,
        0xff6d00, 4, 140,
      )

      if (done) {
        // Hand off to normal physics: preserve the rocket's exit velocity so
        // the armadillo coasts upward-forward naturally under gravity.
        this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + 0.35)
        this.physics.setArmadilloVelocity(ROCKET_VX, ROCKET_VY)
        // Begin coasting and drop any leftover launch grace so terrain
        // collision/landing detection is fully active again on the way down.
        this._rocketCoasting = true
        this._spawnGraceTimer = 0
      }

      // Always check moon/sea even during rocket (player could collect one near the boundary)
      if (this.armadillo.position.y >= MOON_TARGET_Y) { this._reachMoon(); return }
      if (this.armadillo.position.y < SEA_LEVEL_Y)    { this._beginSplashGameOver(this.armadillo.position.x); return }
      return
    }

    // Destruction pass — runs entirely in JS, never touches Planck this frame.
    // Finds all terrain the ball path overlaps, damages all of them, then manually
    // advances the ball past the last crater.  Planck is bypassed completely so
    // it can never apply restitution against freshly-rebuilt fixtures.
    //
    // Exception: while coasting down from a rocket (descending, vy < 0), skip
    // destruction so the rocket's high horizontal exit speed can't tunnel the
    // ball through terrain tops — normal Planck collision + landing must win on
    // the way down.  Ascending after a rocket still allows upward punch-through.
    const suppressDestroy = this._rocketCoasting && this.velocity.y < 0
    if (!suppressDestroy && this._tryDestroyTerrain(prevX, prevY, incomingVelocity, dt)) return

    const baseGravity = this._getGravityPx()

    // Grace frames: Planck step is skipped entirely so it cannot issue any
    // push-out or bounce impulse against freshly-rebuilt or overlapping fixtures.
    // We manually integrate position under gravity instead.
    // NOTE: _tryDestroyTerrain is still called here so chained multi-island
    // destruction (e.g., destroying island A then B in consecutive frames) works.
    if (this._spawnGraceTimer > 0) {
      this._spawnGraceTimer--
      // Try chained destruction even during grace window (but not while coasting
      // down from a rocket — landing must win on descent).
      if (!suppressDestroy && this._tryDestroyTerrain(prevX, prevY, incomingVelocity, dt)) return
      this.velocity.y -= baseGravity * dt
      this.armadillo.position.x += this.velocity.x * dt
      this.armadillo.position.y += this.velocity.y * dt
      // Keep Planck body in sync (moveArmadilloPos preserves velocity, unlike setArmadilloPos).
      this.physics.moveArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
      this.physics.setArmadilloVelocity(this.velocity.x, this.velocity.y)
      // Still check for moon/sea boundary
      if (this.armadillo.position.y >= MOON_TARGET_Y) { this._reachMoon(); return }
      if (this.armadillo.position.y < SEA_LEVEL_Y)    { this._beginSplashGameOver(this.armadillo.position.x); return }

      // Restore terrain fixtures one frame before grace fully expires so the ball
      // has one more manual-integration step to travel away from the surface.
      // This means the *next* grace frame will have correct geometry in Planck
      // but no physics.step() yet — the frame after that is the first real step.
      if (this._spawnGraceTimer === 1 && this._pendingTerrainRebuild.size > 0) {
        for (const island of this._pendingTerrainRebuild) {
          if (island.destroyed) continue   // fully cratered — never rebuild collision
          this.physics.addTerrain(island)
        }
        this._pendingTerrainRebuild.clear()
        this.physics.flushContacts()
      }
      return
    }

    // Open-air fall acceleration — cloud and space layers only.
    this.physics.setGravity(baseGravity)
    this._applyOpenAirFallAccel(dt, baseGravity)
    this.physics.step(dt)
    const state = this.physics.getArmadilloState()

    this.armadillo.position.x = state.x
    this.armadillo.position.y = state.y
    this.velocity.set(state.vx, state.vy)

    const prevBottom = prevY - ARMADILLO_SIZE / 2
    const nextBottom = state.y - ARMADILLO_SIZE / 2

    {
      // ① Planck grounding check
      if (this.physics.isGrounded() && this.velocity.y <= 180) {
        const groundedIsland = this._findGroundedIsland()
        if (groundedIsland) {
          this._landOnIsland(groundedIsland)
          return
        }
      }

      // ② downward landing — proximity snap (only when boost is held)
      // Without boost, Planck physics handles contact naturally (no forced snap).
      if (this.boostHeld && this.velocity.y <= 30) {
        const landedIsland = this._findLandingIsland(prevBottom, nextBottom)
        if (landedIsland) {
          this._landOnIsland(landedIsland)
          return
        }
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
    // Fresh result screen — never inherit a previous run's registration state.
    this.pendingScoreEntry = null
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
      // Only land on the top surface — reject anything past the right edge.
      // No extra buffer beyond rampLeft: the visual now extends to that boundary.
      if (x < leftEdge || x > bounds.right) continue
      if (x >= bounds.left && isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      // landed if bottom is near or below topY (tightened window: 16px — reduces snap feel)
      if (bottom <= topY + 10 && bottom >= topY - 16) return island
      // also catch the cross-through case
      if (prevBottom >= topY - 4 && nextBottom <= topY + 4) return island
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
      // Only the top surface is valid ground — reject anything past the right edge.
      // Use rampLeft so rolling on the ramp extension is valid ground.
      if (x < (bounds.rampLeft ?? bounds.left) || x > bounds.right) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      const dist = Math.abs(bottom - topY)
      if (dist < bestDist && dist <= 24) {
        best = island
        bestDist = dist
      }
    }

    return best
  }

  // Applies an extra downward velocity impulse during open-air drops in the cloud
  // and space layers.  Guards:
  //   1. heightRatio must be above FALL_ACCEL_CLOUD_START (cloud layer entry)
  //   2. armadillo must be moving downward (vy < 0)
  //   3. no undamaged terrain within FALL_ACCEL_PROBE_PX directly below
  // The impulse magnitude ramps from 0 to FALL_ACCEL_MAX_MULT × baseGravity over
  // FALL_ACCEL_RAMP_PX of fall distance (measured from the flight peak).
  _applyOpenAirFallAccel(dt, baseGravity) {
    const hr = this._getHeightRatio()
    // Only active in cloud/space altitude band
    if (hr < FALL_ACCEL_CLOUD_START) return
    // Only while falling
    if (this.velocity.y >= 0) return
    // Suppress when terrain is nearby below — normal jump / landing approach
    if (this._terrainBelowWithin(FALL_ACCEL_PROBE_PX)) return

    // Ramp based on how far we have fallen from the peak of this flight arc
    const fallDist = Math.max(0, this.flightPeakY - this.armadillo.position.y)
    const ramp = Math.min(1, fallDist / FALL_ACCEL_RAMP_PX)
    // Also blend with altitude so the effect starts gently at cloud entry
    const altBlend = Math.min(1, (hr - FALL_ACCEL_CLOUD_START) / 0.15)
    const extraAccel = baseGravity * FALL_ACCEL_MAX_MULT * ramp * altBlend

    // Apply as a velocity impulse (same sign convention: downward = negative vy)
    const newVy = this.velocity.y - extraAccel * dt
    this.velocity.y = newVy
    this.physics.setArmadilloVelocity(this.velocity.x, newVy)
  }

  // Returns true if there is undamaged terrain surface within probeDepth px below
  // the armadillo's current position.  Used to suppress open-air fall acceleration
  // when the armadillo is approaching or sitting above an island.
  _terrainBelowWithin(probeDepth) {
    const x      = this.armadillo.position.x
    const bottom = this.armadillo.position.y - ARMADILLO_SIZE / 2
    for (const island of this.islands) {
      if (island.destroyed) continue
      const b = island.bounds
      // Horizontal bounds check (generous — include the armadillo radius)
      if (x < b.left - ARMADILLO_SIZE || x > b.right + ARMADILLO_SIZE) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      // terrain surface is below the armadillo and within probe window
      if (topY < bottom && bottom - topY <= probeDepth) return true
    }
    return false
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

        // ── Landing-vs-smash discrimination ───────────────────────────────
        // The key separator for "do not crater on landing": if the ball's
        // underside started this frame at or above the top surface, it is
        // descending ONTO the surface — i.e. landing — and must never break it.
        // Only when the ball started already inside/below the surface (entering
        // the terrain body from the side) is it a genuine smash-through.
        const prevLower = prevY - ARMADILLO_SIZE / 2
        if (incomingVelocity.y < 0 && prevLower >= topY - 2) continue

        // ── Destruction motion gate ────────────────────────────────────────
        // Destruction only happens while riding/smashing forward through
        // terrain, or punching upward through it from below.  Plain falls and
        // steep descents (|vy| ≥ |vx|) are excluded so they land normally.
        const vMagX = Math.abs(incomingVelocity.x)
        const vMagY = Math.abs(incomingVelocity.y)
        const forwardSmash = incomingVelocity.x > 0
          && vMagX > vMagY
          && vMagX >= UNDER_BREAK_SPEED * 0.45
        const upwardPunch = incomingVelocity.y > 0 && vMagY >= UNDER_BREAK_SPEED * 0.45
        if (!forwardSmash && !upwardPunch) continue

        const key = `${this.islands.indexOf(island)}:${Math.round(x / 10)}`
        if (hitKeys.has(key)) continue
        hitKeys.add(key)
        hits.push({ island, x, y })
      }
    }

    if (hits.length === 0) return false

    // Damage every hit zone and immediately remove the terrain's Planck body so
    // there is no fixture at all for Planck to push against during or after this
    // destruction frame.  The body is queued for deferred rebuild — it will be
    // re-added after the grace window ends (see _updateFlight grace block).
    const touched = new Set()
    for (const hit of hits) {
      const impactSpeed = speed
      const damage = hit.island.softBreak || impactSpeed < UNDER_BREAK_SPEED
        ? this._getSoftTerrainDamageProfile(impactSpeed)
        : this._getTerrainDamageProfile(impactSpeed)
      damageTerrain(hit.island, hit.x, damage.radius, damage.depth)
      touched.add(hit.island)
      const { soil, debris } = this._terrainParticleColors(hit.island)
      this.particleSystem.spawnDirt(hit.x, hit.y, 28 + Math.floor(damage.force * 20), soil, debris)
    }

    // Remove physics bodies immediately — no fixture = no push-out possible.
    // Queue them for rebuild once the grace window expires.
    for (const island of touched) {
      this.physics.removeTerrain(island)
      this._pendingTerrainRebuild.add(island)
      // Safety: if rolling state somehow still references a destroyed island, clear it.
      if (this.currentIsland === island) this.currentIsland = null
    }

    // Fully cratered islands are dropped entirely: no physics body is rebuilt,
    // the mesh (soil/grass/ridge + left-ramp correction) is hidden, and the
    // island is flagged destroyed so every collision/grounding/landing probe
    // skips it.  This removes any leftover collision or correction data that
    // would otherwise bounce the ball off invisible terrain.
    for (const island of touched) {
      if (isTerrainFullyDestroyed(island)) {
        island.destroyed = true
        if (island.mesh) island.mesh.visible = false
        this._pendingTerrainRebuild.delete(island)
      }
    }

    // Determine if this is an upward punch-through (ball moving up into terrain
    // from below) vs a normal forward/downward hit.  Upward hits need more
    // clearance because the ball may still be geometrically inside the island
    // body when fixtures are restored.
    const isUpwardHit = incomingVelocity.y > 0

    // Advance ball manually along the incoming direction by one full dt,
    // then lift above any terrain it still overlaps.
    let exitX = prevX + incomingVelocity.x * dt
    let exitY = prevY + (incomingVelocity.y - gravity * dt * 0.5) * dt

    // Ensure the ball is fully clear of all hit terrain surfaces.
    // For upward hits use a larger clearance margin so gravity during the
    // grace window cannot pull the ball back into contact before fixtures restore.
    const clearance = isUpwardHit ? ARMADILLO_SIZE + 8 : 4
    for (const island of touched) {
      if (isTerrainDamagedAt(island, exitX, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, exitX)
      if (exitY - ARMADILLO_SIZE / 2 < topY) {
        exitY = topY + ARMADILLO_SIZE / 2 + clearance
      }
    }

    // Preserve full incoming speed plus a small bonus.
    // For upward hits, preserve vy exactly — clamping to 0 would kill upward momentum.
    // For downward/horizontal hits, clamp vy to >= 0 so the ball doesn't exit
    // pointing back into the terrain surface.
    const exitSpeed = speed * 1.05 + 40
    const exitVx = incomingVelocity.x >= 0
      ? Math.max(incomingVelocity.x, exitSpeed * 0.7)
      : incomingVelocity.x
    const exitVy = isUpwardHit ? incomingVelocity.y : Math.max(incomingVelocity.y, 0)
    this.speedRatio = Math.min(this.speedRatio + 0.15, BOOST_SPEED_LIMIT)

    this.armadillo.position.set(exitX, exitY, 0)
    this.velocity.set(exitVx, exitVy)

    // Move Planck body to exit position (no fixture to collide against now).
    // Use a longer grace window for upward hits — the ball needs more frames to
    // travel clear of the terrain before fixtures are restored and physics.step()
    // can issue a contact impulse.
    this.physics.moveArmadilloPos(exitX, exitY)
    this.physics.setArmadilloVelocity(exitVx, exitVy)
    this.physics.flushContacts()
    const graceFrames = isUpwardHit ? 7 : 5
    this._spawnGraceTimer = Math.max(this._spawnGraceTimer, graceFrames)

    this._setArmadilloColor(0xffd54f)
    this._triggerDestructionImpact(0.35, this._terrainParticleColors(hits[0].island).soil, exitX, exitY)
    return true
  }

  // Particle colors for a terrain's destruction debris, taken straight from the
  // island's own soil/grass materials so cloud (white) and meteor (grey) terrain
  // don't shed brown dirt.  Falls back to earthy brown if a material is missing.
  _terrainParticleColors(island) {
    const soil = island?.visuals?.soil?.material?.color?.getHex?.() ?? 0x6d4c41
    const debris = island?.visuals?.grass?.material?.color?.getHex?.() ?? 0xbcaaa4
    return { soil, debris }
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
        this._triggerDestructionImpact(0.30 + damage.force * 0.20, 0x6d4c41, x, y)
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
    // Landed — the post-rocket coast (if any) is over; resume normal terrain
    // destruction behaviour.  Set before the cloud delegation so it clears for
    // both normal and cloud landings.
    this._rocketCoasting = false
    if (island.biome === 'cloud') {
      this._springFromCloudIsland(island)
      return
    }

    this.currentIsland = island
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
    const landColors = this._terrainParticleColors(island)
    this.particleSystem.spawnDirt(
      this.armadillo.position.x,
      this.armadillo.position.y - ARMADILLO_SIZE / 2,
      dirtCount,
      landColors.soil,
      landColors.debris,
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
    this._reconstructBoostHoldOnLanding()
  }

  // Atomically rebuild the boost-hold state at the instant of landing: if a
  // physical input is still down, keep/start boost (with its source); otherwise
  // clear all hold state.  Reads pointerIsDown/spaceIsDown directly so event
  // ordering can't leave a stale hold.  Shared by normal and cloud landings.
  _reconstructBoostHoldOnLanding() {
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
    this._reconstructBoostHoldOnLanding()
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
      this.speedRatio = THREE.MathUtils.clamp(
        this.speedRatio + (BOOST_ACCEL_PER_SEC - ROLLING_FRICTION_PER_SEC) * dt,
        0,
        BOOST_SPEED_LIMIT,
      )
      this.lastRating = 'HOLD'
      this._setArmadilloColor(0xffb74d)
    } else {
      // No input: the armadillo coasts under gravity + rolling friction only —
      // it is never pushed forward.  The slope force is the real gravity vector
      // projected along the surface, so behaviour matches true physics:
      //   • Uphill (slope>0): decelerates; once it stops it rolls back down.
      //   • Downhill (slope<0): accelerates naturally with the grade.
      //   • Flat: friction alone bleeds speed to rest.
      // Using actual gravity (not a fixed constant) means low-gravity space
      // slopes feel correctly floatier instead of dragging the ball along.
      const slope = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
      const gravityRatio = this._getGravityPx() / GRAVITY   // 1.0 at ground, <1 in space
      const SLOPE_GRAVITY_SCALE = 1.4
      const slopeEffect = -Math.sin(slope) * SLOPE_GRAVITY_SCALE * gravityRatio
      // Friction opposes motion direction — zero when stopped (no forced creep)
      const frictionSign = this.speedRatio > 0 ? -1 : this.speedRatio < 0 ? 1 : 0
      const friction = frictionSign * ROLLING_FRICTION_PER_SEC * gravityRatio
      const newSpeed = this.speedRatio + (slopeEffect + friction) * dt
      // Allow backward rolling up to 50% of max forward speed
      this.speedRatio = THREE.MathUtils.clamp(newSpeed, -BOOST_SPEED_LIMIT * 0.5, BOOST_SPEED_LIMIT)
      // Snap micro-oscillations to rest so it settles instead of jittering
      if (Math.abs(this.speedRatio) < 0.01 && Math.abs(slope) < 0.04) this.speedRatio = 0
    }

    // Sample slope before moving so we can detect crest crossing.
    const slopeBefore = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)

    const moveX = this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.x += moveX
    if (isTerrainDamagedAt(this.currentIsland, this.armadillo.position.x, ARMADILLO_SIZE / 2)) {
      this._fallOff()
      return
    }
    // Left-edge exit when rolling backward past the island's left boundary
    const leftEdge = bounds.rampLeft ?? bounds.left
    if (this.speedRatio < 0 && this.armadillo.position.x <= leftEdge) {
      this._fallOff(false)
      return
    }
    // snap y to terrain top — follows slope naturally
    this.armadillo.position.y = getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2

    // ── Hill-crest launch ──────────────────────────────────────────────────
    // Detect when the armadillo crosses the peak of a hill (slope flips from
    // positive to negative) and fire a bonus launch.  Gated to hill/slope
    // shapes only, minimum speed, and must still be within island bounds.
    const slopeAfter = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    const crossedCrest = slopeBefore > 0.08 && slopeAfter < -0.08   // ~5° threshold each side
    const isHillShape  = this.currentIsland.shapeType === 'hill' || this.currentIsland.shapeType === 'slope'
    const pastCenter   = this.armadillo.position.x > this.currentIsland.bowlCenter - 20
    if (crossedCrest && isHillShape && pastCenter && this.speedRatio >= 0.55) {
      this._launchFromHillCrest()
      return
    }

    // ground spin: driven by speedRatio — negative speedRatio reverses spin direction
    const contactSpin = this.speedRatio * MAX_SPEED / (ARMADILLO_SIZE / 2)  // rad/s (negative = backward)
    const spinTarget = this.boostHeld
      ? Math.max(contactSpin, 10 + this.speedRatio * 18)
      : contactSpin
    this.spinAngleVel = THREE.MathUtils.lerp(this.spinAngleVel, spinTarget, Math.min(1, dt * 14))
    this.armadillo.rotation.z -= this.spinAngleVel * dt

    this._updateStallState(dt)

    // Rolling dust — throttled, handles both forward and backward rolling
    this._dustTimer -= dt
    const absSpeed = Math.abs(this.speedRatio)
    if (this._dustTimer <= 0 && absSpeed >= 0.28) {
      const interval = THREE.MathUtils.lerp(0.10, 0.03, absSpeed / BOOST_SPEED_LIMIT)
      this._dustTimer = interval
      const footX = this.armadillo.position.x - moveX * 0.5  // behind current position
      const footY = this.armadillo.position.y - ARMADILLO_SIZE / 2
      const dustCount = this.boostHeld ? 3 : 2
      // Particles drift opposite to direction of travel
      const dustBias = this.speedRatio >= 0 ? Math.PI : 0
      this.particleSystem.spawn(footX, footY, 0x8d7355, dustCount, 55, {
        spreadAngle: Math.PI * 0.5,
        biasAngle: dustBias,
        sizeMin: 3,
        sizeMax: 8,
        lifeMin: 0.15,
        lifeMax: 0.35,
        gravityScale: 0.08,
      })
    }

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      // Push armadillo clearly past the right wall and slightly upward so it
      // escapes the corner geometry without sliding down the vertical wall face.
      this.armadillo.position.x = bounds.right + ARMADILLO_SIZE * 2
      this.armadillo.position.y += ARMADILLO_SIZE
      this._fallOff(true)
    }
  }


  _fallOff(fromRightEdge = false) {
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
    // Right-edge exit: small upward kick to escape the corner wall geometry
    const vy = fromRightEdge ? 120 : 0
    this.velocity.set(vx, vy)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    // Discard stale wall contact events so Planck doesn't apply a push-out impulse
    if (fromRightEdge) this.physics.clearContacts()
    this._syncMotionToArmadillo()
    // grace window: if input is released within 120ms after falling off edge, still jump
    this._edgeFallGraceTimer = 0.12
    this.currentIsland = null
  }

  _updateStallState(dt) {
    if (this.speedRatio <= STALL_SPEED_RATIO) {
      this.stallTime += dt
      // Show danger warning but do NOT trigger game over for low speed alone.
      // Game over only happens from lives running out (sea fall/bounce) or moon.
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

  // Like _triggerImpact but without slowmo — used for terrain destruction so the
  // ball never feels like it hit a wall.  Camera shake and particles still fire.
  _triggerDestructionImpact(strength, color, x, y) {
    this.trauma = Math.min(1, this.trauma + strength)
    this._spawnParticles(x, y, color)
    this._playTone(90 + strength * 90, 0.08, 0.06 + strength * 0.05, 'sawtooth')
  }

  _spawnParticles(x, y, color, maxCount = 12, baseSpeed = 120) {
    this.particleSystem.spawnBurst(x, y, color, maxCount, baseSpeed)
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
    // ── 1. Find nearest landable island ──────────────────────────────────────
    let targetIsland = null
    let bestScore = Infinity
    for (const island of this.islands) {
      if (island.destroyed) continue
      if (island.bowlCenter < x - 400) continue   // too far behind
      if (island.bowlCenter > x + 4000) continue  // too far ahead
      const dist = Math.abs(island.bowlCenter - x)
      const score = dist + Math.max(0, island.bounds.top - x) * 0.1
      if (score < bestScore) {
        bestScore = score
        targetIsland = island
      }
    }

    // ── 2. Find a safe spawn x — skip damage zones and island edges ──────────
    // Start at 15% from left and scan right until we find an undamaged spot
    // that is at least ARMADILLO_SIZE away from either edge.
    let landX = x  // fallback: stay near sea splash position
    if (targetIsland) {
      const iw    = targetIsland.bounds.right - targetIsland.bounds.left
      const edgePad = ARMADILLO_SIZE * 1.5
      let candidate = targetIsland.bounds.left + iw * 0.15
      // Clamp candidate inside safe edge margins
      candidate = THREE.MathUtils.clamp(
        candidate,
        targetIsland.bounds.left  + edgePad,
        targetIsland.bounds.right - edgePad,
      )
      // Walk right until we're clear of any damage zone
      const step = ARMADILLO_SIZE
      const maxX = targetIsland.bounds.right - edgePad
      while (candidate <= maxX && isTerrainDamagedAt(targetIsland, candidate, ARMADILLO_SIZE / 2)) {
        candidate += step
      }
      // If we walked off the safe zone, fall back to island center
      if (candidate > maxX) candidate = targetIsland.bowlCenter
      landX = candidate
    }

    // ── 3. Spawn clearly above terrain — extra clearance prevents Planck ─────
    //      from resolving penetration as a bounce impulse on the first step.
    const terrainTop = targetIsland
      ? getTerrainTopY(targetIsland, landX)
      : SEA_LEVEL_Y
    const landY = terrainTop + ARMADILLO_SIZE / 2 + 120   // 120 px gap — spawn clearly above terrain

    // ── 4. Modest speed bonus on rescue ───────────────────────────────────────
    this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + 0.35)

    // ── 5. Reset all physics state and place armadillo above terrain ──────────
    //      Armadillo hovers frozen at this position until the player presses
    //      Space / Click to drop straight down.
    this._cancelBoostHold()
    this._rocketCoasting = false   // rescue resets any leftover post-rocket coast
    this.spinAngleVel = Math.min(this.spinAngleVel, 12)  // bleed extreme spin

    this.armadillo.visible = true
    this.armadillo.position.set(landX, landY, 0)
    this.velocity.set(0, 0)

    this.physics.setArmadilloPos(landX, landY)
    this.physics.setArmadilloVelocity(0, 0)
    this.physics.clearContacts()
    // _spawnGraceTimer will be set to 3 by _activateRespawn when the player
    // inputs to drop — no need to set it here.
    this._spawnGraceTimer = 0

    // Mark as waiting for player input before falling
    this._respawnWaiting = true
    this._respawnPos = new THREE.Vector2(landX, landY)

    this.flightPeakY = landY
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

  _updateItems(dt) {
    updateItems(this.items, dt, this.time)

    // Tick boost timer
    if (this.activeBoost) {
      this.activeBoost.timeLeft -= dt
      if (this.activeBoost.timeLeft <= 0) {
        this.activeBoost = null
      } else if (this.sm.is(State.ROLLING)) {
        // Passive speed acceleration while rolling with boost active —
        // the armadillo visibly picks up speed, making the next jump stronger.
        this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + BOOST_PASSIVE_SPEED * dt)
      }
    }
    // Rocket timer is ticked inside _updateFlight so it can drive velocity there.
    // Here we just decrement if the player somehow isn't in flight (safety fallback).
    if (this.activeRocket && !this.sm.is(State.FLYING) && !this.sm.is(State.FALLING)) {
      this.activeRocket.timeLeft -= dt
      if (this.activeRocket.timeLeft <= 0) this.activeRocket = null
    }

    // Collection check — only during active flight/rolling, not while slinging or game over
    const canCollect = this.sm.is(State.FLYING) || this.sm.is(State.FALLING) || this.sm.is(State.ROLLING)
    if (!canCollect) return

    const ax = this.armadillo.position.x
    const ay = this.armadillo.position.y
    const hit = checkItemCollection(this.items, ax, ay)
    if (!hit) return

    markCollected(hit)
    this._applyItemEffect(hit)
  }

  _applyItemEffect(item) {
    if (item.type === 'rocket') {
      // From ROLLING: ROLLING→FALLING is the only valid exit from rolling state.
      // _updateFlight handles both FLYING and FALLING, so FALLING is correct here.
      if (this.sm.is(State.ROLLING)) {
        this.currentIsland = null
        if (!this.sm.transition(State.FALLING)) return
      }
      // Already FLYING or FALLING — no transition needed, just override velocity.
      this.activeRocket = { timeLeft: ITEM_ROCKET_DURATION }
      this._rocketCoasting = false   // thrusting now, not coasting (set true again at handoff)
      this.velocity.set(ROCKET_VX, ROCKET_VY)
      this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
      this.physics.setArmadilloVelocity(ROCKET_VX, ROCKET_VY)
      this.physics.clearContacts()
      this._spawnGraceTimer = 2  // skip landing detection for 2 frames after launch
      this._syncMotionToArmadillo()
      this.lastRating = 'ROCKET!'
      this._setArmadilloColor(0xff6d00)
      this.particleSystem.spawnCollectRocket(item.x, item.y)
      this._playTone(280, 0.18, 0.10, 'sawtooth')
      setTimeout(() => this._playTone(420, 0.14, 0.10, 'sawtooth'), 100)
    } else if (item.type === 'boost') {
      this.speedRatio = Math.min(BOOST_SPEED_LIMIT, this.speedRatio + BOOST_SPEED_BONUS)
      this.activeBoost = { timeLeft: ITEM_BOOST_DURATION }
      this.lastRating = 'BOOST!'
      this._setArmadilloColor(0xffd600)
      this.particleSystem.spawnCollectBoost(item.x, item.y)
      this._playTone(880, 0.12, 0.08, 'sine')
      setTimeout(() => this._playTone(1100, 0.09, 0.07, 'sine'), 80)
    } else if (item.type === 'heart') {
      this.lives = Math.min(3, this.lives + 1)
      this.lastRating = 'HEART!'
      this._setArmadilloColor(0xff1744)
      this.particleSystem.spawnCollectHeart(item.x, item.y)
      this.flashTime = Math.max(this.flashTime, 0.08)
      this._playTone(880, 0.14, 0.09, 'sine')
      setTimeout(() => this._playTone(1100, 0.10, 0.08, 'sine'), 120)
    }
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
    // Score is submitted only when the player explicitly registers via the
    // game-over leaderboard entry form. Reset pendingScoreEntry so the UI
    // starts fresh for this run.
    this.pendingScoreEntry = null
    this._respawnWaiting = false
    this._respawnPos = null

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
    return submitScore(name, score, heightM, distanceM, moonClear)
      .then(entry => { this.pendingScoreEntry = entry })
      .catch(() => {})
  }

  // scrollToSelf=false → open scrolled to the top (manual "Leaderboard" view).
  // scrollToSelf=true  → open scrolled to the player's just-registered row.
  async _openLeaderboard(scrollToSelf = false) {
    this.leaderboardEntries = await fetchLeaderboard(100)
    this._lbScrollPending = scrollToSelf
    this.showingLeaderboard = true
  }

  _closeLeaderboard() {
    this.showingLeaderboard = false
    this._lbScrollPending = false
  }

  // Called when user input is received while waiting for respawn after sea bounce.
  // Armadillo drops straight down under gravity from the spawn position.
  _activateRespawn() {
    if (!this._respawnWaiting) return
    this._respawnWaiting = false
    this._respawnPos = null
    // Zero velocity — gravity pulls straight down
    this.velocity.set(0, 0)
    this.physics.setArmadilloVelocity(0, 0)
    this.physics.clearContacts()
    // Grace frames so Planck doesn't apply stale contact impulses
    this._spawnGraceTimer = 3
  }

  // Save score to leaderboard with the given name (called from game-over register button).
  async _saveScoreWithName(rawName) {
    const trimmed = rawName.trim().slice(0, 16)
    this.playerName = (trimmed === '' || trimmed === 'Anonymous') ? '' : trimmed
    savePlayerName(this.playerName)
    // Await submission so pendingScoreEntry (the exact self row) is set before the
    // leaderboard opens and auto-scrolls to it.
    await this._submitRunScore()
    // Open leaderboard after saving — scrolled to the player's new entry.
    this._openLeaderboard(true)
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
    const fallback = { score: 0, heightM: 0, distanceM: 0, name: '' }
    try {
      const raw = JSON.parse(localStorage.getItem('armadillo-rush-best'))
      if (!raw || typeof raw !== 'object') return fallback
      // Normalize older records that may be missing fields (e.g. no name).
      return { ...fallback, ...raw }
    } catch {
      return fallback
    }
  }

  _saveBestRecord() {
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    const score = this._getScore()
    if (score <= this.bestRecord.score) return

    // New best — the nickname for this run isn't entered yet (registration is a
    // separate, optional step), so store an empty name.  _saveScoreWithName fills
    // it in if/when the player registers this run.
    this.bestRecord = { score, heightM, distanceM, name: '' }
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
    this.background.update(heightRatio, this.time, this.camPos.x, this.camPos.y)

    // ── Shadow update ───────────────────────────────────────────────────────
    this._updateArmadilloShadow()

    // update PostFX then render (BackgroundPass → RenderPass → Effects)
    this.postfx.update(this.trauma, heightRatio, dt ?? FIXED_DT)
    this.postfx.render(dt ?? FIXED_DT)
    // Do not re-render the HUD while a name input is focused — destroying and
    // recreating the <input> element every frame loses focus and kills typing.
    const activeEl = document.activeElement
    if (activeEl && activeEl.classList.contains('name-input')) return
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

  // Oval shadow blob beneath the armadillo.
  // Cast only onto valid ground that lies BELOW the character, fading and
  // shrinking with height.  Terrain whose surface is above the armadillo (e.g.
  // after it drops into a gap or falls past an island) never receives a shadow.
  _updateArmadilloShadow() {
    if (!this.armadilloShadow) return
    const ax = this.armadillo.position.x
    const ballBottom = this.armadillo.position.y - ARMADILLO_SIZE / 2

    // Pick the highest undamaged terrain surface that sits below the ball.
    let groundY = null
    let groundIsland = null
    const consider = (island) => {
      if (!island || island.destroyed) return
      const b = island.bounds
      const left = b.rampLeft ?? b.left
      if (ax < left || ax > b.right) return
      if (isTerrainDamagedAt(island, ax, ARMADILLO_SIZE / 2)) return
      const ty = getTerrainTopY(island, ax)
      if (ty > ballBottom + 2) return                    // surface is above the ball — ignore
      if (groundY === null || ty > groundY) { groundY = ty; groundIsland = island }  // nearest ground beneath
    }
    if (this.currentIsland) consider(this.currentIsland)
    if (groundY === null) {
      for (const island of this.islands) consider(island)
    }

    // No valid ground beneath — over open air / fell below terrain → no shadow.
    if (groundY === null) {
      this.armadilloShadow.material.opacity = 0
      return
    }

    // Height-based closeness, eased so the shadow grows/fades smoothly instead of
    // linearly (no sudden pop, no fixed-disc feel).  1 at the surface → 0 far up.
    const gap = Math.max(0, ballBottom - groundY)
    const MAX_GAP = 280  // beyond this height the shadow is gone
    const closeness = THREE.MathUtils.smoothstep(1 - gap / MAX_GAP, 0, 1)

    // Desired footprint half-width (shrinks with height).
    const rx0 = (ARMADILLO_SIZE / 2) * (0.42 + closeness * 0.72)

    // ── Clip the footprint to the terrain span it overlaps ────────────────────
    // Walk outward from the character (only across the footprint) to find the
    // continuous valid surface span — stopping at the island edge or a crater —
    // then keep only the part of the footprint that lands on that span.
    const leftBound = groundIsland.bounds.rampLeft ?? groundIsland.bounds.left
    const rightBound = groundIsland.bounds.right
    const STEP = 4
    let spanL = ax
    let spanR = ax
    while (spanL - STEP >= leftBound && ax - (spanL - STEP) <= rx0 + STEP
      && !isTerrainDamagedAt(groundIsland, spanL - STEP, 0)) spanL -= STEP
    while (spanR + STEP <= rightBound && (spanR + STEP) - ax <= rx0 + STEP
      && !isTerrainDamagedAt(groundIsland, spanR + STEP, 0)) spanR += STEP

    const visL = Math.max(ax - rx0, spanL, leftBound)
    const visR = Math.min(ax + rx0, spanR, rightBound)
    const visW = visR - visL

    // No meaningful overlap with terrain → hide (don't float over sky/gaps).
    if (visW < 5) {
      this.armadilloShadow.material.opacity = 0
      return
    }

    // ── Rebuild the contact patch so its TOP edge rides the terrain surface ────
    // The strip spans [visL, visR]; the bottom edge bulges down into the ground,
    // tapering to zero at the ends so the silhouette is a soft blob.  Because the
    // top edge IS the terrain line, the shadow can never appear above the surface
    // or off the island — only the terrain-overlapping area is ever drawn.
    const cx = (visL + visR) / 2
    const rx = visW / 2
    const thickness = Math.min(rx * 0.9, (ARMADILLO_SIZE / 2) * (0.34 + closeness * 0.22))
    const N = this._shadowSamples
    const pos = this.armadilloShadow.geometry.attributes.position
    for (let i = 0; i < N; i++) {
      const u = N === 1 ? 0 : (i / (N - 1)) * 2 - 1   // -1 … 1 across the span
      const tx = cx + u * rx
      const ty = getTerrainTopY(groundIsland, THREE.MathUtils.clamp(tx, leftBound, rightBound))
      const taper = Math.sqrt(Math.max(0, 1 - u * u))   // 1 at centre → 0 at ends
      pos.setXYZ(i * 2,     tx, ty + 0.5, 0)            // top: on the surface
      pos.setXYZ(i * 2 + 1, tx, ty - thickness * 2 * taper, 0)  // bottom: into the ground
    }
    pos.needsUpdate = true

    // Opacity fades with height and with how little of the footprint lands on
    // terrain, so partial (edge) overlaps look naturally trimmed rather than cut.
    const overlapRatio = THREE.MathUtils.clamp(visW / (rx0 * 2), 0, 1)
    this.armadilloShadow.material.opacity =
      (0.10 + closeness * 0.32) * closeness * overlapRatio * (this.armadillo.visible ? 1 : 0)
  }

  // Build a tiny pixel-art SVG (same grid + outline language as the in-game item
  // meshes) for the HUD effect bars, so they match the collectible icons instead
  // of using emoji.
  _pixelIconSvg(rows, pal, outline, targetH = 18) {
    const H = rows.length
    const W = Math.max(...rows.map((r) => r.length))
    const fill = (ch) => ch !== ' ' && ch !== '.'
    const at = (i, j) => (rows[j] && rows[j][i]) || ' '
    let rects = ''
    for (let j = 0; j < H; j++) {
      for (let i = 0; i < W; i++) {
        if (fill(at(i, j))) continue
        if (fill(at(i - 1, j)) || fill(at(i + 1, j)) || fill(at(i, j - 1)) || fill(at(i, j + 1))) {
          rects += `<rect x="${i}" y="${j}" width="1" height="1" fill="#${outline}"/>`
        }
      }
    }
    for (let j = 0; j < H; j++) {
      for (let i = 0; i < W; i++) {
        const ch = at(i, j)
        if (!fill(ch) || pal[ch] == null) continue
        rects += `<rect x="${i}" y="${j}" width="1" height="1" fill="#${pal[ch]}"/>`
      }
    }
    const w = Math.round((targetH * W) / H)
    return `<svg width="${w}" height="${targetH}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`
  }

  _renderHud() {
    if (!this.ui) return
    // Never destroy the nickname input while the user is actively typing —
    // innerHTML rebuild would immediately defocus the field and lose keystrokes.
    if (document.activeElement?.classList.contains('name-input')) return
    // Tutorial screen is completely static — skip rebuilding the DOM every
    // requestAnimationFrame so the button is stable and CSS :active shows.
    if (this.sm.is(State.TITLE) && this._tutorialRendered === this._tutorialLang) return
    // GAMEOVER screen: only rebuild when visible content actually changes.
    // This keeps the nickname input stable and buttons clickable.
    if (this.sm.is(State.GAMEOVER)) {
      const k = `${this.pendingScoreEntry?.rank ?? ''}:${this.showingLeaderboard}:${this.isPaused}`
      if (k === this._lastGameOverKey) return
      this._lastGameOverKey = k
    }
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

    const hintKo = this._tutorialLang === 'ko'
    const action = this.splashGameOverTimer > 0
      ? (hintKo ? '가라앉는 중...' : 'Sinking...')
      : this.sm.is(State.TITLE)
      ? (hintKo ? '클릭하여 시작' : 'Click to start')
      : this.sm.is(State.SLINGING)
        ? (this.slingDragging ? (hintKo ? '놓아서 발사!' : 'Release to launch!') : (hintKo ? '드래그하여 조준' : 'Drag to aim'))
      : this.sm.is(State.ROLLING)
        ? (hintKo ? 'Space: 가속 · 떼면 점프' : 'Space: accelerate · release to jump')
      : this.sm.is(State.GAMEOVER)
        ? (hintKo ? '클릭 / Space → 다시 시작' : 'Click / Space → restart')
        : (hintKo ? '비행 중...' : 'In flight...')

    const pauseLabel = this.isPaused ? 'Resume' : 'Pause'
    const phaseText = this.isPaused ? 'PAUSED' : this.sm.current
    // Low-speed warning: stalling does NOT end the game, so show an actionable
    // "speed up" prompt (only while rolling) instead of a misleading countdown.
    const dangerText = this.sm.is(State.ROLLING) && this.stallTime >= STALL_DANGER_SEC
      ? `<div class="hud-danger">${hintKo ? '속도 부족 — 가속하세요!' : 'Low speed — speed up!'}</div>`
      : ''

    // distance remaining to moon
    const moonDistM = Math.max(0, Math.floor((MOON_TARGET_Y - this.armadillo.position.y) / PX_PER_METER))
    const moonDistText = moonDistM > 0 ? `${moonDistM}m` : '🌕 REACHED!'

    // sling power meter (shown only while actively dragging — hidden before pull and after launch)
    const slingMeter = this.sm.is(State.SLINGING) && this.slingDragging && this.slingPower > 0.05 ? `
      <div class="meter-power">
        <div class="power-fill" style="height:${pullPct}%"></div>
      </div>` : ''

    const isMoonClear = this.lastRating === 'MOON'

    const isGameActive = !this.sm.is(State.TITLE)
    const heartsHTML = [1,2,3].map(i => {
      const full = i <= this.lives
      return `<svg class="heart-pixel ${full ? 'heart-full' : 'heart-empty'}" width="28" height="28" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
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
    // Compact view: top 5, plus a small window around the current player if they
    // rank below the top — never the whole list, so it fits without scrolling.
    const lbKo = this._tutorialLang === 'ko'
    const lb = this.leaderboardEntries
    let lbRowsHtml
    if (lb.length === 0) {
      lbRowsHtml = `<div class="leaderboard-empty">${lbKo ? '아직 기록이 없어요 — 첫 기록을 남겨보세요!' : 'No scores yet — be the first!'}</div>`
    } else {
      // Full list, scrollable.  The just-registered run (pendingScoreEntry.id) is
      // the precise "self" row; without it, fall back to a name match so the
      // player's existing entry is still highlighted.
      const selfId = this.pendingScoreEntry?.id ?? null
      const rowIsSelf = (e) => (selfId ? e.id === selfId : (!!this.playerName && e.name === this.playerName))
      lbRowsHtml = lb.map(e => {
        const self = rowIsSelf(e)
        const medal = e.rank === 1 ? '🥇' : e.rank === 2 ? '🥈' : e.rank === 3 ? '🥉' : e.rank
        const moonBadge = e.moonClear ? ' 🌕' : ''
        const nm = e.name || (lbKo ? '익명' : 'Anonymous')
        const meta = lbKo ? `${e.heightM}m 높이 · ${e.distanceM}m 거리` : `${e.heightM}m high · ${e.distanceM}m far`
        const selfTag = self ? `<span class="lb-self-tag">${lbKo ? '내 기록' : 'YOU'}</span>` : ''
        return `
            <div class="lb-row${self ? ' lb-self' : ''}">
              <span class="lb-rank${e.rank <= 3 ? ' top3' : ''}">${medal}</span>
              <span class="lb-name">${nm}${moonBadge}</span>
              <span class="lb-score">${e.score.toLocaleString()}</span>
              <span class="lb-meta">${selfTag}${meta}</span>
            </div>`
      }).join('')
    }

    // ── Active item effect indicators ─────────────────────────────────────
    const rocketPct = this.activeRocket
      ? Math.ceil((this.activeRocket.timeLeft / ITEM_ROCKET_DURATION) * 100)
      : 0
    const boostPct = this.activeBoost
      ? Math.ceil((this.activeBoost.timeLeft / ITEM_BOOST_DURATION) * 100)
      : 0
    const rocketIconSvg = this._pixelIconSvg(
      ['...C...', '..LCS..', '..LCS..', '..LGS..', '..LgS..', '..LCS..', '.NLCSN.', '.NLCSN.', '..LCS..', '..FFF..', '...f...'],
      { C: 'ff6d00', L: 'ffc266', S: 'c23d00', G: '12303f', g: '9fe3ff', F: 'ffce3a', f: 'fff3b0', N: 'ff3d00' },
      '2a1200',
    )
    const boostIconSvg = this._pixelIconSvg(
      ['...CC.', '..LCS.', '..LCS.', '.LCCC.', '.CCCS.', '..LCS.', '..LCS.', '.LCS..', '.CC...'],
      { C: 'ffd600', L: 'fff9c4', S: 'c9a200' },
      '3a2500',
    )
    const itemEffectsHTML = isGameActive && (this.activeRocket || this.activeBoost) ? `
      <div class="item-effects-panel">
        ${this.activeRocket ? `
        <div class="item-effect item-effect-rocket">
          <span class="item-effect-icon">${rocketIconSvg}</span>
          <div class="item-effect-track">
            <div class="item-effect-label">ROCKET</div>
            <div class="item-effect-bar"><div class="item-effect-fill" style="width:${rocketPct}%"></div></div>
          </div>
        </div>` : ''}
        ${this.activeBoost ? `
        <div class="item-effect item-effect-boost">
          <span class="item-effect-icon">${boostIconSvg}</span>
          <div class="item-effect-track">
            <div class="item-effect-label">BOOST</div>
            <div class="item-effect-bar"><div class="item-effect-fill" style="width:${boostPct}%"></div></div>
          </div>
        </div>` : ''}
      </div>` : ''

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
      ${itemEffectsHTML}

      ${slingMeter}

      ${this.sm.is(State.TITLE) ? (() => {
        const lang = this._tutorialLang
        const ko = lang === 'ko'
        return `
        <div class="tutorial-layer">
          <div class="tutorial-card">
            <div class="tutorial-game-title">ARMADILLO RUSH</div>
            <div class="tutorial-subtitle">${ko ? '🌊 바다 → ☁️ 하늘 → 🌕 달' : '🌊 Sea → ☁️ Sky → 🌕 Moon'}</div>

            <div class="tutorial-lang-toggle">
              <button type="button" class="clickable lang-btn${ko ? ' is-active' : ''}" data-action="toggle-lang">한국어</button>
              <button type="button" class="clickable lang-btn${!ko ? ' is-active' : ''}" data-action="toggle-lang">English</button>
            </div>

            ${ko ? `
            <div class="tutorial-section">
              <div class="tutorial-section-title">🎯 목표</div>
              <div class="tutorial-row">슬링샷으로 아르마딜로를 발사하여 최대한 높이, 멀리 날려보세요!</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">🕹️ 조작법</div>
              <div class="tutorial-row">🖱️ <b>드래그</b>: 슬링샷 조준 및 발사</div>
              <div class="tutorial-row">⬛ <b>Space 누르기</b>: 지형 위에서 가속 / 공중에서 회전</div>
              <div class="tutorial-row">⬛ <b>Space 떼기</b>: 점프!</div>
              <div class="tutorial-row">💀 <b>바다 추락</b>: 생명 1개 감소. Space/클릭으로 낙하 재시작</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">💡 팁</div>
              <div class="tutorial-row">빠른 속도로 지형을 부수면 속도 폭발!</div>
              <div class="tutorial-row">높이가 곧 점수 — 달까지 올라가면 보너스!</div>
            </div>
            ` : `
            <div class="tutorial-section">
              <div class="tutorial-section-title">🎯 Objective</div>
              <div class="tutorial-row">Fling the armadillo as high and far as possible — aim for the moon!</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">🕹️ Controls</div>
              <div class="tutorial-row">🖱️ <b>Drag</b>: Aim and release the slingshot</div>
              <div class="tutorial-row">⬛ <b>Hold Space</b>: Accelerate on terrain / spin in air</div>
              <div class="tutorial-row">⬛ <b>Release Space</b>: Jump!</div>
              <div class="tutorial-row">💀 <b>Sea fall</b>: Lose 1 life. Press Space/Click to drop again</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">💡 Tips</div>
              <div class="tutorial-row">Smash terrain at high speed for a burst boost!</div>
              <div class="tutorial-row">Altitude = score. Reach the moon for bonus points!</div>
            </div>
            `}

            <button type="button" class="clickable tutorial-start-btn" data-action="start-game">
              ${ko ? '시작하기' : 'Start Game'}
            </button>
          </div>
        </div>
        `
      })() : ''}
      ${(() => {
        if (!this.sm.is(State.TITLE)) return ''
        // Badge is the leaderboard's #1 entry — same data source as the
        // leaderboard top row, so its name and score always belong to the same
        // run (never a current/previous nickname from a different run).
        const top = getTopEntry()
        if (!top) return ''
        const ko = this._tutorialLang === 'ko'
        const name = top.name || (ko ? '익명' : 'Anonymous')
        return `
        <div class="best-badge">
          <div class="best-badge-label">${ko ? '최고 기록' : 'BEST'}</div>
          <div class="best-badge-score">${top.score.toLocaleString()}</div>
          <div class="best-badge-meta">
            <span class="best-badge-name">${name}</span>
            <span class="best-badge-stats">${top.heightM ?? 0}m · ${top.distanceM ?? 0}m</span>
          </div>
        </div>`
      })()}
      ${this.flashTime > 0 ? `<div class="flash-layer" style="opacity:${this.flashTime * 1.6}"></div>` : ''}
      ${this.sm.is(State.GAMEOVER) ? (() => {
        const ko = this._tutorialLang === 'ko'
        const goTitle = isMoonClear
          ? (ko ? '🌕 달 도달!' : '🌕 MOON REACHED!')
          : (this.lastRating === 'SPLASH' ? (ko ? '🌊 바다에 빠졌어요!' : '🌊 SPLASH!') : (ko ? '게임 오버' : 'GAME OVER'))
        const goTitleClass = isMoonClear ? 'result-title moon-clear' : 'result-title'
        return `
        <div class="modal-layer">
          <div class="result-card">
            <div class="${goTitleClass}">${goTitle}</div>
            <div class="result-grid">
              <div><span>${ko ? '점수' : 'SCORE'}</span><strong>${score}</strong></div>
              <div><span>${ko ? '높이' : 'HEIGHT'}</span><strong>${heightM}m</strong></div>
              <div><span>${ko ? '거리' : 'DIST'}</span><strong>${distanceM}m</strong></div>
              <div><span>${ko ? '최고' : 'BEST'}</span><strong>${this.bestRecord.score}</strong></div>
              ${this.pendingScoreEntry ? `<div><span>${ko ? '순위' : 'RANK'}</span><strong>#${this.pendingScoreEntry.rank}</strong></div>` : ''}
            </div>
            ${this.pendingScoreEntry
              ? `<div class="score-register-done">✓ ${ko ? '등록 완료' : 'Registered'} <span class="score-register-rank">#${this.pendingScoreEntry.rank}</span></div>`
              : `<div class="score-register">
              <div class="score-register-label">${ko ? '리더보드에 점수 등록' : 'Register to Leaderboard'}</div>
              <input class="name-input clickable" type="text" maxlength="16"
                placeholder="${ko ? '닉네임 입력' : 'Enter nickname'}"
                value="${this.playerName || ''}"
                autocomplete="off" spellcheck="false" />
              <button type="button" class="clickable primary-button" data-action="score-save">
                ${ko ? '점수 등록' : 'Submit Score'}
              </button>
            </div>`}
            <button type="button" class="clickable secondary-button" data-action="leaderboard">${ko ? '🏆 리더보드 보기' : '🏆 Leaderboard'}</button>
            <button type="button" class="clickable secondary-button restart-btn" data-action="restart">${ko ? '다시 시작' : 'Retry'}</button>
          </div>
        </div>`
      })() : ''}

      ${this._respawnWaiting ? (() => {
        // Position hint directly above the armadillo in screen space
        const sc = this._worldToScreen(
          this.armadillo.position.x,
          this.armadillo.position.y + ARMADILLO_SIZE + 100,
        )
        const ko = this._tutorialLang === 'ko'
        return `<div class="respawn-hint" style="left:${sc.x.toFixed(1)}px;top:${sc.y.toFixed(1)}px">
          ${ko ? '부활 준비 완료!' : 'Ready to drop!'}<br>
          <span style="font-size:13px;opacity:0.8">${ko ? 'Space 또는 클릭으로 낙하' : 'Space or Click to fall'}</span>
        </div>`
      })() : ''}

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

      ${this.showingLeaderboard ? (() => {
        const ko = this._tutorialLang === 'ko'
        return `
        <div class="leaderboard-layer">
          <div class="leaderboard-card">
            <div class="leaderboard-title">🏆 ${ko ? '리더보드' : 'LEADERBOARD'}</div>
            <div class="leaderboard-list">${lbRowsHtml}</div>
            <div class="leaderboard-actions">
              <button type="button" class="clickable secondary-button" data-action="leaderboard-close">${ko ? '닫기' : 'Close'}</button>
            </div>
          </div>
        </div>`
      })() : ''}

      ${showBoostButton && !this.isPaused ? `
        <button type="button" class="clickable boost-button ${boostButtonActive ? 'is-pressed' : ''} ${boostButtonReady ? 'is-ready' : ''}" data-action="boost" aria-label="Boost">
          <span class="boost-button-core">SPACE</span>
        </button>
      ` : ''}

      <div class="action-hint ${showBoostButton && !this.isPaused ? 'is-above-boost' : ''}">${action}</div>
    `
    // Store the rendered lang key — if lang toggles, cache miss forces a rebuild.
    this._tutorialRendered = this.sm.is(State.TITLE) ? this._tutorialLang : false

    // After a fresh leaderboard render, scroll the player's row into view if the
    // view was opened right after registering (manual opens stay at the top).
    if (this.showingLeaderboard && this._lbScrollPending) {
      const list = this.ui.querySelector('.leaderboard-list')
      const self = list?.querySelector('.lb-self')
      if (list && self) {
        list.scrollTop = self.offsetTop - list.clientHeight / 2 + self.clientHeight / 2
        this._lbScrollPending = false
      }
    }
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
