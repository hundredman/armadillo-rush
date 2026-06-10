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

// Rocket: thrust velocity (px/s) applied every frame while active, at 25° (flatter — more forward)
export const ROCKET_SPEED          = 860  // px/s — total speed magnitude
export const ROCKET_ANGLE          = Math.PI / 180 * 25  // 25° — flatter, more forward (was 40°)
export const ROCKET_VX             = Math.cos(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 779 px/s
export const ROCKET_VY             = Math.sin(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 364 px/s

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
  { islandIndex:  1, offsetX:  30, offsetY: 28, type: 'rocket' },
  { islandIndex:  4, offsetX: -20, offsetY: 30, type: 'boost'  },

  // ── Section 2 (building momentum) ────────────────────────────────────────
  { islandIndex:  9, offsetX:  40, offsetY: 26, type: 'rocket' },
  { islandIndex: 12, offsetX: -30, offsetY: 28, type: 'boost'  },
  { islandIndex: 14, offsetX:  20, offsetY: 24, type: 'rocket' },

  // ── Section 3 (speed zone) — rockets before gaps; heart after the crossing
  { islandIndex: 17, offsetX:  50, offsetY: 28, type: 'rocket' },
  { islandIndex: 19, offsetX: -40, offsetY: 30, type: 'boost'  },
  { islandIndex: 21, offsetX:   0, offsetY: 36, type: 'heart'  },  // first heart
  { islandIndex: 22, offsetX:  35, offsetY: 26, type: 'rocket' },

  // ── Section 4 (mid climb) ─────────────────────────────────────────────────
  { islandIndex: 25, offsetX: -25, offsetY: 28, type: 'boost'  },
  { islandIndex: 27, offsetX:  45, offsetY: 24, type: 'rocket' },
  { islandIndex: 30, offsetX:   0, offsetY: 30, type: 'boost'  },
  { islandIndex: 31, offsetX: -35, offsetY: 28, type: 'rocket' },

  // ── Section 5 (pre-cloud, destructible) ───────────────────────────────────
  { islandIndex: 33, offsetX:  30, offsetY: 30, type: 'boost'  },
  { islandIndex: 35, offsetX:  50, offsetY: 26, type: 'rocket' },
  { islandIndex: 37, offsetX: -20, offsetY: 28, type: 'boost'  },
  { islandIndex: 39, offsetX:   0, offsetY: 38, type: 'heart'  },  // second heart — pre-cloud milestone

  // ── Section 6 (cloud entry) ───────────────────────────────────────────────
  { islandIndex: 41, offsetX:  40, offsetY: 28, type: 'rocket' },
  { islandIndex: 43, offsetX: -30, offsetY: 30, type: 'boost'  },
  { islandIndex: 45, offsetX:  25, offsetY: 26, type: 'rocket' },
  { islandIndex: 47, offsetX:   0, offsetY: 32, type: 'boost'  },

  // ── Section 7 (high cloud) ────────────────────────────────────────────────
  { islandIndex: 50, offsetX:  55, offsetY: 28, type: 'rocket' },
  { islandIndex: 52, offsetX: -40, offsetY: 30, type: 'boost'  },
  { islandIndex: 54, offsetX:  35, offsetY: 24, type: 'rocket' },
  { islandIndex: 56, offsetX:   0, offsetY: 42, type: 'heart'  },  // third heart — late recovery
  { islandIndex: 58, offsetX: -30, offsetY: 28, type: 'boost'  },
  { islandIndex: 60, offsetX:  45, offsetY: 26, type: 'rocket' },
  { islandIndex: 62, offsetX: -20, offsetY: 30, type: 'boost'  },
  { islandIndex: 64, offsetX:  10, offsetY: 26, type: 'rocket' },
]

// Colors by item type
const ITEM_COLORS = {
  rocket: { main: 0xff6d00, glow: 0xffe0b2, ring: 0xff3d00 },
  boost:  { main: 0xffd600, glow: 0xfff9c4, ring: 0xf9a825 },
  heart:  { main: 0xff1744, glow: 0xff8a80, ring: 0xb71c1c },
}

// ─── Mesh builders ───────────────────────────────────────────────────────────

/**
 * Add a pixel-art rectangle block to a THREE.Group.
 * @param {THREE.Group} g
 * @param {number} x   left edge (world units)
 * @param {number} y   bottom edge (world units)
 * @param {number} w   width (world units)
 * @param {number} h   height (world units)
 * @param {number} color  hex color
 * @param {number} z   z-depth (default 0.12)
 */
function pixRect(g, x, y, w, h, color, z = 0.12) {
  const shape = new THREE.Shape()
  shape.moveTo(x, y)
  shape.lineTo(x + w, y)
  shape.lineTo(x + w, y + h)
  shape.lineTo(x, y + h)
  shape.closePath()
  const mesh = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }),
  )
  mesh.position.z = z
  g.add(mesh)
}

function buildRocketMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.rocket
  const P = 3  // 1 pixel = 3 world units
  const DARK = 0x3d1a00   // outline/shadow color

  // ── Dark outline pass (drawn first, slightly larger) ──────────────
  pixRect(g, -2*P,   6*P,  4*P,   P, DARK, 0.09)           // nose outline top
  pixRect(g, -3*P,  -3*P,  6*P, 10*P, DARK, 0.09)          // body outline
  pixRect(g, -6*P,  -4*P,  3*P,  5*P, DARK, 0.09)          // left fin outline
  pixRect(g,  3*P,  -4*P,  3*P,  5*P, DARK, 0.09)          // right fin outline
  pixRect(g, -2*P,  -6*P,  4*P,  3*P, 0x664400, 0.09)      // flame outline

  // ── Body (main orange) ──────────────────────────────────────────
  pixRect(g, -P,     7*P,  2*P,   P, c.main)  // nose tip
  pixRect(g, -2*P,   6*P,  4*P,   P, c.main)  // nose mid
  pixRect(g, -3*P,  -3*P,  6*P, 9*P, c.main)  // body

  // ── Window (viewport) ────────────────────────────────────────────
  pixRect(g, -P,     3*P,  2*P, 2*P, 0x001a33, 0.13)   // dark glass
  pixRect(g, -P,     4*P,  P,   P,   0x66ccff, 0.14)   // highlight glint

  // ── Side stripe ──────────────────────────────────────────────────
  pixRect(g, -3*P,   0,    P,   3*P, 0xff3d00, 0.13)   // left stripe
  pixRect(g,  2*P,   0,    P,   3*P, 0xff3d00, 0.13)   // right stripe

  // ── Fins ─────────────────────────────────────────────────────────
  pixRect(g, -5*P,  -3*P,  2*P, 4*P, c.ring)
  pixRect(g,  3*P,  -3*P,  2*P, 4*P, c.ring)

  // ── Exhaust flame ────────────────────────────────────────────────
  pixRect(g, -2*P,  -5*P,  4*P, 2*P, 0xffcc00)
  pixRect(g, -P,    -6*P,  2*P,  P,  0xffffff, 0.13)  // inner core

  // ── Ring ─────────────────────────────────────────────────────────
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(22, 26, 12),
    new THREE.MeshBasicMaterial({ color: c.ring, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.10
  g.add(ring)

  g.rotation.z = -ROCKET_ANGLE
  return g
}

function buildBoostMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.boost
  const P = 3
  const DARK = 0x3d2800  // outline color

  // ── Dark outline (1px border all around the bolt) ─────────────────
  pixRect(g,  -P,    5*P,  5*P, 3*P, DARK, 0.09)   // top outline
  pixRect(g, -3*P,   P,   6*P, 5*P, DARK, 0.09)   // mid outline
  pixRect(g,  -P,   -2*P,  6*P, 4*P, DARK, 0.09)  // lower outline
  pixRect(g, -3*P,  -5*P,  5*P, 4*P, DARK, 0.09)  // bottom outline

  // ── Main bolt body ───────────────────────────────────────────────
  pixRect(g,  0,    5*P,  3*P, 2*P, c.main)   // top arm
  pixRect(g, -2*P,  2*P,  4*P, 3*P, c.main)   // upper body
  pixRect(g,  0,   -P,    4*P, 3*P, c.main)   // lower body
  pixRect(g, -2*P, -4*P,  3*P, 3*P, c.main)   // bottom tip

  // ── Inner highlight (bright left edge of bolt) ────────────────────
  pixRect(g,  P,    5*P,  P,   2*P, c.glow, 0.13)
  pixRect(g, -P,    2*P,  2*P, 3*P, c.glow, 0.13)
  pixRect(g,  P,   -P,    2*P, 2*P, c.glow, 0.13)
  pixRect(g, -P,   -4*P,  2*P, 2*P, c.glow, 0.13)

  // ── Shadow/depth right side ───────────────────────────────────────
  pixRect(g,  2*P,  2*P,  P,   3*P, c.ring, 0.11)   // upper shadow
  pixRect(g,  3*P,  -P,   P,   2*P, c.ring, 0.11)   // lower shadow

  // ── Ring ──────────────────────────────────────────────────────────
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(20, 24, 12),
    new THREE.MeshBasicMaterial({ color: c.ring, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.11
  g.add(ring)
  return g
}

function buildHeartMesh() {
  const g = new THREE.Group()
  const c = ITEM_COLORS.heart
  const col = c.main
  const P = 3  // increased from 2 — larger, more readable
  const DARK = 0x4d0010  // dark outline

  // ── Dark outline (1px border) ────────────────────────────────────
  pixRect(g, -5*P,  4*P,  4*P, 3*P, DARK, 0.09)  // left bump outline
  pixRect(g,   P,   4*P,  4*P, 3*P, DARK, 0.09)  // right bump outline
  pixRect(g, -5*P,  -P,  10*P, 6*P, DARK, 0.09)  // body outline
  pixRect(g, -4*P, -3*P,  8*P, 3*P, DARK, 0.09)  // lower outline
  pixRect(g, -3*P, -5*P,  6*P, 3*P, DARK, 0.09)
  pixRect(g, -2*P, -7*P,  4*P, 3*P, DARK, 0.09)
  pixRect(g,  -P,  -8*P,  2*P, 2*P, DARK, 0.09)  // tip outline

  // ── Main heart shape ─────────────────────────────────────────────
  pixRect(g, -4*P,  4*P,  3*P, 2*P, col)  // left bump
  pixRect(g,   P,   4*P,  3*P, 2*P, col)  // right bump
  pixRect(g, -4*P,  2*P,  8*P, 2*P, col)  // top body
  pixRect(g, -4*P,  0,    8*P, 2*P, col)  // mid body
  pixRect(g, -3*P, -2*P,  6*P, 2*P, col)  // narrowing
  pixRect(g, -2*P, -4*P,  4*P, 2*P, col)
  pixRect(g,  -P,  -6*P,  2*P, 2*P, col)  // tip

  // ── Inner highlight ───────────────────────────────────────────────
  pixRect(g, -3*P,  2*P,  3*P, 2*P, c.glow, 0.13)  // top-left sheen
  pixRect(g, -2*P,  0,    2*P, P,   c.glow, 0.13)

  // ── Shadow (right + bottom edge) ─────────────────────────────────
  pixRect(g,  2*P,  0,    2*P, 2*P, c.ring, 0.11)
  pixRect(g, -2*P, -2*P,  2*P, 2*P, c.ring, 0.11)

  // ── Ring ──────────────────────────────────────────────────────────
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(20, 24, 16),
    new THREE.MeshBasicMaterial({ color: c.glow, transparent: true, opacity: 0.50, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.10
  g.add(ring)
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
  if (rel % 28 === 0) return { type: 'heart', offsetX: 0,   offsetY: 34 }
  if (rel % 14 === 0) return { type: 'boost', offsetX: -30, offsetY: 28 }
  if (rel % 10 === 0) return { type: 'rocket', offsetX: 40, offsetY: 26 }
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
