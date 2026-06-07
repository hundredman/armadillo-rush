import * as THREE from 'three'
import { SPRITES, createSprite } from '../assets.js'
import { MATERIAL, OBSTACLE } from '../config.js'
import craterVert from '../shaders/crater.vert?raw'
import craterFrag from '../shaders/crater.frag?raw'

export const TERRAIN_THICKNESS = 64
export const OBSTACLE_SIZE = 34
export const BASE_DAMAGE_RADIUS = 42

export const DEFAULT_ISLAND_LAYOUT = [
  { x: 150, y: -250, w: 1000, rise: 18, amp: 18 },
  { x: 1080, y: -185, w: 1320, rise: 70, amp: 26 },
  { x: 1960, y: -20, w: 760, rise: 90, amp: 34 },
  { x: 2720, y: 140, w: 660, rise: 105, amp: 38 },
  { x: 3440, y: 320, w: 560, rise: 120, amp: 42 },
  { x: 4120, y: 525, w: 500, rise: 135, amp: 42 },
  { x: 4770, y: 750, w: 440, rise: 150, amp: 46 },
  { x: 5380, y: 1000, w: 390, rise: 165, amp: 48 },
  { x: 5960, y: 1275, w: 340, rise: 180, amp: 50 },
  { x: 6500, y: 1580, w: 300, rise: 195, amp: 52 },
]

export const DEFAULT_OBSTACLE_PLACEMENTS = [
  { island: 1, t: 0.42, type: 'wood' },
  { island: 1, t: 0.72, type: 'spike' },
  { island: 2, t: 0.36, type: 'stone' },
  { island: 2, t: 0.68, type: 'wood' },
  { island: 3, t: 0.48, type: 'moving' },
  { island: 4, t: 0.34, type: 'stone' },
  { island: 4, t: 0.68, type: 'spike' },
  { island: 5, t: 0.44, type: 'iron' },
  { island: 6, t: 0.55, type: 'stone' },
  { island: 7, t: 0.45, type: 'wood' },
  { island: 8, t: 0.55, type: 'iron' },
]

export function createCurvedTerrain({ x, y, w, rise, amp }) {
  const left = x - w / 2
  const right = x + w / 2
  const controls = [
    new THREE.Vector3(left, y, 0),
    new THREE.Vector3(left + w * 0.28, y + rise * 0.28 + amp, 0),
    new THREE.Vector3(left + w * 0.62, y + rise * 0.72 - amp * 0.35, 0),
    new THREE.Vector3(right, y + rise, 0),
  ]
  const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal', 0.35)
  const topPoints = curve.getPoints(32).map((point) => new THREE.Vector2(point.x, point.y))
  const minY = Math.min(...topPoints.map((point) => point.y))
  const maxY = Math.max(...topPoints.map((point) => point.y))
  const bottomY = minY - TERRAIN_THICKNESS
  const shape = new THREE.Shape()
  shape.moveTo(topPoints[0].x, topPoints[0].y)
  for (let i = 1; i < topPoints.length; i++) {
    shape.lineTo(topPoints[i].x, topPoints[i].y)
  }
  shape.lineTo(right, bottomY)
  shape.lineTo(left, bottomY)
  shape.closePath()

  const soil = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 12),
    new THREE.MeshBasicMaterial({ color: 0x6d4c41, side: THREE.DoubleSide }),
  )
  soil.position.z = -0.02

  const grassShape = new THREE.Shape()
  grassShape.moveTo(topPoints[0].x, topPoints[0].y)
  for (let i = 1; i < topPoints.length; i++) {
    grassShape.lineTo(topPoints[i].x, topPoints[i].y)
  }
  for (let i = topPoints.length - 1; i >= 0; i--) {
    grassShape.lineTo(topPoints[i].x, topPoints[i].y - 14)
  }
  grassShape.closePath()

  const grass = new THREE.Mesh(
    new THREE.ShapeGeometry(grassShape, 12),
    new THREE.MeshBasicMaterial({ color: 0x66bb6a, side: THREE.DoubleSide }),
  )
  grass.position.z = 0.02

  const ridge = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(topPoints.map((point) => new THREE.Vector3(point.x, point.y + 1, 0))),
    new THREE.LineBasicMaterial({ color: 0xc5e1a5 }),
  )
  ridge.position.z = 0.04

  const mesh = new THREE.Group()
  mesh.add(soil, grass, ridge)

  for (let i = 3; i < topPoints.length - 3; i += 5) {
    const point = topPoints[i]
    const tile = createSprite(SPRITES.terrain.grass, 48, 48)
    tile.position.set(point.x, point.y + 17, 0.08)
    tile.material.rotation = ((i % 2) - 0.5) * 0.08
    tile.userData.damageable = true
    mesh.add(tile)
  }
  for (let i = 6; i < topPoints.length - 2; i += 9) {
    const point = topPoints[i]
    const rock = createSprite(SPRITES.terrain.rock, 34, 34)
    rock.position.set(point.x + 6, point.y - 22, 0.07)
    rock.userData.damageable = true
    mesh.add(rock)
  }

  return {
    mesh,
    points: topPoints,
    destroyed: false,
    damageZones: [],
    damageMarks: [],
    bounds: { left, right, top: maxY, bottom: bottomY },
  }
}

/**
 * 지형 파괴 데미지 적용.
 * ParticleSystem은 main.js에서 처리하므로 여기서는 크레이터 마크만 생성.
 * @returns {{ zone, chunks }} zone = 충돌 영역, chunks = 애니메이션 파편 배열
 */
export function damageTerrain(terrain, x, radius = BASE_DAMAGE_RADIUS, depth = 1) {
  const clampedX = THREE.MathUtils.clamp(x, terrain.bounds.left, terrain.bounds.right)
  const topY = getTerrainTopY(terrain, clampedX)
  const zone = {
    x: clampedX,
    radius,
    depth,
    left: clampedX - radius,
    right: clampedX + radius,
  }
  terrain.damageZones.push(zone)

  const { mark, chunks } = createDamageMark(radius, depth)
  mark.position.set(clampedX, topY, 0.12)
  terrain.mesh.add(mark)
  terrain.damageMarks.push(mark)

  // 파편 초기 위치를 지형 위에 배치 (chunk.x/y는 물리 루프가 사용하는 월드 좌표)
  for (const chunk of chunks) {
    chunk.x = clampedX + chunk.mesh.userData.offsetX
    chunk.y = topY + chunk.mesh.userData.offsetY
    chunk.mesh.position.set(chunk.x, chunk.y, 0.18)
    terrain.mesh.add(chunk.mesh)
  }
  terrain.animChunks = terrain.animChunks ?? []
  terrain.animChunks.push(...chunks)

  for (const child of terrain.mesh.children) {
    if (!child.userData.damageable) continue
    if (Math.abs(child.position.x - clampedX) <= radius * 0.85) child.visible = false
  }

  return { zone, chunks }
}

export function isTerrainDamagedAt(terrain, x, margin = 0) {
  return terrain.damageZones.some((zone) => (
    x >= zone.left - margin && x <= zone.right + margin
  ))
}

/**
 * 파편 물리 애니메이션 업데이트.
 * main.js의 _update() 에서 매 프레임 호출.
 */
export function updateTerrainChunks(terrain, dt) {
  if (!terrain.animChunks) return

  const CHUNK_GRAVITY = 680
  const alive = []

  for (const chunk of terrain.animChunks) {
    chunk.life -= dt
    if (chunk.life <= 0) {
      terrain.mesh.remove(chunk.mesh)
      continue
    }
    alive.push(chunk)

    chunk.vy -= CHUNK_GRAVITY * dt
    chunk.x += chunk.vx * dt
    chunk.y += chunk.vy * dt
    chunk.rot += chunk.rotSpeed * dt

    const lifeRatio = chunk.life / chunk.maxLife
    chunk.mesh.position.set(chunk.x, chunk.y, 0.18)
    chunk.mesh.rotation.z = chunk.rot
    chunk.mesh.scale.setScalar(lifeRatio * 0.9 + 0.1)

    // 재질 opacity 페이드
    if (chunk.mesh.material?.opacity !== undefined) {
      chunk.mesh.material.opacity = Math.min(1, lifeRatio * 1.4)
    }
  }

  terrain.animChunks = alive
}

/**
 * 크레이터 ShaderMaterial uTime 업데이트.
 * 생성 직후 flash 애니메이션 처리.
 */
export function updateTerrainCraters(terrain, dt) {
  for (const mark of terrain.damageMarks) {
    const mat = mark.userData.craterMat
    if (!mat) continue
    mat.uniforms.uTime.value += dt
  }
}

function createDamageMark(radius, depth) {
  const group = new THREE.Group()

  // ShaderMaterial 크레이터 (GLSL)
  const craterMat = new THREE.ShaderMaterial({
    vertexShader: craterVert,
    fragmentShader: craterFrag,
    uniforms: {
      uDepth: { value: Math.min(depth, 2.0) },
      uTime:  { value: 0.0 },
      uScale: { value: radius / BASE_DAMAGE_RADIUS },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const craterH = radius * (0.38 + depth * 0.06)
  const crater = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2.1, craterH * 2.1, 4, 4), craterMat)
  crater.position.z = 0.01
  group.add(crater)
  group.userData.craterMat = craterMat

  // 물리 파편 배열
  const chunks = []
  const chunkCount = 6 + Math.floor(depth * 6)
  for (let i = 0; i < chunkCount; i++) {
    const angle = (i / chunkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
    const w = 6 + Math.random() * 10
    const h = 5 + Math.random() * 8
    const chunkMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xbcaaa4 : 0x6d4c41,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      }),
    )

    const speed = radius * (1.4 + Math.random() * 1.8)
    const vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 60
    const vy = Math.abs(Math.sin(angle)) * speed * 0.7 + 80 + Math.random() * 120

    const offsetX = Math.cos(angle) * radius * 0.35
    const offsetY = 4

    chunkMesh.userData.offsetX = offsetX
    chunkMesh.userData.offsetY = offsetY

    const maxLife = 0.55 + Math.random() * 0.55
    chunks.push({
      mesh: chunkMesh,
      x: 0, y: 0,
      vx, vy,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 14,
      life: maxLife,
      maxLife,
    })
  }

  return { mark: group, chunks }
}

export function getTerrainTopY(terrain, x) {
  const points = terrain.points
  if (x <= points[0].x) return points[0].y
  if (x >= points[points.length - 1].x) return points[points.length - 1].y

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const next = points[i]
    if (x >= prev.x && x <= next.x) {
      const t = (x - prev.x) / (next.x - prev.x)
      return THREE.MathUtils.lerp(prev.y, next.y, t)
    }
  }

  return points[points.length - 1].y
}

export function getTerrainSlopeAngle(terrain, x) {
  const points = terrain.points
  let nearest = 1
  for (let i = 1; i < points.length; i++) {
    if (Math.abs(points[i].x - x) < Math.abs(points[nearest].x - x)) nearest = i
  }
  const prev = points[Math.max(0, nearest - 1)]
  const next = points[Math.min(points.length - 1, nearest + 1)]
  return Math.atan2(next.y - prev.y, next.x - prev.x)
}

export function createObstacle(terrain, type, x, groundY) {
  const obstacleConfig = OBSTACLE[type]
  const materialConfig = obstacleConfig.material ? MATERIAL[obstacleConfig.material] : null
  const height = type === 'spike' ? 26 : OBSTACLE_SIZE
  const width = type === 'spike' ? 38 : OBSTACLE_SIZE
  const group = new THREE.Group()
  if (type === 'spike') {
    const sprite = createSprite(SPRITES.obstacle.spike, 46, 46)
    sprite.position.z = 0.04
    group.add(sprite)
  } else {
    const sprite = createSprite(SPRITES.obstacle[type] ?? SPRITES.obstacle.wood, 46, 46)
    sprite.position.z = 0.04
    group.add(sprite)
  }
  group.position.set(x, groundY + height / 2, 0)

  return {
    terrain,
    type,
    mesh: group,
    width,
    height,
    hit: false,
    destroyed: false,
    config: obstacleConfig,
    material: materialConfig,
    baseX: x,
    baseY: groundY,
    phase: x * 0.01,
  }
}
