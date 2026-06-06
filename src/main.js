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
      { x: 150, y: -250, w: 1000 },
      { x: 1100, y: -180, w: 1400 },
      { x: 1900, y: -40, w: 650 },
      { x: 2580, y: 100, w: 500 },
      { x: 3220, y: 250, w: 380 },
      { x: 3820, y: 420, w: 280 },
    ]
    for (const spec of islandLayout) {
      const w = spec.w
      const geom = new THREE.BoxGeometry(w, 30, 1)
      const mat = new THREE.MeshBasicMaterial({ color: 0x4caf50 })
      const island = new THREE.Mesh(geom, mat)
      island.position.set(spec.x, spec.y, 0)
      island.userData.bounds = this._getIslandBounds(island, w, 30)
      this.renderer.add(island)
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

    this.maxHeightPx = this.islands[this.islands.length - 1].position.y + 240   // 배경 heightRatio 정규화 기준
  }

  _bindInput() {
    const triggerAction = () => {
      this._handleAction()
    }

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

    if (isTouchDevice) {
      window.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse') return
        triggerAction()
      })
      return
    }

    window.addEventListener('keydown', (event) => {
      if (event.code !== 'Space' || event.repeat) return
      event.preventDefault()
      triggerAction()
    })
  }

  _getIslandBounds(island, width, height) {
    return {
      left: island.position.x - width / 2,
      right: island.position.x + width / 2,
      top: island.position.y + height / 2,
      bottom: island.position.y - height / 2,
    }
  }

  _resetRun() {
    this.velocity.set(0, 0)
    this.speedRatio = 0.75
    this.aimAngle = AIM_MIN_ANGLE
    this.lockedAimAngle = AIM_MIN_ANGLE
    this.powerRatio = POWER_MIN
    this.currentIsland = null
    this.bestHeightPx = 0
    this.armadillo.position.set(CANNON_POS.x, CANNON_POS.y + ARMADILLO_SIZE / 2, 0)
    this.armadillo.material.color.set(0xff1744)
    if (this.cannonBarrel) this.cannonBarrel.rotation.z = this.aimAngle
    if (this.sm.is(State.GAMEOVER)) this.sm.transition(State.AIMING)
  }

  _handleAction() {
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
      const bounds = island.userData.bounds
      const withinX = this.armadillo.position.x >= bounds.left - ARMADILLO_SIZE / 2
        && this.armadillo.position.x <= bounds.right + ARMADILLO_SIZE / 2
      const crossedTop = prevBottom >= bounds.top && nextBottom <= bounds.top
      if (withinX && crossedTop) return island
    }

    return null
  }

  _landOnIsland(island) {
    this.currentIsland = island
    this.velocity.set(0, 0)
    this.speedRatio = Math.max(this.speedRatio, ROLLING_MIN_SPEED_RATIO)
    this.armadillo.position.y = island.userData.bounds.top + ARMADILLO_SIZE / 2

    if (this.sm.is(State.FLYING) || this.sm.is(State.FALLING)) {
      this.sm.transition(State.ROLLING)
    }
  }

  _updateRolling(dt) {
    if (!this.currentIsland) return

    const bounds = this.currentIsland.userData.bounds
    this.speedRatio = Math.max(ROLLING_MIN_SPEED_RATIO, this.speedRatio - FRICTION_PER_SEC * dt)
    this.armadillo.position.x += this.speedRatio * MAX_SPEED * dt
    this.armadillo.position.y = bounds.top + ARMADILLO_SIZE / 2

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
    const action = this.sm.is(State.AIMING)
      ? 'Space / Tap: Lock Angle'
      : this.sm.is(State.POWERING)
        ? 'Space / Tap: Lock Power'
      : this.sm.is(State.ROLLING)
        ? 'Space / Tap: Boost'
        : this.sm.is(State.GAMEOVER)
          ? 'Space / Tap: Retry'
          : 'Flying'

    this.ui.innerHTML = `
      <div style="position:fixed;left:18px;top:16px;font-weight:700;line-height:1.5">
        <div>STATE ${this.sm.current}</div>
        <div>HEIGHT ${heightM}m</div>
        <div>SPEED ${speed}%</div>
        <div>ANGLE ${Math.round(THREE.MathUtils.radToDeg(this.lockedAimAngle))}deg</div>
        <div>POWER ${Math.round(this.powerRatio * 100)}%</div>
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
