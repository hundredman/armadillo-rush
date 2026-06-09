import * as THREE from 'three'

/**
 * Item system — Booster, Jump, Heart
 *
 * Each item is a world-space object with:
 *   type:       'booster' | 'jump' | 'heart'
 *   x, y:       world position (center)
 *   mesh:       THREE.Group added to the scene
 *   collected:  boolean
 *   bobOffset:  float, per-item phase for bob animation
 *
 * Active effect state stored on the Game instance:
 *   game.activeBooster  { timeLeft }  — speed multiplier active
 *   game.activeJump     { timeLeft }  — next-jump enhancer active
 */

export const ITEM_BOOSTER_DURATION = 6.0  // seconds
export const ITEM_JUMP_DURATION    = 8.0  // seconds
export const ITEM_COLLECT_RADIUS   = 38   // px — collection trigger distance

// Booster: speedRatio boost amount added on collect
export const BOOSTER_SPEED_BONUS    = 0.55
// Booster: multiplier on BOOST_ACCEL_PER_SEC while active
export const BOOSTER_ACCEL_MULT     = 1.6
// Jump: extra vertical kick (px/s) applied at next jump
export const JUMP_VY_BONUS          = 420
// Jump: angle correction — forces launch angle toward ideal (deg, added to effective angle)
export const JUMP_ANGLE_BONUS_DEG   = 6

// ─── Item spawn table ────────────────────────────────────────────────────────
// Each entry: { islandIndex, offsetX, offsetY, type }
//   islandIndex: which island in DEFAULT_ISLAND_LAYOUT (0-based) to attach near
//   offsetX: x offset from island center (px)
//   offsetY: y offset above terrain top (px)
//   type: 'booster' | 'jump' | 'heart'
//
// Placement philosophy:
//   - Boosters near long flat runs and before big gaps (reward momentum)
//   - Jumps near hill crests and before tricky edges (rescue low launches)
//   - Hearts are rare — placed after the hardest sections only
export const ITEM_SPAWN_TABLE = [
  // ── Section 1 (learning) — one booster and one jump to teach the system ──
  { islandIndex:  1, offsetX:  30, offsetY: 48, type: 'booster' },
  { islandIndex:  4, offsetX: -20, offsetY: 52, type: 'jump'    },

  // ── Section 2 (building momentum) ────────────────────────────────────────
  { islandIndex:  9, offsetX:  40, offsetY: 46, type: 'booster' },
  { islandIndex: 12, offsetX: -30, offsetY: 50, type: 'jump'    },
  { islandIndex: 14, offsetX:  20, offsetY: 44, type: 'booster' },

  // ── Section 3 (speed zone) — boosters reward fast runs; heart after gap ──
  { islandIndex: 17, offsetX:  50, offsetY: 48, type: 'booster' },
  { islandIndex: 19, offsetX: -40, offsetY: 52, type: 'jump'    },
  { islandIndex: 21, offsetX:   0, offsetY: 56, type: 'heart'   },  // first heart — mid-run reward
  { islandIndex: 22, offsetX:  35, offsetY: 46, type: 'booster' },

  // ── Section 4 (mid climb) ─────────────────────────────────────────────────
  { islandIndex: 25, offsetX: -25, offsetY: 50, type: 'jump'    },
  { islandIndex: 27, offsetX:  45, offsetY: 44, type: 'booster' },
  { islandIndex: 30, offsetX:   0, offsetY: 54, type: 'jump'    },
  { islandIndex: 31, offsetX: -35, offsetY: 48, type: 'booster' },

  // ── Section 5 (pre-cloud, destructible) — jump helps clear soft terrain ──
  { islandIndex: 33, offsetX:  30, offsetY: 52, type: 'jump'    },
  { islandIndex: 35, offsetX:  50, offsetY: 46, type: 'booster' },
  { islandIndex: 37, offsetX: -20, offsetY: 48, type: 'jump'    },
  { islandIndex: 39, offsetX:   0, offsetY: 60, type: 'heart'   },  // second heart — pre-cloud milestone

  // ── Section 6 (cloud entry) ───────────────────────────────────────────────
  { islandIndex: 41, offsetX:  40, offsetY: 50, type: 'booster' },
  { islandIndex: 43, offsetX: -30, offsetY: 52, type: 'jump'    },
  { islandIndex: 45, offsetX:  25, offsetY: 46, type: 'booster' },
  { islandIndex: 47, offsetX:   0, offsetY: 54, type: 'jump'    },

  // ── Section 7 (high cloud) ────────────────────────────────────────────────
  { islandIndex: 50, offsetX:  55, offsetY: 48, type: 'booster' },
  { islandIndex: 52, offsetX: -40, offsetY: 52, type: 'jump'    },
  { islandIndex: 54, offsetX:  35, offsetY: 44, type: 'booster' },
  { islandIndex: 56, offsetX:   0, offsetY: 64, type: 'heart'   },  // third heart — late-game recovery
  { islandIndex: 58, offsetX: -30, offsetY: 50, type: 'jump'    },
  { islandIndex: 60, offsetX:  45, offsetY: 48, type: 'booster' },
  { islandIndex: 62, offsetX: -20, offsetY: 52, type: 'jump'    },
  { islandIndex: 64, offsetX:  10, offsetY: 46, type: 'booster' },

  // ── Procedural fallback: extra booster/jump pairs every ~12 islands ───────
  // These cover islands beyond the static layout (index >= 65).
  // Handled separately in spawnItemsForIsland() below.
]

// Colors by item type
const ITEM_COLORS = {
  booster: { main: 0xffb300, glow: 0xfff176, ring: 0xff8f00 },
  jump:    { main: 0x00e5ff, glow: 0xe0f7ff, ring: 0x0091ea },
  heart:   { main: 0xff1744, glow: 0xff8a80, ring: 0xb71c1c },
}

// ─── Mesh builders ───────────────────────────────────────────────────────────

function buildBoosterMesh() {
  const g = new THREE.Group()

  // Diamond body
  const shape = new THREE.Shape()
  shape.moveTo(0, 14)
  shape.lineTo(10, 0)
  shape.lineTo(0, -14)
  shape.lineTo(-10, 0)
  shape.closePath()
  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.booster.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Inner highlight
  const inner = new THREE.Mesh(
    new THREE.CircleGeometry(5, 8),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.booster.glow, transparent: true, opacity: 0.85 }),
  )
  inner.position.z = 0.14

  // Ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(12, 15, 16),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.booster.ring, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.11

  g.add(body, inner, ring)
  return g
}

function buildJumpMesh() {
  const g = new THREE.Group()

  // Up-arrow body
  const shape = new THREE.Shape()
  shape.moveTo(0, 15)
  shape.lineTo(10, 2)
  shape.lineTo(5, 2)
  shape.lineTo(5, -12)
  shape.lineTo(-5, -12)
  shape.lineTo(-5, 2)
  shape.lineTo(-10, 2)
  shape.closePath()
  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.jump.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(14, 17, 20),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.jump.ring, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.11

  g.add(body, ring)
  return g
}

function buildHeartMesh() {
  const g = new THREE.Group()

  // Pixel heart — SVG-path style via ShapeGeometry
  const s = 9  // scale unit
  const shape = new THREE.Shape()
  // Two lobes + point
  shape.moveTo(0, -s * 0.1)
  shape.bezierCurveTo(-s * 1.2, s * 1.1, -s * 2.2, -s * 0.3, -s * 1.1, -s * 1.3)
  shape.bezierCurveTo(-s * 0.5, -s * 1.9, 0, -s * 1.4, 0, -s * 1.0)
  shape.bezierCurveTo(0, -s * 1.4, s * 0.5, -s * 1.9, s * 1.1, -s * 1.3)
  shape.bezierCurveTo(s * 2.2, -s * 0.3, s * 1.2, s * 1.1, 0, -s * 0.1)
  shape.closePath()

  const body = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 12),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.heart.main, side: THREE.DoubleSide }),
  )
  body.position.z = 0.12

  // Glow ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(13, 17, 20),
    new THREE.MeshBasicMaterial({ color: ITEM_COLORS.heart.glow, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.10

  g.add(body, ring)
  return g
}

// ─── Factory ─────────────────────────────────────────────────────────────────

export function createItem(type, x, y) {
  const mesh = type === 'booster' ? buildBoosterMesh()
    : type === 'jump'    ? buildJumpMesh()
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
 * Given the static island layout array, return all item specs derived from
 * ITEM_SPAWN_TABLE (skipping entries whose islandIndex is out of bounds).
 * For each island, the item y is: getTerrainTopY(island, island.bowlCenter + offsetX) + offsetY
 *
 * This is called once after the static islands are built.
 */
export function buildItemSpecsFromLayout(islands) {
  const specs = []
  for (const entry of ITEM_SPAWN_TABLE) {
    const island = islands[entry.islandIndex]
    if (!island) continue
    const wx = island.bowlCenter + entry.offsetX
    // Import-free inline version of getTerrainTopY for use here:
    // We just use island.bounds.top as a rough ceiling; the caller uses
    // getTerrainTopY for exact placement.
    specs.push({
      type: entry.type,
      islandRef: island,
      offsetX: entry.offsetX,
      offsetY: entry.offsetY,
    })
  }
  return specs
}

/**
 * For procedurally generated islands (beyond the static layout),
 * decide whether to spawn an item and what type.
 * Returns null or { type, offsetX, offsetY }.
 */
export function getProceduralItemSpec(islandIndex) {
  // Spawn a booster every 10 islands, jump every 14, heart every 28
  const rel = islandIndex - 65  // offset past static layout
  if (rel < 0) return null
  if (rel % 28 === 0) return { type: 'heart',   offsetX: 0,   offsetY: 56 }
  if (rel % 14 === 0) return { type: 'jump',    offsetX: -30, offsetY: 50 }
  if (rel % 10 === 0) return { type: 'booster', offsetX: 40,  offsetY: 46 }
  return null
}

// ─── Animation ───────────────────────────────────────────────────────────────

export function updateItems(items, dt, time) {
  for (const item of items) {
    if (item.collected) continue
    // Gentle vertical bob
    const bob = Math.sin(time * 2.4 + item.bobOffset) * 5
    item.mesh.position.y = item.y + bob
    // Slow rotation for booster diamond
    if (item.type === 'booster') {
      item.mesh.rotation.z = time * 1.2
    }
    // Pulse scale for heart
    if (item.type === 'heart') {
      const pulse = 1 + Math.sin(time * 3.0 + item.bobOffset) * 0.08
      item.mesh.scale.setScalar(pulse)
    }
  }
}

// ─── Collection check ────────────────────────────────────────────────────────

/**
 * Check if armadillo (at ax, ay) is close enough to collect any item.
 * Returns the first uncollected item within ITEM_COLLECT_RADIUS, or null.
 */
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
