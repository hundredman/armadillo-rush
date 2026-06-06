import * as THREE from 'three'
import { MATERIAL, OBSTACLE } from '../config.js'

export const TERRAIN_THICKNESS = 64
export const OBSTACLE_SIZE = 34

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

  return {
    mesh,
    points: topPoints,
    destroyed: false,
    bounds: { left, right, top: maxY, bottom: bottomY },
  }
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
  const color = materialConfig?.color ?? 0xe53935
  const height = type === 'spike' ? 26 : OBSTACLE_SIZE
  const width = type === 'spike' ? 38 : OBSTACLE_SIZE
  const geometry = type === 'spike'
    ? new THREE.ConeGeometry(width / 2, height, 3)
    : new THREE.BoxGeometry(width, height, 1)

  const group = new THREE.Group()
  const outlineGeometry = type === 'spike'
    ? new THREE.ConeGeometry(width / 2 + 3, height + 5, 3)
    : new THREE.BoxGeometry(width + 6, height + 6, 1)
  const outline = new THREE.Mesh(
    outlineGeometry,
    new THREE.MeshBasicMaterial({ color: 0x1b1f24 }),
  )
  outline.position.z = -0.03
  const body = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ color }),
  )
  body.position.z = 0.02
  group.add(outline, body)
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
