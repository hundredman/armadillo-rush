import * as THREE from 'three'
import { VIEW_HEIGHT_PX } from '../config.js'

/**
 * Scene + OrthographicCamera + Renderer 셋업 (§11).
 * 완전 2D 사이드뷰: 세로 가시 영역을 VIEW_HEIGHT_PX 로 고정하고
 * 가로는 종횡비로 산출 → 어떤 화면비에서도 세로 스케일이 일정하다.
 */
export class Renderer {
  constructor(canvas) {
    this.scene = new THREE.Scene()

    // OrthographicCamera — left/right/top/bottom 은 리사이즈에서 계산
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000)
    this.camera.position.z = 10

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setClearColor(0x000011, 1)

    this._resize()
    window.addEventListener('resize', () => this._resize())
  }

  _resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    const aspect = w / h

    // 세로 VIEW_HEIGHT_PX 고정, 가로는 종횡비 비례
    const halfH = VIEW_HEIGHT_PX / 2
    const halfW = halfH * aspect
    const cam = this.camera
    cam.left = -halfW
    cam.right = halfW
    cam.top = halfH
    cam.bottom = -halfH
    cam.updateProjectionMatrix()

    this.viewWidthPx = halfW * 2
    this.viewHeightPx = VIEW_HEIGHT_PX

    // devicePixelRatio 는 2 로 상한 (모바일 과부하 방지)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(w, h, false)

    // PostFX composer도 리사이즈 (등록된 경우)
    if (this._postfx) this._postfx.setSize(w, h)
  }

  /** PostFX 참조 등록 — 리사이즈 연동 */
  registerPostFX(postfx) {
    this._postfx = postfx
  }

  /** 카메라 셰이크 오프셋을 반영해 중심을 이동 (camera.js 가 호출) */
  setCenter(x, y, shakeX = 0, shakeY = 0) {
    this.camera.position.x = x + shakeX
    this.camera.position.y = y + shakeY
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  add(obj) { this.scene.add(obj) }
  remove(obj) { this.scene.remove(obj) }
}
