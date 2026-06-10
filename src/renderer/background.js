import * as THREE from 'three'
import vertSrc from '../shaders/sky.vert?raw'
import fragSrc from '../shaders/sky.frag?raw'

/**
 * World background system.
 *
 * Layer composition (back → front):
 *   1. Fullscreen sky shader  (clear sky → clouds → space gradient)
 *   2. Star field             (parallax rate 0.02x — nearly fixed)
 *   3. Distant mountain silhouettes (parallax rate 0.08x)
 *   4. Sea mesh              (fixed bottom, fades with altitude)
 *   5. Mid cloud layer       (parallax rate 0.25x)
 *   6. Moon                  (parallax rate 0.04x)
 *
 * All layers live in a single NDC-space background scene so they never
 * conflict with the world-space gameplay objects.  The camera position
 * (camX, camY in world px) is passed into update() each frame and used
 * to offset layers at different rates.
 */
export class Background {
  constructor(renderer) {
    this.renderer = renderer
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()   // shader outputs NDC directly — no transform needed

    // track last camX so we can compute delta-based drift
    this._lastCamX = 0
    this._lastCamY = 0

    // ── 1. Fullscreen sky quad ──────────────────────────────────────────────
    const geom = new THREE.PlaneGeometry(2, 2)
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertSrc,
      fragmentShader: fragSrc,
      uniforms: {
        uHeightRatio: { value: 0 },
        uTime:        { value: 0 },
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

    // ── 2. Star field ───────────────────────────────────────────────────────
    this._buildStars()

    // ── 3. Distant mountain silhouettes ────────────────────────────────────
    this._buildMountains()

    // ── 4. Sea ──────────────────────────────────────────────────────────────
    this._buildSea()

    // ── 5. Cloud layer ──────────────────────────────────────────────────────
    this._buildCloudLayers()

    // ── 6. Moon ─────────────────────────────────────────────────────────────
    this._buildMoon()

    this.moonWorldY = null
  }

  // ── Star field ─────────────────────────────────────────────────────────────
  _buildStars() {
    const count = 160
    const positions = new Float32Array(count * 3)
    const sizes     = new Float32Array(count)
    const colors    = new Float32Array(count * 3)

    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xd0eeff),
      new THREE.Color(0xfff8e0),
      new THREE.Color(0xb0c8ff),
    ]

    for (let i = 0; i < count; i++) {
      // scatter over a wide NDC slab; we'll shift it with camX delta
      positions[i * 3]     = (Math.random() * 2.2) - 1.1
      positions[i * 3 + 1] = (Math.random() * 2.0) - 1.0
      positions[i * 3 + 2] = -0.60
      sizes[i] = Math.random() < 0.15 ? 3.0 : 1.2 + Math.random() * 1.4

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3]     = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1))

    // simple point material — crisp pixels
    const mat = new THREE.PointsMaterial({
      size: 2.5,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })

    this.starField = new THREE.Points(geo, mat)
    this.starField.frustumCulled = false
    this._starPositions = positions   // keep reference for parallax update
    this._starBaseX = positions.slice()  // original x values
    this.scene.add(this.starField)
  }

  // ── Distant mountain silhouettes ───────────────────────────────────────────
  _buildMountains() {
    this.mountainGroups = []

    // Two layers: far (rate 0.06) and near (rate 0.14)
    const layers = [
      { rate: 0.06, color: 0x1a2642, z: -0.55, count: 7, hScale: 0.26, baseY: -0.70, alpha: 0.0 },
      { rate: 0.14, color: 0x1e304e, z: -0.50, count: 5, hScale: 0.38, baseY: -0.62, alpha: 0.0 },
    ]

    for (const spec of layers) {
      const group = new THREE.Group()
      group.userData = { rate: spec.rate, baseX: 0, alpha: spec.alpha }

      for (let i = 0; i < spec.count; i++) {
        const w = 0.28 + Math.random() * 0.22
        const h = (0.08 + Math.random() * 0.10) * spec.hScale * 10
        const cx = -1.4 + (i / (spec.count - 1)) * 2.8 + (Math.random() - 0.5) * 0.18

        const shape = new THREE.Shape()
        shape.moveTo(cx - w / 2, spec.baseY)
        // jagged mountain silhouette
        const steps = 6
        for (let s = 1; s < steps; s++) {
          const sx = cx - w / 2 + (w / steps) * s
          const jitter = s === Math.floor(steps / 2) ? h : h * (0.3 + Math.random() * 0.5)
          shape.lineTo(sx, spec.baseY + jitter)
        }
        shape.lineTo(cx + w / 2, spec.baseY)
        shape.closePath()

        const geo = new THREE.ShapeGeometry(shape)
        const mat = new THREE.MeshBasicMaterial({
          color: spec.color,
          transparent: true,
          opacity: 0.0,
          depthTest: false,
          depthWrite: false,
        })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.position.z = spec.z
        group.add(mesh)
      }

      this.scene.add(group)
      this.mountainGroups.push({ group, spec })
    }
  }

  // ── Sea ────────────────────────────────────────────────────────────────────
  _buildSea() {
    const seaMat = new THREE.MeshBasicMaterial({
      color: 0x1d8fc1,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false,
    })
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

  // ── Cloud layers ───────────────────────────────────────────────────────────
  _buildCloudLayers() {
    this.cloudLayers = []
    // Three depth levels with distinct parallax rates
    const specs = [
      { x: -0.70, y: 0.36, scale: 0.82, phase: 0.0,  depth: -0.42, rate: 0.06 },
      { x: -0.20, y: 0.50, scale: 1.05, phase: 1.8,  depth: -0.43, rate: 0.10 },
      { x:  0.48, y: 0.34, scale: 0.90, phase: 3.4,  depth: -0.44, rate: 0.06 },
      { x:  0.88, y: 0.57, scale: 1.15, phase: 5.0,  depth: -0.45, rate: 0.10 },
      { x: -1.08, y: 0.63, scale: 1.00, phase: 6.2,  depth: -0.46, rate: 0.06 },
      // extra clouds for richer parallax mid layer
      { x:  0.22, y: 0.42, scale: 0.75, phase: 2.6,  depth: -0.41, rate: 0.18 },
      { x: -0.55, y: 0.58, scale: 0.88, phase: 4.4,  depth: -0.40, rate: 0.22 },
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

  // ── Moon ───────────────────────────────────────────────────────────────────
  _buildMoon() {
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

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8ab4d4,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false,
    })
    this.moonGlow = new THREE.Mesh(new THREE.CircleGeometry(0.30, 48), glowMat)
    this.moonGlow.position.set(0.35, 0.72, -0.35)
    this.scene.add(this.moonGlow)

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
      const c = new THREE.Mesh(new THREE.CircleGeometry(cr, 24), craterMat.clone())
      c.position.set(cx, cy, -0.28)
      this.scene.add(c)
      this.craters.push(c)
    }
  }

  // ── Update ─────────────────────────────────────────────────────────────────
  /** @param {number} heightRatio 0–1  @param {number} time  @param {number} camX world px  @param {number} camY world px */
  update(heightRatio, time, camX = 0, camY = 0) {
    this.material.uniforms.uHeightRatio.value = heightRatio
    this.material.uniforms.uTime.value = time
    this.lowSkyWash.material.opacity = (1 - THREE.MathUtils.smoothstep(heightRatio, 0.12, 0.42)) * 0.72

    // NDC width of one world pixel (used for parallax conversions)
    // The orthographic camera covers renderer.viewWidthPx world units over NDC width 2
    const viewW = this.renderer.viewWidthPx
    const viewH = this.renderer.viewHeightPx
    const ndcPerPxX = 2 / viewW
    const ndcPerPxY = 2 / viewH

    // ── Sea ───────────────────────────────────────────────────────────────
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

    // ── Stars (appear in space) ────────────────────────────────────────────
    const starVis = THREE.MathUtils.smoothstep(heightRatio, 0.48, 0.72)
    this.starField.material.opacity = starVis

    if (starVis > 0) {
      // Parallax: stars shift at 0.02x the NDC camera movement
      const STAR_RATE = 0.02
      const dxNdc = (camX - this._lastCamX) * ndcPerPxX * STAR_RATE
      const dyNdc = (camY - this._lastCamY) * ndcPerPxY * STAR_RATE * 0.5
      const pos = this.starField.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        let sx = pos.getX(i) - dxNdc
        // wrap horizontally in [-1.1, 1.1]
        if (sx > 1.1)  sx -= 2.2
        if (sx < -1.1) sx += 2.2
        let sy = pos.getY(i) - dyNdc
        if (sy > 1.1)  sy -= 2.2
        if (sy < -1.1) sy += 2.2
        pos.setXY(i, sx, sy)
      }
      pos.needsUpdate = true
    }

    // ── Mountains (appear in low-mid alt, fade with clouds) ────────────────
    const mountainVis = smoothBell(heightRatio, 0.02, 0.50)
    for (const { group, spec } of this.mountainGroups) {
      const dxNdc = (camX - this._lastCamX) * ndcPerPxX * spec.rate
      group.position.x -= dxNdc
      // wrap group so mountains tile seamlessly
      if (group.position.x > 1.2)  group.position.x -= 2.4
      if (group.position.x < -1.2) group.position.x += 2.4

      const vis = mountainVis * (1 - heightRatio / 0.55)
      for (const child of group.children) {
        child.material.opacity = THREE.MathUtils.clamp(vis * 0.72, 0, 0.88)
      }
    }

    // ── Clouds ────────────────────────────────────────────────────────────
    const cloudVis = smoothBell(heightRatio, 0.07, 0.62)
    for (const cloud of this.cloudLayers) {
      const spec = cloud.userData
      // slow ambient drift
      const drift = Math.sin(time * 0.13 + spec.phase) * 0.045
      // parallax offset — clouds at different depths move at different rates
      const parallaxX = -(camX - this._lastCamX) * ndcPerPxX * spec.rate
      cloud.position.x += parallaxX
      // wrap cloud around screen edges
      if (cloud.position.x > 1.6)  cloud.position.x -= 3.2
      if (cloud.position.x < -1.6) cloud.position.x += 3.2
      cloud.position.y = spec.y + Math.sin(time * 0.09 + spec.phase * 0.7) * 0.018
      for (const child of cloud.children) {
        const isBase = child.geometry?.type === 'PlaneGeometry'
        child.material.opacity = cloudVis * (isBase ? 0.16 : 0.54)
      }
    }

    // ── Moon (near-fixed, very slow parallax 0.04x) ───────────────────────
    const moonVis   = Math.max(0, Math.min(1, (heightRatio - 0.70) / 0.20))
    const moonScale = 1.0 + moonVis * 0.5
    const moonDxNdc = (camX - this._lastCamX) * ndcPerPxX * 0.04
    this.moonMesh.position.x -= moonDxNdc
    this.moonGlow.position.x -= moonDxNdc
    for (const c of this.craters) c.position.x -= moonDxNdc

    this.moonMesh.material.opacity  = moonVis * 0.95
    this.moonGlow.material.opacity  = moonVis * 0.18
    this.moonMesh.scale.setScalar(moonScale)
    this.moonGlow.scale.setScalar(moonScale * 1.12)
    for (const c of this.craters) {
      c.material.opacity = moonVis * 0.55
      c.scale.setScalar(moonScale)
    }

    // store for next frame delta
    this._lastCamX = camX
    this._lastCamY = camY
  }

  render() {
    const r = this.renderer.renderer
    r.autoClear = false
    r.clear()
    r.render(this.scene, this.camera)
  }
}

function smoothBell(value, fadeIn, fadeOut) {
  const appear    = THREE.MathUtils.smoothstep(value, fadeIn, fadeIn + 0.18)
  const disappear = 1 - THREE.MathUtils.smoothstep(value, fadeOut, fadeOut + 0.18)
  return THREE.MathUtils.clamp(appear * disappear, 0, 1)
}
