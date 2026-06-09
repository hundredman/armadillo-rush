import * as THREE from 'three'
import craterVert from '../shaders/crater.vert?raw'
import craterFrag from '../shaders/crater.frag?raw'

export const TERRAIN_THICKNESS = 64
export const BASE_DAMAGE_RADIUS = 42
const VIEWPORT_SAFE_WIDTH = 960
const VIEWPORT_SAFE_HEIGHT = 720
const CLOUD_TERRAIN_Y = 2600
const SPACE_TERRAIN_Y = 10500

function getBiomeForY(y) {
  if (y >= SPACE_TERRAIN_Y) return 'meteor'
  if (y >= CLOUD_TERRAIN_Y) return 'cloud'
  return 'earth'
}

function getBiomeStyle(biome) {
  if (biome === 'cloud') {
    return {
      soil: 0xf7fbff,
      grass: 0xd8f4ff,
      ridge: 0xffffff,
      bottomScale: 0.72,
    }
  }
  if (biome === 'meteor') {
    return {
      soil: 0x4c4f5a,
      grass: 0x7c6f62,
      ridge: 0xcaa46a,
      bottomScale: 0.95,
    }
  }
  return {
    soil: 0x6d4c41,
    grass: 0x66bb6a,
    ridge: 0xc5e1a5,
    bottomScale: 1,
  }
}

// Island layout: x=center, y=floor, w=width, depth=height variation, rimH=rim height
// y=0 is sling position. Early islands vary vertically with sufficient spacing.
export const DEFAULT_ISLAND_LAYOUT = [
  // ── Early islands: gentle hills so the player learns the momentum mechanic ──
  { x:  240, y:  -60, w: 500, depth: 55, rimH: 22, shapeType: 'bowl',   softBreak: true },
  { x:  440, y:   80, w: 540, depth: 65, rimH: 26, shapeType: 'hill',   softBreak: true },
  { x:  660, y:  -20, w: 480, depth: 60, rimH: 24, shapeType: 'valley', softBreak: true },
  { x:  860, y:  160, w: 520, depth: 70, rimH: 28, shapeType: 'slope',  softBreak: true },
  { x: 1080, y:   40, w: 500, depth: 62, rimH: 25, shapeType: 'bowl',   softBreak: true },
  { x: 1290, y:  260, w: 540, depth: 75, rimH: 30, shapeType: 'hill',   softBreak: true },
  { x: 1520, y:  100, w: 510, depth: 68, rimH: 27, shapeType: 'valley', softBreak: true },
  { x: 1740, y:  360, w: 530, depth: 80, rimH: 32, shapeType: 'slope',  softBreak: true },
  { x: 1980, y:  180, w: 500, depth: 72, rimH: 28, shapeType: 'hill',   softBreak: true },
  { x: 2210, y:  460, w: 550, depth: 85, rimH: 34, shapeType: 'bowl',   softBreak: true },
  { x: 2460, y:  250, w: 520, depth: 78, rimH: 30, shapeType: 'valley', softBreak: true },
  { x: 2700, y:  540, w: 540, depth: 88, rimH: 35, shapeType: 'hill',   softBreak: true },
  { x: 2960, y:  340, w: 510, depth: 82, rimH: 32, shapeType: 'slope',  softBreak: true },
  { x: 3210, y:  640, w: 550, depth: 92, rimH: 36, shapeType: 'bowl',   softBreak: true },
  { x: 3480, y:  420, w: 530, depth: 86, rimH: 34, shapeType: 'valley', softBreak: true },
  { x: 3730, y:  760, w: 545, depth: 95, rimH: 38, shapeType: 'hill' },
  { x: 4000, y:  520, w: 520, depth: 88, rimH: 35, shapeType: 'slope' },
  { x: 4260, y:  870, w: 550, depth: 98, rimH: 40, shapeType: 'bowl' },
  { x: 4540, y:  630, w: 530, depth: 92, rimH: 36, shapeType: 'valley' },
  { x: 4810, y: 1000, w: 545, depth: 102, rimH: 42, shapeType: 'hill' },
  { x: 5090, y:  760, w: 520, depth: 96, rimH: 38, shapeType: 'slope' },
  { x: 5360, y: 1160, w: 550, depth: 105, rimH: 44, shapeType: 'bowl' },
  { x: 5640, y:  920, w: 530, depth: 100, rimH: 40, shapeType: 'valley' },
  { x: 5920, y: 1320, w: 545, depth: 108, rimH: 44, shapeType: 'hill' },
  { x: 6200, y: 1060, w: 520, depth: 102, rimH: 42, shapeType: 'slope' },
  { x: 6480, y: 1490, w: 550, depth: 112, rimH: 46, shapeType: 'bowl' },
  { x: 6760, y: 1230, w: 530, depth: 106, rimH: 43, shapeType: 'valley' },
  { x: 7040, y: 1660, w: 545, depth: 115, rimH: 47, shapeType: 'hill' },
  { x: 7320, y: 1400, w: 520, depth: 110, rimH: 45, shapeType: 'slope' },
  { x: 7600, y: 1870, w: 550, depth: 118, rimH: 48, shapeType: 'bowl' },
]

/**
 * Generate terrain top curve.
 * shapeType: 'hill' | 'valley' | 'slope' | 'bowl'
 * All shapes use smooth CatmullRom splines.
 *
 * @param {number} x      center x (world coords)
 * @param {number} y      floor y (world coords)
 * @param {number} w      total width (px)
 * @param {number} depth  height variation (px)
 * @param {number} rimH   extra rim height (px)
 * @param {string} [shapeType='bowl']  terrain surface shape
 */
export function createCurvedTerrain({ x, y, w, depth, rimH, shapeType = 'bowl', softBreak = false, biome = getBiomeForY(y) }) {
  const left  = x - w / 2
  const right = x + w / 2
  const style = getBiomeStyle(biome)

  // All shapes follow Tiny Wings convention: entry is low-left so the ball
  // rolls naturally downhill into the valley then up the far side.
  let controls
  if (shapeType === 'hill') {
    // Classic Tiny Wings hill: low entry → valley → high crest → low exit
    // Ball gains speed in the valley, launches off the crest
    const valleyY = y
    const crestY  = y + depth + rimH
    const entryY  = y + depth * 0.30
    const exitY   = y + depth * 0.20
    controls = [
      new THREE.Vector3(left,             entryY,              0),
      new THREE.Vector3(left  + w * 0.20, valleyY,             0),
      new THREE.Vector3(left  + w * 0.50, crestY,              0),
      new THREE.Vector3(right - w * 0.15, valleyY + depth * 0.15, 0),
      new THREE.Vector3(right,            exitY,               0),
    ]
  } else if (shapeType === 'valley') {
    // Deep valley: high entry → steep drop → climb out
    // Maximises speed gain; launch off the right rim
    const entryY  = y + depth * 0.55 + rimH
    const floorY  = y
    const exitY   = y + depth * 0.70 + rimH
    controls = [
      new THREE.Vector3(left,             entryY,              0),
      new THREE.Vector3(left  + w * 0.25, floorY + depth * 0.08, 0),
      new THREE.Vector3(x,                floorY,              0),
      new THREE.Vector3(right - w * 0.22, floorY + depth * 0.35, 0),
      new THREE.Vector3(right,            exitY,               0),
    ]
  } else if (shapeType === 'slope') {
    // Ascending slope: low entry → steady climb → high exit ramp
    // Holding boost here powers through the climb
    const baseY = y
    const topY  = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             baseY + rimH * 0.4,  0),
      new THREE.Vector3(left  + w * 0.28, baseY + depth * 0.18, 0),
      new THREE.Vector3(left  + w * 0.55, baseY + depth * 0.58, 0),
      new THREE.Vector3(right - w * 0.10, topY  - rimH * 0.15, 0),
      new THREE.Vector3(right,            topY,                0),
    ]
  } else {
    // bowl (default): symmetric U — low center, high rims on both sides
    // Good for building speed in the dip, natural launch off either rim
    const rimY    = y + depth + rimH
    const innerY  = y + depth * 0.15
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
  const topPoints = curve.getPoints(72).map((p) => new THREE.Vector2(p.x, p.y))

  // bowl center y = lowest point; ramp/wave uses left edge
  const centerY = shapeType === 'bowl' ? y : Math.min(...topPoints.map((p) => p.y))

  const minY    = Math.min(...topPoints.map((p) => p.y))
  const maxY    = Math.max(...topPoints.map((p) => p.y))
  const bottomY = minY - TERRAIN_THICKNESS * style.bottomScale

  // soil mesh: rounded bottom + chamfered corners for floating island feel
  const leftTop = topPoints[0]
  const rightTop = topPoints[topPoints.length - 1]
  const cornerR = Math.min(w * 0.16, TERRAIN_THICKNESS * 0.92, 58)
  const sideDrop = TERRAIN_THICKNESS * 0.5
  const bottomCurveY = bottomY - Math.min(22, TERRAIN_THICKNESS * 0.28)

  const shape = new THREE.Shape()
  shape.moveTo(leftTop.x, leftTop.y)
  for (let i = 1; i < topPoints.length; i++) shape.lineTo(topPoints[i].x, topPoints[i].y)
  shape.quadraticCurveTo(right, rightTop.y - sideDrop * 0.35, right, rightTop.y - sideDrop)
  shape.quadraticCurveTo(right, bottomY, right - cornerR, bottomY)
  shape.bezierCurveTo(
    x + w * 0.28, bottomCurveY,
    x - w * 0.28, bottomCurveY,
    left + cornerR, bottomY,
  )
  shape.quadraticCurveTo(left, bottomY, left, leftTop.y - sideDrop)
  shape.quadraticCurveTo(left, leftTop.y - sideDrop * 0.35, leftTop.x, leftTop.y)
  shape.closePath()

  const soil = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 16),
    new THREE.MeshBasicMaterial({ color: style.soil, side: THREE.DoubleSide }),
  )
  soil.position.z = -0.02

  // grass layer (inner top surface)
  const grassShape = new THREE.Shape()
  grassShape.moveTo(topPoints[0].x, topPoints[0].y)
  for (let i = 1; i < topPoints.length; i++) grassShape.lineTo(topPoints[i].x, topPoints[i].y)
  for (let i = topPoints.length - 1; i >= 0; i--) {
    const p = topPoints[i]
    const edgeT = Math.min(i, topPoints.length - 1 - i) / 8
    const softEdge = THREE.MathUtils.clamp(edgeT, 0.35, 1)
    grassShape.lineTo(p.x, p.y - 14 * softEdge)
  }
  grassShape.closePath()

  const grass = new THREE.Mesh(
    new THREE.ShapeGeometry(grassShape, 16),
    new THREE.MeshBasicMaterial({ color: style.grass, side: THREE.DoubleSide }),
  )
  grass.position.z = 0.02

  const ridge = new THREE.LineSegments(
    createRidgeGeometry(topPoints, []),
    new THREE.LineBasicMaterial({ color: style.ridge }),
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
    softBreak,
    biome,
    visuals: { soil, grass, ridge },
    visualMeta: { left, right, x, w, bottomY, bottomCurveY, cornerR, sideDrop, leftTop, rightTop },
    bounds: { left, right, top: maxY, bottom: bottomCurveY, rampLeft: left - LEFT_RAMP_W },
    bowlCenter: x,
    bowlFloor: centerY,
  }
}

export function rebuildTerrainGraphics(terrain) {
  const { soil, grass, ridge } = terrain.visuals

  soil.geometry.dispose()
  soil.geometry = new THREE.ShapeGeometry(createTerrainBodyShapes(terrain), 18)

  grass.geometry.dispose()
  grass.geometry = new THREE.ShapeGeometry(createGrassShapes(terrain), 12)

  ridge.geometry.dispose()
  ridge.geometry = createRidgeGeometry(terrain.points, terrain.damageZones)
}

function createTerrainBodyShapes(terrain) {
  const { left, right, x, w, bottomY, bottomCurveY, cornerR, sideDrop, leftTop, rightTop } = terrain.visualMeta
  const zones = mergeDamageZones(terrain)

  if (zones.length > 0) {
    const shapes = []
    let startX = terrain.bounds.left
    for (const zone of zones) {
      const leftX = THREE.MathUtils.clamp(zone.left, terrain.bounds.left, terrain.bounds.right)
      const rightX = THREE.MathUtils.clamp(zone.right, terrain.bounds.left, terrain.bounds.right)
      if (leftX - startX > 8) shapes.push(createTerrainShardShape(terrain, startX, leftX))
      startX = Math.max(startX, rightX)
    }
    if (terrain.bounds.right - startX > 8) shapes.push(createTerrainShardShape(terrain, startX, terrain.bounds.right))
    return shapes.filter(Boolean)
  }

  const shape = new THREE.Shape()
  writeTopPath(shape, terrain)
  shape.quadraticCurveTo(right, rightTop.y - sideDrop * 0.35, right, rightTop.y - sideDrop)
  shape.quadraticCurveTo(right, bottomY, right - cornerR, bottomY)
  shape.bezierCurveTo(
    x + w * 0.28, bottomCurveY,
    x - w * 0.28, bottomCurveY,
    left + cornerR, bottomY,
  )
  shape.quadraticCurveTo(left, bottomY, left, leftTop.y - sideDrop)
  shape.quadraticCurveTo(left, leftTop.y - sideDrop * 0.35, leftTop.x, leftTop.y)
  shape.closePath()
  return [shape]
}

const LEFT_RAMP_W = 60  // px width of the rounded left-entry ramp

function writeTopPath(shape, terrain) {
  const points = terrain.points
  const p0 = points[0]
  // start below-left and curve up to the first surface point — creates a rounded entry ramp
  shape.moveTo(p0.x - LEFT_RAMP_W, p0.y - 40)
  shape.quadraticCurveTo(p0.x - LEFT_RAMP_W * 0.3, p0.y - 4, p0.x, p0.y)
  for (let i = 1; i < points.length; i++) shape.lineTo(points[i].x, points[i].y)
}

function createTerrainShardShape(terrain, startX, endX) {
  const { bottomY } = terrain.visualMeta
  const top = collectTopPoints(terrain, startX, endX)
  if (top.length < 2) return null

  const sideR = Math.min(24, Math.max(12, (endX - startX) * 0.16))
  const floorY = bottomY - 4
  const shape = new THREE.Shape()
  shape.moveTo(top[0].x, top[0].y)
  for (let i = 1; i < top.length; i++) shape.lineTo(top[i].x, top[i].y)

  const endTop = top[top.length - 1]
  const startTop = top[0]
  shape.quadraticCurveTo(endX + sideR * 0.18, endTop.y - TERRAIN_THICKNESS * 0.38, endX - sideR, floorY)
  shape.lineTo(startX + sideR, floorY)
  shape.quadraticCurveTo(startX - sideR * 0.18, startTop.y - TERRAIN_THICKNESS * 0.38, startTop.x, startTop.y)
  shape.closePath()
  return shape
}

function createGrassShapes(terrain) {
  const zones = mergeDamageZones(terrain)
  const intervals = []
  let startX = terrain.bounds.left

  for (const zone of zones) {
    const leftX = THREE.MathUtils.clamp(zone.left, terrain.bounds.left, terrain.bounds.right)
    const rightX = THREE.MathUtils.clamp(zone.right, terrain.bounds.left, terrain.bounds.right)
    if (leftX - startX > 8) intervals.push([startX, leftX])
    startX = Math.max(startX, rightX)
  }
  if (terrain.bounds.right - startX > 8) intervals.push([startX, terrain.bounds.right])

  return intervals
    .map(([a, b]) => createGrassShapeForInterval(terrain, a, b))
    .filter(Boolean)
}

function createGrassShapeForInterval(terrain, startX, endX) {
  const top = collectTopPoints(terrain, startX, endX)
  if (top.length < 2) return null

  const shape = new THREE.Shape()
  shape.moveTo(top[0].x, top[0].y)
  for (let i = 1; i < top.length; i++) shape.lineTo(top[i].x, top[i].y)
  for (let i = top.length - 1; i >= 0; i--) {
    const p = top[i]
    const edgeT = Math.min(i, top.length - 1 - i) / 8
    const softEdge = THREE.MathUtils.clamp(edgeT, 0.35, 1)
    shape.lineTo(p.x, p.y - 14 * softEdge)
  }
  shape.closePath()
  return shape
}

function collectTopPoints(terrain, startX, endX) {
  const points = [
    new THREE.Vector2(startX, getTerrainTopY(terrain, startX)),
    ...terrain.points.filter((p) => p.x > startX && p.x < endX),
    new THREE.Vector2(endX, getTerrainTopY(terrain, endX)),
  ]
  return points
}

function createRidgeGeometry(points, zones) {
  const merged = mergeDamageZones({ damageZones: zones, bounds: { left: -Infinity, right: Infinity } })
  const vertices = []
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    const midX = (a.x + b.x) / 2
    if (merged.some((zone) => midX >= zone.left && midX <= zone.right)) continue
    vertices.push(
      new THREE.Vector3(a.x, a.y + 1, 0),
      new THREE.Vector3(b.x, b.y + 1, 0),
    )
  }
  return new THREE.BufferGeometry().setFromPoints(vertices)
}

function mergeDamageZones(terrain) {
  const bounds = terrain.bounds ?? { left: -Infinity, right: Infinity }
  const zones = (terrain.damageZones ?? [])
    .map((zone) => ({
      ...zone,
      left: THREE.MathUtils.clamp(zone.left, bounds.left, bounds.right),
      right: THREE.MathUtils.clamp(zone.right, bounds.left, bounds.right),
    }))
    .filter((zone) => zone.right > zone.left)
    .sort((a, b) => a.left - b.left)

  const merged = []
  for (const zone of zones) {
    const last = merged[merged.length - 1]
    if (!last || zone.left > last.right) {
      merged.push({ ...zone })
      continue
    }
    last.right = Math.max(last.right, zone.right)
    last.radius = Math.max(last.radius, zone.radius)
    last.depth = Math.max(last.depth, zone.depth)
    last.x = (last.left + last.right) / 2
  }
  return merged
}

/**
 * Apply terrain destruction damage.
 * Cuts the terrain mesh directly and spawns dirt chunk particles.
 * @returns {{ zone, chunks }} zone = damage region, chunks = animated debris
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
  rebuildTerrainGraphics(terrain)

  const { chunks } = createDamageMark(radius, depth)

  // place chunk at terrain surface (chunk.x/y used by physics loop as world coords)
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
 * Update debris physics animation.
 * Called every frame from main.js _update().
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

    // material opacity fade
    if (chunk.mesh.material?.opacity !== undefined) {
      chunk.mesh.material.opacity = Math.min(1, lifeRatio * 1.4)
    }
  }

  terrain.animChunks = alive
}

/**
 * Update crater ShaderMaterial uTime.
 * Handles flash animation immediately after creation.
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

  const mouthMat = new THREE.MeshBasicMaterial({
    color: 0x0b0705,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  const mouth = new THREE.Mesh(
    new THREE.CircleGeometry(radius * (0.64 + depth * 0.08), 48),
    mouthMat,
  )
  mouth.scale.y = 0.34 + depth * 0.06
  mouth.position.set(0, -radius * 0.06, 0.035)
  group.add(mouth)

  const shaftMat = new THREE.MeshBasicMaterial({
    color: 0x140d09,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  const shaft = new THREE.Mesh(
    new THREE.PlaneGeometry(radius * (1.08 + depth * 0.18), radius * (0.72 + depth * 0.2)),
    shaftMat,
  )
  shaft.position.set(0, -radius * (0.28 + depth * 0.04), 0.02)
  group.add(shaft)

  // ShaderMaterial crater (GLSL)
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

  const craterH = radius * (0.46 + depth * 0.08)
  const crater = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2.35, craterH * 2.25, 4, 4), craterMat)
  crater.position.z = 0.05
  group.add(crater)
  group.userData.craterMat = craterMat

  const rimMat = new THREE.MeshBasicMaterial({
    color: 0xa9825f,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  const rim = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.56, radius * (0.76 + depth * 0.05), 48),
    rimMat,
  )
  rim.scale.y = 0.36 + depth * 0.05
  rim.position.set(0, 0, 0.075)
  group.add(rim)

  // physics debris array
  const chunks = []
  const chunkCount = 10 + Math.floor(depth * 8)
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

// shape sequence for procedural islands
const SHAPE_SEQUENCE = [
  'hill', 'valley', 'bowl', 'slope',
  'bowl', 'hill', 'valley', 'slope',
  'hill', 'bowl', 'valley', 'hill',
]

/**
 * Generate procedural island parameters.
 * Returns a new island spec positioned after lastIsland.
 * All shapes use smooth CatmullRom curves.
 * @param {object} lastIsland  previous island (with bounds, bowlFloor)
 * @param {number} index       global island index
 */
export function generateNextIslandSpec(lastIsland, index) {
  const progress = Math.min(1, index / 70)

  // Wider islands with more pronounced depth — Tiny Wings feel
  const w = Math.round(THREE.MathUtils.lerp(420, 620, Math.random()) + Math.sin(index * 1.37) * 30)
  const depth = Math.round(THREE.MathUtils.lerp(50, 110, Math.random()) + progress * 20)
  const rimH  = Math.round(THREE.MathUtils.lerp(20, 50, Math.random()) + progress * 10)

  // Tighter gaps so the ball can carry momentum between islands
  const minGap = THREE.MathUtils.lerp(8, 14, progress)
  const maxGap = THREE.MathUtils.lerp(20, 40, progress)
  const gap = Math.round(THREE.MathUtils.lerp(minGap, maxGap, Math.random()))

  const newLeft = lastIsland.bounds.right + gap
  const newX    = newLeft + w / 2

  // Vertical placement: gentle upward climb with occasional small drops
  const verticalRange = THREE.MathUtils.lerp(
    VIEWPORT_SAFE_HEIGHT * 0.12,
    VIEWPORT_SAFE_HEIGHT * 0.22,
    progress,
  )
  const verticalJitter = THREE.MathUtils.lerp(-verticalRange * 0.25, verticalRange, Math.random())
  const climbBias = THREE.MathUtils.lerp(80, 120, progress)
  const newY = Math.max(-300, lastIsland.bowlFloor + verticalJitter + climbBias)
  const biome = getBiomeForY(newY)

  let shapeType = SHAPE_SEQUENCE[(index + Math.floor(Math.random() * 2)) % SHAPE_SEQUENCE.length]
  if (biome === 'cloud') {
    shapeType = ['valley', 'bowl', 'hill', 'bowl'][index % 4]
  } else if (biome === 'meteor') {
    shapeType = ['hill', 'valley', 'slope', 'bowl'][index % 4]
  }

  return { x: newX, y: newY, w, depth, rimH, shapeType, biome }
}

export function getTerrainTopY(terrain, x) {
  const points = terrain.points
  const p0 = points[0]
  const rampLeft = terrain.bounds.rampLeft ?? p0.x

  // left ramp zone: smoothly lower surface so the ball can ride up onto the edge
  if (x < p0.x) {
    if (x < rampLeft) return p0.y - 40  // below ramp — won't land
    const t = (x - rampLeft) / LEFT_RAMP_W
    // ease-in curve matching the quadratic visual ramp
    return THREE.MathUtils.lerp(p0.y - 40, p0.y, t * t)
  }

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
