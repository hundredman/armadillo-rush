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

  const tuftMat = new THREE.MeshBasicMaterial({ color: 0x9ccc65, side: THREE.DoubleSide })
  const rockMat = new THREE.MeshBasicMaterial({ color: 0x4e342e, side: THREE.DoubleSide })
  for (let i = 3; i < topPoints.length - 3; i += 5) {
    const point = topPoints[i]
    const tuft = createGrassTuft(tuftMat)
    tuft.position.set(point.x, point.y + 7, 0.08)
    tuft.scale.setScalar(0.75 + ((i % 3) * 0.14))
    mesh.add(tuft)
  }
  for (let i = 6; i < topPoints.length - 2; i += 9) {
    const point = topPoints[i]
    const rock = new THREE.Mesh(new THREE.CircleGeometry(5 + (i % 2) * 2, 9), rockMat)
    rock.scale.set(1.35, 0.72, 1)
    rock.position.set(point.x + 6, point.y - 26, 0.06)
    mesh.add(rock)
  }

  return {
    mesh,
    points: topPoints,
    destroyed: false,
    bounds: { left, right, top: maxY, bottom: bottomY },
  }
}

function createGrassTuft(material) {
  const group = new THREE.Group()
  for (const [x, rot, h] of [[-5, -0.45, 13], [0, 0, 16], [5, 0.45, 12]]) {
    const blade = new THREE.Mesh(new THREE.PlaneGeometry(3, h), material)
    blade.position.set(x, h / 2 - 2, 0)
    blade.rotation.z = rot
    group.add(blade)
  }
  return group
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
  const group = new THREE.Group()
  if (type === 'spike') {
    addSpikeObstacle(group)
  } else if (type === 'moving') {
    addCrateObstacle(group, color, 0xffd54f)
  } else if (type === 'iron') {
    addIronObstacle(group)
  } else {
    addCrateObstacle(group, color, type === 'stone' ? 0xb0bec5 : 0xa1887f)
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

function addCrateObstacle(group, color, accent) {
  const outline = new THREE.Mesh(
    new THREE.BoxGeometry(40, 40, 1),
    new THREE.MeshBasicMaterial({ color: 0x1b1f24 }),
  )
  outline.position.z = -0.03
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(34, 34, 1),
    new THREE.MeshBasicMaterial({ color }),
  )
  body.position.z = 0.02
  const strapH = new THREE.Mesh(new THREE.BoxGeometry(30, 4, 1), new THREE.MeshBasicMaterial({ color: accent }))
  const strapV = new THREE.Mesh(new THREE.BoxGeometry(4, 30, 1), new THREE.MeshBasicMaterial({ color: accent }))
  strapH.position.z = 0.05
  strapV.position.z = 0.06
  group.add(outline, body, strapH, strapV)
}

function addIronObstacle(group) {
  addCrateObstacle(group, 0x90a4ae, 0x263238)
  for (const x of [-11, 11]) {
    for (const y of [-11, 11]) {
      const bolt = new THREE.Mesh(new THREE.CircleGeometry(2.5, 10), new THREE.MeshBasicMaterial({ color: 0xeceff1 }))
      bolt.position.set(x, y, 0.08)
      group.add(bolt)
    }
  }
}

function addSpikeObstacle(group) {
  const base = new THREE.Mesh(new THREE.BoxGeometry(42, 7, 1), new THREE.MeshBasicMaterial({ color: 0x1b1f24 }))
  base.position.set(0, -12, 0)
  group.add(base)
  for (const x of [-12, 0, 12]) {
    const outline = new THREE.Mesh(new THREE.ConeGeometry(8, 31, 3), new THREE.MeshBasicMaterial({ color: 0x1b1f24 }))
    const spike = new THREE.Mesh(new THREE.ConeGeometry(6, 27, 3), new THREE.MeshBasicMaterial({ color: 0xef5350 }))
    outline.position.set(x, 3, -0.03)
    spike.position.set(x, 4, 0.02)
    group.add(outline, spike)
  }
}
