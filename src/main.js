import * as THREE from 'three'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { StateMachine, State } from './state.js'
import {
  CAMERA_LERP,
  COMBO_BONUS,
  DISTANCE_TIERS,
  FRICTION_PER_SEC,
  GRAVITY,
  INPUT_BUFFER_SEC,
  MATERIAL,
  MAX_SPEED,
  OBSTACLE,
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
const LAUNCH_SPEED = 850      // 현재 placeholder 섬 배치에 맞춘 2단계 검증용 발사 속도
const CANNON_POS = new THREE.Vector2(-280, -330)
const AIM_MIN_ANGLE = THREE.MathUtils.degToRad(38)
const AIM_MAX_ANGLE = THREE.MathUtils.degToRad(60)
const AIM_SWEEP_SPEED = 1.9
const POWER_MIN = 0.85
const POWER_MAX = 1.0
const POWER_SWEEP_SPEED = 2.8
const ROLLING_MIN_SPEED_RATIO = 0.38
const TERRAIN_THICKNESS = 64
const UNDER_BREAK_SPEED = 520
const OBSTACLE_SIZE = 34
const PARTICLE_COUNT = 18
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
    this.obstacles = []
    this.particles = []
    this.breakCount = 0
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.combo = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.bestRecord = this._loadBestRecord()
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
    this._buildObstacles()
    this._buildParticlePool()

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
      const button = event.target instanceof Element
        ? event.target.closest('[data-action]')
        : null
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

  _buildObstacles() {
    const placements = [
      { island: 1, t: 0.42, type: 'wood' },
      { island: 1, t: 0.72, type: 'spike' },
      { island: 2, t: 0.36, type: 'stone' },
      { island: 2, t: 0.68, type: 'wood' },
      { island: 3, t: 0.48, type: 'moving' },
      { island: 4, t: 0.34, type: 'stone' },
      { island: 4, t: 0.68, type: 'spike' },
      { island: 5, t: 0.44, type: 'iron' },
      { island: 6, t: 0.55, type: 'stone' },
      { island: 7, t: 0.45, type: 'wood' },
      { island: 8, t: 0.55, type: 'iron' },
    ]

    for (const placement of placements) {
      const terrain = this.islands[placement.island]
      if (!terrain) continue
      const x = THREE.MathUtils.lerp(terrain.bounds.left, terrain.bounds.right, placement.t)
      const y = this._getTerrainTopY(terrain, x)
      const obstacle = this._createObstacle(terrain, placement.type, x, y)
      this.obstacles.push(obstacle)
      this.renderer.add(obstacle.mesh)
    }
  }

  _createObstacle(terrain, type, x, groundY) {
    const obstacleConfig = OBSTACLE[type]
    const materialConfig = obstacleConfig.material ? MATERIAL[obstacleConfig.material] : null
    const color = materialConfig?.color ?? 0xe53935
    const height = type === 'spike' ? 26 : OBSTACLE_SIZE
    const width = type === 'spike' ? 38 : OBSTACLE_SIZE
    const geometry = type === 'spike'
      ? new THREE.ConeGeometry(width / 2, height, 3)
      : new THREE.BoxGeometry(width, height, 1)
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color }),
    )
    mesh.position.set(x, groundY + height / 2, 0)

    return {
      terrain,
      type,
      mesh,
      width,
      height,
      hit: false,
      destroyed: false,
      config: obstacleConfig,
      material: materialConfig,
      baseX: x,
      baseY: groundY,
      phase: x * 0.01,
    }
  }

  _buildParticlePool() {
    const geom = new THREE.BoxGeometry(8, 8, 1)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const mesh = new THREE.Mesh(
        geom,
        new THREE.MeshBasicMaterial({ color: 0xffd54f }),
      )
      mesh.visible = false
      this.renderer.add(mesh)
      this.particles.push({
        mesh,
        velocity: new THREE.Vector2(),
        life: 0,
      })
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
    this._restoreTerrain()
    for (const obstacle of this.obstacles) {
      obstacle.hit = false
      obstacle.destroyed = false
      obstacle.mesh.visible = true
      obstacle.mesh.position.x = obstacle.baseX
      obstacle.mesh.position.y = obstacle.baseY + obstacle.height / 2
    }
    this._clearParticles()
    this.breakCount = 0
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.combo = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
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
    this._restoreTerrain()
    for (const obstacle of this.obstacles) {
      obstacle.hit = false
      obstacle.destroyed = false
      obstacle.mesh.visible = true
      obstacle.mesh.position.x = obstacle.baseX
      obstacle.mesh.position.y = obstacle.baseY + obstacle.height / 2
    }
    this._clearParticles()
    this.breakCount = 0
    this.bestHeightPx = 0
    this.bestDistancePx = 0
    this.landingTime = 0
    this.timingWindow = DISTANCE_TIERS[0].window
    this.timingPending = false
    this.lastRating = 'READY'
    this.combo = 0
    this.bufferedInputTime = -Infinity
    this.stallTime = 0
    this.trauma = 0
    this.flashTime = 0
    this.slowmoTime = 0
    this.isPaused = false
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this.armadillo.material.color.set(0xff1744)
    if (this.cannonBarrel) this.cannonBarrel.rotation.z = this.aimAngle
    this.sm.current = State.AIMING
  }

  _restoreTerrain() {
    for (const island of this.islands) {
      island.destroyed = false
      island.mesh.visible = true
    }
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
      this._judgeTiming()
      return
    }

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.bufferedInputTime = this.time
    }

    if (this.sm.is(State.GAMEOVER)) {
      this._resetRun()
    }
  }

  _launchFromCannon() {
    if (!this.sm.transition(State.FLYING)) return
    this.speedRatio = this.powerRatio
    this.timingPending = false
    this.lastRating = 'LAUNCH'
    this.stallTime = 0
    this.armadillo.material.color.set(0xff1744)
    this.velocity.set(
      Math.cos(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
      Math.sin(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
    )
  }

  _launchFromIsland() {
    if (this.timingPending) {
      this._applyTimingRating('MISS')
    }

    if (!this.sm.transition(State.FALLING)) return
    const launchSpeed = (0.55 + Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO) * 0.45) * LAUNCH_SPEED
    const launchAngle = Math.PI / 4
    this.velocity.set(
      Math.cos(launchAngle) * launchSpeed,
      Math.sin(launchAngle) * launchSpeed,
    )
    this.currentIsland = null
    this.timingPending = false
  }

  _update(dt) {
    if (this.isPaused) {
      this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
      return
    }

    const simDt = this.slowmoTime > 0 ? dt * SLOWMO_SCALE : dt
    this.slowmoTime = Math.max(0, this.slowmoTime - dt)
    this.time += simDt
    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this._updateFlight(simDt)
    } else if (this.sm.is(State.ROLLING)) {
      this._updateRolling(simDt)
    } else if (this.sm.is(State.AIMING) || this.sm.is(State.POWERING)) {
      this._updateAiming(simDt)
    }
    this._updateParticles(simDt)
    this._updateEffects(dt)

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - CANNON_POS.y)
    this.bestDistancePx = Math.max(this.bestDistancePx, this.armadillo.position.x - CANNON_POS.x)

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
        this._gameOver('FALL')
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
      this._triggerImpact(0.35, 0xff7043, this.armadillo.position.x, this.armadillo.position.y)
      return
    }

    terrain.destroyed = true
    terrain.mesh.visible = false
    this.speedRatio = Math.max(0.2, this.speedRatio - 0.18)
    this.armadillo.material.color.set(0xffd54f)
    this._triggerImpact(0.65, 0x4caf50, this.armadillo.position.x, this.armadillo.position.y)
  }

  _landOnIsland(island) {
    this.currentIsland = island
    this.velocity.set(0, 0)
    this.speedRatio = Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO)
    this.armadillo.position.y = this._getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.landingTime = this.time
    this.timingWindow = this._getTimingWindow()
    this.timingPending = true
    this.lastRating = 'LANDED'

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }

    if (this.time - this.bufferedInputTime <= INPUT_BUFFER_SEC) {
      this._applyTimingRating('GOOD')
      this.bufferedInputTime = -Infinity
    }
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.bounds
    this._updateActiveObstacles(dt)
    const slopeAngle = this._getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    const slope = Math.sin(slopeAngle)
    this.speedRatio = THREE.MathUtils.clamp(
      this.speedRatio - FRICTION_PER_SEC * dt - slope * SLOPE_RESIST_PER_SEC * dt,
      0,
      1,
    )
    this.armadillo.position.x += this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.y = this._getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2
    this.armadillo.rotation.z = slopeAngle
    this._checkObstacleCollisions()

    if (this.timingPending && this.time - this.landingTime > this.timingWindow) {
      this._applyTimingRating('MISS')
    }

    this._updateStallState(dt)

    if (this.armadillo.position.x >= bounds.right - ARMADILLO_SIZE / 2) {
      this.armadillo.position.x = bounds.right - ARMADILLO_SIZE / 2
      this._launchFromIsland()
    }
  }

  _updateActiveObstacles(dt) {
    for (const obstacle of this.obstacles) {
      if (obstacle.destroyed || obstacle.terrain !== this.currentIsland) continue
      if (obstacle.type !== 'moving') continue

      const offset = Math.sin(this.time * 2.2 + obstacle.phase) * 28
      obstacle.mesh.position.x = obstacle.baseX + offset
      obstacle.mesh.position.y = this._getTerrainTopY(obstacle.terrain, obstacle.mesh.position.x) + obstacle.height / 2
    }
  }

  _checkObstacleCollisions() {
    for (const obstacle of this.obstacles) {
      if (obstacle.destroyed || obstacle.hit || obstacle.terrain !== this.currentIsland) continue
      if (!this._isObstacleColliding(obstacle)) continue

      this._resolveObstacleHit(obstacle)
    }
  }

  _isObstacleColliding(obstacle) {
    const ax = this.armadillo.position.x
    const ay = this.armadillo.position.y
    const ox = obstacle.mesh.position.x
    const oy = obstacle.mesh.position.y
    return Math.abs(ax - ox) <= (ARMADILLO_SIZE + obstacle.width) / 2
      && Math.abs(ay - oy) <= (ARMADILLO_SIZE + obstacle.height) / 2
  }

  _resolveObstacleHit(obstacle) {
    obstacle.hit = true

    if (obstacle.type === 'spike') {
      this.speedRatio = Math.max(0, this.speedRatio - obstacle.config.blockCost)
      this.lastRating = 'SPIKE'
      this.armadillo.material.color.set(0x9e9e9e)
      this._triggerImpact(0.35, 0xe53935, obstacle.mesh.position.x, obstacle.mesh.position.y)
      return
    }

    const threshold = obstacle.material?.threshold ?? Infinity
    if (this.speedRatio >= threshold) {
      obstacle.destroyed = true
      obstacle.mesh.visible = false
      this.breakCount += 1
      this.speedRatio = Math.max(0, this.speedRatio - obstacle.config.breakCost)
      this.lastRating = `${obstacle.type.toUpperCase()} BREAK`
      this.armadillo.material.color.set(0xffd54f)
      this._triggerImpact(0.55, obstacle.material?.color ?? 0xffd54f, obstacle.mesh.position.x, obstacle.mesh.position.y)
      return
    }

    this.speedRatio = Math.max(0, this.speedRatio - obstacle.config.blockCost)
    this.lastRating = `${obstacle.type.toUpperCase()} BLOCK`
    this.armadillo.position.x = obstacle.mesh.position.x - (ARMADILLO_SIZE + obstacle.width) / 2
    this.armadillo.material.color.set(0x9e9e9e)
    this._triggerImpact(0.45, 0xb0bec5, obstacle.mesh.position.x, obstacle.mesh.position.y)
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

  _applyTimingRating(rating) {
    if (!this.timingPending && rating !== 'MISS') return

    this.timingPending = false
    this.lastRating = rating
    this.combo = rating === 'PERFECT' ? this.combo + 1 : 0

    const comboBonus = this._getComboBonus()
    const speedBonus = SPEED_BONUS[rating] + (rating === 'PERFECT' ? comboBonus : 0)
    this.speedRatio = Math.min(1, this.speedRatio + speedBonus)

    const colorByRating = {
      PERFECT: 0xffd54f,
      GOOD: 0xff7043,
      OK: 0xff1744,
      MISS: 0x9e9e9e,
    }
    this.armadillo.material.color.set(colorByRating[rating] ?? 0xff1744)
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
  }

  _spawnParticles(x, y, color) {
    let spawned = 0
    for (const particle of this.particles) {
      if (particle.life > 0) continue
      particle.life = 0.45 + Math.random() * 0.25
      particle.mesh.visible = true
      particle.mesh.material.color.set(color)
      particle.mesh.position.set(x, y, 0)
      const angle = Math.random() * Math.PI * 2
      const speed = 80 + Math.random() * 170
      particle.velocity.set(Math.cos(angle) * speed, Math.sin(angle) * speed)
      spawned += 1
      if (spawned >= 8) break
    }
  }

  _updateParticles(dt) {
    for (const particle of this.particles) {
      if (particle.life <= 0) continue
      particle.life -= dt
      particle.velocity.y -= GRAVITY * 0.35 * dt
      particle.mesh.position.x += particle.velocity.x * dt
      particle.mesh.position.y += particle.velocity.y * dt
      particle.mesh.rotation.z += dt * 8
      particle.mesh.visible = particle.life > 0
    }
  }

  _clearParticles() {
    for (const particle of this.particles) {
      particle.life = 0
      particle.mesh.visible = false
      particle.velocity.set(0, 0)
    }
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
  }

  _getScore() {
    const heightM = Math.max(0, Math.floor(this.bestHeightPx / PX_PER_METER))
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    return heightM * SCORE.perM_height
      + distanceM * SCORE.perM_distance
      + this.combo * SCORE.comboPerLevel
      + this.breakCount * SCORE.chainPerBreak
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

  _render() {
    // 카메라 lerp 추적 (§11)
    this.camPos.lerp(this.camTarget, CAMERA_LERP)
    const shake = this.trauma * this.trauma * 16
    const shakeX = (Math.random() - 0.5) * shake
    const shakeY = (Math.random() - 0.5) * shake
    this.renderer.setCenter(this.camPos.x, this.camPos.y, shakeX, shakeY)

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
    const distanceM = Math.max(0, Math.floor(this.bestDistancePx / PX_PER_METER))
    const score = this._getScore()
    const speed = Math.round(this.speedRatio * 100)
    const aimDeg = Math.round(THREE.MathUtils.radToDeg(this.lockedAimAngle))
    const aimActiveDeg = Math.round(THREE.MathUtils.radToDeg(this.aimAngle))
    const aimLineX = UI_CANNON_X + Math.cos(this.lockedAimAngle) * UI_AIM_RADIUS
    const aimLineY = UI_CANNON_Y - Math.sin(this.lockedAimAngle) * UI_AIM_RADIUS
    const aimDotX = UI_CANNON_X + Math.cos(this.aimAngle) * UI_AIM_RADIUS
    const aimDotY = UI_CANNON_Y - Math.sin(this.aimAngle) * UI_AIM_RADIUS
    const powerPercent = Math.round(this.powerRatio * 100)
    const powerFill = THREE.MathUtils.clamp((this.powerRatio - POWER_MIN) / (POWER_MAX - POWER_MIN), 0, 1) * 100
    const timingElapsed = this.time - this.landingTime
    const timingFill = this.timingPending
      ? THREE.MathUtils.clamp(1 - timingElapsed / this.timingWindow, 0, 1) * 100
      : 0
    const action = this.sm.is(State.AIMING)
      ? 'Space / Tap: Lock Angle'
      : this.sm.is(State.POWERING)
        ? 'Space / Tap: Lock Power'
      : this.sm.is(State.ROLLING)
        ? this.timingPending ? 'Space / Tap: Timing' : 'Rolling'
        : this.sm.is(State.GAMEOVER)
          ? 'Space / Tap: Retry'
          : 'Flying'
    const pauseLabel = this.isPaused ? 'Resume' : 'Pause'
    const phaseText = this.isPaused ? 'PAUSED' : this.sm.current
    const dangerText = this.stallTime >= STALL_DANGER_SEC
      ? `<div style="color:#ff7043">DANGER ${Math.max(0, STALL_GAMEOVER_SEC - this.stallTime).toFixed(1)}s</div>`
      : ''

    this.ui.innerHTML = `
      <div style="position:fixed;left:18px;top:16px;font-weight:700;line-height:1.5">
        <div>STATE ${phaseText}</div>
        <div>SCORE ${score}</div>
        <div>HEIGHT ${heightM}m</div>
        <div>DIST ${distanceM}m</div>
        <div>SPEED ${speed}%</div>
        <div>ANGLE ${this.sm.is(State.AIMING) ? aimActiveDeg : aimDeg}deg</div>
        <div>POWER ${powerPercent}%</div>
        <div>HIT ${this.lastRating}</div>
        <div>COMBO ${this.combo}</div>
        <div>BREAK ${this.breakCount}</div>
        ${dangerText}
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

      <div style="position:fixed;left:18px;top:282px;width:190px">
        <div style="height:10px;border:2px solid rgba(255,255,255,0.72);background:rgba(0,0,0,0.24)">
          <div style="height:100%;width:${timingFill}%;background:#ffd54f"></div>
        </div>
      </div>

      ${this.isPaused ? '<div style="position:fixed;inset:0;display:grid;place-items:center;background:rgba(0,0,0,0.28);font-size:42px;font-weight:900;z-index:10">PAUSED</div>' : ''}
      ${this.flashTime > 0 ? `<div style="position:fixed;inset:0;background:rgba(255,255,255,${this.flashTime * 1.6});z-index:8"></div>` : ''}
      ${this.sm.is(State.GAMEOVER) ? `
        <div style="position:fixed;inset:0;display:grid;place-items:center;background:rgba(0,0,0,0.52);z-index:18;pointer-events:auto">
          <div style="min-width:280px;padding:22px;background:rgba(0,0,17,0.9);border:2px solid rgba(255,255,255,0.6)">
            <div style="font-size:32px;font-weight:900;margin-bottom:12px">GAME OVER</div>
            <div style="line-height:1.7;font-weight:800">
              <div>SCORE ${score}</div>
              <div>HEIGHT ${heightM}m</div>
              <div>DIST ${distanceM}m</div>
              <div>BREAK ${this.breakCount}</div>
              <div>BEST ${this.bestRecord.score}</div>
            </div>
            <button class="clickable" data-action="restart" style="margin-top:16px;width:100%;height:42px;border:0;background:#ffd54f;color:#111;font-weight:900">Restart</button>
          </div>
        </div>
      ` : ''}

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
