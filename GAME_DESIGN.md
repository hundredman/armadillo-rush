# Armadillo Rush — Game Design Document

Last updated: 2026-06-09

## Core Pitch

Armadillo Rush is a 2D arcade physics game about launching a curled armadillo from a slingshot, rolling across floating terrain, and climbing from the sea to the moon.

The core skill is hold-and-release timing: hold input to accelerate on terrain, release to jump. In the air, holding input spins the armadillo. Spin momentum carries into the next landing and becomes ground speed.

## Player Loop

1. Enter a nickname (persisted for leaderboard).
2. Drag the slingshot pouch — a vertical power bar shows pull strength.
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
| FALLING (within 120 ms grace) | `_launchFromFallingEdge` fires — edge-fall bonus jump |
| SLINGING | Fires launch if sling pull ≥ minimum |

Releasing input while airborne (past the 120 ms grace window) never triggers a jump.

### Hold cancelled (pointercancel / blur / visibilitychange)

All hold state clears immediately. No jump fires.

### Landing while held

If `boostHeld` is true at the moment of landing, acceleration starts immediately. The game reads `pointerIsDown` and `spaceIsDown` directly at landing time to reconstruct `boostHeld` atomically — this avoids race conditions from event ordering.

## Input Isolation

Clicks and taps inside `#ui-overlay` (HUD, buttons, name prompt) never reach the gameplay input system. Pointer events are blocked by a `closest('#ui-overlay')` guard in the `pointerdown` handler.

On transition from title/menu to gameplay, all input state is hard-reset: `pointerIsDown`, `spaceIsDown`, `boostHeld`, `slingDragging`, `_pendingPointerClear`, `_namePromptJustClosed`.

The name prompt HTML is rendered once when the prompt opens and not re-rendered while it is open — this keeps the `<input>` element stable so the player can type without focus being stolen.

## Speed System

Speed is tracked as `speedRatio` ∈ [0, 1.8].

- **Hold on terrain**: `speedRatio += BOOST_ACCEL_PER_SEC × dt - ROLLING_FRICTION_PER_SEC × dt`
- **No input on terrain**: `speedRatio -= ROLLING_FRICTION_PER_SEC × dt` (decelerates to zero)
- **Jump release**: `speedRatio += BOOST_RELEASE_SPEED_KICK`; launch gets `BOOST_RELEASE_VERTICAL_KICK` added to vy
- **Landing speed**: derived from max(horizontal speed, spinAngleVel × armadilloRadius × 0.75)
- **Terrain destruction**: `speedRatio += 0.15` per hit (capped at BOOST_SPEED_LIMIT)

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

Fires within 120 ms of falling off the right edge:
- Fixed 40° launch angle.
- Same vertical kick and speed bonus as normal release.

### Slingshot launch

- Player drags the pouch; pull distance determines power (clamped to [SLING_POWER_MIN, SLING_POWER_MAX]).
- Drag angle sets launch direction.
- A vertical power bar (left side of screen, bottom-anchored) shows pull percentage as it fills from bottom to top.
- On release, the armadillo is launched via Planck velocity; a path-clearing `_carveLaunchPath` pre-damages any terrain directly in the launch path.

## Item System

Three collectible item types float above terrain on a gentle bob animation. Items are placed via `ITEM_SPAWN_TABLE` (static layout, 29 entries) and `getProceduralItemSpec` (procedural islands 65+).

| Item | Visual | Effect | Duration |
| --- | --- | --- | --- |
| Rocket | Orange rocket tilted 45° | Immediately launches at 45° upward-forward at 940 px/s for 2.2 s | 2.2 s thrust |
| Spring | Cyan arrow with coil base | +0.30 speedRatio on collect; +420 px/s vy on next jump (consumed) | 8 s window |
| Heart | Red heart | +1 life (max 3) | instant |

### Collection

`checkItemCollection` compares armadillo center against each uncollected item with a 38 px radius. Active during FLYING, FALLING, and ROLLING only.

### Rocket effect

Fires immediately on collect. If ROLLING, transitions to FALLING first. While active, Planck physics is bypassed every frame — the armadillo moves at constant (ROCKET_VX, ROCKET_VY) ≈ (665, 665) px/s; gravity is ignored. Orange flame particles trail behind. On expiry, `speedRatio += 0.35` and normal physics resumes.

### Spring effect

`speedRatio += 0.30` on collect. On the next jump (`_launchFromIsland`, `_launchFromFallingEdge`, or `_launchFromHillCrest`), `SPRING_VY_BONUS` (420 px/s) is added to vy and `activeSpring` is cleared.

### HUD indicators

Active Rocket and Spring bars appear at the bottom of the stats panel, separated by a thin divider. Each bar has an icon and a duration-fill indicator that updates every frame. No separate fixed-position overlay — bars live inside the existing panel so nothing overlaps.

### Placement philosophy

- Rockets near wide gaps and dangerous sections — immediate escape.
- Springs near hill crests and right edges — reward risky positions.
- Hearts rare (3 in static layout) — milestone rewards after hard sections.

## Terrain Destruction

Destruction is fully self-contained in `_tryDestroyTerrain`. When it fires:

1. Sweep the predicted path in steps; collect all un-damaged hit (island, x) pairs.
2. Direction gate: skip steep downward impacts (|vy| > |vx| × 1.4) — those should land normally.
3. For each hit: compute damage profile from speed; call `damageTerrain(island, x, radius, depth)`.
4. Rebuild Planck fixtures for touched islands (`addTerrain`).
5. Advance armadillo to exit position above the newly damaged zone.
6. **Clamp exit vy to ≥ 0** — ball never exits pointing back into terrain.
7. `speedRatio += 0.15`; exit speed = `speed × 1.05 + 40`.
8. Call `flushContacts()` — puts ball body to sleep and wakes it to drop all Planck contact pairs.
9. Set `_spawnGraceTimer = 2` — for 2 frames the Planck step is skipped entirely; position is manually integrated under gravity. This makes push-out impossible even if a rebuilt fixture overlaps the ball.
10. Dirt particles and camera shake (no slowdown).

### No slowdown on destruction

`_triggerDestructionImpact` is used instead of `_triggerImpact` — it fires camera shake and particles but does **not** set `slowmoTime`, so the game never freezes on a terrain hit.

### Damage profiles

| Speed range | Profile |
| --- | --- |
| < UNDER_BREAK_SPEED (soft break) | Small radius, shallow depth |
| UNDER_BREAK_SPEED → DAMAGE_SPEED_FULL | Interpolated |
| ≥ DAMAGE_SPEED_FULL (700 px/s) | Full radius and depth |

## Open-Air Fall Acceleration

In the cloud and space layers, long open-air drops feel floatier than desired. A supplemental downward impulse is applied each flight frame when all guards pass:

1. `heightRatio ≥ 0.30` (cloud layer start)
2. `velocity.y < 0` (falling)
3. No undamaged terrain within 320 px directly below (`_terrainBelowWithin`)

Impulse magnitude = `baseGravity × FALL_ACCEL_MAX_MULT × ramp × altBlend`, where `ramp` grows from 0→1 over 400 px of fall distance from `flightPeakY`. Normal jumps are fully unaffected because the terrain probe fires and suppresses the effect during any approach.

## Terrain Layout

### Static layout (`src/game/terrain.js DEFAULT_ISLAND_LAYOUT`)

105 hand-authored islands from x≈240 to x≈42540:

| Section | Islands | Theme |
| --- | --- | --- |
| 1 – Learning zone | 0–7 | Gentle shapes, soft-break soil |
| 2 – Building momentum | 8–15 | Wider islands, more hills |
| 3 – Speed zone | 16–23 | Tighter gaps, rewards fast runs |
| 4 – Mid climb | 24–31 | Increasing height, more crests |
| 5 – Pre-cloud | 32–39 | Destructible terrain, big hills |
| 6 – Cloud entry | 40–47 | Wider platforms, valley chains |
| 7 – High cloud | 48–64 | Big gaps, large hills, long runs |
| 8 – Upper cloud | 65–76 | Broader platforms, gentler gaps |
| 9 – Cloud–space transition | 77–92 | Tall steps, very wide platforms |
| 10 – Deep space | 93–104 | Meteor-style, reduced gravity zone |

Procedural generation continues from island 105 onward using `generateNextIslandSpec`.

### Shape variety

Four shape types — hill, valley, slope, bowl — are mixed within each section. `softBreak` islands are concentrated in sections 1–2 and 5.

## Terrain System

### Shapes

| Shape | Profile |
| --- | --- |
| hill | low entry → valley → crest → low exit |
| valley | high entry → deep drop → high exit |
| slope | low left → steady ascending ramp |
| bowl | symmetric U (high rims, low center) |

### Top-surface collision

Only the top surface counts as valid ground. Right-edge boundary (`bounds.right`) is enforced in both `_findGroundedIsland` and `_findLandingIsland` — past the right edge is rejected, preventing wall-riding on vertical side faces.

### Biomes

| Biome | Altitude | Special |
| --- | --- | --- |
| Earth | Low | Destructible soft soil |
| Cloud | Mid | Speed bonus on landing |
| Meteor | High | Reduced gravity |

## Respawn System

When the armadillo hits the sea:
1. Splash particles and ripples.
2. One life lost.
3. Lives remain → find the nearest forward island with enough undamaged surface; spawn 40 px above it with a speed bonus; set `_spawnGraceTimer = 3` to prevent instant re-contact.
4. All lives gone → result modal.

## Nickname System

- Stored in `localStorage` under `armadillo-rush-player-name`.
- Displayed as `Nickname: [name]` on the title button, or `Nickname: Anonymous` if not set.
- Prompt shown on first launch; skipping stores empty string → displayed as Anonymous everywhere.
- Editable at any time via the title screen button.
- The name prompt HTML is rendered once; `_renderHud()` is skipped while the prompt is open to prevent the `<input>` from being torn down every frame.
- Escape closes the prompt and sets `_namePromptJustClosed` to consume the next pointerup.
- Max 16 characters.

## Scoreboard

### Score calculation

Accumulated through the run:
- Height bonus: scored continuously above sea level.
- Distance bonus: scored per pixel traveled right.
- Event bonuses: EDGE jump, MOON clear.

### Local storage

`submitScore` saves entries to `localStorage` key `armadillo-rush-scores` (max 100 entries, trimmed by score descending).

### Backend extension point

`_syncRemote(entry)` in `src/game/scoreboard.js`:

```js
async function _syncRemote(entry) {
  return fetch('/api/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  }).then(r => r.json())
}
```

## UI Layout

### HUD panel (top-left)

Fixed position, semi-transparent dark background. Contains:
- Stats grid: STATE, SCORE, HEIGHT, DIST, TO MOON, SPEED, ANGLE, POWER
- Item effect bars (Rocket / Spring) at the bottom of the panel, below a thin divider

### Lives (top-center)

Three pixel-art hearts. Filled = alive; empty = lost.

### Power gauge (left edge, during SLINGING)

Vertical pill bar (`12 × 130 px`), bottom-anchored, fills upward (orange → gold). Disappears when not slinging.

### Controls (top-right)

Pause / Restart buttons.

### BOOST button (bottom-center)

Visible during active gameplay. Equivalent to holding Space.

### Name prompt overlay

Full-screen overlay with a centered card. Contains a text input (pre-filled with current name), a Save button, and a "Play as Anonymous" skip button. Pointer events blocked on canvas while overlay is open.

## Physics Parameters

| Constant | Value | Role |
| --- | --- | --- |
| MAX_SPEED | 1400 px/s | Rolling velocity ceiling |
| BOOST_ACCEL_PER_SEC | 2.2 (ratio/s) | Hold acceleration rate |
| BOOST_SPEED_LIMIT | 1.8 | speedRatio ceiling |
| BOOST_RELEASE_SPEED_KICK | 0.50 | Jump speed bonus |
| BOOST_RELEASE_VERTICAL_KICK | 980 px/s | Extra vy on jump |
| ROLLING_FRICTION_PER_SEC | 0.28 (ratio/s) | Deceleration without hold |
| EXIT_LAUNCH_MIN_ANGLE | 40° | Jump angle floor |
| EXIT_LAUNCH_MAX_ANGLE | 58° | Jump angle ceiling |
| UNDER_BREAK_SPEED | 320 px/s | Standard break threshold |
| DAMAGE_SPEED_FULL | 700 px/s | Full-damage threshold |
| SPACE_GRAVITY_RATIO | 0.28 | Gravity fraction in space |
| FALL_ACCEL_MAX_MULT | 1.8× | Peak open-air fall accel multiplier |
| GRAVITY (config) | 980 px/s² | Base gravity |

## Rendering

- Three.js `WebGLRenderer` with `OrthographicCamera`.
- Fixed-timestep accumulator game loop (1/60 s) with position interpolation.
- Procedural sky shader (sea blue → cloud white → space black).
- Bloom, chromatic aberration, vignette via `postprocessing`.
- Instanced particles (dirt, burst, flame, rating text, splash, ripple).

## Implementation Map

```text
src/main.js
  Game state machine, input isolation, slingshot drag, armadillo physics,
  rolling, flight, open-air fall acceleration, terrain destruction
  (_tryDestroyTerrain, _breakTerrainAt, _carveLaunchPath),
  sea bounce + respawn, camera follow, HUD (_renderHud),
  scoreboard wiring, item collection + effects

src/game/terrain.js
  Shape generation (hill/valley/slope/bowl), biome config,
  105-island static layout, procedural continuation,
  damage system (damageTerrain, isTerrainDamagedAt, getTerrainTopY)

src/game/physics.js
  Planck.js world, ChainShape terrain fixtures, bullet CCD,
  gravity scaling by altitude, flushContacts() (sleep/wake trick)

src/game/particles.js
  Instanced geometry particle system (dirt, burst, flame, splash, ripple, rating)

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
  HUD panel, title screen, game-over modal, pause menu, boost button,
  pixel heart lives, leaderboard overlay, name-prompt overlay,
  item effect bars (in-panel), vertical power gauge
```

## Current Status

Implemented:
- Drag-only slingshot launch with vertical power gauge
- Wooden arcade slingshot visual (Y-shape, knots, rubber bands)
- Curled armadillo with spin identity
- Procedural terrain (hill/valley/slope/bowl) with biomes
- 105-island hand-authored static layout + unlimited procedural continuation
- Terrain destruction: momentum-preserving, push-out-free (2-frame Planck bypass grace window, flushContacts)
- Sea splash failure with 3-life bounce system + spawn-grace
- Item system: Rocket, Spring, Heart — collectible pickups with immediate and timed effects
- Cloud speed bonus and meteor reduced gravity
- Open-air fall acceleration (cloud/space layers, terrain-aware suppression)
- Bottom-center BOOST button with Space feedback
- Moon-clear state
- Unified spin system — persists across all transitions
- Edge-fall grace jump (120 ms window after falling off right edge)
- Hill-crest launch bonus
- Jump angle clamped to 40–58°
- Top-surface-only collision
- Atomic boostHeld reconstruction at landing
- Local-first leaderboard with nickname input
- Stable nickname prompt (no DOM teardown while typing)
- Input isolation: UI clicks never bleed into gameplay
- GitHub Pages deployment at https://hundredman.github.io/armadillo-rush/
