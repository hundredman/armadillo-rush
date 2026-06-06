/**
 * 게임 상태 머신 (§4 게임 흐름).
 * 단계: TITLE → AIMING → FLYING → ROLLING ⇄ FALLING → GAMEOVER
 */

export const State = Object.freeze({
  TITLE: 'TITLE',       // 타이틀 화면, 베스트 표시
  AIMING: 'AIMING',     // 대포 드래그 조준
  FLYING: 'FLYING',     // 발사 후 첫 섬까지 포물선 비행
  ROLLING: 'ROLLING',   // 섬 위 구름 (타이밍 판정 발생)
  FALLING: 'FALLING',   // 갭 추락 중 (아래 섬 탐색)
  GAMEOVER: 'GAMEOVER', // 게임 오버, 결과 표시
})

// 허용되는 전환만 명시 — 잘못된 전환은 개발 중 즉시 잡는다.
const TRANSITIONS = {
  [State.TITLE]: [State.AIMING],
  [State.AIMING]: [State.FLYING],
  [State.FLYING]: [State.ROLLING, State.AIMING],   // 첫 섬 도달 실패 시 재발사(§4)
  [State.ROLLING]: [State.FALLING, State.GAMEOVER],
  [State.FALLING]: [State.ROLLING, State.GAMEOVER],
  [State.GAMEOVER]: [State.AIMING, State.TITLE],
}

export class StateMachine {
  constructor(initial = State.TITLE) {
    this.current = initial
    this.listeners = []   // (from, to) => void
  }

  onChange(fn) {
    this.listeners.push(fn)
  }

  canTransition(to) {
    return TRANSITIONS[this.current]?.includes(to) ?? false
  }

  transition(to) {
    if (!this.canTransition(to)) {
      console.warn(`[state] 잘못된 전환: ${this.current} → ${to}`)
      return false
    }
    const from = this.current
    this.current = to
    for (const fn of this.listeners) fn(from, to)
    return true
  }

  is(state) {
    return this.current === state
  }
}
