/**
 * 모든 튜닝 상수 — 기획서 GAME_DESIGN.md 의 수치를 한 곳에 모은다.
 * 플레이테스트로 조정하는 값은 전부 여기서만 바꾼다 (§14 "config 분리" 대응).
 */

// ── 좌표/거리 환산 (§3) ──────────────────────────────
export const PX_PER_METER = 10        // 1m = 10px

// ── 속도 시스템 (§3) ─────────────────────────────────
export const MAX_SPEED = 400          // px/s, speedRatio 1.0 일 때 실제 속도
export const HIGH_SPEED_THRESHOLD = 0.4  // 고속/저속 연출 분기

// 시간 기반 (연속, /초 — deltaTime 곱함)
export const FRICTION_PER_SEC = 0.08     // 구름 마찰 (낮을수록 속도감 살아남)
export const SLOPE_RESIST_PER_SEC = 0.14 // 경사 저항 (낮을수록 올라가기 수월)

// 이벤트 기반 (순간, 1회 가감)
export const SPEED_BONUS = { PERFECT: 0.35, GOOD: 0.18, OK: 0.07, MISS: 0.0 }
export const SPRING_BOOST = 0.50
export const STEEP_LANDING_PENALTY = 0.10  // 착지각 > 45도
export const TERRAIN_BREAK_COST = 0.15     // 파괴 가능 지형 통과
export const REVIVE_SPEED_MULT = 0.5       // 부활 시 speedRatio × 0.5

// ── 콤보 (§3) — 연속 PERFECT 가산분 (speedRatio) ─────
export const COMBO_BONUS = [
  { min: 5, bonus: 0.20 },
  { min: 3, bonus: 0.10 },
  { min: 2, bonus: 0.05 },
]
export const COMBO_GOLD_THRESHOLD = 5   // 황금색 전환

// ── 타이밍 판정 (§3) — 윈도우(W) 비례 ────────────────
export const TIMING_PERFECT_RATIO = 0.4  // 0 ~ 0.4W
export const TIMING_GOOD_RATIO = 0.7     // 0.4W ~ 0.7W, OK는 0.7W ~ W
export const INPUT_BUFFER_SEC = 0.1      // 착지 전 버퍼 입력 → GOOD 격하

// ── 게임 오버 / 부활 (§4) ────────────────────────────
export const STALL_SPEED_RATIO = 0.05    // 이 이하면 정지 위험
export const STALL_DANGER_SEC = 1.0      // 경고 표시 시점
export const STALL_GAMEOVER_SEC = 2.0    // 게임 오버 시점

// ── 도약 (§6, §12) ───────────────────────────────────
export const GRAVITY = 980               // px/s²
export const MIN_LAUNCH_ANGLE = Math.PI / 12   // 15도 하한 (내리막 끝)
export const JUMP_PAD_ANGLE = Math.PI / 3      // 점프대 60도
export const GAP_SAFETY_MARGIN = 0.85          // isGapPlayable 마진

// ── 난이도 곡선 (§8) ─────────────────────────────────
// 이동 거리(m) 구간별 타이밍 윈도우(초) + 스프링 빈도(0~1)
export const DISTANCE_TIERS = [
  { maxM: 300,      window: 0.50, springFreq: 0.6 },
  { maxM: 800,      window: 0.35, springFreq: 0.35 },
  { maxM: 1500,     window: 0.25, springFreq: 0.15 },
  { maxM: Infinity, window: 0.15, springFreq: 0.0 },
]
// 높이(m) 구간별 섬 길이/갭 너비(px) 범위
export const HEIGHT_TIERS = [
  { maxM: 50,       island: [300, 500], gap: [80, 120]  },
  { maxM: 150,      island: [200, 350], gap: [120, 180] },
  { maxM: 300,      island: [150, 280], gap: [150, 220] },
  { maxM: 500,      island: [100, 180], gap: [180, 300] },
  { maxM: Infinity, island: [80, 150],  gap: [200, 350] },
]
export const MILESTONES = [
  { m: 50, text: 'GOOD!' },
  { m: 150, text: 'GREAT!' },
  { m: 300, text: 'AMAZING!' },
  { m: 500, text: 'LEGENDARY!' },
]

// ── 점수 (§9) ────────────────────────────────────────
export const SCORE = {
  perM_height: 100,
  perM_distance: 10,
  timing: { PERFECT: 500, GOOD: 200, OK: 0, MISS: 0 },
  comboPerLevel: 300,
}

// ── 카메라 (§11) ─────────────────────────────────────
export const CAMERA_LERP = 0.12
export const CAMERA_TRAUMA_MAX = 0.8
export const CAMERA_TRAUMA_DECAY = 0.05  // /프레임 기반이던 것 → 사용처에서 /초로 환산
export const VIEW_HEIGHT_PX = 800        // ortho 세로 가시 영역 (px). 가로는 종횡비로 산출

// ── 입력 (§5) ────────────────────────────────────────
export const DRAG_MIN_PX = 20            // 오발사 방지 threshold
export const MAX_DRAG_PX = 200           // 발사력 1.0 도달 드래그 길이

// ── 타격감 (§10) ─────────────────────────────────────
export const SLOWMO_SCALE = 0.3
export const SLOWMO_SEC = 0.08
export const SLOWMO_COOLDOWN = 0.3
export const TRAUMA_BY_MATERIAL = { wood: 0.2, stone: 0.3, brick: 0.4, metal: 0.5, glass: 0.25 }

// ── 성능 (§12) ───────────────────────────────────────
export const PARTICLE_POOL_SIZE = 300
export const LOW_FPS_THRESHOLD = 40
export const CHAIN_BREAK_MAX = 3
