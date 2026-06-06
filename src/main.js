import * as THREE from 'three'
import './ui.css'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { StateMachine, State } from './state.js'
import {
  DEFAULT_ISLAND_LAYOUT,
  DEFAULT_OBSTACLE_PLACEMENTS,
  createCurvedTerrain,
  createObstacle,
  getTerrainSlopeAngle,
  getTerrainTopY,
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
const LAUNCH_SPEED = 850      // 현재 placeholder 섬 배치에 맞춘 2단계 검증용 발사 속도
const CANNON_POS = new THREE.Vector2(-280, -330)
const AIM_MIN_ANGLE = THREE.MathUtils.degToRad(38)
const AIM_MAX_ANGLE = THREE.MathUtils.degToRad(60)
const AIM_SWEEP_SPEED = 1.9
const POWER_MIN = 0.85
const POWER_MAX = 1.0
const POWER_SWEEP_SPEED = 2.8
const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(28)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(68)
const ROLLING_MIN_SPEED_RATIO = 0.38
const UNDER_BREAK_SPEED = 520
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
    for (const spec of DEFAULT_ISLAND_LAYOUT) {
      const island = createCurvedTerrain(spec)
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

    this.armadillo = this._createArmadillo()
    this.renderer.add(this.armadillo)
    this._resetRun()

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240   // 배경 heightRatio 정규화 기준
  }

  _createArmadillo() {
    const group = new THREE.Group()
    const shellMat = new THREE.MeshBasicMaterial({ color: 0xff1744 })
    const bellyMat = new THREE.MeshBasicMaterial({ color: 0xff8a65 })
    const darkMat = new THREE.MeshBasicMaterial({ color: 0x271512 })
    const faceMat = new THREE.MeshBasicMaterial({ color: 0xffb088 })

    const shell = new THREE.Mesh(new THREE.CircleGeometry(18, 28), shellMat)
    shell.scale.set(1.12, 0.88, 1)
    shell.position.set(-1, 0, 0.03)

    const belly = new THREE.Mesh(new THREE.CircleGeometry(10, 20), bellyMat)
    belly.scale.set(1.08, 0.62, 1)
    belly.position.set(-1, -4, 0.05)

    const head = new THREE.Mesh(new THREE.CircleGeometry(8, 18), faceMat)
    head.scale.set(1.1, 0.82, 1)
    head.position.set(15, 4, 0.06)

    const snout = new THREE.Mesh(new THREE.CircleGeometry(4, 14), faceMat)
    snout.scale.set(1.3, 0.7, 1)
    snout.position.set(22, 2, 0.07)

    const eye = new THREE.Mesh(new THREE.CircleGeometry(1.6, 10), darkMat)
    eye.position.set(18, 7, 0.08)

    const stripeGeom = new THREE.BoxGeometry(3, 26, 1)
    for (const x of [-9, -3, 3, 9]) {
      const stripe = new THREE.Mesh(stripeGeom, new THREE.MeshBasicMaterial({ color: 0xc62828 }))
      stripe.position.set(x, 0, 0.07)
      stripe.rotation.z = -0.18
      group.add(stripe)
    }

    group.add(shell, belly, head, snout, eye)
    this.armadilloParts = { shellMat, bellyMat, faceMat }
    return group
  }

  _setArmadilloColor(color) {
    this.armadilloParts.shellMat.color.set(color)
    this.armadilloParts.bellyMat.color.set(new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.28))
    this.armadilloParts.faceMat.color.set(new THREE.Color(color).lerp(new THREE.Color(0xffb088), 0.62))
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
      this._ensureAudio()
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

  _buildObstacles() {
    for (const placement of DEFAULT_OBSTACLE_PLACEMENTS) {
      const terrain = this.islands[placement.island]
      if (!terrain) continue
      const x = THREE.MathUtils.lerp(terrain.bounds.left, terrain.bounds.right, placement.t)
      const y = getTerrainTopY(terrain, x)
      const obstacle = createObstacle(terrain, placement.type, x, y)
      this.obstacles.push(obstacle)
      this.renderer.add(obstacle.mesh)
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
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
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
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.rotation.z = 0
    this._setArmadilloColor(0xff1744)
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
    this._ensureAudio()
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
    this._setArmadilloColor(0xff1744)
    this.velocity.set(
      Math.cos(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
      Math.sin(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio,
    )
    this._playTone(220 + this.powerRatio * 180, 0.09, 0.08, 'square')
  }

  _launchFromIsland() {
    if (this.timingPending) {
      this._applyTimingRating('MISS')
    }

    if (!this.sm.transition(State.FALLING)) return
    const launchSpeed = (0.55 + Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO) * 0.45) * LAUNCH_SPEED
    const launchAngle = this._getExitLaunchAngle(this.currentIsland)
    this.velocity.set(
      Math.cos(launchAngle) * launchSpeed,
      Math.sin(launchAngle) * launchSpeed,
    )
    this.currentIsland = null
    this.timingPending = false
  }

  _getExitLaunchAngle(island) {
    if (!island) return Math.PI / 4

    const exitX = island.bounds.right - ARMADILLO_SIZE / 2
    const slopeAngle = getTerrainSlopeAngle(island, exitX)
    const timingLift = {
      PERFECT: THREE.MathUtils.degToRad(10),
      GOOD: THREE.MathUtils.degToRad(5),
      OK: 0,
      MISS: THREE.MathUtils.degToRad(-8),
    }[this.launchRating] ?? 0
    const slopeLift = slopeAngle * 0.75
    return THREE.MathUtils.clamp(
      THREE.MathUtils.degToRad(40) + slopeLift + timingLift,
      EXIT_LAUNCH_MIN_ANGLE,
      EXIT_LAUNCH_MAX_ANGLE,
    )
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
      const topY = getTerrainTopY(island, this.armadillo.position.x)
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
    this._setArmadilloColor(0xffd54f)
    this._triggerImpact(0.65, 0x4caf50, this.armadillo.position.x, this.armadillo.position.y)
  }

  _landOnIsland(island) {
    this.currentIsland = island
    this.velocity.set(0, 0)
    this.speedRatio = Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO)
    this.armadillo.position.y = getTerrainTopY(island, this.armadillo.position.x) + ARMADILLO_SIZE / 2
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
    const slopeAngle = getTerrainSlopeAngle(this.currentIsland, this.armadillo.position.x)
    const slope = Math.sin(slopeAngle)
    this.speedRatio = THREE.MathUtils.clamp(
      this.speedRatio - FRICTION_PER_SEC * dt - slope * SLOPE_RESIST_PER_SEC * dt,
      0,
      1,
    )
    this.armadillo.position.x += this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.y = getTerrainTopY(this.currentIsland, this.armadillo.position.x) + ARMADILLO_SIZE / 2
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
      obstacle.mesh.position.y = getTerrainTopY(obstacle.terrain, obstacle.mesh.position.x) + obstacle.height / 2
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
      this._setArmadilloColor(0x9e9e9e)
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
      this._setArmadilloColor(0xffd54f)
      this._triggerImpact(0.55, obstacle.material?.color ?? 0xffd54f, obstacle.mesh.position.x, obstacle.mesh.position.y)
      return
    }

    this.speedRatio = Math.max(0, this.speedRatio - obstacle.config.blockCost)
    this.lastRating = `${obstacle.type.toUpperCase()} BLOCK`
    this.armadillo.position.x = obstacle.mesh.position.x - (ARMADILLO_SIZE + obstacle.width) / 2
    this._setArmadilloColor(0x9e9e9e)
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
    this._setArmadilloColor(colorByRating[rating] ?? 0xff1744)
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
    this._playTone(96, 0.22, 0.1, 'triangle')
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
      ? `<div class="hud-danger">DANGER ${Math.max(0, STALL_GAMEOVER_SEC - this.stallTime).toFixed(1)}s</div>`
      : ''

    this.ui.innerHTML = `
      <div class="hud-panel hud-stats">
        <div><span>STATE</span><strong>${phaseText}</strong></div>
        <div><span>SCORE</span><strong>${score}</strong></div>
        <div><span>HEIGHT</span><strong>${heightM}m</strong></div>
        <div><span>DIST</span><strong>${distanceM}m</strong></div>
        <div><span>SPEED</span><strong>${speed}%</strong></div>
        <div><span>ANGLE</span><strong>${this.sm.is(State.AIMING) ? aimActiveDeg : aimDeg}deg</strong></div>
        <div><span>POWER</span><strong>${powerPercent}%</strong></div>
        <div><span>HIT</span><strong>${this.lastRating}</strong></div>
        <div><span>COMBO</span><strong>${this.combo}</strong></div>
        <div><span>BREAK</span><strong>${this.breakCount}</strong></div>
        ${dangerText}
      </div>

      <div class="hud-aim">
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

      <div class="meter meter-power">
        <div class="meter-fill power-fill" style="width:${powerFill}%"></div>
      </div>

      <div class="meter meter-timing">
        <div class="meter-fill timing-fill" style="width:${timingFill}%"></div>
      </div>

      ${this.isPaused ? '<div class="pause-layer">PAUSED</div>' : ''}
      ${this.flashTime > 0 ? `<div class="flash-layer" style="opacity:${this.flashTime * 1.6}"></div>` : ''}
      ${this.sm.is(State.GAMEOVER) ? `
        <div class="modal-layer">
          <div class="result-card">
            <div class="result-title">GAME OVER</div>
            <div class="result-grid">
              <div><span>SCORE</span><strong>${score}</strong></div>
              <div><span>HEIGHT</span><strong>${heightM}m</strong></div>
              <div><span>DIST</span><strong>${distanceM}m</strong></div>
              <div><span>BREAK</span><strong>${this.breakCount}</strong></div>
              <div><span>MAX COMBO</span><strong>${this.maxCombo}</strong></div>
              <div><span>BEST</span><strong>${this.bestRecord.score}</strong></div>
            </div>
            <button class="clickable primary-button" data-action="restart">Restart</button>
          </div>
        </div>
      ` : ''}

      <div class="control-row">
        <button class="clickable secondary-button" data-action="pause">${pauseLabel}</button>
        <button class="clickable primary-button" data-action="restart">Restart</button>
      </div>

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
