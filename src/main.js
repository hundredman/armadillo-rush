import * as THREE from 'three'
import './ui.css'
import { SPRITES, createSprite } from './assets.js'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { PostFX } from './renderer/postfx.js'
import { ParticleSystem } from './game/particles.js'
import { StateMachine, State } from './state.js'
import {
  DEFAULT_ISLAND_LAYOUT,
  DEFAULT_OBSTACLE_PLACEMENTS,
  createCurvedTerrain,
  createObstacle,
  damageTerrain,
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
const LAUNCH_SPEED = 850      // 현재 placeholder 섬 배치에 맞춘 2단계 검증용 발사 속도
const CANNON_POS = new THREE.Vector2(-280, -330)
const AIM_MIN_ANGLE = THREE.MathUtils.degToRad(38)
const AIM_MAX_ANGLE = THREE.MathUtils.degToRad(60)
const AIM_SWEEP_SPEED = 1.9
const POWER_MIN = 0.85
const POWER_MAX = 1.0
const POWER_CHARGE_PER_SEC = 0.55
const EXIT_LAUNCH_MIN_ANGLE = THREE.MathUtils.degToRad(28)
const EXIT_LAUNCH_MAX_ANGLE = THREE.MathUtils.degToRad(68)
const ROLLING_MIN_SPEED_RATIO = 0.38
const UNDER_BREAK_SPEED = 520
const DAMAGE_SPEED_FULL = 940
const LAUNCH_BLAST_POWER = 0.96
const UI_CANNON_X = 92
const UI_CANNON_Y = 104
const UI_AIM_RADIUS = 72

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
    this.sm = new StateMachine(State.TITLE)

    this.time = 0
    this.accumulator = 0
    this.lastNow = performance.now()
    this.velocity = new THREE.Vector2(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.powerCharging = false
    this.currentIsland = null
    this.obstacles = []
    this.scenery = []
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
  }

  // ── 2단계 placeholder: 대포 + 섬 + 발사 가능한 아르마딜로 ──
  _buildPlaceholderWorld() {
    this._buildScenery()
    this.islands = []
    for (const spec of DEFAULT_ISLAND_LAYOUT) {
      const island = createCurvedTerrain(spec)
      this.renderer.add(island.mesh)
      this.islands.push(island)
    }
    this._buildObstacles()

    const cannonBase = new THREE.Mesh(
      new THREE.BoxGeometry(80, 24, 1),
      new THREE.MeshBasicMaterial({ color: 0x5d4037 }),
    )
    cannonBase.position.set(CANNON_POS.x, CANNON_POS.y - 14, 0)
    this.renderer.add(cannonBase)

    for (const x of [-28, 28]) {
      const wheel = new THREE.Mesh(
        new THREE.CircleGeometry(15, 24),
        new THREE.MeshBasicMaterial({ color: 0x263238 }),
      )
      const hub = new THREE.Mesh(
        new THREE.CircleGeometry(6, 16),
        new THREE.MeshBasicMaterial({ color: 0xffd54f }),
      )
      wheel.position.set(CANNON_POS.x + x, CANNON_POS.y - 28, 0.03)
      hub.position.set(CANNON_POS.x + x, CANNON_POS.y - 28, 0.05)
      this.renderer.add(wheel)
      this.renderer.add(hub)
    }

    this.cannonBarrel = new THREE.Mesh(
      new THREE.BoxGeometry(78, 18, 1),
      new THREE.MeshBasicMaterial({ color: 0x8d6e63 }),
    )
    this.cannonBarrel.position.set(CANNON_POS.x + 28, CANNON_POS.y + 10, 0)
    this.cannonBarrel.rotation.z = this.aimAngle
    this.renderer.add(this.cannonBarrel)

    this.cannonMuzzle = new THREE.Mesh(
      new THREE.BoxGeometry(18, 24, 1),
      new THREE.MeshBasicMaterial({ color: 0x3e2723 }),
    )
    this.cannonMuzzle.position.set(CANNON_POS.x + 64, CANNON_POS.y + 28, 0.04)
    this.cannonMuzzle.rotation.z = this.aimAngle
    this.renderer.add(this.cannonMuzzle)

    this.armadillo = this._createArmadillo()
    this.renderer.add(this.armadillo)
    this._resetRun()

    this.maxHeightPx = this.islands[this.islands.length - 1].bounds.top + 240   // 배경 heightRatio 정규화 기준
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
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(20, 24),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22 }),
    )
    shadow.scale.set(1.2, 0.28, 1)
    shadow.position.set(0, -18, -0.04)
    const sprite = createSprite(SPRITES.character.idle, 58, 58)
    sprite.position.z = 0.08
    group.add(shadow, sprite)
    this.armadilloSprite = sprite
    this.armadilloSpriteState = 'idle'
    return group
  }

  _setArmadilloColor(color) {
    this.armadilloSprite.material.color.set(color)
  }

  _setArmadilloSprite(state) {
    if (this.armadilloSpriteState === state) return
    this.armadilloSpriteState = state
    this.armadilloSprite.material.map = SPRITES.character[state]
    this.armadilloSprite.material.needsUpdate = true
  }

  _bindInput() {
    const triggerPress = () => this._handlePress()
    const triggerRelease = () => this._handleRelease()

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
      if (button.dataset.action === 'restart') this._restartToTitle()
      return true
    }

    window.addEventListener('pointerdown', (event) => {
      if (handleControlButton(event)) return

      if (!isTouchDevice && event.pointerType === 'mouse') return
      triggerPress()
    })

    window.addEventListener('pointerup', (event) => {
      if (!isTouchDevice && event.pointerType === 'mouse') return
      triggerRelease()
    })

    window.addEventListener('pointercancel', () => {
      triggerRelease()
    })

    window.addEventListener('keydown', (event) => {
      if (event.repeat) return

      if (event.code === 'Space') {
        event.preventDefault()
        triggerPress()
        return
      }

      if (event.code === 'Escape') {
        event.preventDefault()
        this._togglePause()
      }
    })

    window.addEventListener('keyup', (event) => {
      if (event.code !== 'Space') return
      event.preventDefault()
      triggerRelease()
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


  _resetRun() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.powerCharging = false
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
    this._updateCannonPose(this.aimAngle)
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.TITLE)
  }

  _restartToTitle() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.powerCharging = false
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
    this._updateCannonPose(this.aimAngle)
    this.sm.current = State.TITLE
  }

  _restoreTerrain() {
    for (const island of this.islands) {
      island.destroyed = false
      island.mesh.visible = true
      island.damageZones = []
      for (const mark of island.damageMarks) {
        island.mesh.remove(mark)
      }
      island.damageMarks = []
      // 비행 파편 메시 정리
      if (island.animChunks) {
        for (const chunk of island.animChunks) {
          island.mesh.remove(chunk.mesh)
        }
        island.animChunks = []
      }
      for (const child of island.mesh.children) {
        if (child.userData.damageable) child.visible = true
      }
    }
  }

  _togglePause() {
    if (this.sm.is(State.GAMEOVER)) return
    this.isPaused = !this.isPaused
  }

  _handlePress() {
    this._ensureAudio()
    if (this.isPaused) return

    if (this.sm.is(State.TITLE)) {
      this._resetRun()
      this.sm.transition(State.AIMING)
      return
    }

    if (this.sm.is(State.AIMING)) {
      this.lockedAimAngle = this.aimAngle
      this.powerRatio = POWER_MIN
      this.powerCharging = false
      this.sm.transition(State.POWERING)
      return
    }

    if (this.sm.is(State.POWERING)) {
      this.powerCharging = true
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

  _handleRelease() {
    if (this.isPaused) return
    if (!this.sm.is(State.POWERING) || !this.powerCharging) return

    this.powerCharging = false
    this._launchFromCannon()
  }

  _launchFromCannon() {
    if (!this.sm.transition(State.FLYING)) return
    this.speedRatio = this.powerRatio
    this.powerCharging = false
    this.timingPending = false
    this.lastRating = 'LAUNCH'
    this.stallTime = 0
    this._setArmadilloColor(0xff1744)
    this.velocity.set(
      Math.cos(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio * (1 + this._getLaunchForce() * 0.12),
      Math.sin(this.lockedAimAngle) * LAUNCH_SPEED * this.powerRatio * (1 + this._getLaunchForce() * 0.12),
    )
    this._carveLaunchPath()
    this._triggerLaunchImpact()
    this._playTone(220 + this.powerRatio * 260, 0.12, 0.08 + this.powerRatio * 0.06, 'square')
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
      this._setArmadilloSprite('jump')
      this._updateFlight(simDt)
    } else if (this.sm.is(State.ROLLING)) {
      this._setArmadilloSprite(Math.floor(this.time * 10) % 2 === 0 ? 'walk1' : 'walk2')
      this._updateRolling(simDt)
    } else if (this.sm.is(State.AIMING) || this.sm.is(State.POWERING)) {
      this._setArmadilloSprite('idle')
      this._updateAiming(simDt)
    }
    this._updateParticles(simDt)
    this._updateEffects(dt)
    this._updateScenery()

    this.bestHeightPx = Math.max(this.bestHeightPx, this.armadillo.position.y - CANNON_POS.y)
    this.bestDistancePx = Math.max(this.bestDistancePx, this.armadillo.position.x - CANNON_POS.x)

    // 카메라 추적 대상 = 아르마딜로 위치
    this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
  }

  _updateScenery() {
    for (const mesh of this.scenery) {
      const { layer, baseX, baseY, drift } = mesh.userData
      mesh.position.x = this.camTarget.x * layer + baseX + Math.sin(this.time * drift + baseX * 0.01) * 18
      mesh.position.y = this.camTarget.y * layer + baseY + Math.cos(this.time * drift + baseY * 0.01) * 6
    }
  }

  _updateAiming(dt) {
    if (this.sm.is(State.AIMING)) {
      const t = (Math.sin(this.time * AIM_SWEEP_SPEED) + 1) * 0.5
      this.aimAngle = THREE.MathUtils.lerp(AIM_MIN_ANGLE, AIM_MAX_ANGLE, t)
      this.lockedAimAngle = this.aimAngle
    }

    if (this.sm.is(State.POWERING)) {
      if (this.powerCharging) {
        this.powerRatio = Math.min(POWER_MAX, this.powerRatio + POWER_CHARGE_PER_SEC * dt)
      }
    }

    this._updateCannonPose(this.lockedAimAngle)
  }

  _updateCannonPose(angle) {
    if (this.cannonBarrel) this.cannonBarrel.rotation.z = angle
    if (!this.cannonMuzzle) return
    this.cannonMuzzle.rotation.z = angle
    this.cannonMuzzle.position.set(
      CANNON_POS.x + 28 + Math.cos(angle) * 38,
      CANNON_POS.y + 10 + Math.sin(angle) * 38,
      0.04,
    )
  }

  _updateFlight(dt) {
    const prevBottom = this.armadillo.position.y - ARMADILLO_SIZE / 2

    this.velocity.y -= GRAVITY * dt
    this.armadillo.position.x += this.velocity.x * dt
    this.armadillo.position.y += this.velocity.y * dt

    const nextBottom = this.armadillo.position.y - ARMADILLO_SIZE / 2
    const piercedTerrain = this._findPiercedTerrain()
    if (piercedTerrain) {
      this._breakTerrain(piercedTerrain)
      return
    }

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
      if (isTerrainDamagedAt(island, this.armadillo.position.x, ARMADILLO_SIZE / 2)) continue
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
    const forward = new THREE.Vector2(Math.cos(this.lockedAimAngle), Math.sin(this.lockedAimAngle))
    const samples = [0, 34, 68, 102]
    for (const sample of samples) {
      const x = CANNON_POS.x + forward.x * sample
      const y = CANNON_POS.y + ARMADILLO_SIZE / 2 + forward.y * sample
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
    const force = this._getLaunchForce()
    const strength = 0.35 + force * 0.65
    const burstX = CANNON_POS.x + Math.cos(this.lockedAimAngle) * 68
    const burstY = CANNON_POS.y + 10 + Math.sin(this.lockedAimAngle) * 68
    this.trauma = Math.min(1, this.trauma + strength)
    this.flashTime = Math.max(this.flashTime, force > 0.85 ? 0.18 : 0.09)
    this.slowmoTime = Math.max(this.slowmoTime, force > 0.85 ? SLOWMO_SEC * 1.8 : SLOWMO_SEC)
    this._spawnParticles(burstX, burstY, force > 0.85 ? 0xfff176 : 0xff7043, force > 0.85 ? 16 : 9, 220 + force * 260)
    if (force > 0.85) this._setArmadilloColor(0xfff176)
  }

  _getLaunchForce() {
    return THREE.MathUtils.clamp((this.powerRatio - POWER_MIN) / (POWER_MAX - POWER_MIN), 0, 1)
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
    if (isTerrainDamagedAt(this.currentIsland, this.armadillo.position.x, ARMADILLO_SIZE / 2)) {
      this._launchFromIsland()
      return
    }
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
    // 지형 파편 + 크레이터 애니메이션
    for (const island of this.islands) {
      updateTerrainChunks(island, dt)
      updateTerrainCraters(island, dt)
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

  _render(dt) {
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
    const action = this.sm.is(State.TITLE)
      ? 'Space / Tap: Start'
      : this.sm.is(State.AIMING)
        ? 'Space / Tap: Lock Angle'
      : this.sm.is(State.POWERING)
        ? this.powerCharging ? 'Release: Launch' : 'Hold Space / Touch: Charge'
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
      ${this.sm.is(State.TITLE) ? `
        <div class="start-layer">
          <div class="start-title">ARMADILLO RUSH</div>
          <div class="start-subtitle">Space / Tap to Start</div>
          <div class="start-best">BEST ${this.bestRecord.score}</div>
        </div>
      ` : ''}
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
    this._render(frameDt)
    requestAnimationFrame(() => this.loop())
  }

  start() {
    requestAnimationFrame(() => this.loop())
  }
}

const game = new Game()
game.start()
console.log('Armadillo Rush — 2단계 기본 발사/비행/착지 루프 부팅 완료.')
