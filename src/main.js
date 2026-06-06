import * as THREE from 'three'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { StateMachine, State } from './state.js'
import { CAMERA_LERP, FRICTION_PER_SEC, GRAVITY, MAX_SPEED, PX_PER_METER } from './config.js'

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
const LAUNCH_SPEED = 850      // 현재 placeholder 섬 배치에 맞춘 2단계 검증용 발사 속도
const CANNON_POS = new THREE.Vector2(-280, -330)
const AIM_MIN_ANGLE = THREE.MathUtils.degToRad(38)
const AIM_MAX_ANGLE = THREE.MathUtils.degToRad(60)
const AIM_SWEEP_SPEED = 1.9
const POWER_MIN = 0.85
const POWER_MAX = 1.0
const POWER_SWEEP_SPEED = 2.8
const ROLLING_MIN_SPEED_RATIO = 0.38
const TIMING_TEST_BONUS = 0.15
const TERRAIN_THICKNESS = 64
const UNDER_BREAK_SPEED = 520
const UI_CANNON_X = 92
const UI_CANNON_Y = 104
const UI_AIM_RADIUS = 72

class Game {
  constructor() {
    const canvas = document.getElementById('game-canvas')
    this.renderer = new Renderer(canvas)
    this.background = new Background(this.renderer)
    this.sm = new StateMachine(State.TITLE)

    this.time = 0
    this.accumulator = 0
    this.lastNow = performance.now()
    this.velocity = new THREE.Vector2(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.currentIsland = null
    this.bestHeightPx = 0
    this.isPaused = false

    // 카메라가 추적할 목표
    this.camTarget = new THREE.Vector2(0, 0)
    this.camPos = new THREE.Vector2(0, 0)
    this.ui = document.getElementById('ui-overlay')

    this._buildPlaceholderWorld()
    this._bindInput()

    this.sm.onChange((from, to) => console.log(`[state] ${from} → ${to}`))
    // 1단계 확인용: 타이틀 → 조준으로 바로 진입해 placeholder 가 보이게
    this.sm.transition(State.AIMING)
  }

  // ── 2단계 placeholder: 대포 + 섬 + 발사 가능한 아르마딜로 ──
  _buildPlaceholderWorld() {
    this.islands = []
    const islandLayout = [
      { x: 150, y: -250, w: 1000, rise: 18, amp: 18 },
      { x: 1080, y: -185, w: 1320, rise: 70, amp: 26 },
      { x: 1960, y: -20, w: 760, rise: 90, amp: 34 },
      { x: 2720, y: 140, w: 660, rise: 105, amp: 38 },
      { x: 3440, y: 320, w: 560, rise: 120, amp: 42 },
      { x: 4120, y: 525, w: 500, rise: 135, amp: 42 },
      { x: 4770, y: 750, w: 440, rise: 150, amp: 46 },
      { x: 5380, y: 1000, w: 390, rise: 165, amp: 48 },
      { x: 5960, y: 1275, w: 340, rise: 180, amp: 50 },
      { x: 6500, y: 1580, w: 300, rise: 195, amp: 52 },
    ]
    for (const spec of islandLayout) {
      const island = this._createCurvedTerrain(spec)
      this.renderer.add(island.mesh)
      this.islands.push(island)
    }

    const cannonBase = new THREE.Mesh(
      new THREE.BoxGeometry(80, 24, 1),
      new THREE.MeshBasicMaterial({ color: 0x5d4037 }),
    )
    cannonBase.position.set(CANNON_POS.x, CANNON_POS.y - 14, 0)
    this.renderer.add(cannonBase)

    this.cannonBarrel = new THREE.Mesh(
      new THREE.BoxGeometry(78, 18, 1),
      new THREE.MeshBasicMaterial({ color: 0x8d6e63 }),
    )
    this.cannonBarrel.position.set(CANNON_POS.x + 28, CANNON_POS.y + 10, 0)
    this.cannonBarrel.rotation.z = this.aimAngle
    this.renderer.add(this.cannonBarrel)

    const aGeom = new THREE.BoxGeometry(ARMADILLO_SIZE, ARMADILLO_SIZE, 1)
    const aMat = new THREE.MeshBasicMaterial({ color: 0xff1744 })
    this.armadillo = new THREE.Mesh(aGeom, aMat)
    this.renderer.add(this.armadillo)
    this._resetRun()

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240   // 배경 heightRatio 정규화 기준
  }

  _bindInput() {
    const triggerAction = () => {
      this._handleAction()
    }

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    const handleControlButton = (event) => {
      const button = event.target.closest('[data-action]')
      if (!button) return false

      event.preventDefault()
      event.stopPropagation()
      if (button.dataset.action === 'pause') this._togglePause()
      if (button.dataset.action === 'restart') this._restartToAim()
      return true
    }

    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return

      if (!isTouchDevice) return
      if (event.pointerType === 'mouse') return
      triggerAction()
    })

    window.addEventListener('keydown', (event) => {
      if (event.repeat) return

      if (event.code === 'Space') {
        event.preventDefault()
        triggerAction()
        return
      }

      if (event.code === 'Escape') {
        event.preventDefault()
        this._togglePause()
      }
    })
  }

  _createCurvedTerrain({ x, y, w, rise, amp }) {
    const left = x - w / 2
    const right = x + w / 2
    const controls = [
      new THREE.Vector3(left, y, 0),
      new THREE.Vector3(left + w * 0.28, y + rise * 0.28 + amp, 0),
      new THREE.Vector3(left + w * 0.62, y + rise * 0.72 - amp * 0.35, 0),
      new THREE.Vector3(right, y + rise, 0),
    ]
    const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal', 0.35)
    const topPoints = curve.getPoints(32).map((point) => new THREE.Vector2(point.x, point.y))
    const minY = Math.min(...topPoints.map((point) => point.y))
    const maxY = Math.max(...topPoints.map((point) => point.y))
    const bottomY = minY - TERRAIN_THICKNESS
    const shape = new THREE.Shape()
    shape.moveTo(topPoints[0].x, topPoints[0].y)
    for (let i = 1; i < topPoints.length; i++) {
      shape.lineTo(topPoints[i].x, topPoints[i].y)
    }
    shape.lineTo(right, bottomY)
    shape.lineTo(left, bottomY)
    shape.closePath()

    const mesh = new THREE.Mesh(
      new THREE.ShapeGeometry(shape, 12),
      new THREE.MeshBasicMaterial({ color: 0x4caf50, side: THREE.DoubleSide }),
    )

    return {
      mesh,
      points: topPoints,
      destroyed: false,
      bounds: {
        left,
        right,
        top: maxY,
        bottom: bottomY,
      },
    }
  }

  _getTerrainTopY(terrain, x) {
    const points = terrain.points
    if (x <= points[0].x) return points[0].y
    if (x >= points[points.length - 1].x) return points[points.length - 1].y

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const next = points[i]
      if (x >= prev.x && x <= next.x) {
        const t = (x - prev.x) / (next.x - prev.x)
        return THREE.MathUtils.lerp(prev.y, next.y, t)
      }
    }

    return points[points.length - 1].y
  }

  _getTerrainSlopeAngle(terrain, x) {
    const points = terrain.points
    let nearest = 1
    for (let i = 1; i < points.length; i++) {
      if (Math.abs(points[i].x - x) < Math.abs(points[nearest].x - x)) nearest = i
    }
    const prev = points[Math.max(0, nearest - 1)]
    const next = points[Math.min(points.length - 1, nearest + 1)]
    return Math.atan2(next.y - prev.y, next.x - prev.x)
  }

  _resetRun() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.currentIsland = null
    this.bestHeightPx = 0
    this.isPaused = false
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this.armadillo.material.color.set(0xff1744)
    if (this.cannonBarrel) this.cannonBarrel.rotation.z = this.aimAngle
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.AIMING)
  }

  _restartToAim() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.currentIsland = null
    this.bestHeightPx = 0
    this.isPaused = false
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this.armadillo.material.color.set(0xff1744)
    if (this.cannonBarrel) this.cannonBarrel.rotation.z = this.aimAngle
    this.sm.current = State.AIMING
  }

  _togglePause() {
    if (this.sm.is(State.GAMEOVER)) return
    this.isPaused = !this.isPaused
  }

  _handleAction() {
    if (this.isPaused) return

    if (this.sm.is(State.AIMING)) {
      this.lockedAimAngle = this.aimAngle
      this.sm.transition(State.POWERING)
      return
    }

    if (this.sm.is(State.POWERING)) {
      this._launchFromCannon()
      return
    }

    if (this.sm.is(State.ROLLING)) {
      this.speedRatio = Math.min(1, this.speedRatio + TIMING_TEST_BONUS)
      this.armadillo.material.color.set(this.speedRatio >= 0.7 ? 0xffd54f : 0xff1744)
      return
    }

    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
    }
  }

  _launchFromCannon() {
    if (!this.sm.transition(State.FLYING)) return
    this.speedRatio = this.powerRatio
    this.armadillo.material.color.set(0xff1744)
    this.velocity.set(
      Math.cos(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
      Math.sin(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
    )
  }

  _launchFromIsland() {
    if (!this.sm.transition(State.FALLING)) return
    const launchSpeed = (0.55 + Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO) * 0.45) * LAUNCH_SPEED
    const launchAngle = Math.PI / 4
    this.velocity.set(
      Math.cos(launchAngle) * launchSpeed,
      Math.sin(launchAngle) * launchSpeed,
    )
    this.currentIsland = null
  }

  _update(dt) {
    if (this.isPaused) {
      this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
      return
    }

    this.time += dt
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this._updateFlight(dt)
    } else if (this.sm.is(State.ROLLING)) {
      this._updateRolling(dt)
    } else if (this.sm.is(State.AIMING) || this.sm.is(State.POWERING)) {
      this._updateAiming(dt)
    }

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - CANNON_POS.y)

    // 카메라 추적 대상 = 아르마딜로 위치
    this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
  }

  _updateAiming(dt) {
    if (this.sm.is(State.AIMING)) {
      const t = (Math.sin(this.time * AIM_SWEEP_SPEED) + 1) * 0.5
      this.aimAngle = THREE.MathUtils.lerp(AIM_MIN_ANGLE, AIM_MAX_ANGLE, t)
      this.lockedAimAngle = this.aimAngle
    }

    if (this.sm.is(State.POWERING)) {
      const t = (Math.sin(this.time * POWER_SWEEP_SPEED) + 1) * 0.5
      this.powerRatio = THREE.MathUtils.lerp(POWER_MIN, POWER_MAX, t)
    }

    this.cannonBarrel.rotation.z = this.lockedAimAngle
  }

  _updateFlight(dt) {
    const prevBottom = this.armadillo.position.y - ARMADILLO_SIZE / 2

    this.velocity.y -= GRAVITY * dt
    this.armadillo.position.x += this.velocity.x * dt
    this.armadillo.position.y += this.velocity.y * dt

    const nextBottom = this.armadillo.position.y - ARMADILLO_SIZE / 2
    const landedIsland = this._findLandingIsland(prevBottom, nextBottom)
    if (landedIsland) {
      this._landOnIsland(landedIsland)
      return
    }

    const brokenTerrain = this._findUnderTerrainBreak(prevBottom, nextBottom)
    if (brokenTerrain) {
      this._breakTerrain(brokenTerrain)
    }

    if (this.armadillo.position.y < this.camPos.y - 520) {
      if (this.sm.is(State.FLYING)) {
        this.sm.transition(State.AIMING)
        this._resetRun()
      } else {
        this.sm.transition(State.GAMEOVER)
        this.velocity.set(0, 0)
      }
    }
  }

  _findLandingIsland(prevBottom, nextBottom) {
    if (this.velocity.y > 0) return null

    for (const island of this.islands) {
      if (island.destroyed) continue
      const bounds = island.bounds
      const topY = this._getTerrainTopY(island, this.armadillo.position.x)
      const withinX = this.armadillo.position.x >= bounds.left - ARMADILLO_SIZE / 2
        && this.armadillo.position.x <= bounds.right + ARMADILLO_SIZE / 2
      const crossedTop = prevBottom >= topY && nextBottom <= topY
      if (withinX && crossedTop) return island
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
      if (withinX && crossedBottom) return island
    }

    return null
  }

  _breakTerrain(terrain) {
    const impactSpeed = this.velocity.length()
    if (impactSpeed < UNDER_BREAK_SPEED) {
      this.velocity.y = -Math.abs(this.velocity.y) * 0.45
      this.speedRatio = Math.max(0.2, this.speedRatio - 0.12)
      return
    }

    terrain.destroyed = true
    terrain.mesh.visible = false
    this.speedRatio = Math.max(0.2, this.speedRatio - 0.18)
    this.armadillo.material.color.set(0xffd54f)
  }

  _landOnIsland(island) {
    this.currentIsland = island
    this.velocity.set(0, 0)
    this.speedRatio = Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO)
    this.armadillo.position.y = this._getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.bounds
    this.speedRatio = Math.max(ROLLING_MIN_SPEED_RATIO, this.speedRatio - FRICTION_PER_SEC * dt)
    this.armadillo.position.x += this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.y = this._getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.armadillo.rotation.z = this._getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      this.armadillo.position.x = bounds.right - ARMADILLO_SIZE / 2
      this._launchFromIsland()
    }
  }

  _render() {
    // 카메라 lerp 추적 (§11)
    this.camPos.lerp(this.camTarget, CAMERA_LERP)
    this.renderer.setCenter(this.camPos.x, this.camPos.y)

    // 배경 높이 진행도 갱신
    const heightRatio = THREE.MathUtils.clamp(
      (this.armadillo.position.y + 300) / (this.maxHeightPx + 300), 0, 1)
    this.background.update(heightRatio, this.time)

    this.background.render()
    this.renderer.render()
    this._renderHud()
  }

  _renderHud() {
    if (!this.ui) return
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const speed = Math.round(this.speedRatio * 100)
    const aimDeg = Math.round(THREE.MathUtils.radToDeg(this.lockedAimAngle))
    const aimActiveDeg = Math.round(THREE.MathUtils.radToDeg(this.aimAngle))
    const aimLineX = UI_CANNON_X + Math.cos(this.lockedAimAngle) * UI_AIM_RADIUS
    const aimLineY = UI_CANNON_Y - Math.sin(this.lockedAimAngle) * UI_AIM_RADIUS
    const aimDotX = UI_CANNON_X + Math.cos(this.aimAngle) * UI_AIM_RADIUS
    const aimDotY = UI_CANNON_Y - Math.sin(this.aimAngle) * UI_AIM_RADIUS
    const powerPercent = Math.round(this.powerRatio * 100)
    const powerFill = THREE.MathUtils.clamp((this.powerRatio - POWER_MIN) / (POWER_MAX - POWER_MIN), 0, 1) * 100
    const action = this.sm.is(State.AIMING)
      ? 'Space / Tap: Lock Angle'
      : this.sm.is(State.POWERING)
        ? 'Space / Tap: Lock Power'
      : this.sm.is(State.ROLLING)
        ? 'Space / Tap: Boost'
        : this.sm.is(State.GAMEOVER)
          ? 'Space / Tap: Retry'
          : 'Flying'
    const pauseLabel = this.isPaused ? 'Resume' : 'Pause'
    const phaseText = this.isPaused ? 'PAUSED' : this.sm.current

    this.ui.innerHTML = `
      <div style="position:fixed;left:18px;top:16px;font-weight:700;line-height:1.5">
        <div>STATE ${phaseText}</div>
        <div>HEIGHT ${heightM}m</div>
        <div>SPEED ${speed}%</div>
        <div>ANGLE ${this.sm.is(State.AIMING) ? aimActiveDeg : aimDeg}deg</div>
        <div>POWER ${powerPercent}%</div>
      </div>

      <div style="position:fixed;left:18px;top:132px;width:180px;height:130px">
        <svg width="180" height="130" viewBox="0 0 180 130" aria-hidden="true">
          <path d="M ${UI_CANNON_X} ${UI_CANNON_Y} L 149 60 A 72 72 0 0 0 128 42 Z"
            fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
          <line x1="${UI_CANNON_X}" y1="${UI_CANNON_Y}" x2="${aimLineX}" y2="${aimLineY}"
            stroke="#ffd54f" stroke-width="5" stroke-linecap="round"/>
          <circle cx="${aimDotX}" cy="${aimDotY}" r="${this.sm.is(State.AIMING) ? 7 : 4}"
            fill="${this.sm.is(State.AIMING) ? '#ffffff' : '#ffd54f'}"/>
          <circle cx="${UI_CANNON_X}" cy="${UI_CANNON_Y}" r="8" fill="#8d6e63"/>
        </svg>
      </div>

      <div style="position:fixed;left:18px;top:258px;width:190px">
        <div style="height:12px;border:2px solid rgba(255,255,255,0.72);background:rgba(0,0,0,0.24)">
          <div style="height:100%;width:${powerFill}%;background:#ff7043"></div>
        </div>
      </div>

      ${this.isPaused ? '<div style="position:fixed;inset:0;display:grid;place-items:center;background:rgba(0,0,0,0.28);font-size:42px;font-weight:900;z-index:10">PAUSED</div>' : ''}

      <div style="position:fixed;right:16px;top:16px;display:flex;gap:8px;pointer-events:auto;z-index:20">
        <button class="clickable" data-action="pause" style="min-width:78px;height:40px;border:0;background:rgba(255,255,255,0.9);color:#111;font-weight:800">${pauseLabel}</button>
        <button class="clickable" data-action="restart" style="min-width:86px;height:40px;border:0;background:rgba(255,213,79,0.95);color:#111;font-weight:800">Restart</button>
      </div>

      <div style="position:fixed;left:18px;bottom:18px;font-weight:700">${action}</div>
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
    this._render()
    requestAnimationFrame(() => this.loop())
  }

  start() {
    requestAnimationFrame(() => this.loop())
  }
}

const game = new Game()
game.start()
console.log('Armadillo Rush — 2단계 기본 발사/비행/착지 루프 부팅 완료.')
