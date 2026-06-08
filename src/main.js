import * as THREE from 'three'
import './ui.css'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { PostFX } from './renderer/postfx.js'
import { ParticleSystem } from './game/particles.js'
import { StateMachine, State } from './state.js'
import { PhysicsWorld } from './game/physics.js'
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
  FRICTION_PER_SEC,
  GRAVITY,
  MAX_SPEED,
  PX_PER_METER,
  SLOPE_RESIST_PER_SEC,
  SCORE,
  SLOWMO_SCALE,
  SLOWMO_SEC,
  STALL_DANGER_SEC,
  STALL_GAMEOVER_SEC,
  STALL_SPEED_RATIO,
} from './config.js'

/**
 * 진입점 + 게임 루프.
 *
 * 게임 루프는 고정 타임스텝(fixed deltaTime) 누적 방식:
 *   - 물리는 항상 1/60초 스텝으로 갱신 → 프레임레이트 무관 (§12 시간 설계)
 *   - 렌더는 매 rAF 1회
 * 1단계(렌더링 기반)에서는 상태 머신 골격 + 배경 셰이더 + placeholder 섬 +
 * 카메라 추적만 검증한다. 이후 단계에서 game/* 모듈을 여기 hook 한다.
 */

const FIXED_DT = 1 / 60       // 물리 스텝 (초)
const MAX_FRAME_DT = 0.25     // 탭 비활성 후 복귀 시 스파이럴 방지 상한
const ARMADILLO_SIZE = 30
const LAUNCH_SPEED = 1400

// 세계관 경계
const SEA_LEVEL_Y  = -360   // 실제로 빠질 수 있는 수면 높이
const MOON_TARGET_Y = 18000  // 달 목표 고도 (px)
const SPLASH_GAMEOVER_DELAY = 0.42

// 슬링 상수
const SLING_POS = new THREE.Vector2(-280, 0)  // 슬링 중심 — 화면 중간 높이에서 시작
const SLING_MAX_PULL = 120      // 최대 당김 거리 (월드 px)
const SLING_MIN_PULL = 18       // 이 이하로 당기면 취소
const SLING_POWER_MIN = 0.78    // 최소 당김 시 파워 비율
const SLING_POWER_MAX = 1.0     // 최대 당김 시 파워 비율
const SLING_DRAG_START_PX = 8   // TITLE에서 이 거리 이상 움직여야 슬링 조준 시작

// 카메라 뷰포트보다 이 거리만큼 앞서 있으면 새 섬을 스폰
const ISLAND_SPAWN_LOOKAHEAD = 5200

const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(28)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(68)
const ROLLING_MIN_SPEED_RATIO = 0.38
const UNDER_BREAK_SPEED = 520
const DAMAGE_SPEED_FULL = 940
const UPHILL_BOOST_MIN_ANGLE = THREE.MathUtils.degToRad(4)
const UPHILL_BOOST_FULL_ANGLE = THREE.MathUtils.degToRad(22)
const UPHILL_INPUT_BOOST = 0.42
const UPHILL_BOOST_TOP_RATIO = 0.64
const SPACE_GRAVITY_RATIO = 0.28
const SPACE_GRAVITY_START = 0.62
const SPACE_GRAVITY_FULL = 0.86
const CLOUD_SPRING_VY = 760
const CLOUD_SPRING_VX_KEEP = 0.94
const TERRAIN_MIN_GAP = 26
const SKY_CLEAR_LOW = new THREE.Color(0x8edcff)
const SKY_CLEAR_MID = new THREE.Color(0x4f91dc)
const SKY_CLEAR_HIGH = new THREE.Color(0x111a46)
const SKY_CLEAR_SPACE = new THREE.Color(0x000010)

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
    // 슬링 상태
    this.slingDragging = false          // 드래그 중 여부
    this.pendingSlingStart = null       // TITLE에서 실제 드래그인지 판정하기 위한 시작점
    this.slingPull = new THREE.Vector2(0, 0)  // 당김 벡터 (월드 좌표 기준)
    this.slingPower = 0                  // 0~1 파워 비율
    this.slingAngle = Math.PI / 4        // 발사 각도 (radian)
    this.currentIsland = null
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length  // 절차적 생성 인덱스

    this.scenery = []
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.lastRating = 'READY'
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.boostButtonPulse = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.bestRecord = this._loadBestRecord()
    this.isPaused = false
    this.audio = null

    // 착지 ripple 이펙트 풀 (최대 4개 동시)
    this.ripples = []
    this._buildRipplePool()

    // 슬링 고무줄 튕김 애니메이션
    this.slingSnapTime = 0       // 발사 후 튕김 경과 시간

    // 불꽃 트레일 스폰 쿨다운 (매 프레임 방출 방지)
    this.flameTrailCooldown = 0

    // 카메라가 추적할 목표
    this.camTarget = new THREE.Vector2(SLING_POS.x, SLING_POS.y)
    this.camPos = new THREE.Vector2(SLING_POS.x, SLING_POS.y)
    this.ui = document.getElementById('ui-overlay')

    this._buildPlaceholderWorld()
    this._bindInput()

    // 첫 프레임 전에 카메라를 슬링 위치로 즉시 배치
    this.renderer.setCenter(SLING_POS.x, SLING_POS.y)

    this.sm.onChange((from, to) => console.log(`[state] ${from} → ${to}`))
  }

  // ── 월드 빌드: 슬링 + 섬 + 아르마딜로 ──
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

  /** 절차적으로 섬을 추가 생성한다. */
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
    const shapePool = ['bowl', 'plateau', 'wave', 'ramp', 'dip', 'crest', 'double', 'saddle']
    const early = index < 4
    return {
      ...baseSpec,
      x: baseSpec.x + (Math.random() - 0.5) * 90,
      y: baseSpec.y + (Math.random() - 0.5) * (early ? 90 : 180),
      w: Math.round(baseSpec.w * THREE.MathUtils.lerp(0.78, 0.96, Math.random())),
      depth: Math.max(20, Math.round(baseSpec.depth + (Math.random() - 0.5) * 18)),
      rimH: Math.max(12, Math.round(baseSpec.rimH + (Math.random() - 0.5) * 10)),
      shapeType: early ? baseSpec.shapeType : shapePool[Math.floor(Math.random() * shapePool.length)],
    }
  }

  _buildSling() {
    // 앵그리버드식 나무 새총: 둥근 나무 갈래 + 어두운 고무줄 + 가죽 포켓.
    const S = SLING_POS

    const wood    = 0x6d4c41
    const woodDk  = 0x3e2723
    const woodMid = 0x8a5a3f
    const woodHi  = 0xb9825f

    const trunkBase = new THREE.Vector2(S.x, S.y - 74)
    const forkBase = new THREE.Vector2(S.x, S.y + 4)
    const tipL = new THREE.Vector2(S.x - 44, S.y + 73)
    const tipR = new THREE.Vector2(S.x + 44, S.y + 72)

    const makeWoodSegment = (a, b, width, z = -0.06) => {
      const dx = b.x - a.x
      const dy = b.y - a.y
      const len = Math.hypot(dx, dy)
      const group = new THREE.Group()
      group.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, z)
      group.rotation.z = Math.atan2(dy, dx) - Math.PI / 2

      const shadow = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.08, len, 1),
        new THREE.MeshBasicMaterial({ color: woodDk }),
      )
      shadow.position.set(width * 0.1, -1.5, -0.012)

      const core = new THREE.Mesh(
        new THREE.BoxGeometry(width, len, 1),
        new THREE.MeshBasicMaterial({ color: wood }),
      )

      const capA = new THREE.Mesh(
        new THREE.CircleGeometry(width / 2, 22),
        new THREE.MeshBasicMaterial({ color: wood }),
      )
      capA.position.y = len / 2
      const capB = capA.clone()
      capB.position.y = -len / 2

      const highlight = new THREE.Mesh(
        new THREE.BoxGeometry(width * 0.2, len * 0.76, 1),
        new THREE.MeshBasicMaterial({ color: woodHi, transparent: true, opacity: 0.5 }),
      )
      highlight.position.set(-width * 0.22, 0, 0.012)

      group.add(shadow, core, capA, capB, highlight)
      return group
    }

    const trunk = makeWoodSegment(trunkBase, forkBase, 17, -0.07)
    const armL = makeWoodSegment(forkBase, tipL, 15, -0.055)
    const armR = makeWoodSegment(forkBase, tipR, 15, -0.05)
    const foot = new THREE.Mesh(
      new THREE.BoxGeometry(42, 9, 1),
      new THREE.MeshBasicMaterial({ color: woodDk }),
    )
    foot.position.set(S.x, S.y - 79, -0.075)

    const crotch = new THREE.Mesh(
      new THREE.CircleGeometry(12, 28),
      new THREE.MeshBasicMaterial({ color: woodMid }),
    )
    crotch.position.set(S.x, S.y + 5, -0.035)

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

    // 포켓
    this.slingPouch = new THREE.Mesh(
      new THREE.CircleGeometry(13, 28),
      new THREE.MeshBasicMaterial({ color: 0x5a3525 }),
    )
    this.slingPouch.scale.set(1.42, 0.76, 1)
    const pouchRim = new THREE.Mesh(
      new THREE.RingGeometry(11, 13, 28),
      new THREE.MeshBasicMaterial({
        color: 0x2a1712,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
      }),
    )
    pouchRim.scale.copy(this.slingPouch.scale)
    const pouchHi = new THREE.Mesh(
      new THREE.CircleGeometry(4.2, 18),
      new THREE.MeshBasicMaterial({ color: 0xb9825f, transparent: true, opacity: 0.5 }),
    )
    pouchHi.scale.set(1.6, 0.56, 1)
    pouchHi.position.set(-4, 3.2, 0.012)
    this.slingPouchGroup = new THREE.Group()
    this.slingPouchGroup.add(this.slingPouch, pouchRim, pouchHi)

    this.renderer.add(foot)
    this.renderer.add(trunk)
    this.renderer.add(armL)
    this.renderer.add(armR)
    this.renderer.add(crotch)
    this.renderer.add(this.slingBandL)
    this.renderer.add(this.slingBandR)
    this.renderer.add(this.slingPouchGroup)

    this._forkTipU = { x: tipL.x, y: tipL.y }
    this._forkTipD = { x: tipR.x, y: tipR.y }

    // 발사 가이드 점선 (드래그 중 표시)
    const dottedMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 8, gapSize: 6, opacity: 0.5, transparent: true })
    const dottedGeom = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 16 }, (_, i) => new THREE.Vector3(0, 0, 0)),
    )
    this.slingGuide = new THREE.Line(dottedGeom, dottedMat)
    this.slingGuide.visible = false
    this.slingGuide.computeLineDistances()
    this.renderer.add(this.slingGuide)
  }

  /** 고무줄 + 포켓 + 가이드 업데이트 — _update() 에서 매 프레임 호출 */
  _updateSlingVisuals() {
    let px = SLING_POS.x + this.slingPull.x
    let py = SLING_POS.y + this.slingPull.y

    // 발사 후 고무줄 튕김 감쇠 진동 — slingSnapTime이 남아 있으면 적용
    if (this.slingSnapTime > 0) {
      const snapT = 1 - this.slingSnapTime / 0.22    // 0→1 (시간 흐름)
      const decay = Math.exp(-snapT * 14)            // 지수 감쇠
      const osc   = Math.sin(snapT * Math.PI * 5)   // 5회 진동
      const amp   = 28 * decay * osc                // 최대 ±28px
      px += amp * Math.cos(this.slingAngle + Math.PI)
      py += amp * Math.sin(this.slingAngle + Math.PI)
    }

    // 고무줄: 두꺼운 사각 밴드로 업데이트해서 브라우저별 lineWidth 제한을 피한다.
    const updateBand = (mesh, tipX, tipY, pouX, pouY) => {
      const dx = pouX - tipX
      const dy = pouY - tipY
      const len = Math.max(1, Math.hypot(dx, dy))
      const nx = -dy / len
      const ny = dx / len
      const width = 5.5 + THREE.MathUtils.clamp(this.slingPull.length() / SLING_MAX_PULL, 0, 1) * 2.5
      const pos = mesh.geometry.attributes.position
      pos.setXYZ(0, tipX + nx * width, tipY + ny * width, 0.06)
      pos.setXYZ(1, tipX - nx * width, tipY - ny * width, 0.06)
      pos.setXYZ(2, pouX - nx * width, pouY - ny * width, 0.06)
      pos.setXYZ(3, pouX + nx * width, pouY + ny * width, 0.06)
      pos.needsUpdate = true
      mesh.geometry.computeBoundingSphere()
    }
    updateBand(this.slingBandL, this._forkTipU.x, this._forkTipU.y, px, py)
    updateBand(this.slingBandR, this._forkTipD.x, this._forkTipD.y, px, py)

    // 포켓 그룹 위치
    this.slingPouchGroup.position.set(px, py, 0.07)

    // 가이드 점선 (발사 방향으로 포물선 예측) — 아르마딜로 현재 위치에서 출발
    if (this.slingDragging && this.slingPower > 0.05) {
      const speed = this.slingPower * LAUNCH_SPEED
      const vx = Math.cos(this.slingAngle) * speed
      const vy = Math.sin(this.slingAngle) * speed
      const startX = px
      const startY = py + ARMADILLO_SIZE / 2
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

  /** 착지 충격파 ripple 링 풀 (최대 4개) */
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

  /** ripple 하나를 월드 위치에서 실행 */
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
      // RingGeometry 교체 없이 scale로 크기 조절
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
    const group = new THREE.Group()

    const shellMat = new THREE.MeshBasicMaterial({ color: 0x8d6e63 })
    const shellDarkMat = new THREE.MeshBasicMaterial({ color: 0x4e342e })
    const bellyMat = new THREE.MeshBasicMaterial({ color: 0xc9a27f })
    const faceMat = new THREE.MeshBasicMaterial({ color: 0xb08368 })
    const tintMat = new THREE.MeshBasicMaterial({
      color: 0xff7043,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
    })

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
    for (let i = -2; i <= 3; i++) {
      const band = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 28 - Math.abs(i - 0.4) * 2.3, 1),
        shellDarkMat,
      )
      band.position.set(i * 4.3 - 1, 0, 0.11)
      band.rotation.z = i * 0.24
      band.scale.x = i === 0 ? 1.15 : 1
      bands.add(band)
    }

    const head = new THREE.Mesh(new THREE.CircleGeometry(6.6, 32), faceMat)
    head.scale.set(1.02, 0.78, 1)
    head.position.set(10.8, -2.5, 0.12)
    head.rotation.z = -0.45

    const snout = new THREE.Mesh(new THREE.CircleGeometry(4.6, 24), faceMat)
    snout.scale.set(1.18, 0.48, 1)
    snout.position.set(15.2, -5.1, 0.13)
    snout.rotation.z = -0.28

    const nose = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), shellDarkMat)
    nose.position.set(18.8, -6.3, 0.15)

    const ear = new THREE.Mesh(new THREE.CircleGeometry(2.7, 16), shellDarkMat)
    ear.scale.set(0.82, 1.05, 1)
    ear.position.set(8.6, 2.8, 0.12)
    ear.rotation.z = -0.2

    const eye = new THREE.Mesh(new THREE.CircleGeometry(1.15, 12), new THREE.MeshBasicMaterial({ color: 0x111111 }))
    eye.position.set(13.4, -1.4, 0.16)

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

    const shine = new THREE.Mesh(
      new THREE.CircleGeometry(3.8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 }),
    )
    shine.scale.set(1.35, 0.72, 1)
    shine.position.set(-6.6, 6.6, 0.13)

    group.add(tail, tailTip, shell, belly, bands, rim, tint, head, snout, ear, eye, nose, footA, footB, shine)
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

  // 스프라이트 전환은 이제 껍질 색으로 대체 — 메서드는 호환성 유지
  _setArmadilloSprite(state) {
    // rolling: 껍질 회전으로 표현 (rotation은 _updateRolling에서 처리)
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
      if (button.dataset.action === 'pause') this._togglePause()
      if (button.dataset.action === 'restart') this._restartToTitle()
      if (button.dataset.action === 'boost') {
        this._pulseBoostButton()
        this._handleTap('pointer')
      }
      return true
    }

    // ── 슬링 드래그 (마우스 + 터치 공통) ──
    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return
      event.preventDefault()
      this._ensureAudio()
      this._handlePointerDown(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointermove', (event) => {
      if (!this.slingDragging && !this.pendingSlingStart) return
      event.preventDefault()
      this._handlePointerMove(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointerup', (event) => {
      if (this.pendingSlingStart) {
        event.preventDefault()
        this.pendingSlingStart = null
        return
      }
      if (this.slingDragging) {
        event.preventDefault()
        this._handlePointerRelease()
        return
      }
      // 슬링 외 상태: ROLLING이면 부스트/점프, 나머지는 상태별 탭 처리
      this._handleBoostRelease('pointer')
    }, { passive: false })

    window.addEventListener('pointercancel', () => {
      this.slingDragging = false
      this.pendingSlingStart = null
      this.slingPull.set(0, 0)
    })

    // 키보드
    window.addEventListener('keydown', (event) => {
      if (event.repeat) return
      if (event.code === 'Space') {
        event.preventDefault()
        if (this.sm.is(State.TITLE)) {
          event.stopImmediatePropagation()
          return
        }
        this._ensureAudio()
        this._pulseBoostButton()
        this._handleKeyboardPress()
        return
      }
      if (event.code === 'Escape') {
        event.preventDefault()
        this._togglePause()
      }
    }, { capture: true })

    // Space 뗄 때: TITLE은 무시하고, ROLLING이면 부스트/점프 처리
    window.addEventListener('keyup', (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        if (this.sm.is(State.TITLE)) {
          event.stopImmediatePropagation()
          return
        }
        this._handleBoostRelease('keyboard')
      }
    }, { capture: true })
  }

  /** 화면 좌표 → 월드 좌표 변환 */
  _screenToWorld(clientX, clientY) {
    const canvas = this.renderer.renderer.domElement
    const rect = canvas.getBoundingClientRect()
    // NDC (-1~1)
    const ndcX = ((clientX - rect.left) / rect.width)  * 2 - 1
    const ndcY = -(((clientY - rect.top)  / rect.height) * 2 - 1)
    // OrthographicCamera: NDC → 월드
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

    if (this.sm.is(State.TITLE)) {
      this.pendingSlingStart = { x: clientX, y: clientY }
      return
    }

    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }

    if (this.sm.is(State.SLINGING)) {
      this.slingDragging = true
      this._handlePointerMove(clientX, clientY)
      return
    }

    // ROLLING 중 클릭 = 즉시 점프
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland('pointer')
      return
    }

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) return
  }

  _handlePointerMove(clientX, clientY) {
    if (this.pendingSlingStart && this.sm.is(State.TITLE)) {
      const dx = clientX - this.pendingSlingStart.x
      const dy = clientY - this.pendingSlingStart.y
      if (Math.hypot(dx, dy) < SLING_DRAG_START_PX) return
      this.pendingSlingStart = null
      this._resetRun()
      this.sm.transition(State.SLINGING)
      this.slingDragging = true
    }

    if (!this.slingDragging || !this.sm.is(State.SLINGING)) return

    const world = this._screenToWorld(clientX, clientY)
    // 당김 벡터 = 터치 위치 - 슬링 중심 (클램프)
    const raw = new THREE.Vector2(world.x - SLING_POS.x, world.y - SLING_POS.y)
    const len = Math.min(raw.length(), SLING_MAX_PULL)
    if (raw.length() > 0.001) raw.normalize().multiplyScalar(len)

    this.slingPull.copy(raw)

    // 당김 반대 방향 = 발사 방향
    if (len > SLING_MIN_PULL) {
      this.slingAngle = Math.atan2(-raw.y, -raw.x)
      this.slingPower = THREE.MathUtils.lerp(
        SLING_POWER_MIN, SLING_POWER_MAX,
        (len - SLING_MIN_PULL) / (SLING_MAX_PULL - SLING_MIN_PULL),
      )
    } else {
      this.slingPower = 0
    }

    this.armadillo.position.set(
      SLING_POS.x + this.slingPull.x,
      SLING_POS.y + this.slingPull.y + ARMADILLO_SIZE / 2,
      0,
    )
    this._syncMotionToArmadillo()
    this._updateSlingVisuals()
  }

  _handlePointerRelease() {
    if (!this.slingDragging) return
    this.slingDragging = false

    if (!this.sm.is(State.SLINGING)) return
    if (this.slingPower < 0.05) {
      // 너무 약하게 당기면 취소, 리셋
      this.slingPull.set(0, 0)
      return
    }
    this._launchFromSling()
  }

  // pointerup / keyup(Space) 공통
  _handleBoostRelease(source = 'pointer') {
    this._handleTap(source)
  }

  _pulseBoostButton() {
    this.boostButtonPulse = 0.16
  }

  _handleTap(source = 'pointer') {
    if (this.isPaused) return
    this._ensureAudio()
    if (this.sm.is(State.TITLE)) {
      return
    }
    // ROLLING 중 클릭/스페이스 = 즉시 점프
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland(source)
      return
    }
    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }
  }

  // Space keydown
  _handleKeyboardPress() {
    if (this.isPaused) return
    this._ensureAudio()

    if (this.sm.is(State.TITLE)) {
      return
    }

    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }

    // SLINGING: 초반 발사는 오직 드래그 릴리즈로만 작동한다.
    if (this.sm.is(State.SLINGING)) {
      return
    }

    // ROLLING: 즉시 점프
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland('keyboard')
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
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.slingDragging = false
    this.pendingSlingStart = null
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
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
    this.boostButtonPulse = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.isPaused = false
    this.armadillo.visible = true
    this.armadillo.position.set(SLING_POS.x, SLING_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._updateSlingVisuals()
    this._syncMotionToArmadillo()
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.TITLE)
  }

  _restartToTitle() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.slingDragging = false
    this.pendingSlingStart = null
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
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
    this.boostButtonPulse = 0
    this.splashGameOverTimer = 0
    this.splashStarted = false
    this.isPaused = false
    this.armadillo.visible = true
    this.armadillo.position.set(SLING_POS.x, SLING_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
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

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240
  }

  _togglePause() {
    if (this.sm.is(State.GAMEOVER)) return
    this.isPaused = !this.isPaused
  }

  _launchFromSling() {
    if (!this.sm.transition(State.FLYING)) return

    const power = this.slingPower          // 리셋 전에 저장
    const speed = power * LAUNCH_SPEED
    this.speedRatio = power
    this.lastRating = 'LAUNCH'
    this.stallTime = 0
    this.slingSnapTime = 0.22              // 고무줄 튕김 애니메이션 시작
    this._setArmadilloColor(0xff1744)

    const vx = Math.cos(this.slingAngle) * speed
    const vy = Math.sin(this.slingAngle) * speed
    this.velocity.set(vx, vy)

    // Planck body 초기화 — 발사 위치·속도 동기화
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._syncMotionToArmadillo()

    // 슬링 고무줄 리셋 (발사 후)
    this.slingPull.set(0, 0)
    this.slingPower = 0

    this._carveLaunchPath()
    this._triggerLaunchImpact()
    this._playTone(220 + power * 260, 0.12, 0.08 + power * 0.06, 'square')
  }

  _launchFromIsland(source = 'auto') {
    if (!this.currentIsland) return
    if (!this.sm.transition(State.FALLING)) return
    const launchAngle = this._getExitLaunchAngle(this.currentIsland)
    const slopeAngle = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    const uphillBoost = this._getUphillInputBoost(source, this.currentIsland, slopeAngle)
    if (uphillBoost > 0) this.speedRatio = Math.min(1, this.speedRatio + uphillBoost)

    const horizontalSpeed = this.speedRatio * MAX_SPEED
    const launchSpeed = Math.min(
      LAUNCH_SPEED,
      horizontalSpeed / Math.max(Math.cos(launchAngle), 0.35),
    )
    const vx = Math.cos(launchAngle) * launchSpeed
    const vy = Math.sin(launchAngle) * launchSpeed
    this.velocity.set(vx, vy)

    // Planck body에도 속도 동기화 (누락 시 이전 착지 속도로 비행)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._syncMotionToArmadillo()

    this.currentIsland = null
    this.lastRating = uphillBoost > 0 ? 'BOOST' : 'JUMP'
    this._setArmadilloColor(uphillBoost > 0 ? 0xfff176 : 0xff7043)
    this._spawnParticles(
      this.armadillo.position.x,
      this.armadillo.position.y,
      uphillBoost > 0 ? 0xffd54f : 0xff7043,
      uphillBoost > 0 ? 12 : 6,
      uphillBoost > 0 ? 220 : 120,
    )
    this._playTone(uphillBoost > 0 ? 520 + uphillBoost * 720 : 360, 0.08, 0.05, 'triangle')
  }

  _getUphillInputBoost(source, island, slopeAngle) {
    if (source !== 'keyboard' && source !== 'pointer') return 0
    if (!this._isUpperUphillBoostZone(island, this.armadillo.position.x)) return 0
    const uphill = Math.sin(slopeAngle)
    const min = Math.sin(UPHILL_BOOST_MIN_ANGLE)
    const max = Math.sin(UPHILL_BOOST_FULL_ANGLE)
    if (uphill <= min) return 0
    const t = THREE.MathUtils.clamp((uphill - min) / (max - min), 0, 1)
    return UPHILL_INPUT_BOOST * (0.45 + 0.55 * t)
  }

  _isUpperUphillBoostZone(island, x) {
    if (!island?.points?.length) return false
    const topY = getTerrainTopY(island, x)
    let minY = Infinity
    let maxY = -Infinity
    for (const p of island.points) {
      minY = Math.min(minY, p.y)
      maxY = Math.max(maxY, p.y)
    }
    const thresholdY = THREE.MathUtils.lerp(minY, maxY, UPHILL_BOOST_TOP_RATIO)
    return topY >= thresholdY
  }

  _getExitLaunchAngle(island) {
    if (!island) return THREE.MathUtils.degToRad(45)

    // 현재 아르마딜로 위치의 경사각 기준으로 발사각 결정
    const slopeAngle = getTerrainSlopeAngle(island, this.armadillo.position.x)
    const slopeLift = slopeAngle * 0.75
    return THREE.MathUtils.clamp(
      THREE.MathUtils.degToRad(42) + slopeLift,
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
      this._updateFlight(simDt)
      // 비행 중 아르마딜로를 velocity 방향으로 회전
      if (this.velocity.lengthSq() > 1) {
        const targetAngle = Math.atan2(this.velocity.y, this.velocity.x)
        const diff = targetAngle - this.armadillo.rotation.z
        // 최단 경로로 보간 (±π 래핑)
        const wrapped = ((diff + Math.PI) % (Math.PI * 2)) - Math.PI
        this.armadillo.rotation.z += wrapped * Math.min(1, simDt * 12)
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
    this._updateEffects(dt)
    this._tickSlingSnap(dt)
    this._updateScenery()

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - SLING_POS.y)
    this.bestDistancePx = Math.max(this.bestDistancePx, this.armadillo.position.x - SLING_POS.x)

    // 절차적 섬 스폰: 비행/추락 중일 때만 체크 (SLINGING 중 무한 스폰 방지)
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING) || this.sm.is(State.ROLLING)) {
      let spawnCount = 0
      while (
        this.islands[this.islands.length - 1].bounds.left - this.armadillo.position.x < ISLAND_SPAWN_LOOKAHEAD
        && spawnCount < 6
      ) {
        this._spawnNextIsland()
        spawnCount++
      }
    }

    // TITLE/SLINGING 상태에서는 슬링 중심을 카메라 기준점으로,
    // 나머지 상태에서는 아르마딜로를 추적
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
    // 아르마딜로를 포켓 위치에 고정 (드래그 중)
    if (this.sm.is(State.SLINGING)) {
      const px = SLING_POS.x + this.slingPull.x
      const py = SLING_POS.y + this.slingPull.y
      this.armadillo.position.set(px, py + ARMADILLO_SIZE / 2, 0)
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
    const prevY    = this.armadillo.position.y
    const prevVelY = this.velocity.y

    // Planck 스텝 — 중력·충돌·탄성 처리
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

    // ① 위쪽으로 빠르게 통과 → 지형 파괴
    const piercedTerrain = this._findPiercedTerrain()
    if (piercedTerrain) {
      this._breakTerrain(piercedTerrain)
      // 파괴 후 Planck 지형 갱신 (이미 damaged zone이 처리)
      return
    }

    // ② 아래로 착지 — 근접 감지 (속도가 낮거나 하강 중)
    if (this.velocity.y <= 30) {
      const landedIsland = this._findLandingIsland(prevBottom, nextBottom)
      if (landedIsland) {
        this._landOnIsland(landedIsland)
        return
      }
    }

    // ③ 달 도달 — 최종 목표
    if (state.y >= MOON_TARGET_Y) {
      this._reachMoon()
      return
    }

    // ④ 바다로 추락 감지
    if (state.y < SEA_LEVEL_Y) {
      this._beginSplashGameOver(state.x)
      return
    }

    // ⑤ 화면 밖 하단 탈출 (바다 위지만 카메라 훨씬 아래 — 안전망)
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
    // 달 도달 축하 — 큰 파티클 폭발
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
      if (x < bounds.left - ARMADILLO_SIZE / 2 || x > bounds.right + ARMADILLO_SIZE / 2) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
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
      if (x < bounds.left - ARMADILLO_SIZE || x > bounds.right + ARMADILLO_SIZE) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, THREE.MathUtils.clamp(x, bounds.left, bounds.right))
      const dist = Math.abs(bottom - topY)
      if (dist < bestDist && dist <= 36) {
        best = island
        bestDist = dist
      }
    }

    return best
  }

  _findPiercedTerrain() {
    // 지형 파괴는 위로 통과할 때만 (아래서 위로 돌파)
    if (this.velocity.y <= 0) return null

    const x = this.armadillo.position.x
    const centerY = this.armadillo.position.y
    for (const island of this.islands) {
      if (island.destroyed) continue
      if (x < island.bounds.left - ARMADILLO_SIZE / 2 || x > island.bounds.right + ARMADILLO_SIZE / 2) continue
      if (isTerrainDamagedAt(island, x, ARMADILLO_SIZE / 2)) continue
      const topY = getTerrainTopY(island, x)
      const insideBody = centerY + ARMADILLO_SIZE / 2 >= island.bounds.bottom
        && centerY - ARMADILLO_SIZE / 2 <= topY
      if (insideBody) return island
    }

    return null
  }

  _breakTerrain(terrain) {
    const impactSpeed = this.velocity.length()
    const damage = terrain.softBreak || impactSpeed < UNDER_BREAK_SPEED
      ? this._getSoftTerrainDamageProfile(impactSpeed)
      : this._getTerrainDamageProfile(impactSpeed)
    damageTerrain(terrain, this.armadillo.position.x, damage.radius, damage.depth)
    this.physics.addTerrain(terrain)
    this.particleSystem.spawnDirt(this.armadillo.position.x, this.armadillo.position.y, 32 + Math.floor(damage.force * 24))
    this.physics.setArmadilloVelocity(this.velocity.x, this.velocity.y)
    this.speedRatio = Math.max(0.24, this.speedRatio - (terrain.softBreak ? 0.06 : 0.18))
    this._setArmadilloColor(0xffd54f)
    this._triggerImpact(0.52 + damage.depth * 0.2, 0x6d4c41, this.armadillo.position.x, this.armadillo.position.y)
  }

  _getTerrainDamageProfile(speed) {
    const force = THREE.MathUtils.clamp((speed - UNDER_BREAK_SPEED) / (DAMAGE_SPEED_FULL - UNDER_BREAK_SPEED), 0, 1)
    return {
      force,
      depth: 0.65 + force * 1.35,
      radius: 42 + force * 76,
    }
  }

  _getSoftTerrainDamageProfile(speed) {
    const force = THREE.MathUtils.clamp(speed / UNDER_BREAK_SPEED, 0.35, 1)
    return {
      force,
      depth: 1.35 + force * 0.8,
      radius: 58 + force * 54,
    }
  }

  _carveLaunchPath() {
    const forward = new THREE.Vector2(Math.cos(this.slingAngle), Math.sin(this.slingAngle))
    const samples = [0, 34, 68, 102]
    for (const sample of samples) {
      const x = SLING_POS.x + forward.x * sample
      const y = SLING_POS.y + ARMADILLO_SIZE / 2 + forward.y * sample
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
    const hSpeed = Math.abs(this.velocity.x)
    const impactSpeed = this.velocity.length()
    const landedSpeedRatio = Math.min(1, hSpeed / MAX_SPEED)
    this.speedRatio = Math.max(
      ROLLING_MIN_SPEED_RATIO,
      Math.min(this.speedRatio, landedSpeedRatio),
    )
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

    // 착지 충격파 ripple
    const rippleRadius = 40 + this.speedRatio * 100
    this._spawnRipple(
      this.armadillo.position.x,
      this.armadillo.position.y - ARMADILLO_SIZE / 2,
      0xffffff,
      rippleRadius,
      0.38,
    )
    this._triggerImpact(0.18 + this.speedRatio * 0.22, 0x6d4c41, this.armadillo.position.x, this.armadillo.position.y)

    // 자동으로 ROLLING 상태로 전환
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }
  }

  _springFromCloudIsland(island) {
    const topY = getTerrainTopY(island, this.armadillo.position.x)
    const vx = this.velocity.x * CLOUD_SPRING_VX_KEEP
    const vy = CLOUD_SPRING_VY + Math.min(220, Math.abs(this.velocity.y) * 0.18)
    this.armadillo.position.y = topY + ARMADILLO_SIZE / 2 + 3
    this.velocity.set(vx, vy)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)
    this._syncMotionToArmadillo()
    this.lastRating = 'SPRING'
    this._setArmadilloColor(0xd8f4ff)
    this._spawnRipple(this.armadillo.position.x, topY, 0xd8f4ff, 120, 0.42)
    this._spawnParticles(this.armadillo.position.x, topY + 8, 0xffffff, 16, 180)
    this._playTone(620, 0.10, 0.05, 'triangle')
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.bounds
    const slopeAngle = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    // sin(angle) > 0 = 오르막. 자동 가속은 주지 않고, 오르막 저항만 반영한다.
    const slopeFactor = Math.sin(slopeAngle)
    const slopeEffect = slopeFactor > 0 ? -slopeFactor * SLOPE_RESIST_PER_SEC : 0

    this.speedRatio = THREE.MathUtils.clamp(
      this.speedRatio + (slopeEffect - FRICTION_PER_SEC) * dt,
      0,
      1,
    )
    const moveX = this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.x += moveX
    if (isTerrainDamagedAt(this.currentIsland, this.armadillo.position.x, ARMADILLO_SIZE / 2)) {
      this._launchFromIsland('auto')
      return
    }
    // y는 지형 위에 올려줌 — 오르막/내리막 자연스럽게 추종
    this.armadillo.position.y = getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.armadillo.rotation.z -= moveX / (ARMADILLO_SIZE / 2)

    this._updateStallState(dt)

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      this.armadillo.position.x = bounds.right - ARMADILLO_SIZE / 2
      this._launchFromIsland('auto')
    }
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
    this.splashStarted = true
    this.splashGameOverTimer = SPLASH_GAMEOVER_DELAY
    this.lastRating = 'SPLASH'
    this._triggerSplashEffect(x)
    this.armadillo.visible = false
    this.armadillo.position.set(x, SEA_LEVEL_Y - ARMADILLO_SIZE, 0)
    this.velocity.set(0, 0)
    this.physics.setArmadilloPos(x, SEA_LEVEL_Y - ARMADILLO_SIZE)
    this.physics.setArmadilloVelocity(0, 0)
    this._syncMotionToArmadillo()
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
    // 지형 파편 + 크레이터 애니메이션
    for (const island of this.islands) {
      updateTerrainChunks(island, dt)
      updateTerrainCraters(island, dt)
    }
  }

  // speedRatio ≥ 0.55 이상이면 불꽃 트레일 방출
  // ROLLING 중 지형 파괴 가능성을 직관적으로 표시
  _updateFlameTrail(dt) {
    const FLAME_THRESHOLD = 0.55
    const isActive = (this.sm.is(State.ROLLING) || this.sm.is(State.FLYING) || this.sm.is(State.FALLING))
      && this.speedRatio >= FLAME_THRESHOLD

    this.flameTrailCooldown = Math.max(0, this.flameTrailCooldown - dt)
    if (!isActive || this.flameTrailCooldown > 0) return

    const intensity = THREE.MathUtils.clamp((this.speedRatio - FLAME_THRESHOLD) / (1 - FLAME_THRESHOLD), 0, 1)
    const interval = THREE.MathUtils.lerp(0.045, 0.015, intensity)  // 빠를수록 촘촘히
    this.flameTrailCooldown = interval

    const velAngle = this.sm.is(State.ROLLING)
      ? 0  // ROLLING 중은 오른쪽으로 이동하므로 불꽃은 왼쪽(뒤)
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
    this.boostButtonPulse = Math.max(0, this.boostButtonPulse - dt)
  }

  _gameOver(reason) {
    if (this.sm.is(State.GAMEOVER)) return
    this.sm.transition(State.GAMEOVER)
    this.velocity.set(0, 0)
    this.lastRating = reason
    this._saveBestRecord()

    if (reason === 'SPLASH' && !this.splashStarted) {
      this._triggerSplashEffect(this.armadillo.position.x)
    } else {
      this._playTone(96, 0.22, 0.1, 'triangle')
    }
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
      // 기록 저장 실패는 플레이 흐름을 막지 않는다.
    }
  }

  _render(dt, alpha = 1) {
    const renderPos = this._applyMotionInterpolation(alpha)
    // 카메라 lerp 추적 — FLYING 중 더 빠르게 (앞을 미리 봄), ROLLING/SLINGING은 부드럽게
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

    // 배경 높이 진행도 — MOON_TARGET_Y 기준 고정 (절차적 섬이 늘어나도 비율 유지)
    const heightRatio = this._getHeightRatio()
    this._updateRendererClearSky(heightRatio)
    this._updateSceneSkyPlane(heightRatio)
    this._updateWorldSea()
    this.background.update(heightRatio, this.time)

    // PostFX 파라미터 갱신 후 한 번에 렌더 (BackgroundPass → RenderPass → Effects)
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
    const boostButtonActive = this.boostButtonPulse > 0
    const boostButtonReady = this.sm.is(State.ROLLING)

    const action = this.splashGameOverTimer > 0
      ? '물속으로 빠지는 중...'
      : this.sm.is(State.TITLE)
      ? '슬링을 드래그해서 발사!'
      : this.sm.is(State.SLINGING)
        ? this.slingDragging ? '놓으면 발사!' : '드래그로 조준'
      : this.sm.is(State.ROLLING)
        ? '하단 버튼 / 스페이스: 노란 오르막에서 부스트 점프'
      : this.sm.is(State.GAMEOVER)
        ? '클릭 / 스페이스 → 재시작'
        : '비행 중...'

    const pauseLabel = this.isPaused ? 'Resume' : 'Pause'
    const phaseText = this.isPaused ? 'PAUSED' : this.sm.current
    const dangerText = this.stallTime >= STALL_DANGER_SEC
      ? `<div class="hud-danger">DANGER ${Math.max(0, STALL_GAMEOVER_SEC - this.stallTime).toFixed(1)}s</div>`
      : ''

    // 달까지 남은 거리
    const moonDistM = Math.max(0, Math.floor((MOON_TARGET_Y - this.armadillo.position.y) / PX_PER_METER))
    const moonDistText = moonDistM > 0 ? `${moonDistM}m` : '🌕 REACHED!'

    // 슬링 파워 미터 (드래그 중일 때만 표시)
    const slingMeter = this.sm.is(State.SLINGING) ? `
      <div class="meter meter-power">
        <div class="meter-fill power-fill" style="width:${pullPct}%"></div>
      </div>` : ''

    const isMoonClear = this.lastRating === 'MOON'
    const gameOverTitle = isMoonClear ? '🌕 MOON REACHED!' : (this.lastRating === 'SPLASH' ? '🌊 SPLASH!' : 'GAME OVER')
    const gameOverTitleClass = isMoonClear ? 'result-title moon-clear' : 'result-title'

    this.ui.innerHTML = `
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

      ${this.sm.is(State.TITLE) ? `
        <div class="start-layer">
          <div class="armadillo-portrait" aria-hidden="true">
            <div class="portrait-tail"></div>
            <div class="portrait-shell">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="portrait-head">
              <i></i>
            </div>
            <div class="portrait-nose"></div>
            <div class="portrait-feet"></div>
          </div>
          <div class="start-title">ARMADILLO RUSH</div>
          <div class="start-subtitle">🌊 바다 → 하늘 → 🌕 달</div>
          <div class="start-subtitle">슬링을 드래그해서 발사!</div>
          <div class="start-best">BEST ${this.bestRecord.score}</div>
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
            </div>
            <button type="button" class="clickable primary-button" data-action="restart">Retry</button>
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
