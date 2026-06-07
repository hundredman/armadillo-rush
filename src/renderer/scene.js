import * as THREE from 'three'
import { VIEW_HEIGHT_PX } from '../config.js'

export class Renderer {
  constructor(canvas) {
    this.scene = new THREE.Scene()

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000)
    this.camera.position.z = 10

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setClearColor(0x000011, 1)

    // updateStyle=false: CSS(100%/100%)를 건드리지 않고 drawingBuffer만 설정
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight, false)

    this._resize()
    window.addEventListener('resize', () => this._resize())
  }

  _resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    const aspect = w / h

    const halfH = VIEW_HEIGHT_PX / 2
    const halfW = halfH * aspect
    const cam = this.camera
    cam.left   = -halfW
    cam.right  =  halfW
    cam.top    =  halfH
    cam.bottom = -halfH
    cam.updateProjectionMatrix()

    this.viewWidthPx  = halfW * 2
    this.viewHeightPx = VIEW_HEIGHT_PX

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(w, h, false)

    if (this._postfx) this._postfx.setSize(w, h)
  }

  registerPostFX(postfx) {
    this._postfx = postfx
  }

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
