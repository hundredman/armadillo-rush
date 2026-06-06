import * as THREE from 'three'
import vertSrc from '../shaders/sky.vert?raw'
import fragSrc from '../shaders/sky.frag?raw'

/**
 * 높이 기반 배경 그라데이션 (커스텀 GLSL, §11).
 * 풀스크린 쿼드를 별도 ortho 카메라로 그려 항상 화면 전체를 덮는다.
 * 메인 씬 렌더 직전에 background.render() 를 호출한다.
 */
export class Background {
  constructor(renderer) {
    this.renderer = renderer
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()   // 셰이더가 NDC 직접 출력 → 변환 불필요

    const geom = new THREE.PlaneGeometry(2, 2)
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertSrc,
      fragmentShader: fragSrc,
      uniforms: {
        uHeightRatio: { value: 0 },
        uTime: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
    })
    this.mesh = new THREE.Mesh(geom, this.material)
    this.scene.add(this.mesh)
  }

  /** heightRatio: 0~1 (플레이어 높이 / 기준 최대 높이) */
  update(heightRatio, time) {
    this.material.uniforms.uHeightRatio.value = heightRatio
    this.material.uniforms.uTime.value = time
  }

  render() {
    const r = this.renderer.renderer
    r.autoClear = false
    r.clear()
    r.render(this.scene, this.camera)
  }
}
