import * as THREE from 'three'
import craterVert from '../shaders/crater.vert?raw'
import craterFrag from '../shaders/crater.frag?raw'

export const TERRAIN_THICKNESS = 64
export const BASE_DAMAGE_RADIUS = 42
const VIEWPORT_SAFE_WIDTH = 960
const VIEWPORT_SAFE_HEIGHT = 720
const CLOUD_TERRAIN_Y = 2600
const SPACE_TERRAIN_Y = 10500
const BOOST_SLOPE_MIN = Math.tan(THREE.MathUtils.degToRad(4))
const BOOST_TOP_RATIO = 0.64
const BOOST_END_ZONE_PX = 72

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
      boost: 0xfff3b0,
      boostLine: 0xffd54f,
      ridge: 0xffffff,
      bottomScale: 0.72,
    }
  }
  if (biome === 'meteor') {
    return {
      soil: 0x4c4f5a,
      grass: 0x7c6f62,
      boost: 0xc9a64a,
      boostLine: 0xffd166,
      ridge: 0xcaa46a,
      bottomScale: 0.95,
    }
  }
  return {
    soil: 0x6d4c41,
    grass: 0x66bb6a,
    boost: 0xd7e76a,
    boostLine: 0xffe66d,
    ridge: 0xc5e1a5,
    bottomScale: 1,
  }
}

// Island layout: x=center, y=floor, w=width, depth=height variation, rimH=rim height
// y=0 is sling position. Early islands vary vertically with sufficient spacing.
export const DEFAULT_ISLAND_LAYOUT = [
  // ── Early islands: densely packed so multiple fit on screen ──
  { x:  220, y:  -80, w: 420, depth: 22, rimH: 14, shapeType: 'plateau', softBreak: true },
  { x:  330, y:  120, w: 520, depth: 28, rimH: 18, shapeType: 'bowl', softBreak: true },
  { x:  455, y:  -30, w: 390, depth: 24, rimH: 15, shapeType: 'wave', softBreak: true },
  { x:  610, y:  200, w: 480, depth: 25, rimH: 16, shapeType: 'plateau', softBreak: true },
  { x:  750, y:  -60, w: 420, depth: 23, rimH: 15, shapeType: 'dip', softBreak: true },
  { x:  895, y:  130, w: 500, depth: 32, rimH: 18, shapeType: 'wave', softBreak: true },
  { x: 1185, y:  280, w: 470, depth: 30, rimH: 20, shapeType: 'ramp', softBreak: true },
  { x: 1305, y:   50, w: 405, depth: 26, rimH: 17, shapeType: 'bowl', softBreak: true },
  { x: 1475, y:  200, w: 490, depth: 34, rimH: 20, shapeType: 'dip', softBreak: true },
  { x: 1770, y:  380, w: 460, depth: 29, rimH: 18, shapeType: 'crest', softBreak: true },
  { x: 1905, y:   80, w: 400, depth: 25, rimH: 16, shapeType: 'saddle', softBreak: true },
  { x: 2070, y:  230, w: 475, depth: 36, rimH: 21, shapeType: 'double', softBreak: true },
  { x: 2370, y:  300, w: 450, depth: 31, rimH: 20, shapeType: 'saddle', softBreak: true },
  { x: 2670, y:  105, w: 480, depth: 35, rimH: 22, shapeType: 'bowl', softBreak: true },
  { x: 2975, y:  455, w: 450, depth: 30, rimH: 21, shapeType: 'plateau', softBreak: true },
  { x: 3280, y:  205, w: 470, depth: 38, rimH: 22, shapeType: 'wave', softBreak: true },
  { x: 3590, y:  605, w: 440, depth: 34, rimH: 23, shapeType: 'ramp' },
  { x: 4115, y:  340, w: 440, depth: 40, rimH: 24, shapeType: 'dip' },
  { x: 4430, y:  790, w: 420, depth: 35, rimH: 24, shapeType: 'crest' },
  { x: 4745, y:  500, w: 435, depth: 42, rimH: 25, shapeType: 'double' },
  { x: 5060, y:  960, w: 410, depth: 38, rimH: 25, shapeType: 'saddle' },
  { x: 5380, y:  680, w: 430, depth: 41, rimH: 26, shapeType: 'bowl' },
  { x: 5700, y: 1180, w: 410, depth: 39, rimH: 25, shapeType: 'plateau' },
  { x: 6020, y:  860, w: 425, depth: 44, rimH: 27, shapeType: 'wave' },
  { x: 6340, y: 1430, w: 405, depth: 40, rimH: 26, shapeType: 'ramp' },
  { x: 6665, y: 1080, w: 430, depth: 46, rimH: 28, shapeType: 'dip' },
  { x: 6990, y: 1690, w: 410, depth: 42, rimH: 27, shapeType: 'crest' },
  { x: 7320, y: 1300, w: 425, depth: 48, rimH: 29, shapeType: 'double' },
  { x: 7650, y: 1950, w: 410, depth: 43, rimH: 28, shapeType: 'saddle' },
]

/**
 * Generate terrain top curve.
 * shapeType: 'bowl' | 'ramp' | 'wave' | 'plateau' | 'dip' | 'double' | 'crest' | 'saddle'
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

  let controls
  if (shapeType === 'ramp') {
    // gradual ramp: low left, high right
    const baseY = y
    const topY  = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             baseY,              0),
      new THREE.Vector3(left  + w * 0.35, baseY + depth * 0.1, 0),
      new THREE.Vector3(left  + w * 0.65, baseY + depth * 0.72, 0),
      new THREE.Vector3(right,            topY,               0),
    ]
  } else if (shapeType === 'plateau') {
    // wide flat plateau: stable rolling, no jump bonus
    const baseY = y
    controls = [
      new THREE.Vector3(left,             baseY + rimH * 0.9, 0),
      new THREE.Vector3(left  + w * 0.18, baseY + depth * 0.18, 0),
      new THREE.Vector3(left  + w * 0.42, baseY + depth * 0.08, 0),
      new THREE.Vector3(left  + w * 0.68, baseY + depth * 0.10, 0),
      new THREE.Vector3(right - w * 0.16, baseY + depth * 0.20, 0),
      new THREE.Vector3(right,            baseY + rimH * 0.8, 0),
    ]
  } else if (shapeType === 'dip') {
    // shallow dip: natural speed dip and recovery
    const rimY = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             rimY * 0.96 + y * 0.04, 0),
      new THREE.Vector3(left  + w * 0.18, y + depth * 0.35, 0),
      new THREE.Vector3(left  + w * 0.46, y - depth * 0.12, 0),
      new THREE.Vector3(left  + w * 0.72, y + depth * 0.28, 0),
      new THREE.Vector3(right,            y + depth * 0.72, 0),
    ]
  } else if (shapeType === 'double') {
    // W-shaped double bowl: two dips in one terrain
    const rimY = y + depth + rimH
    controls = [
      new THREE.Vector3(left,             rimY, 0),
      new THREE.Vector3(left  + w * 0.18, y + depth * 0.08, 0),
      new THREE.Vector3(left  + w * 0.36, y + depth * 0.52, 0),
      new THREE.Vector3(left  + w * 0.55, y, 0),
      new THREE.Vector3(left  + w * 0.76, y + depth * 0.42, 0),
      new THREE.Vector3(right,            rimY * 0.92 + y * 0.08, 0),
    ]
  } else if (shapeType === 'crest') {
    // round hill: good for uphill boost
    const baseY = y
    controls = [
      new THREE.Vector3(left,             baseY + depth * 0.18, 0),
      new THREE.Vector3(left  + w * 0.24, baseY + depth * 0.62, 0),
      new THREE.Vector3(left  + w * 0.50, baseY + depth + rimH, 0),
      new THREE.Vector3(left  + w * 0.76, baseY + depth * 0.54, 0),
      new THREE.Vector3(right,            baseY + depth * 0.12, 0),
    ]
  } else if (shapeType === 'saddle') {
    // asymmetric S saddle: mixed uphill/downhill
    const baseY = y
    controls = [
      new THREE.Vector3(left,             baseY + depth * 0.64, 0),
      new THREE.Vector3(left  + w * 0.18, baseY + depth * 0.18, 0),
      new THREE.Vector3(left  + w * 0.42, baseY + depth * 0.36, 0),
      new THREE.Vector3(left  + w * 0.62, baseY + depth + rimH, 0),
      new THREE.Vector3(right - w * 0.12, baseY + depth * 0.24, 0),
      new THREE.Vector3(right,            baseY + depth * 0.42, 0),
    ]
  } else if (shapeType === 'wave') {
    // S-wave: low left → low plateau → high right
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
    // bowl (default): high edges, low center — U shape
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

  const boostRibbon = new THREE.Mesh(
    createBoostRibbonGeometry(topPoints, []),
    new THREE.MeshBasicMaterial({
      color: style.boost,
      transparent: true,
      opacity: biome === 'meteor' ? 0.56 : 0.62,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  )
  boostRibbon.position.z = 0.038

  const boostLine = new THREE.LineSegments(
    createBoostLineGeometry(topPoints, []),
    new THREE.LineBasicMaterial({
      color: style.boostLine,
      transparent: true,
      opacity: biome === 'cloud' ? 0.95 : 0.88,
      depthTest: false,
    }),
  )
  boostLine.position.z = 0.072

  const boostMarkers = new THREE.Mesh(
    createBoostMarkerGeometry(topPoints, []),
    new THREE.MeshBasicMaterial({
      color: 0xfff176,
      transparent: true,
      opacity: biome === 'meteor' ? 0.74 : 0.82,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  )
  boostMarkers.position.z = 0.11

  const mesh = new THREE.Group()
  mesh.add(soil, grass, boostRibbon, ridge, boostLine, boostMarkers)

  return {
    mesh,
    points: topPoints,
    destroyed: false,
    damageZones: [],
    damageMarks: [],
    softBreak,
    biome,
    visuals: { soil, grass, ridge, boostRibbon, boostLine, boostMarkers },
    visualMeta: { left, right, x, w, bottomY, bottomCurveY, cornerR, sideDrop, leftTop, rightTop },
    bounds: { left, right, top: maxY, bottom: bottomCurveY, rampLeft: left - LEFT_RAMP_W },
    bowlCenter: x,
    bowlFloor: centerY,
  }
}

export function rebuildTerrainGraphics(terrain) {
  const { soil, grass, ridge, boostRibbon, boostLine, boostMarkers } = terrain.visuals

  soil.geometry.dispose()
  soil.geometry = new THREE.ShapeGeometry(createTerrainBodyShapes(terrain), 18)

  grass.geometry.dispose()
  grass.geometry = new THREE.ShapeGeometry(createGrassShapes(terrain), 12)

  ridge.geometry.dispose()
  ridge.geometry = createRidgeGeometry(terrain.points, terrain.damageZones)

  boostRibbon.geometry.dispose()
  boostRibbon.geometry = createBoostRibbonGeometry(terrain.points, terrain.damageZones)

  boostLine.geometry.dispose()
  boostLine.geometry = createBoostLineGeometry(terrain.points, terrain.damageZones)

  boostMarkers.geometry.dispose()
  boostMarkers.geometry = createBoostMarkerGeometry(terrain.points, terrain.damageZones)
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

function createBoostLineGeometry(points, zones) {
  const merged = mergeDamageZones({ damageZones: zones, bounds: { left: -Infinity, right: Infinity } })
  const thresholdY = getBoostHeightThreshold(points)
  const endStartX = points[points.length - 1].x - BOOST_END_ZONE_PX
  const vertices = []
  let dashCooldown = 0

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    const dx = b.x - a.x
    if (dx <= 0) continue
    dashCooldown -= dx

    const midX = (a.x + b.x) / 2
    if (merged.some((zone) => midX >= zone.left && midX <= zone.right)) continue

    const slope = (b.y - a.y) / dx
    const midY = (a.y + b.y) / 2
    const isUphillBoost = slope >= BOOST_SLOPE_MIN && midY >= thresholdY
    const isEndBoost = midX >= endStartX
    if ((!isUphillBoost && !isEndBoost) || dashCooldown > 0) continue

    const angle = Math.atan2(b.y - a.y, dx)
    const along = new THREE.Vector2(Math.cos(angle), Math.sin(angle))
    const normal = new THREE.Vector2(-along.y, along.x)
    const center = new THREE.Vector2(midX, midY).addScaledVector(normal, isEndBoost && !isUphillBoost ? 5.2 : 6.4)
    const half = Math.min(isEndBoost && !isUphillBoost ? 13 : 17, dx * 0.42)
    const start = center.clone().addScaledVector(along, -half)
    const end = center.clone().addScaledVector(along, half)
    vertices.push(
      new THREE.Vector3(start.x, start.y, 0),
      new THREE.Vector3(end.x, end.y, 0),
    )
    dashCooldown = 28
  }

  return new THREE.BufferGeometry().setFromPoints(vertices)
}

function createBoostRibbonGeometry(points, zones) {
  const merged = mergeDamageZones({ damageZones: zones, bounds: { left: -Infinity, right: Infinity } })
  const thresholdY = getBoostHeightThreshold(points)
  const endStartX = points[points.length - 1].x - BOOST_END_ZONE_PX
  const positions = []
  const indices = []

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    const dx = b.x - a.x
    if (dx <= 0) continue

    const midX = (a.x + b.x) / 2
    if (merged.some((zone) => midX >= zone.left && midX <= zone.right)) continue

    const slope = (b.y - a.y) / dx
    const midY = (a.y + b.y) / 2
    const isUphillBoost = slope >= BOOST_SLOPE_MIN && midY >= thresholdY
    const isEndBoost = midX >= endStartX
    if (!isUphillBoost && !isEndBoost) continue

    const base = positions.length / 3
    const insetA = getBoostBandInset(points, i)
    const insetB = getBoostBandInset(points, i + 1)
    positions.push(
      a.x, a.y + 1.2, 0,
      b.x, b.y + 1.2, 0,
      b.x, b.y - insetB, 0,
      a.x, a.y - insetA, 0,
    )
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  return geometry
}

function createBoostMarkerGeometry(points, zones) {
  const merged = mergeDamageZones({ damageZones: zones, bounds: { left: -Infinity, right: Infinity } })
  const thresholdY = getBoostHeightThreshold(points)
  const endStartX = points[points.length - 1].x - BOOST_END_ZONE_PX
  const positions = []
  const indices = []
  let markerCooldown = 0

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    const dx = b.x - a.x
    if (dx <= 0) continue
    markerCooldown -= dx

    const midX = (a.x + b.x) / 2
    if (merged.some((zone) => midX >= zone.left && midX <= zone.right)) continue

    const slope = (b.y - a.y) / dx
    const midY = (a.y + b.y) / 2
    const isUphillBoost = slope >= BOOST_SLOPE_MIN && midY >= thresholdY
    const isEndBoost = midX >= endStartX
    if ((!isUphillBoost && !isEndBoost) || markerCooldown > 0) continue

    const angle = Math.atan2(b.y - a.y, dx)
    const along = new THREE.Vector2(Math.cos(angle), Math.sin(angle))
    const normal = new THREE.Vector2(-along.y, along.x)
    const center = new THREE.Vector2(midX, midY).addScaledVector(normal, 13)
    const size = isEndBoost && !isUphillBoost ? 8 : 9.5
    const tip = center.clone().addScaledVector(along, size * 0.95)
    const back = center.clone().addScaledVector(along, -size * 0.65)
    const wingA = back.clone().addScaledVector(normal, size * 0.45)
    const wingB = back.clone().addScaledVector(normal, -size * 0.45)
    const base = positions.length / 3
    positions.push(
      tip.x, tip.y, 0,
      wingA.x, wingA.y, 0,
      center.x, center.y, 0,
      tip.x, tip.y, 0,
      center.x, center.y, 0,
      wingB.x, wingB.y, 0,
    )
    indices.push(base, base + 1, base + 2, base + 3, base + 4, base + 5)
    markerCooldown = isEndBoost ? 32 : 42
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  return geometry
}

function getBoostBandInset(points, index) {
  const prev = points[Math.max(0, index - 1)]
  const next = points[Math.min(points.length - 1, index + 1)]
  const localSlope = Math.abs((next.y - prev.y) / Math.max(1, next.x - prev.x))
  return THREE.MathUtils.clamp(6 + localSlope * 7, 6, 12)
}

function getBoostHeightThreshold(points) {
  let minY = Infinity
  let maxY = -Infinity
  for (const p of points) {
    minY = Math.min(minY, p.y)
    maxY = Math.max(maxY, p.y)
  }
  return THREE.MathUtils.lerp(minY, maxY, BOOST_TOP_RATIO)
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
  'bowl', 'plateau', 'wave', 'ramp',
  'dip', 'crest', 'double', 'saddle',
  'plateau', 'bowl', 'crest', 'wave',
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

  const w = Math.round(THREE.MathUtils.lerp(320, 480, Math.random()) + Math.sin(index * 1.37) * 20)

  const depth = Math.round(THREE.MathUtils.lerp(24, 52, Math.random()) + progress * 10)

  const rimH = Math.round(THREE.MathUtils.lerp(14, 32, Math.random()) + progress * 6)

  // Horizontal gap
  const minGap = THREE.MathUtils.lerp(12, 18, progress)
  const maxGap = THREE.MathUtils.lerp(28, 48, progress)
  const gap = Math.round(THREE.MathUtils.lerp(minGap, maxGap, Math.random()))

  const newLeft = lastIsland.bounds.right + gap
  const newX    = newLeft + w / 2

  // Vertical placement — stronger upward bias so islands climb consistently
  const lowAltitude = lastIsland.bowlFloor < 1400
  const verticalRange = THREE.MathUtils.lerp(
    VIEWPORT_SAFE_HEIGHT * (lowAltitude ? 0.10 : 0.14),
    VIEWPORT_SAFE_HEIGHT * 0.20,
    progress,
  )
  const downRatio = lowAltitude ? 0.12 : 0.30
  const verticalJitter = THREE.MathUtils.lerp(-verticalRange * downRatio, verticalRange, Math.random())
  const seaShelfDrop = lastIsland.bowlFloor >= 1200 && index % 9 === 0
    ? THREE.MathUtils.lerp(50, 100, Math.random())
    : 0
  // Stronger upward bias — keeps the path climbing even with jitter
  const climbBias = THREE.MathUtils.lerp(lowAltitude ? 140 : 100, 140, progress)
  const newY = Math.max(-300, lastIsland.bowlFloor + verticalJitter + climbBias - seaShelfDrop)
  const biome = getBiomeForY(newY)

  let shapeType = SHAPE_SEQUENCE[(index + Math.floor(Math.random() * 3)) % SHAPE_SEQUENCE.length]
  if (biome === 'cloud') {
    shapeType = ['plateau', 'bowl', 'wave', 'double'][index % 4]
  } else if (biome === 'meteor') {
    shapeType = ['crest', 'saddle', 'dip', 'wave'][index % 4]
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
