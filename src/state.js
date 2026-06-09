/**
 * Game state machine.
 * Flow: TITLE → SLINGING → FLYING → ROLLING ⇄ FALLING → GAMEOVER
 */

export const State = Object.freeze({
  TITLE: 'TITLE',         // title screen, best record display
  SLINGING: 'SLINGING',  // sling drag — aim angle and power simultaneously
  FLYING: 'FLYING',       // parabolic flight after launch
  ROLLING: 'ROLLING',     // rolling on an island (boost timing)
  FALLING: 'FALLING',     // falling through a gap
  GAMEOVER: 'GAMEOVER',   // game over, result display
})

// Only allowed transitions are listed — invalid transitions warn immediately in dev.
const TRANSITIONS = {
  [State.TITLE]:    [State.SLINGING],
  [State.SLINGING]: [State.FLYING, State.TITLE],
  [State.FLYING]:   [State.ROLLING, State.SLINGING, State.GAMEOVER],
  [State.ROLLING]:  [State.FALLING, State.GAMEOVER],
  [State.FALLING]:  [State.ROLLING, State.GAMEOVER],
  [State.GAMEOVER]: [State.SLINGING, State.TITLE],
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
      console.warn(`[state] invalid transition: ${this.current} → ${to}`)
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
