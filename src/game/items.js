import * as THREE from 'three'

/**
 * Item system — Rocket, Spring, Heart
 *
 * Each item is a world-space object with:
 *   type:       'rocket' | 'spring' | 'heart'
 *   x, y:       world position (center)
 *   mesh:       THREE.Group added to the scene
 *   collected:  boolean
 *   bobOffset:  float, per-item phase for bob animation
 *
 * Active effect state stored on the Game instance:
 *   game.activeRocket  { timeLeft }  — rocket thrust active; velocity overridden each frame
 *   game.activeSpring  { timeLeft }  — next-jump enhancer active
 */

export const ITEM_ROCKET_DURATION  = 2.2  // seconds of sustained rocket thrust
export const ITEM_SPRING_DURATION  = 8.0  // seconds the spring bonus is held ready
export const ITEM_COLLECT_RADIUS   = 38   // px — collection trigger distance

// Rocket: thrust velocity (px/s) applied every frame while active, at 45°
export const ROCKET_SPEED          = 940  // px/s — total speed magnitude during thrust
export const ROCKET_ANGLE          = Math.PI / 4  // 45° upward-forward
export const ROCKET_VX             = Math.cos(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 665 px/s
export const ROCKET_VY             = Math.sin(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 665 px/s

// Spring: extra vertical kick (px/s) applied at next jump
export const SPRING_VY_BONUS       = 680
// Spring: vx multiplier applied at next jump (forward boost)
export const SPRING_VX_MULT        = 1.22
// Spring: minimum launch angle (rad) enforced when spring fires
export const SPRING_MIN_ANGLE      = Math.PI / 180 * 50   // 50° — always arcs high
// Spring: speedRatio added immediately on collect (momentum recovery)
export const SPRING_SPEED_BONUS    = 0.45

// ─── Item spawn table ────────────────────────────────────────────────────────
// Each entry: { islandIndex, offsetX, offsetY, type }
//   islandIndex: which island in DEFAULT_ISLAND_LAYOUT (0-based) to attach near
//   offsetX: x offset from island center (px)
//   offsetY: y offset above terrain top (px)
//   type: 'rocket' | 'spring' | 'heart'
//
// Placement philosophy:
//   - Rockets near wide gaps and dangerous sections — immediate escape tool
//   - Springs near hill crests and right edges — enhance the next jump
//   - Hearts are rare (3 in static layout) — milestone rewards after hard sections
export const ITEM_SPAWN_TABLE = [
  // ── Section 1 (learning) — introduce both new types early ────────────────
  { islandIndex:  1, offsetX:  30, offsetY: 48, type: 'rocket' },
  { islandIndex:  4, offsetX: -20, offsetY: 52, type: 'spring' },

  // ── Section 2 (building momentum) ────────────────────────────────────────
  { islandIndex:  9, offsetX:  40, offsetY: 46, type: 'rocket' },
  { islandIndex: 12, offsetX: -30, offsetY: 50, type: 'spring' },
  { islandIndex: 14, offsetX:  20, offsetY: 44, type: 'rocket' },

  // ── Section 3 (speed zone) — rockets before gaps; heart after the crossing
  { islandIndex: 17, offsetX:  50, offsetY: 48, type: 'rocket' },
  { islandIndex: 19, offsetX: -40, offsetY: 52, type: 'spring' },
  { islandIndex: 21, offsetX:   0, offsetY: 56, type: 'heart'  },  // first heart
  { islandIndex: 22, offsetX:  35, offsetY: 46, type: 'rocket' },

  // ── Section 4 (mid climb) ─────────────────────────────────────────────────
  { islandIndex: 25, offsetX: -25, offsetY: 50, type: 'spring' },
  { islandIndex: 27, offsetX:  45, offsetY: 44, type: 'rocket' },
  { islandIndex: 30, offsetX:   0, offsetY: 54, type: 'spring' },
  { islandIndex: 31, offsetX: -35, offsetY: 48, type: 'rocket' },

  // ── Section 5 (pre-cloud, destructible) ───────────────────────────────────
  { islandIndex: 33, offsetX:  30, offsetY: 52, type: 'spring' },
  { islandIndex: 35, offsetX:  50, offsetY: 46, type: 'rocket' },
  { islandIndex: 37, offsetX: -20, offsetY: 48, type: 'spring' },
  { islandIndex: 39, offsetX:   0, offsetY: 60, type: 'heart'  },  // second heart — pre-cloud milestone

  // ── Section 6 (cloud entry) ───────────────────────────────────────────────
  { islandIndex: 41, offsetX:  40, offsetY: 50, type: 'rocket' },
  { islandIndex: 43, offsetX: -30, offsetY: 52, type: 'spring' },
  { islandIndex: 45, offsetX:  25, offsetY: 46, type: 'rocket' },
  { islandIndex: 47, offsetX:   0, offsetY: 54, type: 'spring' },

  // ── Section 7 (high cloud) ────────────────────────────────────────────────
  { islandIndex: 50, offsetX:  55, offsetY: 48, type: 'rocket' },
  { islandIndex: 52, offsetX: -40, offsetY: 52, type: 'spring' },
  { islandIndex: 54, offsetX:  35, offsetY: 44, type: 'rocket' },
  { islandIndex: 56, offsetX:   0, offsetY: 64, type: 'heart'  },  // third heart — late recovery
  { islandIndex: 58, offsetX: -30, offsetY: 50, type: 'spring' },
  { islandIndex: 60, offsetX:  45, offsetY: 48, type: 'rocket' },
  { islandIndex: 62, offsetX: -20, offsetY: 52, type: 'spring' },
  { islandIndex: 64, offsetX:  10, offsetY: 46, type: 'rocket' },
]

// Colors by item type
const ITEM_COLORS = {
  rocket: { main: 0xff6d00, glow: 0xffe0b2, ring: 0xff3d00 },
  spring: { main: 0x00e5ff, glow: 0xe0f7ff, ring: 0x0091ea },
  heart:  { main: 0xff1744, glow: 0xff8a80, ring: 0xb71c1c },
}

// ─── Mesh builders ───────────────────────────────────────────────────────────

function buildRocketMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.rocket

  // Body — vertical pill pointing up-right at 45°
  const bodyShape = new THREE.Shape()
  bodyShape.moveTo(-5, -11)
  bodyShape.lineTo( 5, -11)
  bodyShape.lineTo( 5,   4)
  bodyShape.quadraticCurveTo(5, 12, 0, 14)
  bodyShape.quadraticCurveTo(-5, 12, -5, 4)
  bodyShape.closePath()
  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(bodyShape, 8),
    new THREE.MeshBasicMaterial({ color: c.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Nose window highlight
  const window_ = new THREE.Mesh(
    new THREE.CircleGeometry(3, 10),
    new THREE.MeshBasicMaterial({ color: c.glow, transparent: true, opacity: 0.9 }),
  )
  window_.position.set(0, 6, 0.14)

  // Left fin
  const finL = new THREE.Shape()
  finL.moveTo(-5, -4)
  finL.lineTo(-11, -11)
  finL.lineTo(-5, -11)
  finL.closePath()
  const finLMesh = new THREE.Mesh(
    new THREE.ShapeGeometry(finL),
    new THREE.MeshBasicMaterial({ color: c.ring, side: THREE.DoubleSide }),
  )
  finLMesh.position.z = 0.11

  // Right fin
  const finR = new THREE.Shape()
  finR.moveTo(5, -4)
  finR.lineTo(11, -11)
  finR.lineTo(5, -11)
  finR.closePath()
  const finRMesh = new THREE.Mesh(
    new THREE.ShapeGeometry(finR),
    new THREE.MeshBasicMaterial({ color: c.ring, side: THREE.DoubleSide }),
  )
  finRMesh.position.z = 0.11

  // Outer glow ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(14, 17, 20),
    new THREE.MeshBasicMaterial({ color: c.ring, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.10

  // Tilt 45° so it points up-right — matching the thrust direction
  g.rotation.z = -Math.PI / 4
  g.add(body, window_, finLMesh, finRMesh, ring)
  return g
}

function buildSpringMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.spring

  // Up-arrow body
  const shape = new THREE.Shape()
  shape.moveTo(0, 15)
  shape.lineTo(10, 2)
  shape.lineTo(5, 2)
  shape.lineTo(5, -8)
  shape.lineTo(-5, -8)
  shape.lineTo(-5, 2)
  shape.lineTo(-10, 2)
  shape.closePath()
  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color: c.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Small coil base — two arc segments suggesting a spring
  const coilMat = new THREE.LineBasicMaterial({ color: c.ring })
  const coilPts = []
  for (let i = 0; i <= 12; i++) {
    const t = i / 12
    const wave = Math.sin(t * Math.PI * 2) * 3
    coilPts.push(new THREE.Vector3(-6 + t * 12, -10 + wave, 0.13))
  }
  const coil = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(coilPts),
    coilMat,
  )
  g.add(body, coil)

  // Ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(14, 17, 20),
    new THREE.MeshBasicMaterial({ color: c.ring, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.11
  g.add(ring)

  return g
}

function buildHeartMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.heart

  const s = 9
  const shape = new THREE.Shape()
  shape.moveTo(0, -s * 0.1)
  shape.bezierCurveTo(-s * 1.2, s * 1.1, -s * 2.2, -s * 0.3, -s * 1.1, -s * 1.3)
  shape.bezierCurveTo(-s * 0.5, -s * 1.9, 0, -s * 1.4, 0, -s * 1.0)
  shape.bezierCurveTo(0, -s * 1.4, s * 0.5, -s * 1.9, s * 1.1, -s * 1.3)
  shape.bezierCurveTo(s * 2.2, -s * 0.3, s * 1.2, s * 1.1, 0, -s * 0.1)
  shape.closePath()

  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 12),
    new THREE.MeshBasicMaterial({ color: c.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(13, 17, 20),
    new THREE.MeshBasicMaterial({ color: c.glow, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.10

  g.add(body, ring)
  return g
}

// ─── Factory ─────────────────────────────────────────────────────────────────

export function createItem(type, x, y) {
  const mesh = type === 'rocket' ? buildRocketMesh()
    : type === 'spring' ? buildSpringMesh()
    : buildHeartMesh()

  mesh.position.set(x, y, 0)

  return {
    type,
    x,
    y,
    mesh,
    collected: false,
    bobOffset: Math.random() * Math.PI * 2,
  }
}

/**
 * For procedurally generated islands (beyond the static layout),
 * decide whether to spawn an item and what type.
 * Returns null or { type, offsetX, offsetY }.
 */
export function getProceduralItemSpec(islandIndex) {
  // Rocket every 10 islands, spring every 14, heart every 28
  const rel = islandIndex - 65
  if (rel < 0) return null
  if (rel % 28 === 0) return { type: 'heart',  offsetX: 0,   offsetY: 56 }
  if (rel % 14 === 0) return { type: 'spring', offsetX: -30, offsetY: 50 }
  if (rel % 10 === 0) return { type: 'rocket', offsetX: 40,  offsetY: 46 }
  return null
}

// ─── Animation ───────────────────────────────────────────────────────────────

export function updateItems(items, dt, time) {
  for (const item of items) {
    if (item.collected) continue
    // Gentle vertical bob
    const bob = Math.sin(time * 2.4 + item.bobOffset) * 5
    item.mesh.position.y = item.y + bob
    // Rocket: slow spin to hint at the 45° direction
    if (item.type === 'rocket') {
      item.mesh.rotation.z = -Math.PI / 4 + Math.sin(time * 1.4 + item.bobOffset) * 0.18
    }
    // Heart: gentle pulse
    if (item.type === 'heart') {
      const pulse = 1 + Math.sin(time * 3.0 + item.bobOffset) * 0.08
      item.mesh.scale.setScalar(pulse)
    }
  }
}

// ─── Collection check ────────────────────────────────────────────────────────

export function checkItemCollection(items, ax, ay) {
  for (const item of items) {
    if (item.collected) continue
    const dx = ax - item.x
    const dy = ay - item.y
    if (dx * dx + dy * dy <= ITEM_COLLECT_RADIUS * ITEM_COLLECT_RADIUS) {
      return item
    }
  }
  return null
}

// ─── Collect effect helpers ───────────────────────────────────────────────────

export function markCollected(item) {
  item.collected = true
  item.mesh.visible = false
}
