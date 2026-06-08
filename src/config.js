/**
 * 현재 구현에서 실제로 사용하는 튜닝 상수.
 * 플레이테스트로 조정하는 값은 우선 여기에서 관리한다.
 */

// ── 좌표/거리 환산 (§3) ──────────────────────────────
export const PX_PER_METER = 10        // 1m = 10px

// ── 속도 시스템 ──────────────────────────────────────
export const MAX_SPEED = 1040         // px/s, speedRatio 1.0 일 때 실제 속도

// 시간 기반 (연속, /초 — deltaTime 곱함)
export const FRICTION_PER_SEC = 0.025    // 구름 마찰 (낮을수록 속도감 살아남)
export const SLOPE_RESIST_PER_SEC = 0.06 // 경사 저항 (낮을수록 올라가기 수월)

// ── 게임 오버 ────────────────────────────────────────
export const STALL_SPEED_RATIO = 0.05    // 이 이하면 정지 위험
export const STALL_DANGER_SEC = 1.0      // 경고 표시 시점
export const STALL_GAMEOVER_SEC = 2.0    // 게임 오버 시점

// ── 도약 / 물리 ──────────────────────────────────────
export const GRAVITY = 980               // px/s²

// ── 점수 ─────────────────────────────────────────────
export const SCORE = {
  perM_height: 100,
  perM_distance: 10,
}

// ── 카메라 ───────────────────────────────────────────
export const CAMERA_LERP = 0.12
export const VIEW_HEIGHT_PX = 800        // ortho 세로 가시 영역 (px). 가로는 종횡비로 산출

// ── 타격감 ───────────────────────────────────────────
export const SLOWMO_SCALE = 0.3
export const SLOWMO_SEC = 0.08
