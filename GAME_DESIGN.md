# Armadillo Rush — Game Design Document

Last updated: 2026-06-09 (terrain expansion + item system)

## Core Pitch

Armadillo Rush is a 2D arcade physics game about launching a curled armadillo from a slingshot, rolling across floating terrain, and climbing from the sea to the moon.

The core skill is hold-and-release timing: hold input to accelerate on terrain, release to jump. In the air, holding input spins the armadillo. Spin momentum carries into the next landing and becomes ground speed.

## Player Loop

1. Enter a nickname (persisted for leaderboard).
2. Drag the slingshot pouch from the title screen.
3. Release the pouch to launch.
4. Fly and land on terrain.
5. Hold Space / tap → accelerate while rolling.
6. Release → jump. Spin energy converts to jump force.
7. In the air, hold to spin continuously.
8. Land on the next island; momentum carries forward.
9. Fall into the sea → lose one life (3 total); respawn ahead.
10. Reach moon altitude → run clear; score saved.

## Input State Machine

Input has exactly two states: **held** and **released**.

### Hold begins (pointerdown / Space keydown)

| Game state | Effect |
| --- | --- |
| TITLE / GAMEOVER | Enter SLINGING mode |
| SLINGING | Begin sling drag |
| ROLLING | `boostHeld = true` — acceleration begins immediately |
| FLYING / FALLING | `boostHeld = true` — spin begins |

### While held

| Game state | Effect |
| --- | --- |
| ROLLING | `speedRatio += (BOOST_ACCEL_PER_SEC - ROLLING_FRICTION_PER_SEC) × dt` |
| FLYING / FALLING | Armadillo spins clockwise; spin rate tracks velocity magnitude |

The armadillo never accelerates when `boostHeld` is false. No passive slope effects.

### Hold ends (pointerup / Space keyup)

| Game state | Effect |
| --- | --- |
| ROLLING | `boostHeld = false`, `_launchFromIsland` fires — **jump** |
| ROLLING near right edge | Edge bonus applies — extra upward kick and speed boost |
| FLYING / FALLING | `boostHeld = false`, spin decays, **no air jump** |
| FALLING (within 120ms grace) | `_launchFromFallingEdge` fires — edge-fall bonus jump |
| SLINGING | Fires launch if sling pull is sufficient |

Releasing input while airborne (past the 120ms grace window) never triggers a jump.

### Hold cancelled (pointercancel / blur / visibilitychange)

All hold state clears immediately. No jump fires.

### Landing while held

If `boostHeld` is true at the moment of landing, acceleration starts immediately. The game reads `pointerIsDown` and `spaceIsDown` directly at landing time to reconstruct `boostHeld` atomically — this avoids race conditions from event ordering.

## Speed System

Speed is tracked as `speedRatio` ∈ [0, 1.8].

- **Hold on terrain**: `speedRatio += BOOST_ACCEL_PER_SEC × dt - ROLLING_FRICTION_PER_SEC × dt`
- **No input on terrain**: `speedRatio -= ROLLING_FRICTION_PER_SEC × dt` (decelerates to zero)
- **Jump release**: `speedRatio += BOOST_RELEASE_SPEED_KICK`; launch gets `BOOST_RELEASE_VERTICAL_KICK` added to vy
- **Landing speed**: derived from max(horizontal speed, spinAngleVel × armadilloRadius × 0.75)
- **Terrain destruction hit**: `speedRatio += 0.25` per hit (capped at BOOST_SPEED_LIMIT)

Actual velocity = `speedRatio × MAX_SPEED` in the rolling direction.

## Spin System

Spin is stored in `spinAngleVel` (rad/s, positive = clockwise). It persists across all state transitions.

**In the air (held):**
```
targetSpin = max(18, velocity.length / armadilloRadius)
spinAngleVel = lerp(spinAngleVel, targetSpin, min(1, dt × 8))
```

**In the air (not held):**
```
spinAngleVel *= pow(0.18, dt)   // fast decay
```

**On ground:**
```
contactSpin = speedRatio × MAX_SPEED / armadilloRadius
spinTarget  = boostHeld ? max(contactSpin, 10 + speedRatio × 18) : contactSpin
spinAngleVel = lerp(spinAngleVel, spinTarget, min(1, dt × 14))
```

**At landing:**
```
speedFromH    = horizontalSpeed / MAX_SPEED
speedFromSpin = spinAngleVel × armadilloRadius / MAX_SPEED
landedSpeedRatio = min(BOOST_SPEED_LIMIT, max(speedFromH, speedFromSpin × 0.75))
spinAngleVel = landedSpeedRatio × MAX_SPEED / armadilloRadius
```

## Jump System

### Normal island release (`_launchFromIsland`)

1. `_getExitLaunchAngle(island)` — reads slope at current x, clamps result to [40°, 58°].
2. `launchSpeed = min(LAUNCH_SPEED, horizontalSpeed / max(cos(angle), 0.35))`
3. `vy = sin(angle) × launchSpeed + BOOST_RELEASE_VERTICAL_KICK`
4. `speedRatio += BOOST_RELEASE_SPEED_KICK`

### Edge-fall grace jump (`_launchFromFallingEdge`)

Fires within 120ms of falling off the right edge:
- Fixed 40° launch angle.
- Same vertical kick and speed bonus as normal release.

## Item System

Three collectible item types float above terrain on a gentle bob animation. Items are placed in `src/game/items.js` via `ITEM_SPAWN_TABLE` (static layout entries) and `getProceduralItemSpec` (procedural islands).

| Item | Visual | Effect | Duration |
| --- | --- | --- | --- |
| Rocket 🚀 | Orange rocket tilted 45° | Immediately launches armadillo at 45° upward-forward at 940 px/s for 2.2s | 2.2s thrust |
| Spring ↑ | Cyan arrow with coil base | +420 px/s vy on next jump + +0.30 speedRatio immediately (consumed on jump) | 8s window |
| Heart ♥ | Red heart | +1 life (max 3) | instant |

### Collection

`checkItemCollection` compares armadillo center against each uncollected item center with a 38 px radius. Collection is active during FLYING, FALLING, and ROLLING states only.

### Effect application

**Rocket**: Fires immediately on collect. If ROLLING, forces a transition to FLYING first. `activeRocket.timeLeft` is ticked inside `_updateFlight`; while active, Planck physics is bypassed entirely each frame — the armadillo moves at `(ROCKET_VX, ROCKET_VY)` = ~(665, 665) px/s (gravity ignored). Small orange flame particles emit along the path. When thrust ends, `speedRatio += 0.35` and normal physics resumes. HUD shows an orange bar.

**Spring**: `activeSpring` is stored with `timeLeft = 8s`; `speedRatio += SPRING_SPEED_BONUS` (0.30) on collect. On the next jump (`_launchFromIsland`, `_launchFromFallingEdge`, or `_launchFromHillCrest`), `SPRING_VY_BONUS` (420 px/s) is added to vy and `activeSpring` is cleared immediately. HUD shows a cyan bar.

**Heart**: `this.lives = Math.min(3, this.lives + 1)`. No timer.

### Placement philosophy

- Rockets near wide gaps and dangerous sections — immediate recovery tool.
- Springs near hill crests and right edges — enhance the next jump, reward risky positions.
- Hearts are rare (3 in static layout), placed after hard sections as milestones.

### HUD indicators

A small overlay left of the lives row shows active booster / jump bars with icon and remaining-duration fill. Bars update every frame via inline style.

## Terrain Layout

### Static layout (src/game/terrain.js `DEFAULT_ISLAND_LAYOUT`)

105 hand-authored islands across 10 sections, from x≈240 to x≈42540:

| Section | Islands | Theme |
| --- | --- | --- |
| 1 – Learning zone | 0–7 | Gentle shapes, soft-break soil, teaches mechanics |
| 2 – Building momentum | 8–15 | Wider islands, more hills, softBreak enabled |
| 3 – Speed zone | 16–23 | Tighter gaps, rewards fast runs |
| 4 – Mid climb | 24–31 | Increasing height, more crests to ride |
| 5 – Pre-cloud | 32–39 | Destructible terrain, big hills, softBreak |
| 6 – Cloud entry | 40–47 | Wider platforms, valley chains |
| 7 – High cloud | 48–64 | Big gaps, large hills, long runs |
| 8 – Upper cloud | 65–76 | Broader platforms, gentler gaps for recovery |
| 9 – Cloud–space transition | 77–92 | Tall steps, very wide platforms |
| 10 – Deep space approach | 93–104 | Meteor-style, reduced gravity zone |

Procedural generation continues from island 105 onward using `generateNextIslandSpec`.

### Shape variety

Each section intentionally mixes all four shapes (hill, valley, slope, bowl) with no two identical consecutive shapes. `softBreak` islands are concentrated in sections 1–2 and 5 to give beginners and mid-game players extra terrain to work with.

## Terrain System

Islands are procedurally generated with four shape types:

| Shape | Profile |
| --- | --- |
| hill | low entry → valley → crest → low exit |
| valley | high entry → deep drop → high exit |
| slope | low left → steady ascending ramp |
| bowl | symmetric U (high rims, low center) |

### Top-surface collision

Only the top surface of terrain counts as valid ground. The right edge boundary (`bounds.right`) is enforced in both `_findGroundedIsland` and `_findLandingIsland` — x positions past the right edge are rejected, preventing wall-riding on vertical side faces.

### Bounds structure

```js
bounds: {
  left:     number,  // leftmost x of terrain chain
  right:    number,  // rightmost x
  top:      number,  // highest y point
  bottom:   number,  // lowest y point
  rampLeft: number,  // x where the ramp entry ends
}
```

## Terrain Destruction

Destruction is fully self-contained in `_tryDestroyTerrain`. When it fires, Planck physics is skipped entirely for that frame — no bounce-back is possible.

### Trigger

- Entry speed ≥ `UNDER_BREAK_SPEED × 0.55` (~176 px/s).
- Ball trajectory (swept from prevPos to nextPos) intersects un-damaged terrain top surface.
- Ball is not moving nearly-straight-down at low speed (prevents destruction from normal landing descent).

### Execution

1. Sweep trajectory in steps; collect all hit (island, x) pairs.
2. For each hit: compute damage profile from speed; call `damageTerrain(island, x, radius, depth)`.
3. Rebuild Planck fixtures for touched islands.
4. Advance armadillo to exit position (above the newly damaged zone).
5. Exit speed ≥ entry speed (slight boost: `max(speed, speed × 1.05 + 60)`).
6. `speedRatio += 0.25` (capped at `BOOST_SPEED_LIMIT`).
7. Dirt particles at each impact point.

### Damage profiles

| Speed range | Profile |
| --- | --- |
| < UNDER_BREAK_SPEED (soft break) | Small radius, shallow depth |
| UNDER_BREAK_SPEED → DAMAGE_SPEED_FULL | Interpolated |
| ≥ DAMAGE_SPEED_FULL (700 px/s) | Full radius and depth |

## Biomes

| Biome | Altitude | Terrain | Special |
| --- | --- | --- | --- |
| Earth | Low | Rounded dirt/grass | Destructible soft soil |
| Cloud | Mid | Fluffy white | Speed bonus on landing |
| Meteor | High | Rocky | Reduced gravity |

## Sea And Lives

The player has 3 lives shown as pixel hearts.

When the armadillo hits the sea:
1. Splash particles and ripples trigger.
2. One life is lost.
3. If lives remain → respawn slightly left of the nearest forward island with a forward speed bonus.
4. If all lives are gone → result modal appears.

## Scoreboard

### Score calculation

Accumulated through the run:
- Height bonus: scored continuously above sea level.
- Distance bonus: scored per pixel traveled right.
- Event bonuses: EDGE jump, MOON clear.

### Local storage

`submitScore` saves entries to `localStorage` key `armadillo-rush-scores` (max 100 entries, trimmed by score descending). Entries are ranked on read, not on write.

### Player name

Stored under `armadillo-rush-player-name`. Prompted on first launch; pre-filled on subsequent runs. Max 16 characters.

### Backend extension point

`_syncRemote(entry)` in `src/game/scoreboard.js` is the only change needed to add online sync:

```js
async function _syncRemote(entry) {
  return fetch('/api/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  }).then(r => r.json())
}
```

`submitScore` and `fetchLeaderboard` are already async — no callers need updating.

## Physics Parameters

| Constant | Value | Role |
| --- | --- | --- |
| MAX_SPEED | 1100 px/s | Rolling velocity ceiling |
| BOOST_ACCEL_PER_SEC | 1.2 (ratio/s) | Hold acceleration rate |
| BOOST_SPEED_LIMIT | 1.8 | speedRatio ceiling |
| BOOST_RELEASE_SPEED_KICK | 0.35 | Jump speed bonus |
| BOOST_RELEASE_VERTICAL_KICK | 920 px/s | Extra vy on jump |
| ROLLING_FRICTION_PER_SEC | 0.18 (ratio/s) | Deceleration without hold |
| EXIT_LAUNCH_MIN_ANGLE | 40° | Jump angle floor |
| EXIT_LAUNCH_MAX_ANGLE | 58° | Jump angle ceiling |
| UNDER_BREAK_SPEED | 320 px/s | Soft-break threshold |
| DAMAGE_SPEED_FULL | 700 px/s | Full-damage threshold |

## Rendering

- Three.js `WebGLRenderer` with `OrthographicCamera`.
- Fixed-timestep accumulator game loop (1/60 s) with position interpolation.
- Procedural sky shader (sea blue → cloud white → space black).
- Bloom, chromatic aberration, vignette via `postprocessing`.
- Instanced particles (dirt, burst, flame, rating text, splash).

## Implementation Map

```text
src/main.js
  Game state machine, input (_beginHold / _endHold / _cancelHold),
  slingshot drag, armadillo physics, rolling, flight, terrain destruction
  (_tryDestroyTerrain), sea bounce, camera follow, HUD (_renderHud),
  scoreboard wiring (_submitRunScore, _openLeaderboard, _confirmName)

src/game/terrain.js
  Shape generation (hill/valley/slope/bowl), biome config,
  damage system (damageTerrain, isTerrainDamagedAt, getTerrainTopY)

src/game/physics.js
  Planck.js world, ChainShape terrain fixtures, bullet CCD,
  gravity scaling by altitude

src/game/particles.js
  Instanced geometry particle system (dirt, burst, flame, splash, rating)

src/game/items.js
  Item types (rocket/spring/heart), ITEM_SPAWN_TABLE, mesh builders,
  createItem, updateItems, checkItemCollection, markCollected,
  getProceduralItemSpec

src/game/scoreboard.js
  Local-first leaderboard, submitScore, fetchLeaderboard,
  getSavedPlayerName / savePlayerName, backend stub

src/renderer/
  WebGL scene, sky/background, post effects

src/ui.css
  HUD, title screen, game-over modal, pause menu, boost button,
  pixel heart lives, leaderboard overlay, name-prompt overlay,
  item effect bars (booster gold / jump cyan)
```

## Current Status

Implemented:
- Drag-only slingshot launch with trajectory preview
- Wooden arcade slingshot visual (Y-shape, knots, rubber bands)
- Curled armadillo with spin identity
- Procedural terrain (hill/valley/slope/bowl) with biomes
- 105-island hand-authored static layout + unlimited procedural continuation
- Terrain destruction (continuous, bounce-back-free, Planck-bypassing)
- Sea splash failure with 3-life bounce system
- Item system: Rocket 🚀, Spring ↑, Heart ♥ — collectible pickups with immediate and timed effects
- Cloud speed bonus and meteor reduced gravity
- Bottom-center BOOST button with Space feedback
- Moon-clear state
- `spinAngleVel` unified spin system — persists across all transitions
- Edge-fall grace jump (120ms window after falling off right edge)
- Hill-crest launch bonus — hill peaks act like an edge jump
- Jump angle clamped to 40–58° range
- Top-surface-only collision — right wall no longer walkable
- Atomic boostHeld reconstruction at landing — smooth hold-through-landing
- Local-first leaderboard with player name input
- GitHub-ready project structure with clean docs
