import * as THREE from 'three'
import vertSrc from '../shaders/sky.vert?raw'
import fragSrc from '../shaders/sky.frag?raw'

/**
 * World background system.
 *
 * Layer composition:
 *   1. fullscreen sky shader (clear sky → clouds → space → moon orbit gradient)
 *   2. sea mesh (fixed bottom, fades as altitude increases)
 *   3. background cloud layer (appears at mid altitude)
 *   4. moon mesh (fixed top, appears and grows with altitude)
 *   5. moon crater deco (surface markings)
 */
export class Background {
  constructor(renderer) {
    this.renderer = renderer
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()   // shader outputs NDC directly — no transform needed

    // ── 1. Fullscreen sky quad ──
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

    this.lowSkyWash = new THREE.Mesh(
      geom.clone(),
      new THREE.MeshBasicMaterial({
        color: 0x8edcff,
        transparent: true,
        opacity: 0.0,
        depthTest: false,
        depthWrite: false,
      }),
    )
    this.lowSkyWash.position.z = -0.02
    this.scene.add(this.lowSkyWash)

    // ── 2. Sea (fixed bottom strip) ──
    // placed directly in NDC space with a separate static camera
    this._buildSea()

    // ── 3. Altitude-based cloud layer ──
    this._buildCloudLayers()

    // ── 4. Moon ──
    this._buildMoon()

    // moon target marker placed in the main scene (game objects)
    this.moonWorldY = null   // set by main.js
  }

  _buildSea() {
    // clearly visible sea surface layer at screen bottom
    const seaMat = new THREE.MeshBasicMaterial({
      color: 0x1d8fc1,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false,
    })
    // NDC-space bottom strip: roughly bottom 28% of screen
    const seaGeom = new THREE.PlaneGeometry(2, 0.56)
    this.seaMesh = new THREE.Mesh(seaGeom, seaMat)
    this.seaMesh.position.set(0, -0.74, -0.5)
    this.scene.add(this.seaMesh)

    const foamMat = new THREE.MeshBasicMaterial({
      color: 0x9be7ff,
      transparent: true,
      opacity: 0.28,
      depthTest: false,
      depthWrite: false,
    })
    this.seaFoam = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.035), foamMat)
    this.seaFoam.position.set(0, -0.48, -0.38)
    this.scene.add(this.seaFoam)

    this.waveLines = []
    for (let i = 0; i < 4; i++) {
      const waveLineMat = new THREE.LineBasicMaterial({
        color: i === 0 ? 0xd7fbff : 0x8be9ff,
        transparent: true,
        opacity: 0.35,
        depthTest: false,
      })
      const waveGeom = new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 32 }, (_, j) => {
          const x = -1 + (j / 31) * 2
          return new THREE.Vector3(x, -0.50 - i * 0.105, -0.35 + i * 0.01)
        }),
      )
      const line = new THREE.Line(waveGeom, waveLineMat)
      this.scene.add(line)
      this.waveLines.push(line)
    }
  }

  _buildCloudLayers() {
    this.cloudLayers = []
    const specs = [
      { x: -0.70, y: 0.36, scale: 0.82, phase: 0.0, depth: -0.42 },
      { x: -0.20, y: 0.50, scale: 1.05, phase: 1.8, depth: -0.43 },
      { x: 0.48, y: 0.34, scale: 0.90, phase: 3.4, depth: -0.44 },
      { x: 0.88, y: 0.57, scale: 1.15, phase: 5.0, depth: -0.45 },
      { x: -1.08, y: 0.63, scale: 1.00, phase: 6.2, depth: -0.46 },
    ]

    for (const spec of specs) {
      const cloud = this._createScreenCloud()
      cloud.position.set(spec.x, spec.y, spec.depth)
      cloud.scale.setScalar(spec.scale)
      cloud.userData = spec
      this.scene.add(cloud)
      this.cloudLayers.push(cloud)
    }
  }

  _createScreenCloud() {
    const group = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0xb9d4ee,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })

    for (const [x, y, r] of [
      [-0.17, -0.02, 0.105],
      [-0.06,  0.04, 0.135],
      [ 0.08,  0.03, 0.120],
      [ 0.20, -0.02, 0.090],
    ]) {
      const puff = new THREE.Mesh(new THREE.CircleGeometry(r, 32), mat.clone())
      puff.position.set(x, y, 0.01)
      group.add(puff)
    }

    const base = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.10), shadowMat.clone())
    base.position.set(0.02, -0.045, 0)
    group.add(base)

    return group
  }

  _buildMoon() {
    // moon body (large, faint — appears with altitude progress)
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

    // moon glow (large translucent circle)
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

    // moon surface craters (small dark circles)
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

  /** heightRatio: 0~1 (player height / max reference height) */
  update(heightRatio, time) {
    this.material.uniforms.uHeightRatio.value = heightRatio
    this.material.uniforms.uTime.value = time
    this.lowSkyWash.material.opacity = (1 - THREE.MathUtils.smoothstep(heightRatio, 0.12, 0.42)) * 0.72

    // ── Sea visibility ── strong early, fades gradually with altitude
    const seaVis = Math.max(0, 1 - heightRatio / 0.26)
    this.seaMesh.material.opacity = seaVis
    this.seaFoam.material.opacity = seaVis * 0.38

    for (let i = 0; i < this.waveLines.length; i++) {
      const line = this.waveLines[i]
      const pos = line.geometry.attributes.position
      for (let j = 0; j < pos.count; j++) {
        const x = -1 + (j / (pos.count - 1)) * 2
        const y = -0.50 - i * 0.105 + Math.sin(time * (1.25 + i * 0.22) + j * 0.62 + i) * 0.012
        pos.setXYZ(j, x, y, -0.35 + i * 0.01)
      }
      pos.needsUpdate = true
      line.material.opacity = seaVis * (i === 0 ? 0.65 : 0.32)
    }

    // ── Cloud layer ── dense at mid altitude, fades near space
    const cloudVis = smoothBell(heightRatio, 0.07, 0.62)
    for (const cloud of this.cloudLayers) {
      const spec = cloud.userData
      const drift = Math.sin(time * 0.13 + spec.phase) * 0.045
      cloud.position.x = spec.x + drift
      cloud.position.y = spec.y + Math.sin(time * 0.09 + spec.phase * 0.7) * 0.018
      for (const child of cloud.children) {
        const isBase = child.geometry?.type === 'PlaneGeometry'
        child.material.opacity = cloudVis * (isBase ? 0.16 : 0.54)
      }
    }

    // ── Moon appearance ── fades in above height 0.7
    const moonVis = Math.max(0, Math.min(1, (heightRatio - 0.70) / 0.20))
    const moonScale = 1.0 + moonVis * 0.5   // grows as you approach
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

function smoothBell(value, fadeIn, fadeOut) {
  const appear = THREE.MathUtils.smoothstep(value, fadeIn, fadeIn + 0.18)
  const disappear = 1 - THREE.MathUtils.smoothstep(value, fadeOut, fadeOut + 0.18)
  return THREE.MathUtils.clamp(appear * disappear, 0, 1)
}
