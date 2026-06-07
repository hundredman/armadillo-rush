import * as THREE from 'three'
import './ui.css'
import { SPRITES, createSprite } from './assets.js'
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
  COMBO_BONUS,
  DISTANCE_TIERS,
  FRICTION_PER_SEC,
  GRAVITY,
  INPUT_BUFFER_SEC,
  MAX_SPEED,
  PX_PER_METER,
  SLOPE_RESIST_PER_SEC,
  SPEED_BONUS,
  SCORE,
  SLOWMO_SCALE,
  SLOWMO_SEC,
  STALL_DANGER_SEC,
  STALL_GAMEOVER_SEC,
  STALL_SPEED_RATIO,
  TIMING_GOOD_RATIO,
  TIMING_PERFECT_RATIO,
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
const SEA_LEVEL_Y  = -1800  // 바다 수면 Y — 슬링보다 훨씬 아래
const MOON_TARGET_Y = 18000  // 달 목표 고도 (px)

// 슬링 상수
const SLING_POS = new THREE.Vector2(-280, 0)  // 슬링 중심 — 화면 중간 높이에서 시작
const SLING_MAX_PULL = 120      // 최대 당김 거리 (월드 px)
const SLING_MIN_PULL = 18       // 이 이하로 당기면 취소
const SLING_POWER_MIN = 0.78    // 최소 당김 시 파워 비율
const SLING_POWER_MAX = 1.0     // 최대 당김 시 파워 비율

// 카메라 뷰포트보다 이 거리만큼 앞서 있으면 새 섬을 스폰
const ISLAND_SPAWN_LOOKAHEAD = 1200

const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(28)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(68)
const ROLLING_MIN_SPEED_RATIO = 0.38
const UNDER_BREAK_SPEED = 520
const DAMAGE_SPEED_FULL = 940

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
    // 슬링 상태
    this.slingDragging = false          // 드래그 중 여부
    this.slingPull = new THREE.Vector2(0, 0)  // 당김 벡터 (월드 좌표 기준)
    this.slingPower = 0                  // 0~1 파워 비율
    this.slingAngle = Math.PI / 4        // 발사 각도 (radian)
    this.currentIsland = null
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length  // 절차적 생성 인덱스

    this.scenery = []
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.launchRating = 'MISS'
    this.combo = 0
    this.maxCombo = 0
    this.timingScore = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.bestRecord = this._loadBestRecord()
    this.isPaused = false
    this.audio = null

    // 착지 ripple 이펙트 풀 (최대 4개 동시)
    this.ripples = []
    this._buildRipplePool()

    // 슬링 고무줄 튕김 애니메이션
    this.slingSnapTime = 0       // 발사 후 튕김 경과 시간

    // 클릭 유지 시간 측정 (착지 후 hold duration 가속)
    this.inputHoldStart = -Infinity  // pointerdown 시각 (game time)

    // 불꽃 트레일 스폰 쿨다운 (매 프레임 방출 방지)
    this.flameTrailCooldown = 0

    // 부스트 쿨다운 (연속 부스트 방지)
    this.boostCooldown = 0

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
    this._buildScenery()
    // 기본 섬은 islandIndex로 구분: 0 ~ DEFAULT_ISLAND_LAYOUT.length-1 = 고정, 이후 = 절차적
    this.staticIslands = []
    this.islands = []
    for (const spec of DEFAULT_ISLAND_LAYOUT) {
      const island = createCurvedTerrain(spec)
      this.renderer.add(island.mesh)
      this.islands.push(island)
      this.staticIslands.push(island)
      this.physics.addTerrain(island)
    }
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length
    this._buildSling()

    this.armadillo = this._createArmadillo()
    this.renderer.add(this.armadillo)
    this._resetRun()

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240
  }

  /** 절차적으로 섬을 추가 생성한다. */
  _spawnNextIsland() {
    const last = this.islands[this.islands.length - 1]
    const spec = generateNextIslandSpec(last, this.islandIndex)
    this.islandIndex += 1
    const island = createCurvedTerrain(spec)
    this.renderer.add(island.mesh)
    this.islands.push(island)
    this.physics.addTerrain(island)
    this.maxHeightPx = Math.max(this.maxHeightPx, island.bounds.top + 240)
  }

  _buildSling() {
    const woodMat = new THREE.MeshBasicMaterial({ color: 0x4e342e })

    // 슬링 중심 지지대 (수직 막대) — 더 두껍게
    const pole = new THREE.Mesh(new THREE.BoxGeometry(12, 117, 1), woodMat)
    pole.position.set(SLING_POS.x, SLING_POS.y - 2, -0.05)

    // 나뭇결 장식선
    for (const dy of [-20, 0, 20]) {
      const grain = new THREE.Mesh(
        new THREE.PlaneGeometry(9, 1.5),
        new THREE.MeshBasicMaterial({ color: 0x3e2723 }),
      )
      grain.position.set(SLING_POS.x, SLING_POS.y + dy, -0.04)
      this.renderer.add(grain)
    }

    // Y자 두 갈래 — 더 두껍고 넓게 벌어짐
    const forkL = new THREE.Mesh(new THREE.BoxGeometry(10, 78, 1), woodMat)
    forkL.position.set(SLING_POS.x - 34, SLING_POS.y + 61, -0.04)
    forkL.rotation.z = THREE.MathUtils.degToRad(35)

    const forkR = new THREE.Mesh(new THREE.BoxGeometry(10, 78, 1), woodMat)
    forkR.position.set(SLING_POS.x + 34, SLING_POS.y + 61, -0.04)
    forkR.rotation.z = THREE.MathUtils.degToRad(-35)

    // 갈래 끝 마디 장식
    const knobMat = new THREE.MeshBasicMaterial({ color: 0x3e2723 })
    for (const [dx, dy] of [[-57, 90], [57, 90]]) {
      const knob = new THREE.Mesh(new THREE.CircleGeometry(7, 12), knobMat)
      knob.position.set(SLING_POS.x + dx, SLING_POS.y + dy, 0.02)
      this.renderer.add(knob)
    }

    // 고무줄 — PlaneGeometry로 두껍게 표현 (따뜻한 앰버색)
    const bandMatMesh = new THREE.MeshBasicMaterial({ color: 0xffc107 })

    // 고무줄 왼쪽: 두 점 사이를 얇은 PlaneGeometry로 표현
    const bandLGeom = new THREE.PlaneGeometry(4, 1)
    this.slingBandL = new THREE.Mesh(bandLGeom, bandMatMesh.clone())
    this.slingBandL.position.set(SLING_POS.x - 28, SLING_POS.y + 45, 0.06)

    const bandRGeom = new THREE.PlaneGeometry(4, 1)
    this.slingBandR = new THREE.Mesh(bandRGeom, bandMatMesh.clone())
    this.slingBandR.position.set(SLING_POS.x + 28, SLING_POS.y + 45, 0.06)

    // 가죽 포켓 (타원)
    this.slingPouch = new THREE.Mesh(
      new THREE.CircleGeometry(9, 16),
      new THREE.MeshBasicMaterial({ color: 0x5d4037 }),
    )
    this.slingPouch.scale.set(1.5, 1.0, 1)
    this.slingPouch.position.set(SLING_POS.x, SLING_POS.y, 0.07)

    this.renderer.add(pole)
    this.renderer.add(forkL)
    this.renderer.add(forkR)
    this.renderer.add(this.slingBandL)
    this.renderer.add(this.slingBandR)
    this.renderer.add(this.slingPouch)

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

    // 고무줄: fork 끝 → pouch 위치로 Mesh를 늘여서 표현
    const forkLX = SLING_POS.x - 57
    const forkLY = SLING_POS.y + 90
    const forkRX = SLING_POS.x + 57
    const forkRY = SLING_POS.y + 90

    const dxL = px - forkLX; const dyL = py - forkLY
    const lenL = Math.sqrt(dxL * dxL + dyL * dyL)
    this.slingBandL.position.set((forkLX + px) / 2, (forkLY + py) / 2, 0.06)
    this.slingBandL.rotation.z = Math.atan2(dyL, dxL)
    this.slingBandL.scale.set(lenL / 4, 1, 1)

    const dxR = px - forkRX; const dyR = py - forkRY
    const lenR = Math.sqrt(dxR * dxR + dyR * dyR)
    this.slingBandR.position.set((forkRX + px) / 2, (forkRY + py) / 2, 0.06)
    this.slingBandR.rotation.z = Math.atan2(dyR, dxR)
    this.slingBandR.scale.set(lenR / 4, 1, 1)

    // 포켓
    this.slingPouch.position.set(px, py, 0.07)

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

  _createArmadillo() {
    const group = new THREE.Group()

    // 꼬리
    const tail = new THREE.Mesh(
      new THREE.CapsuleGeometry(3, 16, 4, 8),
      new THREE.MeshBasicMaterial({ color: 0x8d6e63 }),
    )
    tail.rotation.z = Math.PI / 2 + 0.4
    tail.position.set(-22, -4, 0.05)

    // 몸통 (타원)
    const body = new THREE.Mesh(
      new THREE.CircleGeometry(18, 32),
      new THREE.MeshBasicMaterial({ color: 0xa1887f }),
    )
    body.scale.set(1.3, 1, 1)
    body.position.z = 0.06

    // 등껍질 돔 (위쪽 반원, 더 크게)
    const shellGeom = new THREE.CircleGeometry(20, 32, 0, Math.PI)
    const shell = new THREE.Mesh(
      shellGeom,
      new THREE.MeshBasicMaterial({ color: 0x6d4c41 }),
    )
    shell.position.set(0, 2, 0.08)

    // 껍질 밴드 4개
    const bandColors = [0x795548, 0x8d6e63, 0x795548, 0x8d6e63]
    for (let i = 0; i < 4; i++) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(36 - i * 6, 3.5),
        new THREE.MeshBasicMaterial({ color: bandColors[i] }),
      )
      band.position.set(-i * 1.5, 14 - i * 6, 0.09)
      group.add(band)
    }

    // 머리 (작은 원)
    const head = new THREE.Mesh(
      new THREE.CircleGeometry(9, 24),
      new THREE.MeshBasicMaterial({ color: 0xa1887f }),
    )
    head.position.set(20, 2, 0.07)

    // 코끝 (뾰족)
    const snout = new THREE.Mesh(
      new THREE.CircleGeometry(5, 16),
      new THREE.MeshBasicMaterial({ color: 0x8d6e63 }),
    )
    snout.scale.set(1.6, 0.8, 1)
    snout.position.set(28, 0, 0.08)

    // 눈
    const eyeWhite = new THREE.Mesh(
      new THREE.CircleGeometry(3.5, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    )
    eyeWhite.position.set(22, 6, 0.10)
    const eyePupil = new THREE.Mesh(
      new THREE.CircleGeometry(2, 12),
      new THREE.MeshBasicMaterial({ color: 0x1a1a1a }),
    )
    eyePupil.position.set(23, 6, 0.11)

    // 귀
    const earShape = new THREE.Shape()
    earShape.moveTo(0, 0); earShape.lineTo(-5, 14); earShape.lineTo(5, 14); earShape.closePath()
    const ear = new THREE.Mesh(
      new THREE.ShapeGeometry(earShape),
      new THREE.MeshBasicMaterial({ color: 0xa1887f }),
    )
    ear.position.set(18, 10, 0.07)

    group.add(tail, body, shell, head, snout, eyeWhite, eyePupil, ear)
    this.armadilloBody = body
    this.armadilloShell = shell
    this.armadilloBodyMat = body.material
    this.armadilloShellMat = shell.material
    return group
  }

  _setArmadilloColor(color) {
    if (this.armadilloBodyMat) this.armadilloBodyMat.color.set(color)
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
      return true
    }

    // ── 슬링 드래그 (마우스 + 터치 공통) ──
    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return
      event.preventDefault()
      this._ensureAudio()
      this.inputHoldStart = this.time
      this._handlePointerDown(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointermove', (event) => {
      if (!this.slingDragging) return
      event.preventDefault()
      this._handlePointerMove(event.clientX, event.clientY)
    }, { passive: false })

    window.addEventListener('pointerup', (event) => {
      if (this.slingDragging) {
        event.preventDefault()
        this._handlePointerRelease()
        return
      }
      // 슬링 외 상태: ROLLING이면 hold 포함 부스트, 나머지는 일반 탭
      this._handleBoostRelease()
    }, { passive: false })

    window.addEventListener('pointercancel', () => {
      this.slingDragging = false
      this.slingPull.set(0, 0)
    })

    // 키보드
    window.addEventListener('keydown', (event) => {
      if (event.repeat) return
      if (event.code === 'Space') {
        event.preventDefault()
        this._ensureAudio()
        this.inputHoldStart = this.time
        this._handleKeyboardPress()
        return
      }
      if (event.code === 'Escape') {
        event.preventDefault()
        this._togglePause()
      }
    })

    // Space 뗄 때: ROLLING이면 hold 포함 부스트
    window.addEventListener('keyup', (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        this._handleBoostRelease()
      }
    })
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
      this._resetRun()
      this.sm.transition(State.SLINGING)
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
      this._launchFromIsland()
      return
    }

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.bufferedInputTime = this.time
    }
  }

  _handlePointerMove(clientX, clientY) {
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

  // pointerup / keyup(Space) 공통 — 항상 _handleTap 위임
  _handleBoostRelease() {
    this._handleTap()
  }

  _handleTap() {
    if (this.isPaused) return
    this._ensureAudio()
    if (this.sm.is(State.TITLE)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }
    // ROLLING 중 클릭/스페이스 = 즉시 점프
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland()
      return
    }
    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
    }
  }

  // Space keydown
  _handleKeyboardPress() {
    if (this.isPaused) return
    this._ensureAudio()

    if (this.sm.is(State.TITLE) || this.sm.is(State.GAMEOVER)) {
      this._resetRun()
      this.sm.transition(State.SLINGING)
      return
    }

    // SLINGING: 풀파워 발사
    if (this.sm.is(State.SLINGING)) {
      this.slingAngle = THREE.MathUtils.degToRad(50)
      this.slingPower = SLING_POWER_MAX
      this.slingPull.set(
        -Math.cos(this.slingAngle) * SLING_MAX_PULL,
        -Math.sin(this.slingAngle) * SLING_MAX_PULL,
      )
      this._launchFromSling()
      return
    }

    // ROLLING: 즉시 점프
    if (this.sm.is(State.ROLLING)) {
      this._launchFromIsland()
    }
  }


  _resetRun() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.slingDragging = false
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
    this.currentIsland = null
    this._restoreTerrain()
    this._clearParticles()
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.launchRating = 'MISS'
    this.combo = 0
    this.maxCombo = 0
    this.timingScore = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.isPaused = false
    this.armadillo.position.set(SLING_POS.x, SLING_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._updateSlingVisuals()
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.TITLE)
  }

  _restartToTitle() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.slingDragging = false
    this.slingPull.set(0, 0)
    this.slingPower = 0
    this.slingAngle = Math.PI / 4
    this.currentIsland = null
    this._restoreTerrain()
    this._clearParticles()
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.launchRating = 'MISS'
    this.combo = 0
    this.maxCombo = 0
    this.timingScore = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.isPaused = false
    this.armadillo.position.set(SLING_POS.x, SLING_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
    this._updateSlingVisuals()
    this.sm.current = State.TITLE
  }

  _restoreTerrain() {
    this.physics.removeAllTerrain()

    // 절차적으로 추가된 섬과 그 장애물 제거
    if (this.staticIslands) {
      const staticSet = new Set(this.staticIslands)
      // 절차적 섬 메시를 씬에서 제거
      for (const island of this.islands) {
        if (!staticSet.has(island)) this.renderer.remove(island.mesh)
      }
      this.islands = [...this.staticIslands]
    }
    this.islandIndex = DEFAULT_ISLAND_LAYOUT.length

    for (const island of this.islands) {
      island.destroyed = false
      island.mesh.visible = true
      island.damageZones = []
      for (const mark of island.damageMarks) {
        island.mesh.remove(mark)
      }
      island.damageMarks = []
      if (island.animChunks) {
        for (const chunk of island.animChunks) {
          island.mesh.remove(chunk.mesh)
        }
        island.animChunks = []
      }
      for (const child of island.mesh.children) {
        if (child.userData.damageable) child.visible = true
      }
      this.physics.addTerrain(island)
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
    this.timingPending = false
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

    // 슬링 고무줄 리셋 (발사 후)
    this.slingPull.set(0, 0)
    this.slingPower = 0

    this._carveLaunchPath()
    this._triggerLaunchImpact()
    this._playTone(220 + power * 260, 0.12, 0.08 + power * 0.06, 'square')
  }

  _launchFromIsland() {
    if (this.timingPending) {
      this._applyTimingRating('MISS')
    }

    if (!this.sm.transition(State.FALLING)) return
    const launchSpeed = (0.55 + Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO) * 0.45) * LAUNCH_SPEED
    const launchAngle = this._getExitLaunchAngle(this.currentIsland)
    const vx = Math.cos(launchAngle) * launchSpeed
    const vy = Math.sin(launchAngle) * launchSpeed
    this.velocity.set(vx, vy)

    // Planck body에도 속도 동기화 (누락 시 이전 착지 속도로 비행)
    this.physics.setArmadilloPos(this.armadillo.position.x, this.armadillo.position.y)
    this.physics.setArmadilloVelocity(vx, vy)

    this.currentIsland = null
    this.timingPending = false
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
    this._updateParticles(simDt)
    this._updateEffects(dt)
    this._tickSlingSnap(dt)
    this._updateScenery()

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - SLING_POS.y)
    this.bestDistancePx = Math.max(this.bestDistancePx, this.armadillo.position.x - SLING_POS.x)

    // 절차적 섬 스폰: 비행/추락 중일 때만 체크 (SLINGING 중 무한 스폰 방지)
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING) || this.sm.is(State.ROLLING)) {
      const lastIsland = this.islands[this.islands.length - 1]
      if (lastIsland.bounds.left - this.armadillo.position.x < ISLAND_SPAWN_LOOKAHEAD) {
        this._spawnNextIsland()
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

  _updateFlight(dt) {
    const prevY    = this.armadillo.position.y
    const prevVelY = this.velocity.y

    // Planck 스텝 — 중력·충돌·탄성 처리
    this.physics.step(dt)
    const state = this.physics.getArmadilloState()

    this.armadillo.position.x = state.x
    this.armadillo.position.y = state.y
    this.velocity.set(state.vx, state.vy)

    const prevBottom = prevY - ARMADILLO_SIZE / 2
    const nextBottom = state.y - ARMADILLO_SIZE / 2

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
      if (this.sm.is(State.FLYING)) {
        // 첫 발사가 바다로 빠지면 슬링 복귀
        this.sm.transition(State.SLINGING)
        this._resetRun()
      } else {
        this._gameOver('SPLASH')
      }
      return
    }

    // ⑤ 화면 밖 하단 탈출 (바다 위지만 카메라 훨씬 아래 — 안전망)
    if (state.y < this.camPos.y - 600) {
      if (this.sm.is(State.FLYING)) {
        this.sm.transition(State.SLINGING)
        this._resetRun()
      } else {
        this._gameOver('SPLASH')
      }
    }
  }

  _reachMoon() {
    if (this.sm.is(State.GAMEOVER)) return
    this.sm.transition(State.GAMEOVER)
    this.velocity.set(0, 0)
    this.timingPending = false
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

  _findUnderTerrainBreak(prevBottom, nextBottom) {
    if (this.velocity.y <= 0) return null
    const prevTop = prevBottom + ARMADILLO_SIZE
    const nextTop = nextBottom + ARMADILLO_SIZE

    for (const island of this.islands) {
      if (island.destroyed) continue
      const bounds = island.bounds
      const withinX = this.armadillo.position.x >= bounds.left - ARMADILLO_SIZE / 2
        && this.armadillo.position.x <= bounds.right + ARMADILLO_SIZE / 2
      const crossedBottom = prevTop <= bounds.bottom && nextTop >= bounds.bottom
      if (isTerrainDamagedAt(island, this.armadillo.position.x, ARMADILLO_SIZE / 2)) continue
      if (withinX && crossedBottom) return island
    }

    return null
  }

  _findPiercedTerrain() {
    if (this.velocity.length() < UNDER_BREAK_SPEED) return null
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
    const movingUp = this.velocity.y > 0

    if (impactSpeed < UNDER_BREAK_SPEED) {
      if (!movingUp) this.velocity.y = -Math.abs(this.velocity.y) * 0.45
      this.speedRatio = Math.max(0.2, this.speedRatio - 0.12)
      this._triggerImpact(0.35, 0xff7043, this.armadillo.position.x, this.armadillo.position.y)
      return
    }

    const damage = this._getTerrainDamageProfile(impactSpeed)
    damageTerrain(terrain, this.armadillo.position.x, damage.radius, damage.depth)
    this.particleSystem.spawnDirt(this.armadillo.position.x, this.armadillo.position.y, 24 + Math.floor(damage.force * 20))
    this.speedRatio = Math.max(0.2, this.speedRatio - 0.18)
    this._setArmadilloColor(0xffd54f)
    this._triggerImpact(0.55 + damage.depth * 0.18, 0x6d4c41, this.armadillo.position.x, this.armadillo.position.y)
  }

  _getTerrainDamageProfile(speed) {
    const force = THREE.MathUtils.clamp((speed - UNDER_BREAK_SPEED) / (DAMAGE_SPEED_FULL - UNDER_BREAK_SPEED), 0, 1)
    return {
      force,
      depth: 0.65 + force * 1.35,
      radius: 42 + force * 76,
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
    this.currentIsland = island
    const hSpeed = Math.abs(this.velocity.x)
    this.speedRatio = Math.max(
      ROLLING_MIN_SPEED_RATIO,
      Math.min(1, hSpeed / MAX_SPEED),
    )
    this.velocity.set(0, 0)
    this.physics.setArmadilloVelocity(0, 0)
    this.armadillo.position.y = getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.timingPending = false
    this.lastRating = 'LANDED'

    // 착지 즉시 지형 파괴 (속도 무관, 항상)
    const damage = this._getTerrainDamageProfile(Math.max(UNDER_BREAK_SPEED + 1, hSpeed))
    damageTerrain(island, this.armadillo.position.x, damage.radius, damage.depth)
    this.particleSystem.spawnDirt(this.armadillo.position.x, this.armadillo.position.y, 18 + Math.floor(damage.force * 16))

    // 착지 충격파 ripple
    const rippleRadius = 40 + this.speedRatio * 100
    this._spawnRipple(
      this.armadillo.position.x,
      this.armadillo.position.y - ARMADILLO_SIZE / 2,
      0xffffff,
      rippleRadius,
      0.38,
    )
    this._triggerImpact(0.3 + this.speedRatio * 0.3, 0x6d4c41, this.armadillo.position.x, this.armadillo.position.y)

    // 자동으로 ROLLING 상태로 전환
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.bounds
    const slopeAngle = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    const slope = Math.sin(slopeAngle)
    this.speedRatio = THREE.MathUtils.clamp(
      this.speedRatio - FRICTION_PER_SEC * dt - slope * SLOPE_RESIST_PER_SEC * dt,
      0,
      1,
    )
    this.armadillo.position.x += this.speedRatio * MAX_SPEED * dt
    if (isTerrainDamagedAt(this.currentIsland, this.armadillo.position.x, ARMADILLO_SIZE / 2)) {
      this._launchFromIsland()
      return
    }
    this.armadillo.position.y = getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.armadillo.rotation.z = slopeAngle

    this._updateStallState(dt)

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      this.armadillo.position.x = bounds.right - ARMADILLO_SIZE / 2
      this._launchFromIsland()
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

  _getTimingWindow() {
    const distanceM = Math.max(0, this.bestDistancePx / PX_PER_METER)
    return DISTANCE_TIERS.find((tier) => distanceM < tier.maxM)?.window ?? DISTANCE_TIERS[DISTANCE_TIERS.length - 1].window
  }

  _judgeTiming() {
    if (!this.timingPending) return

    const elapsed = this.time - this.landingTime
    if (elapsed < 0) return

    if (elapsed <= this.timingWindow * TIMING_PERFECT_RATIO) {
      this._applyTimingRating('PERFECT')
    } else if (elapsed <= this.timingWindow * TIMING_GOOD_RATIO) {
      this._applyTimingRating('GOOD')
    } else if (elapsed <= this.timingWindow) {
      this._applyTimingRating('OK')
    } else {
      this._applyTimingRating('MISS')
    }
  }

  /** pointerup 기준: 클릭 타이밍 판정 + hold 지속시간 보너스 */
  _judgeTimingWithHold() {
    if (!this.timingPending) return
    this._judgeTiming()

    // hold 지속시간 기반 추가 가속 (착지 이후 누른 시간)
    const holdSec = Math.max(0, this.time - Math.max(this.inputHoldStart, this.landingTime))
    // 0~0.35s 유지 → 최대 +0.16 추가 가속
    const holdBonus = Math.min(holdSec / 0.35, 1.0) * 0.16
    this.speedRatio = Math.min(1, this.speedRatio + holdBonus)
  }

  _applyTimingRating(rating) {
    if (!this.timingPending && rating !== 'MISS') return

    this.timingPending = false
    this.lastRating = rating
    this.launchRating = rating
    this.combo = rating === 'PERFECT' ? this.combo + 1 : 0
    this.maxCombo = Math.max(this.maxCombo, this.combo)
    this.timingScore += SCORE.timing[rating] ?? 0

    const comboBonus = this._getComboBonus()
    const speedBonus = SPEED_BONUS[rating] + (rating === 'PERFECT' ? comboBonus : 0)
    this.speedRatio = Math.min(1, this.speedRatio + speedBonus)

    const colorByRating = {
      PERFECT: 0xffd54f,
      GOOD: 0xff7043,
      OK: 0xff1744,
      MISS: 0x9e9e9e,
    }
    const ratingColor = colorByRating[rating] ?? 0xff1744
    this._setArmadilloColor(ratingColor)
    if (rating === 'PERFECT') {
      this.particleSystem.spawnRating(this.armadillo.position.x, this.armadillo.position.y, 0xffd54f, 22)
    } else if (rating === 'GOOD') {
      this.particleSystem.spawnRating(this.armadillo.position.x, this.armadillo.position.y, 0xff7043, 14)
    }
    this._playRatingSound(rating)
  }

  _getComboBonus() {
    for (const rule of COMBO_BONUS) {
      if (this.combo >= rule.min) return rule.bonus
    }
    return 0
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

  _updateParticles(dt) {
    this.particleSystem.update(dt, GRAVITY)
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
  }

  _gameOver(reason) {
    if (this.sm.is(State.GAMEOVER)) return
    this.sm.transition(State.GAMEOVER)
    this.velocity.set(0, 0)
    this.timingPending = false
    this.lastRating = reason
    this._saveBestRecord()

    if (reason === 'SPLASH') {
      // 바다로 추락 — 물 튀김 파티클
      this.particleSystem.spawnBurst(
        this.armadillo.position.x, this.armadillo.position.y,
        0x4dd0e1, 20, 180,
      )
      this.trauma = Math.min(1, this.trauma + 0.6)
      this._playTone(140, 0.18, 0.08, 'sine')
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

  _playRatingSound(rating) {
    const freqByRating = {
      PERFECT: 720,
      GOOD: 520,
      OK: 360,
      MISS: 150,
    }
    const durationByRating = {
      PERFECT: 0.12,
      GOOD: 0.09,
      OK: 0.07,
      MISS: 0.08,
    }
    this._playTone(freqByRating[rating] ?? 260, durationByRating[rating] ?? 0.08, 0.05, 'sine')
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
      + this.timingScore
      + this.maxCombo * SCORE.comboPerLevel
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

  _render(dt) {
    // 카메라 lerp 추적 — FLYING 중 더 빠르게 (앞을 미리 봄), ROLLING/SLINGING은 부드럽게
    const cameraLerp = this.sm.is(State.FLYING) ? CAMERA_LERP * 1.5 : CAMERA_LERP
    this.camPos.lerp(this.camTarget, cameraLerp)
    const shake = this.trauma * this.trauma * 16
    const shakeX = (Math.random() - 0.5) * shake
    const shakeY = (Math.random() - 0.5) * shake
    this.renderer.setCenter(this.camPos.x, this.camPos.y, shakeX, shakeY)

    // 배경 높이 진행도 — MOON_TARGET_Y 기준 고정 (절차적 섬이 늘어나도 비율 유지)
    const heightRatio = THREE.MathUtils.clamp(
      (this.armadillo.position.y - SEA_LEVEL_Y) / (MOON_TARGET_Y - SEA_LEVEL_Y), 0, 1)
    this.background.update(heightRatio, this.time)

    // PostFX 파라미터 갱신 후 한 번에 렌더 (BackgroundPass → RenderPass → Effects)
    this.postfx.update(this.trauma, heightRatio, dt ?? FIXED_DT)
    this.postfx.render(dt ?? FIXED_DT)
    this._renderHud()
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

    const timingElapsed = this.time - this.landingTime
    const timingFill = this.timingPending
      ? THREE.MathUtils.clamp(1 - timingElapsed / this.timingWindow, 0, 1) * 100
      : 0

    const action = this.sm.is(State.TITLE)
      ? 'Drag sling / Space to launch'
      : this.sm.is(State.SLINGING)
        ? this.slingDragging ? 'Release to fire!' : 'Drag to aim & power'
      : this.sm.is(State.ROLLING)
        ? this.timingPending ? 'Tap: Timing!' : 'Rolling...'
        : this.sm.is(State.GAMEOVER)
          ? 'Tap / Space: Retry'
          : 'Flying'

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

      <div class="meter meter-timing">
        <div class="meter-fill timing-fill" style="width:${timingFill}%"></div>
      </div>

      ${this.sm.is(State.TITLE) ? `
        <div class="start-layer">
          <div class="start-title">ARMADILLO RUSH</div>
          <div class="start-subtitle">🌊 Sea → Sky → 🌕 Moon</div>
          <div class="start-subtitle">Drag the sling to launch!</div>
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
              <div><span>MAX COMBO</span><strong>${this.maxCombo}</strong></div>
              <div><span>BEST</span><strong>${this.bestRecord.score}</strong></div>
            </div>
            <button class="clickable primary-button" data-action="restart">Retry</button>
          </div>
        </div>
      ` : ''}

      ${this.isPaused ? `
        <div class="pause-layer">
          <div class="pause-menu">
            <div class="pause-title">PAUSED</div>
            <button class="clickable primary-button" data-action="pause">Resume</button>
            <button class="clickable secondary-button" data-action="restart">Restart</button>
          </div>
        </div>
      ` : ''}

      ${!this.isPaused ? `
        <div class="control-row">
          <button class="clickable secondary-button" data-action="pause">${pauseLabel}</button>
          <button class="clickable primary-button" data-action="restart">Restart</button>
        </div>
      ` : ''}

      <div class="action-hint">${action}</div>
    `
  }

  loop() {
    const now = performance.now()
    let frameDt = (now - this.lastNow) / 1000
    this.lastNow = now
    if (frameDt > MAX_FRAME_DT) frameDt = MAX_FRAME_DT

    this.accumulator += frameDt
    while (this.accumulator >= FIXED_DT) {
      this._update(FIXED_DT)
      this.accumulator -= FIXED_DT
    }
    this._render(frameDt)
    requestAnimationFrame(() => this.loop())
  }

  start() {
    requestAnimationFrame(() => this.loop())
  }
}

const game = new Game()
game.start()
