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
// Terrain is grouped into named sections to guide variety. softBreak=true means
// the island breaks more easily (used in learning and mid-game sections).
export const DEFAULT_ISLAND_LAYOUT = [
  // ── Section 1: Learning zone — gentle, forgiving, teaches momentum ──────────
  { x:  240, y:  -60, w: 520, depth: 55, rimH: 22, shapeType: 'bowl',   softBreak: true },
  { x:  460, y:   80, w: 560, depth: 65, rimH: 26, shapeType: 'hill',   softBreak: true },
  { x:  690, y:  -20, w: 500, depth: 60, rimH: 24, shapeType: 'valley', softBreak: true },
  { x:  910, y:  170, w: 540, depth: 70, rimH: 28, shapeType: 'slope',  softBreak: true },
  { x: 1140, y:   50, w: 520, depth: 62, rimH: 25, shapeType: 'bowl',   softBreak: true },
  { x: 1370, y:  280, w: 560, depth: 75, rimH: 30, shapeType: 'hill',   softBreak: true },
  { x: 1610, y:  110, w: 530, depth: 68, rimH: 27, shapeType: 'valley', softBreak: true },
  { x: 1850, y:  380, w: 550, depth: 80, rimH: 32, shapeType: 'slope',  softBreak: true },

  // ── Section 2: Building momentum — wider islands, more hills ─────────────────
  { x: 2100, y:  200, w: 560, depth: 72, rimH: 28, shapeType: 'hill',   softBreak: true },
  { x: 2350, y:  480, w: 580, depth: 85, rimH: 34, shapeType: 'bowl',   softBreak: true },
  { x: 2610, y:  280, w: 550, depth: 78, rimH: 30, shapeType: 'valley', softBreak: true },
  { x: 2870, y:  580, w: 570, depth: 88, rimH: 35, shapeType: 'hill',   softBreak: true },
  { x: 3140, y:  380, w: 540, depth: 82, rimH: 32, shapeType: 'slope',  softBreak: true },
  { x: 3400, y:  680, w: 580, depth: 92, rimH: 36, shapeType: 'bowl',   softBreak: true },
  { x: 3670, y:  460, w: 555, depth: 86, rimH: 34, shapeType: 'valley', softBreak: true },
  { x: 3940, y:  800, w: 570, depth: 95, rimH: 38, shapeType: 'hill',   softBreak: true },

  // ── Section 3: Speed zone — tighter gaps, reward fast momentum ───────────────
  { x: 4200, y:  580, w: 545, depth: 88, rimH: 35, shapeType: 'slope' },
  { x: 4460, y:  920, w: 575, depth: 98, rimH: 40, shapeType: 'bowl' },
  { x: 4720, y:  680, w: 555, depth: 92, rimH: 36, shapeType: 'hill' },
  { x: 4980, y: 1060, w: 580, depth: 102, rimH: 42, shapeType: 'valley' },
  { x: 5240, y:  820, w: 550, depth: 96, rimH: 38, shapeType: 'slope' },
  { x: 5500, y: 1200, w: 580, depth: 105, rimH: 44, shapeType: 'hill' },
  { x: 5760, y:  970, w: 555, depth: 100, rimH: 40, shapeType: 'bowl' },
  { x: 6020, y: 1380, w: 570, depth: 108, rimH: 44, shapeType: 'valley' },

  // ── Section 4: Mid climb — increasing height, more crests to ride ────────────
  { x: 6290, y: 1130, w: 545, depth: 102, rimH: 42, shapeType: 'hill' },
  { x: 6550, y: 1560, w: 580, depth: 112, rimH: 46, shapeType: 'slope' },
  { x: 6820, y: 1320, w: 555, depth: 106, rimH: 43, shapeType: 'bowl' },
  { x: 7090, y: 1740, w: 570, depth: 115, rimH: 47, shapeType: 'hill' },
  { x: 7360, y: 1490, w: 550, depth: 110, rimH: 45, shapeType: 'valley' },
  { x: 7630, y: 1930, w: 580, depth: 118, rimH: 48, shapeType: 'slope' },
  { x: 7910, y: 1680, w: 555, depth: 114, rimH: 46, shapeType: 'hill' },
  { x: 8190, y: 2110, w: 580, depth: 122, rimH: 50, shapeType: 'bowl' },

  // ── Section 5: Pre-cloud zone — destructible terrain, big hills ──────────────
  { x: 8470, y: 1860, w: 560, depth: 118, rimH: 48, shapeType: 'valley', softBreak: true },
  { x: 8750, y: 2260, w: 590, depth: 125, rimH: 52, shapeType: 'hill',   softBreak: true },
  { x: 9040, y: 2020, w: 565, depth: 120, rimH: 49, shapeType: 'slope',  softBreak: true },
  { x: 9330, y: 2420, w: 595, depth: 128, rimH: 54, shapeType: 'bowl',   softBreak: true },
  { x: 9620, y: 2180, w: 570, depth: 124, rimH: 51, shapeType: 'hill',   softBreak: true },
  { x: 9920, y: 2580, w: 595, depth: 130, rimH: 55, shapeType: 'valley', softBreak: true },
  { x:10220, y: 2330, w: 575, depth: 126, rimH: 52, shapeType: 'slope',  softBreak: true },
  { x:10530, y: 2720, w: 600, depth: 132, rimH: 56, shapeType: 'hill',   softBreak: true },

  // ── Section 6: Cloud zone entry — wider platforms, valley chains ─────────────
  { x:10840, y: 2820, w: 610, depth: 128, rimH: 54, shapeType: 'bowl' },
  { x:11150, y: 3060, w: 625, depth: 134, rimH: 57, shapeType: 'hill' },
  { x:11470, y: 2880, w: 605, depth: 130, rimH: 55, shapeType: 'valley' },
  { x:11790, y: 3200, w: 630, depth: 136, rimH: 58, shapeType: 'slope' },
  { x:12120, y: 3010, w: 610, depth: 132, rimH: 56, shapeType: 'bowl' },
  { x:12450, y: 3360, w: 635, depth: 138, rimH: 59, shapeType: 'hill' },
  { x:12790, y: 3170, w: 615, depth: 134, rimH: 57, shapeType: 'valley' },
  { x:13130, y: 3510, w: 640, depth: 140, rimH: 60, shapeType: 'slope' },

  // ── Section 7: High cloud — big gaps, large hills, long runs ─────────────────
  { x:13480, y: 3320, w: 625, depth: 138, rimH: 59, shapeType: 'hill' },
  { x:13820, y: 3680, w: 645, depth: 142, rimH: 62, shapeType: 'bowl' },
  { x:14170, y: 3470, w: 630, depth: 140, rimH: 60, shapeType: 'valley' },
  { x:14520, y: 3840, w: 650, depth: 145, rimH: 63, shapeType: 'hill' },
  { x:14880, y: 3640, w: 635, depth: 142, rimH: 61, shapeType: 'slope' },
  { x:15240, y: 4020, w: 655, depth: 148, rimH: 64, shapeType: 'bowl' },
  { x:15610, y: 3820, w: 640, depth: 144, rimH: 62, shapeType: 'hill' },
  { x:15990, y: 4200, w: 660, depth: 150, rimH: 65, shapeType: 'valley' },
  { x:16380, y: 3990, w: 645, depth: 146, rimH: 63, shapeType: 'slope' },
  { x:16780, y: 4400, w: 665, depth: 152, rimH: 66, shapeType: 'hill' },
  { x:17180, y: 4190, w: 650, depth: 148, rimH: 64, shapeType: 'bowl' },
  { x:17590, y: 4610, w: 670, depth: 155, rimH: 67, shapeType: 'valley' },
  { x:18010, y: 4400, w: 655, depth: 150, rimH: 65, shapeType: 'hill' },
  { x:18440, y: 4840, w: 675, depth: 158, rimH: 68, shapeType: 'slope' },
  { x:18880, y: 4630, w: 660, depth: 154, rimH: 66, shapeType: 'bowl' },
  { x:19330, y: 5060, w: 680, depth: 160, rimH: 70, shapeType: 'hill' },

  // ── Section 8: Upper cloud — broader platforms, gentler gaps for recovery ──
  { x:19790, y: 4880, w: 700, depth: 155, rimH: 68, shapeType: 'slope' },
  { x:20270, y: 5280, w: 720, depth: 162, rimH: 72, shapeType: 'bowl' },
  { x:20760, y: 5060, w: 705, depth: 158, rimH: 70, shapeType: 'hill' },
  { x:21260, y: 5490, w: 730, depth: 166, rimH: 74, shapeType: 'valley' },
  { x:21770, y: 5260, w: 710, depth: 162, rimH: 71, shapeType: 'slope' },
  { x:22290, y: 5680, w: 740, depth: 170, rimH: 76, shapeType: 'bowl' },
  { x:22820, y: 5440, w: 720, depth: 165, rimH: 73, shapeType: 'hill' },
  { x:23360, y: 5870, w: 745, depth: 172, rimH: 77, shapeType: 'valley' },
  { x:23910, y: 5650, w: 730, depth: 168, rimH: 75, shapeType: 'slope' },
  { x:24470, y: 6080, w: 755, depth: 175, rimH: 78, shapeType: 'hill' },
  { x:25040, y: 5860, w: 740, depth: 172, rimH: 76, shapeType: 'bowl' },
  { x:25620, y: 6310, w: 760, depth: 178, rimH: 80, shapeType: 'valley' },

  // ── Section 9: Cloud–space transition — tall steps, wide platforms ──────────
  { x:26210, y: 6090, w: 750, depth: 175, rimH: 78, shapeType: 'slope' },
  { x:26810, y: 6560, w: 775, depth: 182, rimH: 82, shapeType: 'hill' },
  { x:27420, y: 6320, w: 760, depth: 178, rimH: 80, shapeType: 'bowl' },
  { x:28040, y: 6800, w: 785, depth: 186, rimH: 84, shapeType: 'valley' },
  { x:28670, y: 6560, w: 770, depth: 182, rimH: 82, shapeType: 'slope' },
  { x:29310, y: 7060, w: 795, depth: 190, rimH: 86, shapeType: 'hill' },
  { x:29960, y: 6820, w: 780, depth: 185, rimH: 84, shapeType: 'bowl' },
  { x:30620, y: 7340, w: 800, depth: 194, rimH: 88, shapeType: 'valley' },
  { x:31290, y: 7100, w: 785, depth: 190, rimH: 86, shapeType: 'slope' },
  { x:31970, y: 7640, w: 810, depth: 198, rimH: 90, shapeType: 'hill' },
  { x:32660, y: 7400, w: 795, depth: 194, rimH: 88, shapeType: 'bowl' },
  { x:33360, y: 7960, w: 820, depth: 202, rimH: 92, shapeType: 'valley' },
  { x:34070, y: 7720, w: 805, depth: 198, rimH: 90, shapeType: 'slope' },
  { x:34790, y: 8300, w: 830, depth: 206, rimH: 94, shapeType: 'hill' },
  { x:35520, y: 8060, w: 815, depth: 202, rimH: 92, shapeType: 'bowl' },
  { x:36260, y: 8660, w: 840, depth: 210, rimH: 96, shapeType: 'valley' },

  // ── Section 10: Deep space approach — meteor-style, reduced gravity zone ───
  { x:37010, y: 9200, w: 820, depth: 205, rimH: 94, shapeType: 'slope' },
  { x:37770, y: 9820, w: 840, depth: 212, rimH: 97, shapeType: 'hill' },
  { x:38540, y: 9560, w: 825, depth: 208, rimH: 95, shapeType: 'bowl' },
  { x:39320, y:10180, w: 850, depth: 218, rimH: 99, shapeType: 'valley' },
  { x:40110, y: 9920, w: 835, depth: 214, rimH: 97, shapeType: 'slope' },
  { x:40910, y:10580, w: 860, depth: 222, rimH:102, shapeType: 'hill' },
  { x:41720, y:10320, w: 845, depth: 218, rimH: 99, shapeType: 'bowl' },
  { x:42540, y:11000, w: 870, depth: 228, rimH:104, shapeType: 'valley' },
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
  // Mirror the left-ramp extension used in createTerrainBodyShapes/writeTopPath
  // so the initial mesh visually matches the landing-detection rampLeft boundary.
  shape.moveTo(leftTop.x - LEFT_RAMP_W, leftTop.y - 40)
  shape.quadraticCurveTo(leftTop.x - LEFT_RAMP_W * 0.3, leftTop.y - 4, leftTop.x, leftTop.y)
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
    shapeType,
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
