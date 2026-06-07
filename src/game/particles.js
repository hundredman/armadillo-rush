import * as THREE from 'three'
import particleVert from '../shaders/particle.vert?raw'
import particleFrag from '../shaders/particle.frag?raw'

const MAX_PARTICLES = 512
const GRAVITY_SCALE = 0.28

/**
 * Instanced Mesh 기반 파티클 풀 (GLSL 커스텀 셰이더).
 * scene.add(particles.mesh) 한 번만 호출하고 spawn/update 로 관리.
 */
export class ParticleSystem {
  constructor() {
    // 기본 지오메트리: 단순 사각형 플레인
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

    // 수명 attribute (per-instance) — ShaderMaterial instancing 방식은
    // InstancedMesh의 instanceMatrix를 통해 크기/위치만 CPU에서 처리하고,
    // life/color는 별도 InstancedBufferAttribute로 전달
    this._lifeArr  = new Float32Array(MAX_PARTICLES)
    this._colorArr = new Float32Array(MAX_PARTICLES * 3)

    const lifeAttr  = new THREE.InstancedBufferAttribute(this._lifeArr, 1)
    const colorAttr = new THREE.InstancedBufferAttribute(this._colorArr, 3)
    this.mesh.geometry.setAttribute('aLife',  lifeAttr)
    this.mesh.geometry.setAttribute('aColor', colorAttr)
    this._lifeAttr  = lifeAttr
    this._colorAttr = colorAttr

    // CPU 상태 배열
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
    // 초기 모두 크기 0으로 숨김
    this._dummy.scale.setScalar(0)
    this._dummy.updateMatrix()
    for (let i = 0; i < MAX_PARTICLES; i++) {
      this.mesh.setMatrixAt(i, this._dummy.matrix)
    }
    this.mesh.instanceMatrix.needsUpdate = true
  }

  /**
   * 파티클 발사
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

  /** 전방향 폭발 스폰 */
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

  /** 지형 파괴 흙먼지 — 위쪽으로 퍼짐 */
  spawnDirt(x, y, count = 28) {
    // 갈색 흙 덩어리
    this.spawn(x, y, 0x6d4c41, Math.floor(count * 0.55), 150, {
      spreadAngle: Math.PI,
      sizeMin: 6,
      sizeMax: 22,
      lifeMin: 0.55,
      lifeMax: 1.2,
      biasAngle: Math.PI / 2,
    })
    // 밝은 파편 (빠르게 작게)
    this.spawn(x, y, 0xbcaaa4, Math.floor(count * 0.45), 260, {
      spreadAngle: Math.PI * 0.9,
      sizeMin: 3,
      sizeMax: 9,
      lifeMin: 0.25,
      lifeMax: 0.65,
      biasAngle: Math.PI / 2,
    })
  }

  /** 타이밍 판정 이펙트 — 위로 솟구치는 별 모양 */
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
   * 불꽃 트레일 — 아르마딜로 속도 방향 반대쪽으로 뿜어나오는 불꽃.
   * intensity: 0~1, velAngle: 진행 방향 radian (불꽃은 반대 방향으로)
   */
  spawnFlameTrail(x, y, intensity, velAngle) {
    const count = Math.max(1, Math.round(intensity * 4))
    const backAngle = velAngle + Math.PI  // 진행 반대

    // 주황 코어
    this.spawn(x, y, 0xff6600, count, 180 + intensity * 120, {
      spreadAngle: 0.9,
      sizeMin: 5 + intensity * 8,
      sizeMax: 10 + intensity * 16,
      lifeMin: 0.07,
      lifeMax: 0.18,
      biasAngle: backAngle,
      gravityScale: 0.04,
    })
    // 노란 스파크
    this.spawn(x, y, 0xffdd00, Math.max(1, Math.round(count * 0.5)), 260 + intensity * 80, {
      spreadAngle: 0.6,
      sizeMin: 3,
      sizeMax: 7 + intensity * 6,
      lifeMin: 0.04,
      lifeMax: 0.13,
      biasAngle: backAngle,
      gravityScale: 0.02,
    })
    // 흰 코어 (아주 짧고 밝게)
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
