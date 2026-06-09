import * as THREE from 'three'
import particleVert from '../shaders/particle.vert?raw'
import particleFrag from '../shaders/particle.frag?raw'

const MAX_PARTICLES = 512
const GRAVITY_SCALE = 0.28

/**
 * Particle pool based on Instanced Mesh (custom GLSL shader).
 * Call scene.add(particles.mesh) once; manage with spawn/update.
 */
export class ParticleSystem {
  constructor() {
    // base geometry: simple quad plane
    const baseGeom = new THREE.PlaneGeometry(1, 1)

    const mat = new THREE.ShaderMaterial({
      vertexShader: particleVert,
      fragmentShader: particleFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.mesh = new THREE.InstancedMesh(baseGeom, mat, MAX_PARTICLES)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 10

    // life attribute (per-instance) — ShaderMaterial instancing:
    // size/position handled on CPU via instanceMatrix,
    // life/color passed as separate InstancedBufferAttribute
    this._lifeArr  = new Float32Array(MAX_PARTICLES)
    this._colorArr = new Float32Array(MAX_PARTICLES * 3)

    const lifeAttr  = new THREE.InstancedBufferAttribute(this._lifeArr, 1)
    const colorAttr = new THREE.InstancedBufferAttribute(this._colorArr, 3)
    this.mesh.geometry.setAttribute('aLife',  lifeAttr)
    this.mesh.geometry.setAttribute('aColor', colorAttr)
    this._lifeAttr  = lifeAttr
    this._colorAttr = colorAttr

    // CPU state array
    this._pool = Array.from({ length: MAX_PARTICLES }, () => ({
      active: false,
      life: 0,
      maxLife: 1,
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
      size: 8,
      gravityScale: GRAVITY_SCALE,
      r: 1, g: 1, b: 1,
    }))

    this._dummy = new THREE.Object3D()
    // initially hidden at scale 0
    this._dummy.scale.setScalar(0)
    this._dummy.updateMatrix()
    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.mesh.setMatrixAt(i, this._dummy.matrix)
    }
    this.mesh.instanceMatrix.needsUpdate = true
  }

  /**
   * Spawn a particle
   * @param {number} x
   * @param {number} y
   * @param {number} hexColor  ex) 0xff7043
   * @param {number} count
   * @param {number} baseSpeed  px/s
   * @param {object} opts
   */
  spawn(x, y, hexColor, count = 12, baseSpeed = 120, opts = {}) {
    const {
      spreadAngle = Math.PI * 2,
      gravityScale = GRAVITY_SCALE,
      sizeMin = 4,
      sizeMax = 14,
      lifeMin = 0.35,
      lifeMax = 0.75,
      biasAngle = Math.PI / 2,
    } = opts

    const col = new THREE.Color(hexColor)
    let spawned = 0

    for (let i = 0; i < MAX_PARTICLES && spawned < count; i++) {
      const p = this._pool[i]
      if (p.active) continue

      const angle = biasAngle + (Math.random() - 0.5) * spreadAngle
      const speed = baseSpeed * (0.4 + Math.random() * 0.9)

      p.active = true
      p.x = x
      p.y = y
      p.vx = Math.cos(angle) * speed
      p.vy = Math.sin(angle) * speed
      p.size = sizeMin + Math.random() * (sizeMax - sizeMin)
      p.maxLife = lifeMin + Math.random() * (lifeMax - lifeMin)
      p.life = p.maxLife
      p.gravityScale = gravityScale
      p.r = col.r
      p.g = col.g
      p.b = col.b
      spawned++
    }
  }

  /** Spawn omnidirectional burst. */
  spawnBurst(x, y, hexColor, count = 20, speed = 180) {
    this.spawn(x, y, hexColor, count, speed, {
      spreadAngle: Math.PI * 2,
      sizeMin: 5,
      sizeMax: 18,
      lifeMin: 0.4,
      lifeMax: 0.9,
      biasAngle: Math.PI / 2,
    })
  }

  /** Terrain destruction dirt — spreads upward. */
  spawnDirt(x, y, count = 28) {
    // brown dirt chunks
    this.spawn(x, y, 0x6d4c41, Math.floor(count * 0.55), 150, {
      spreadAngle: Math.PI,
      sizeMin: 6,
      sizeMax: 22,
      lifeMin: 0.55,
      lifeMax: 1.2,
      biasAngle: Math.PI / 2,
    })
    // bright debris (fast, small)
    this.spawn(x, y, 0xbcaaa4, Math.floor(count * 0.45), 260, {
      spreadAngle: Math.PI * 0.9,
      sizeMin: 3,
      sizeMax: 9,
      lifeMin: 0.25,
      lifeMax: 0.65,
      biasAngle: Math.PI / 2,
    })
  }

  /** Timing judgment effect — upward star burst. */
  spawnRating(x, y, hexColor, count = 16) {
    this.spawn(x, y, hexColor, count, 240, {
      spreadAngle: Math.PI * 0.6,
      sizeMin: 4,
      sizeMax: 12,
      lifeMin: 0.3,
      lifeMax: 0.7,
      biasAngle: Math.PI / 2,
      gravityScale: 0.12,
    })
  }

  /**
   * Flame trail — flames emit opposite to armadillo velocity.
   * intensity: 0~1, velAngle: travel direction in radians (flames go opposite)
   */
  spawnFlameTrail(x, y, intensity, velAngle) {
    const count = Math.max(1, Math.round(intensity * 4))
    const backAngle = velAngle + Math.PI  // opposite of travel

    // orange core
    this.spawn(x, y, 0xff6600, count, 180 + intensity * 120, {
      spreadAngle: 0.9,
      sizeMin: 5 + intensity * 8,
      sizeMax: 10 + intensity * 16,
      lifeMin: 0.07,
      lifeMax: 0.18,
      biasAngle: backAngle,
      gravityScale: 0.04,
    })
    // yellow sparks
    this.spawn(x, y, 0xffdd00, Math.max(1, Math.round(count * 0.5)), 260 + intensity * 80, {
      spreadAngle: 0.6,
      sizeMin: 3,
      sizeMax: 7 + intensity * 6,
      lifeMin: 0.04,
      lifeMax: 0.13,
      biasAngle: backAngle,
      gravityScale: 0.02,
    })
    // white core (very short and bright)
    if (intensity > 0.7) {
      this.spawn(x, y, 0xffffff, 1, 120, {
        spreadAngle: 0.3,
        sizeMin: 4,
        sizeMax: 8,
        lifeMin: 0.04,
        lifeMax: 0.09,
        biasAngle: backAngle,
        gravityScale: 0.01,
      })
    }
  }

  update(dt, gravityPx = 980) {
    let dirty = false

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = this._pool[i]
      if (!p.active) continue

      p.life -= dt
      if (p.life <= 0) {
        p.active = false
        this._dummy.scale.setScalar(0)
        this._dummy.position.set(0, 0, 0)
        this._dummy.updateMatrix()
        this.mesh.setMatrixAt(i, this._dummy.matrix)
        this._lifeArr[i] = 0
        dirty = true
        continue
      }

      p.vy -= gravityPx * p.gravityScale * dt
      p.x += p.vx * dt
      p.y += p.vy * dt

      const lifeRatio = p.life / p.maxLife
      const scale = p.size * lifeRatio

      this._dummy.position.set(p.x, p.y, 0.2)
      this._dummy.rotation.z = p.life * 14
      this._dummy.scale.setScalar(scale)
      this._dummy.updateMatrix()
      this.mesh.setMatrixAt(i, this._dummy.matrix)

      this._lifeArr[i] = lifeRatio
      this._colorArr[i * 3]     = p.r
      this._colorArr[i * 3 + 1] = p.g
      this._colorArr[i * 3 + 2] = p.b

      dirty = true
    }

    if (dirty) {
      this.mesh.instanceMatrix.needsUpdate = true
      this._lifeAttr.needsUpdate  = true
      this._colorAttr.needsUpdate = true
    }
  }

  clear() {
    for (const p of this._pool) {
      p.active = false
      p.life = 0
    }
    this._dummy.scale.setScalar(0)
    this._dummy.updateMatrix()
    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.mesh.setMatrixAt(i, this._dummy.matrix)
      this._lifeArr[i] = 0
    }
    this.mesh.instanceMatrix.needsUpdate = true
    this._lifeAttr.needsUpdate = true
  }
}
