/**
 * Tuning constants used in the current implementation.
 * Adjust values here during playtesting.
 */

// ── Coordinate scale ─────────────────────────────────
export const PX_PER_METER = 10        // 1m = 10px

// ── Speed system ─────────────────────────────────────
export const MAX_SPEED = 1400         // px/s at speedRatio 1.0

// Time-based (continuous, per second — multiply by deltaTime)
export const FRICTION_PER_SEC = 0.003    // rolling friction
export const SLOPE_RESIST_PER_SEC = 0.008 // uphill resistance

// ── Game over ─────────────────────────────────────────
export const STALL_SPEED_RATIO = 0.05    // below this = stall warning
export const STALL_DANGER_SEC = 1.0      // warning shown after this
export const STALL_GAMEOVER_SEC = 2.0    // game over after this

// ── Physics ───────────────────────────────────────────
export const GRAVITY = 980               // px/s²

// ── Score ─────────────────────────────────────────────
export const SCORE = {
  perM_height: 100,
  perM_distance: 10,
}

// ── Camera ────────────────────────────────────────────
export const CAMERA_LERP = 0.12
export const VIEW_HEIGHT_PX = 800        // ortho viewport height (px); width derived from aspect ratio

// ── Impact feel ───────────────────────────────────────
export const SLOWMO_SCALE = 0.3
export const SLOWMO_SEC = 0.08
