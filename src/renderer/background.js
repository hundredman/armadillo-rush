import * as THREE from 'three'
import vertSrc from '../shaders/sky.vert?raw'
import fragSrc from '../shaders/sky.frag?raw'

/**
 * 세계관 배경 시스템.
 *
 * 레이어 구성:
 *   1. 풀스크린 sky 셰이더 (바다 → 우주 → 달 궤도 그라데이션)
 *   2. 바다 메시 (하단 고정, 높이 올라갈수록 사라짐)
 *   3. 달 메시 (상단 고정, 높이 올라갈수록 등장 + 커짐)
 *   4. 달 크레이터 데코 (달 표면 무늬)
 */
export class Background {
  constructor(renderer) {
    this.renderer = renderer
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()   // 셰이더가 NDC 직접 출력 → 변환 불필요

    // ── 1. 풀스크린 sky 쿼드 ──
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
    this.skyMesh = new THREE.Mesh(geom, this.material)
    this.scene.add(this.skyMesh)

    // ── 2. 바다 (하단 고정 띠) ──
    // 별도 정적 카메라로 NDC 공간에 직접 배치
    this._buildSea()

    // ── 3. 달 ──
    this._buildMoon()

    // 메인 씬(게임 오브젝트)에 배치할 달 목표 마커
    this.moonWorldY = null   // main.js에서 설정
  }

  _buildSea() {
    // 화면 하단 10% — 바다 수면 레이어
    const seaMat = new THREE.MeshBasicMaterial({
      color: 0x0a2a4a,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false,
    })
    // NDC 공간 기준 하단 띠: y = -1.0 ~ -0.80
    const seaGeom = new THREE.PlaneGeometry(2, 0.22)
    this.seaMesh = new THREE.Mesh(seaGeom, seaMat)
    this.seaMesh.position.set(0, -0.89, -0.5)
    this.scene.add(this.seaMesh)

    // 바다 수면 하이라이트 라인
    const waveLineMat = new THREE.LineBasicMaterial({
      color: 0x4dd0e1,
      transparent: true,
      opacity: 0.55,
      depthTest: false,
    })
    const waveGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1, -0.78, -0.4),
      new THREE.Vector3( 1, -0.78, -0.4),
    ])
    this.waveLine = new THREE.Line(waveGeom, waveLineMat)
    this.scene.add(this.waveLine)
  }

  _buildMoon() {
    // 달 본체 (크고 희미하게 — 진행도에 따라 등장)
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xdce8f0,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })
    const moonGeom = new THREE.CircleGeometry(0.18, 64)
    this.moonMesh = new THREE.Mesh(moonGeom, moonMat)
    this.moonMesh.position.set(0.35, 0.72, -0.3)
    this.scene.add(this.moonMesh)

    // 달 글로우 (큰 반투명 원)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8ab4d4,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })
    const glowGeom = new THREE.CircleGeometry(0.30, 48)
    this.moonGlow = new THREE.Mesh(glowGeom, glowMat)
    this.moonGlow.position.set(0.35, 0.72, -0.35)
    this.scene.add(this.moonGlow)

    // 달 표면 크레이터 (작은 어두운 원들)
    const craterMat = new THREE.MeshBasicMaterial({
      color: 0xb0c8d8,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })
    this.craters = []
    for (const [cx, cy, cr] of [
      [0.32, 0.76, 0.028],
      [0.42, 0.68, 0.022],
      [0.28, 0.66, 0.018],
      [0.38, 0.78, 0.015],
      [0.46, 0.74, 0.012],
    ]) {
      const c = new THREE.Mesh(
        new THREE.CircleGeometry(cr, 24),
        craterMat.clone(),
      )
      c.position.set(cx, cy, -0.28)
      this.scene.add(c)
      this.craters.push(c)
    }
  }

  /** heightRatio: 0~1 (플레이어 높이 / 기준 최대 높이) */
  update(heightRatio, time) {
    this.material.uniforms.uHeightRatio.value = heightRatio
    this.material.uniforms.uTime.value = time

    // ── 바다 가시성 ── 낮은 높이에서만 표시
    const seaVis = Math.max(0, 1 - heightRatio / 0.18)
    this.seaMesh.material.opacity = seaVis
    this.waveLine.material.opacity = seaVis * 0.55

    // ── 달 등장 ── 높이 0.7 이상에서 서서히 나타남
    const moonVis = Math.max(0, Math.min(1, (heightRatio - 0.70) / 0.20))
    const moonScale = 1.0 + moonVis * 0.5   // 가까워질수록 커짐
    this.moonMesh.material.opacity = moonVis * 0.95
    this.moonGlow.material.opacity = moonVis * 0.18
    this.moonMesh.scale.setScalar(moonScale)
    this.moonGlow.scale.setScalar(moonScale * 1.12)

    for (const c of this.craters) {
      c.material.opacity = moonVis * 0.55
      c.scale.setScalar(moonScale)
    }
  }

  render() {
    const r = this.renderer.renderer
    r.autoClear = false
    r.clear()
    r.render(this.scene, this.camera)
  }
}
