import * as THREE from 'three'
import { Renderer } from './renderer/scene.js'
import { Background } from './renderer/background.js'
import { StateMachine, State } from './state.js'
import { CAMERA_LERP, PX_PER_METER } from './config.js'

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

class Game {
  constructor() {
    const canvas = document.getElementById('game-canvas')
    this.renderer = new Renderer(canvas)
    this.background = new Background(this.renderer)
    this.sm = new StateMachine(State.TITLE)

    this.time = 0
    this.accumulator = 0
    this.lastNow = performance.now()

    // 카메라가 추적할 목표 (1단계: placeholder 가 곧 아르마딜로 대역)
    this.camTarget = new THREE.Vector2(0, 0)
    this.camPos = new THREE.Vector2(0, 0)

    this._buildPlaceholderWorld()
    this._bindInput()

    this.sm.onChange((from, to) => console.log(`[state] ${from} → ${to}`))
    // 1단계 확인용: 타이틀 → 조준으로 바로 진입해 placeholder 가 보이게
    this.sm.transition(State.AIMING)
  }

  // ── 1단계 placeholder: 섬 몇 개 + 아르마딜로 대역 큐브 ──
  _buildPlaceholderWorld() {
    this.islands = []
    let y = -300
    for (let i = 0; i < 6; i++) {
      const w = 400 - i * 50
      const geom = new THREE.BoxGeometry(w, 30, 1)
      const mat = new THREE.MeshBasicMaterial({ color: 0x4caf50 })
      const island = new THREE.Mesh(geom, mat)
      island.position.set(i * 120, y, 0)
      this.renderer.add(island)
      this.islands.push(island)
      y += 180
    }

    // 아르마딜로 대역 (1단계: 단순 박스, 셰이더는 3단계에서)
    const aGeom = new THREE.BoxGeometry(30, 30, 1)
    const aMat = new THREE.MeshBasicMaterial({ color: 0xff1744 })
    this.armadillo = new THREE.Mesh(aGeom, aMat)
    this.armadillo.position.set(0, -260, 0)
    this.renderer.add(this.armadillo)

    this.maxHeightPx = y   // 배경 heightRatio 정규화 기준
  }

  _bindInput() {
    // 1단계 확인용: 입력 시 아르마딜로 대역을 위로 이동 → 카메라 추적 검증
    const triggerAction = () => {
      this.armadillo.position.y += 180
      this.armadillo.position.x += 120
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

  _update(dt) {
    this.time += dt
    // 카메라 추적 대상 = 아르마딜로 위치
    this.camTarget.set(this.armadillo.position.x, this.armadillo.position.y)
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
console.log('Armadillo Rush — 1단계 렌더링 기반 부팅 완료. PC는 Space, 터치 기기는 탭으로 테스트합니다.')
