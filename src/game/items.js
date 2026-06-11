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
 *   game.activeBoost  { timeLeft }  — boost effect active (speed + jump enhanced for duration)
 */

export const ITEM_ROCKET_DURATION  = 2.0  // seconds of sustained rocket thrust (reduced from 2.2)
export const ITEM_BOOST_DURATION  = 10.0 // seconds the boost is active
export const ITEM_COLLECT_RADIUS   = 38   // px — collection trigger distance

// Rocket: thrust velocity (px/s) applied every frame while active, at 25° (flatter — more forward)
export const ROCKET_SPEED          = 860  // px/s — total speed magnitude
export const ROCKET_ANGLE          = Math.PI / 180 * 25  // 25° — flatter, more forward (was 40°)
export const ROCKET_VX             = Math.cos(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 779 px/s
export const ROCKET_VY             = Math.sin(ROCKET_ANGLE) * ROCKET_SPEED  // ≈ 364 px/s

// Boost: applied on every jump while active (not consumed on use — lasts full duration)
export const BOOST_VY_BONUS       = 320  // per-jump vertical bonus (repeating; was 680 one-time)
export const BOOST_VX_MULT        = 1.15 // per-jump forward multiplier (was 1.22)
export const BOOST_MIN_ANGLE      = Math.PI / 180 * 40  // 40° min launch arc (was 50°)
export const BOOST_SPEED_BONUS    = 0.28 // immediate speedRatio on collect (was 0.45)
export const BOOST_PASSIVE_SPEED  = 0.22 // speedRatio/s passive gain while rolling with boost

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

  // ── Section 8 (upper cloud) — keep the climb stocked ──────────────────────
  { islandIndex: 66, offsetX: -35, offsetY: 28, type: 'boost'  },
  { islandIndex: 68, offsetX:  45, offsetY: 26, type: 'rocket' },
  { islandIndex: 71, offsetX:   0, offsetY: 40, type: 'heart'  },  // fourth heart
  { islandIndex: 73, offsetX: -25, offsetY: 28, type: 'boost'  },
  { islandIndex: 75, offsetX:  40, offsetY: 26, type: 'rocket' },

  // ── Section 9 (cloud–space transition) ────────────────────────────────────
  { islandIndex: 77, offsetX: -30, offsetY: 30, type: 'boost'  },
  { islandIndex: 79, offsetX:  50, offsetY: 26, type: 'rocket' },
  { islandIndex: 82, offsetX: -20, offsetY: 28, type: 'boost'  },
  { islandIndex: 84, offsetX:   0, offsetY: 42, type: 'heart'  },  // fifth heart
  { islandIndex: 86, offsetX:  45, offsetY: 26, type: 'rocket' },
  { islandIndex: 88, offsetX: -30, offsetY: 30, type: 'boost'  },
  { islandIndex: 90, offsetX:  35, offsetY: 26, type: 'rocket' },

  // ── Section 10 (deep space) — reduced gravity, reward the final push ──────
  { islandIndex: 92, offsetX: -25, offsetY: 28, type: 'boost'  },
  { islandIndex: 94, offsetX:  50, offsetY: 26, type: 'rocket' },
  { islandIndex: 96, offsetX:   0, offsetY: 42, type: 'heart'  },  // sixth heart
  { islandIndex: 98, offsetX: -30, offsetY: 30, type: 'boost'  },
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

/**
 * Build a pixel-art icon from a small character grid, automatically wrapping the
 * whole silhouette in a clean 1px outline.  This guarantees every icon shares the
 * same crisp-outline + light/core/shadow shading language, so the three item
 * types read as one consistent set rather than ad-hoc sprites.
 *
 * @param {string[]} rows   grid rows ('.'/' ' = empty, other chars = palette key)
 * @param {Object}   pal    char → hex color
 * @param {number}   outline outline hex color
 * @param {number}   P       pixel size in world units
 * @param {Object}   [zByChar] optional char → z override (for inset details)
 */
function buildPixelIcon(rows, pal, outline, P, zByChar = {}) {
  const g = new THREE.Group()
  const H = rows.length
  const W = Math.max(...rows.map((r) => r.length))
  const charAt = (i, j) => (rows[j] && rows[j][i]) || ' '
  const isFill = (ch) => ch !== ' ' && ch !== '.'
  const xOf = (i) => (i - W / 2) * P
  const yOf = (j) => ((H - 1 - j) - H / 2) * P

  // Outline pass — any empty cell orthogonally touching a filled cell.
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      if (isFill(charAt(i, j))) continue
      const touches = isFill(charAt(i - 1, j)) || isFill(charAt(i + 1, j))
        || isFill(charAt(i, j - 1)) || isFill(charAt(i, j + 1))
      if (touches) pixRect(g, xOf(i), yOf(j), P, P, outline, 0.085)
    }
  }
  // Fill pass.
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const ch = charAt(i, j)
      if (!isFill(ch)) continue
      const color = pal[ch]
      if (color == null) continue
      pixRect(g, xOf(i), yOf(j), P, P, color, zByChar[ch] ?? 0.12)
    }
  }
  return g
}

/** Add a soft glow ring behind an icon. */
function addGlowRing(g, color, inner, outer, opacity) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(inner, outer, 28),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide }),
  )
  ring.position.z = 0.06
  g.add(ring)
}

function buildRocketMesh() {
  const c = ITEM_COLORS.rocket
  // C core, L highlight (left), S shade (right), G glass, g glint, F flame, f flame-core, N fin
  const rows = [
    '...C...',
    '..LCS..',
    '..LCS..',
    '..LGS..',
    '..LgS..',
    '..LCS..',
    '.NLCSN.',
    '.NLCSN.',
    '..LCS..',
    '..FFF..',
    '...f...',
  ]
  const pal = {
    C: c.main, L: 0xffc266, S: 0xc23d00,
    G: 0x12303f, g: 0x9fe3ff,
    F: 0xffce3a, f: 0xfff3b0, N: c.ring,
  }
  const g = buildPixelIcon(rows, pal, 0x2a1200, 3, { g: 0.13, G: 0.13 })
  addGlowRing(g, c.ring, 22, 26, 0.42)
  g.rotation.z = -ROCKET_ANGLE
  return g
}

function buildBoostMesh() {
  const c = ITEM_COLORS.boost
  // Lightning bolt: upper diagonal → flare → lower diagonal, L highlight / S shade
  const rows = [
    '...CC.',
    '..LCS.',
    '..LCS.',
    '.LCCC.',
    '.CCCS.',
    '..LCS.',
    '..LCS.',
    '.LCS..',
    '.CC...',
  ]
  const pal = { C: c.main, L: c.glow, S: 0xc9a200 }
  const g = buildPixelIcon(rows, pal, 0x3a2500, 3, { L: 0.13 })
  addGlowRing(g, c.ring, 20, 24, 0.52)
  return g
}

function buildHeartMesh() {
  const c = ITEM_COLORS.heart
  // Two bumps + tapering body; L sheen top-left, S shade bottom-right
  const rows = [
    '.LCC.CCS.',
    'LLCCCCCSS',
    'LCCCCCCCS',
    '.LCCCCCS.',
    '..LCCCS..',
    '...LCS...',
    '....C....',
  ]
  const pal = { C: c.main, L: 0xff8a9a, S: 0xb3122f }
  const g = buildPixelIcon(rows, pal, 0x4d0010, 3, { L: 0.13 })
  addGlowRing(g, c.glow, 20, 24, 0.48)
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
  // The static layout ends at island 99; the endless procedural section starts at
  // 100.  Keep items flowing here (roughly one every ~7 islands, hearts rarer) so
  // high altitudes never run dry — earlier the cadence effectively thinned out.
  const rel = islandIndex - 100
  if (rel < 0) return null
  if (rel % 23 === 0) return { type: 'heart',  offsetX: 0,   offsetY: 34 }
  if (rel % 11 === 0) return { type: 'boost',  offsetX: -30, offsetY: 28 }
  if (rel % 7 === 0)  return { type: 'rocket', offsetX: 40,  offsetY: 26 }
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
