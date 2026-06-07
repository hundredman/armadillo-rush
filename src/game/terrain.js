import * as THREE from 'three'
import craterVert from '../shaders/crater.vert?raw'
import craterFrag from '../shaders/crater.frag?raw'

export const TERRAIN_THICKNESS = 64
export const BASE_DAMAGE_RADIUS = 42

// 그릇(bowl) 모양 섬 레이아웃: x=중심, y=그릇 바닥 높이, w=폭, depth=그릇 깊이, rimH=테두리 높이
export const DEFAULT_ISLAND_LAYOUT = [
  { x: 680,  y: -310, w: 800,  depth: 55,  rimH: 38 },   // left=280, 슬링(-280) 앞 충분한 공간
  { x: 1640, y: -240, w: 1000, depth: 70,  rimH: 52 },
  { x: 2700, y: -80,  w: 900,  depth: 80,  rimH: 60 },
  { x: 3560, y: 80,   w: 780,  depth: 88,  rimH: 65 },
  { x: 4300, y: 260,  w: 680,  depth: 95,  rimH: 70 },
  { x: 4960, y: 460,  w: 600,  depth: 100, rimH: 74 },
  { x: 5560, y: 680,  w: 540,  depth: 105, rimH: 78 },
  { x: 6120, y: 930,  w: 480,  depth: 110, rimH: 82 },
  { x: 6640, y: 1210, w: 420,  depth: 115, rimH: 85 },
  { x: 7120, y: 1520, w: 360,  depth: 120, rimH: 88 },
]

/**
 * 지형 상면 커브 생성.
 * shapeType: 'bowl' (그릇), 'ramp' (경사 삼각), 'wave' (파도 S커브)
 * 모든 형태는 매끄러운 CatmullRom 스플라인 — 울퉁불퉁함 없음.
 *
 * @param {number} x      중심 x (월드 좌표)
 * @param {number} y      기준 바닥 y (월드 좌표)
 * @param {number} w      전체 폭 (px)
 * @param {number} depth  높이 변화 폭 (px)
 * @param {number} rimH   가장자리 추가 높이 (px)
 * @param {string} [shapeType='bowl']  'bowl' | 'ramp' | 'wave'
 */
export function createCurvedTerrain({ x, y, w, depth, rimH, shapeType = 'bowl' }) {
  const left  = x - w / 2
  const right = x + w / 2

  let controls
  if (shapeType === 'ramp') {
    // 완만한 오르막 경사: 왼쪽 낮고 오른쪽 높음 (삼각/사다리꼴형)
    const baseY = y
    const topY  = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             baseY,              0),
      new THREE.Vector3(left  + w * 0.35, baseY + depth * 0.1, 0),
      new THREE.Vector3(left  + w * 0.65, baseY + depth * 0.72, 0),
      new THREE.Vector3(right,            topY,               0),
    ]
  } else if (shapeType === 'wave') {
    // S자 파도: 왼쪽 낮 → 중간 낮은 고원 → 오른쪽 높은 끝
    const baseY = y
    const midY  = y + depth * 0.35
    const topY  = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             baseY + rimH * 0.6, 0),
      new THREE.Vector3(left  + w * 0.25, baseY,              0),
      new THREE.Vector3(left  + w * 0.5,  midY,               0),
      new THREE.Vector3(right - w * 0.22, topY - rimH * 0.2,  0),
      new THREE.Vector3(right,            topY,               0),
    ]
  } else {
    // bowl (기본): 양 끝이 높고 중심이 낮은 U자
    const rimY    = y + depth + rimH
    const innerY  = y + depth * 0.18
    const centerY = y
    controls = [
      new THREE.Vector3(left,             rimY,    0),
      new THREE.Vector3(left  + w * 0.22, innerY,  0),
      new THREE.Vector3(x,                centerY, 0),
      new THREE.Vector3(right - w * 0.22, innerY,  0),
      new THREE.Vector3(right,            rimY,    0),
    ]
  }

  const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal', 0.5)
  const topPoints = curve.getPoints(40).map((p) => new THREE.Vector2(p.x, p.y))

  // bowl 계열의 중심 y = 최저점; ramp/wave는 왼쪽 끝이 기준
  const centerY = shapeType === 'bowl' ? y : Math.min(...topPoints.map((p) => p.y))

  const minY    = Math.min(...topPoints.map((p) => p.y))
  const maxY    = Math.max(...topPoints.map((p) => p.y))
  const bottomY = minY - TERRAIN_THICKNESS

  // 토양 메시 (그릇 안을 채우는 Shape)
  const shape = new THREE.Shape()
  shape.moveTo(topPoints[0].x, topPoints[0].y)
  for (let i = 1; i < topPoints.length; i++) shape.lineTo(topPoints[i].x, topPoints[i].y)
  shape.lineTo(right, bottomY)
  shape.lineTo(left,  bottomY)
  shape.closePath()

  const soil = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 16),
    new THREE.MeshBasicMaterial({ color: 0x6d4c41, side: THREE.DoubleSide }),
  )
  soil.position.z = -0.02

  // 잔디 레이어 (상면 안쪽)
  const grassShape = new THREE.Shape()
  grassShape.moveTo(topPoints[0].x, topPoints[0].y)
  for (let i = 1; i < topPoints.length; i++) grassShape.lineTo(topPoints[i].x, topPoints[i].y)
  for (let i = topPoints.length - 1; i >= 0; i--) grassShape.lineTo(topPoints[i].x, topPoints[i].y - 14)
  grassShape.closePath()

  const grass = new THREE.Mesh(
    new THREE.ShapeGeometry(grassShape, 16),
    new THREE.MeshBasicMaterial({ color: 0x66bb6a, side: THREE.DoubleSide }),
  )
  grass.position.z = 0.02

  const ridge = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(topPoints.map((p) => new THREE.Vector3(p.x, p.y + 1, 0))),
    new THREE.LineBasicMaterial({ color: 0xc5e1a5 }),
  )
  ridge.position.z = 0.04

  const mesh = new THREE.Group()
  mesh.add(soil, grass, ridge)

  return {
    mesh,
    points: topPoints,
    destroyed: false,
    damageZones: [],
    damageMarks: [],
    bounds: { left, right, top: maxY, bottom: bottomY },
    bowlCenter: x,
    bowlFloor: centerY,
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

// 절차적 섬에서 순환할 모양 패턴
const SHAPE_SEQUENCE = ['bowl', 'bowl', 'ramp', 'bowl', 'wave', 'bowl', 'ramp', 'wave']

/**
 * 절차적 섬 파라미터 생성.
 * lastIsland 다음 위치에 새 섬 스펙을 반환한다.
 * 모든 형태(bowl/ramp/wave)는 매끄러운 CatmullRom 곡선으로 생성된다.
 * @param {object} lastIsland  이전 섬 객체 (bounds, bowlFloor 포함)
 * @param {number} index       전체 섬 인덱스 (높을수록 더 좁고 가파름)
 */
export function generateNextIslandSpec(lastIsland, index) {
  const progress = Math.min(1, index / 28)  // 0→1로 서서히 어려워짐

  // 폭: 시작 900 → 최저 240
  const w = Math.round(THREE.MathUtils.lerp(900, 240, progress) + (Math.random() - 0.5) * 60)

  // 높이 변화 폭: 점점 깊어짐 (55 → 150)
  const depth = Math.round(THREE.MathUtils.lerp(55, 150, progress) + (Math.random() - 0.5) * 12)

  // 가장자리 높이
  const rimH = Math.round(THREE.MathUtils.lerp(38, 95, progress) + (Math.random() - 0.5) * 10)

  // 섬 간격: 수평 갭
  const gap = Math.round(THREE.MathUtils.lerp(160, 280, progress) + Math.random() * 80)

  const newLeft = lastIsland.bounds.right + gap
  const newX    = newLeft + w / 2

  // y: 상승 폭 (진행할수록 상승폭이 줄어듦 — 섬이 더 좁아지는 것과 균형)
  const heightStep = Math.round(THREE.MathUtils.lerp(210, 110, progress) + (Math.random() - 0.5) * 60)
  const newY = lastIsland.bowlFloor + heightStep

  // 형태 순환 (bowl 위주, 가끔 ramp/wave 삽입)
  const shapeType = SHAPE_SEQUENCE[index % SHAPE_SEQUENCE.length]

  return { x: newX, y: newY, w, depth, rimH, shapeType }
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

