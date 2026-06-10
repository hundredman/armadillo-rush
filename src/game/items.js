import * as THREE from 'three'

/**
 * Item system — Rocket, Boost, Heart
 *
 * Each item is a world-space object with:
 *   type:       'rocket' | 'boost' | 'heart'
 *   x, y:       world position (center)
 *   mesh:       THREE.Group added to the scene
 *   collected:  boolean
 *   bobOffset:  float, per-item phase for bob animation
 *
 * Active effect state stored on the Game instance:
 *   game.activeRocket  { timeLeft }  — rocket thrust active; velocity overridden each frame
 *   game.activeSpring  { timeLeft }  — boost effect active (speed + jump enhanced for duration)
 */

export const ITEM_ROCKET_DURATION  = 2.0  // seconds of sustained rocket thrust (reduced from 2.2)
export const ITEM_SPRING_DURATION  = 10.0 // seconds the boost is active
export const ITEM_COLLECT_RADIUS   = 38   // px — collection trigger distance

// Rocket: thrust velocity (px/s) applied every frame while active, at 40° (slightly flatter than before)
export const ROCKET_SPEED          = 860  // px/s — total speed magnitude (reduced from 940)
export const ROCKET_ANGLE          = Math.PI / 180 * 40  // 40° (was 45°)
export const ROCKET_VX             = Math.cos(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 659 px/s
export const ROCKET_VY             = Math.sin(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 553 px/s

// Boost: applied on every jump while active (not consumed on use — lasts full duration)
export const SPRING_VY_BONUS       = 320  // per-jump vertical bonus (repeating; was 680 one-time)
export const SPRING_VX_MULT        = 1.15 // per-jump forward multiplier (was 1.22)
export const SPRING_MIN_ANGLE      = Math.PI / 180 * 40  // 40° min launch arc (was 50°)
export const SPRING_SPEED_BONUS    = 0.28 // immediate speedRatio on collect (was 0.45)
export const SPRING_PASSIVE_SPEED  = 0.22 // speedRatio/s passive gain while rolling with boost

// ─── Item spawn table ────────────────────────────────────────────────────────
// Each entry: { islandIndex, offsetX, offsetY, type }
//   islandIndex: which island in DEFAULT_ISLAND_LAYOUT (0-based) to attach near
//   offsetX: x offset from island center (px)
//   offsetY: y offset above terrain top (px)
//   type: 'rocket' | 'boost' | 'heart'
//
// Placement philosophy:
//   - Rockets near wide gaps and dangerous sections — immediate escape tool
//   - Boosts near hill crests and right edges — enhance speed + multiple jumps
//   - Hearts are rare (3 in static layout) — milestone rewards after hard sections
export const ITEM_SPAWN_TABLE = [
  // ── Section 1 (learning) — introduce both new types early ────────────────
  { islandIndex:  1, offsetX:  30, offsetY: 48, type: 'rocket' },
  { islandIndex:  4, offsetX: -20, offsetY: 52, type: 'boost'  },

  // ── Section 2 (building momentum) ────────────────────────────────────────
  { islandIndex:  9, offsetX:  40, offsetY: 46, type: 'rocket' },
  { islandIndex: 12, offsetX: -30, offsetY: 50, type: 'boost'  },
  { islandIndex: 14, offsetX:  20, offsetY: 44, type: 'rocket' },

  // ── Section 3 (speed zone) — rockets before gaps; heart after the crossing
  { islandIndex: 17, offsetX:  50, offsetY: 48, type: 'rocket' },
  { islandIndex: 19, offsetX: -40, offsetY: 52, type: 'boost'  },
  { islandIndex: 21, offsetX:   0, offsetY: 56, type: 'heart'  },  // first heart
  { islandIndex: 22, offsetX:  35, offsetY: 46, type: 'rocket' },

  // ── Section 4 (mid climb) ─────────────────────────────────────────────────
  { islandIndex: 25, offsetX: -25, offsetY: 50, type: 'boost'  },
  { islandIndex: 27, offsetX:  45, offsetY: 44, type: 'rocket' },
  { islandIndex: 30, offsetX:   0, offsetY: 54, type: 'boost'  },
  { islandIndex: 31, offsetX: -35, offsetY: 48, type: 'rocket' },

  // ── Section 5 (pre-cloud, destructible) ───────────────────────────────────
  { islandIndex: 33, offsetX:  30, offsetY: 52, type: 'boost'  },
  { islandIndex: 35, offsetX:  50, offsetY: 46, type: 'rocket' },
  { islandIndex: 37, offsetX: -20, offsetY: 48, type: 'boost'  },
  { islandIndex: 39, offsetX:   0, offsetY: 60, type: 'heart'  },  // second heart — pre-cloud milestone

  // ── Section 6 (cloud entry) ───────────────────────────────────────────────
  { islandIndex: 41, offsetX:  40, offsetY: 50, type: 'rocket' },
  { islandIndex: 43, offsetX: -30, offsetY: 52, type: 'boost'  },
  { islandIndex: 45, offsetX:  25, offsetY: 46, type: 'rocket' },
  { islandIndex: 47, offsetX:   0, offsetY: 54, type: 'boost'  },

  // ── Section 7 (high cloud) ────────────────────────────────────────────────
  { islandIndex: 50, offsetX:  55, offsetY: 48, type: 'rocket' },
  { islandIndex: 52, offsetX: -40, offsetY: 52, type: 'boost'  },
  { islandIndex: 54, offsetX:  35, offsetY: 44, type: 'rocket' },
  { islandIndex: 56, offsetX:   0, offsetY: 64, type: 'heart'  },  // third heart — late recovery
  { islandIndex: 58, offsetX: -30, offsetY: 50, type: 'boost'  },
  { islandIndex: 60, offsetX:  45, offsetY: 48, type: 'rocket' },
  { islandIndex: 62, offsetX: -20, offsetY: 52, type: 'boost'  },
  { islandIndex: 64, offsetX:  10, offsetY: 46, type: 'rocket' },
]

// Colors by item type
const ITEM_COLORS = {
  rocket: { main: 0xff6d00, glow: 0xffe0b2, ring: 0xff3d00 },
  boost:  { main: 0xffd600, glow: 0xfff9c4, ring: 0xf9a825 },
  heart:  { main: 0xff1744, glow: 0xff8a80, ring: 0xb71c1c },
}

// ─── Mesh builders ───────────────────────────────────────────────────────────

function buildRocketMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.rocket

  // Body — vertical pill pointing up-right at new angle
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

  // Tilt to match new 40° thrust direction
  g.rotation.z = -ROCKET_ANGLE
  g.add(body, window_, finLMesh, finRMesh, ring)
  return g
}

function buildBoostMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.boost

  // Lightning bolt body — signals speed burst
  const shape = new THREE.Shape()
  shape.moveTo(3, 15)
  shape.lineTo(10, 2)
  shape.lineTo(4, 2)
  shape.lineTo(8, -10)
  shape.lineTo(-3, 4)
  shape.lineTo(3, 4)
  shape.closePath()
  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color: c.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Inner highlight
  const innerShape = new THREE.Shape()
  innerShape.moveTo(2, 12)
  innerShape.lineTo(7, 2)
  innerShape.lineTo(3, 2)
  innerShape.lineTo(6, -6)
  innerShape.lineTo(-1, 4)
  innerShape.lineTo(2, 4)
  innerShape.closePath()
  const inner = new THREE.Mesh(
    new THREE.ShapeGeometry(innerShape),
    new THREE.MeshBasicMaterial({ color: c.glow, transparent: true, opacity: 0.7, side: THREE.DoubleSide }),
  )
  inner.position.z = 0.13

  // Ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(14, 17, 20),
    new THREE.MeshBasicMaterial({ color: c.ring, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.11
  g.add(body, inner, ring)

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
    : type === 'boost' ? buildBoostMesh()
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
  // Rocket every 10 islands, boost every 14, heart every 28
  const rel = islandIndex - 65
  if (rel < 0) return null
  if (rel % 28 === 0) return { type: 'heart', offsetX: 0,   offsetY: 56 }
  if (rel % 14 === 0) return { type: 'boost', offsetX: -30, offsetY: 50 }
  if (rel % 10 === 0) return { type: 'rocket', offsetX: 40, offsetY: 46 }
  return null
}

// ─── Animation ───────────────────────────────────────────────────────────────

export function updateItems(items, dt, time) {
  for (const item of items) {
    if (item.collected) continue
    // Gentle vertical bob
    const bob = Math.sin(time * 2.4 + item.bobOffset) * 5
    item.mesh.position.y = item.y + bob
    // Rocket: slow spin to hint at the thrust direction
    if (item.type === 'rocket') {
      item.mesh.rotation.z = -ROCKET_ANGLE + Math.sin(time * 1.4 + item.bobOffset) * 0.18
    }
    // Boost: slight pulse/shimmer
    if (item.type === 'boost') {
      const pulse = 1 + Math.sin(time * 3.5 + item.bobOffset) * 0.10
      item.mesh.scale.setScalar(pulse)
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
