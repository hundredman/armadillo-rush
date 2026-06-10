# Armadillo Rush — Game Design Document

Last updated: 2026-06-10

## Core Pitch

Armadillo Rush is a 2D arcade physics game about launching a curled armadillo from a slingshot, rolling across floating terrain, and climbing from the sea to the moon.

The core skill is hold-and-release timing: hold input to accelerate on terrain, release to jump. In the air, holding input spins the armadillo. Spin momentum carries into the next landing and becomes ground speed.

## Player Loop

1. Read the tutorial screen (default Korean); click **한국어 / English** toggle to switch language. Click **시작하기 / Start Game**.
2. Drag the slingshot pouch — a vertical power bar shows pull strength.
3. Release the pouch to launch.
4. Fly and land on terrain.
5. Hold Space → accelerate while rolling.
6. Release → jump. Spin energy converts to jump force.
7. In the air, hold to spin continuously.
8. Land on the next island; momentum carries forward.
9. Fall into the sea → lose one life (3 total); armadillo hovers frozen above respawn island. Press Space or click → drop straight down.
10. Reach moon altitude → run clear; score entry shown.
11. Enter nickname on the game-over screen to register score to the local leaderboard.

## Input State Machine

Input has exactly two states: **held** and **released**.

### Hold begins (pointerdown / Space keydown)

| Game state | Effect |
| --- | --- |
| TITLE | — (tutorial screen; click tutorial button to start) |
| GAMEOVER | — (handled by UI buttons) |
| SLINGING | Begin sling drag |
| ROLLING | `boostHeld = true` — acceleration begins immediately |
| FLYING / FALLING | `boostHeld = true` — spin begins; activates respawn if `_respawnWaiting` |

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

Clicks inside `#ui-overlay` (HUD, buttons, tutorial card, game-over card) never reach the gameplay input system. Pointer events are blocked by a `closest('#ui-overlay')` guard in the `pointerdown` handler.

On transition from the tutorial screen to gameplay (`start-game` action), all input state is hard-reset: `pointerIsDown`, `spaceIsDown`, `boostHeld`, `slingDragging`. `_pendingPointerClear` is set to `true` so the `pointerup` event from clicking the start button is consumed before gameplay begins. `_slingBlockUntil` is set to `performance.now() + 300` — sling drag is ignored for the first 300 ms after game start, preventing a double-click on the start button from immediately triggering a sling drag.

The game-over name input is rendered in the HUD; `_renderHud()` is skipped while the `<input>` element is focused — this keeps the DOM stable so the player can type without focus being stolen.

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
| Rocket | Orange pixel-art rocket tilted 25° | Immediately launches at 25° upward-forward at 860 px/s for 2.0 s | 2.0 s thrust |
| Boost | Yellow pixel-art lightning bolt | +0.28 speedRatio on collect; passive +0.22 speedRatio/s while rolling; +320 px/s vy per jump (not consumed — repeats for full duration) | 10 s window |
| Heart | Red pixel-art heart | +1 life (max 3) | instant |

### Collection

`checkItemCollection` compares armadillo center against each uncollected item with a 38 px radius. Active during FLYING, FALLING, and ROLLING only.

### Item icons

All icons are pixel-art meshes built from rectangular blocks (`pixRect` helper, `ShapeGeometry`) with 1 pixel = P world units (P=3 for Rocket/Boost, P=2 for Heart). Each icon has a semi-transparent ring glow behind it and a gentle bob/pulse animation.

### Item positions

Items float 24–42 px above terrain top (`offsetY` in `ITEM_SPAWN_TABLE`). Procedural items: Heart 34 px, Boost 28 px, Rocket 26 px above terrain.

### Rocket effect

Fires immediately on collect. If ROLLING, transitions to FALLING first. While active, Planck physics is bypassed every frame — the armadillo moves at constant (ROCKET_VX, ROCKET_VY) ≈ (779, 364) px/s at 25°; gravity is ignored. Orange flame particles trail behind. On expiry, `speedRatio += 0.35` and normal physics resumes.

### Boost effect

`speedRatio += BOOST_SPEED_BONUS` (0.28) immediately on collect. While `activeBoost` is live and the armadillo is ROLLING, `speedRatio += BOOST_PASSIVE_SPEED × dt` (0.22/s) passively each frame. On every jump (`_launchFromIsland`, `_launchFromFallingEdge`, `_launchFromHillCrest`), `BOOST_VY_BONUS` (320 px/s) is added to vy — the effect is **not consumed**; it repeats on every jump until the 10 s timer expires.

### HUD indicators

Active Rocket and Boost bars appear in a standalone `.item-effects-panel` fixed div (`top: 220px; left: 16px`), separate from the stats panel. Each bar shows a type-colored icon (18 px), a label, and a horizontal duration gauge (10 px tall) with a type-specific gradient fill. The panel is hidden when no effects are active.

### Placement philosophy

- Rockets near wide gaps and dangerous sections — immediate escape.
- Boosts near hill crests and right edges — enhance speed and multiple jumps.
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

Only the top surface counts as valid ground. Right-edge boundary (`bounds.right`) is enforced in both `_findGroundedIsland` and `_findLandingIsland` — past the right edge is rejected, preventing wall-riding on vertical side faces. When the armadillo crosses the right edge it is displaced outward with an upward velocity kick and `clearContacts()` is called to flush stale Planck contact events.

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
3. Lives remain → find the nearest forward island with enough undamaged surface; place armadillo 40 px above it with zero velocity; set `_respawnWaiting = true`. The armadillo is held frozen in place (physics zeroed each frame) and a **부활 준비 완료!** hint overlays the screen.
4. Player presses Space or clicks → `_activateRespawn()` fires: clears `_respawnWaiting`, zeros velocity on both the JS side and Planck body, calls `clearContacts()`, sets `_spawnGraceTimer = 3`. Gravity then pulls the armadillo straight down onto the island.
5. All lives gone → result modal.

## Nickname System

- Stored in `localStorage` under `armadillo-rush-player-name`.
- Entered on the game-over screen when registering a score; the last used name is pre-filled.
- Max 16 characters. Empty or whitespace-only is stored as "Anonymous".
- Not required to play — nickname entry is optional at the end of each run.

## Scoreboard

### Score calculation

Accumulated through the run:
- Height bonus: scored continuously above sea level.
- Distance bonus: scored per pixel traveled right.
- Event bonuses: EDGE jump, MOON clear.

### Local storage

`submitScore` saves entries to `localStorage` key `armadillo-rush-scores` (max 100 entries, trimmed by score descending). All leaderboard data is local to the browser — no network requests.

## UI Layout

### Tutorial screen (TITLE state)

Full-screen overlay with a centered card shown before the first run. Contains:
- Game title: **ARMADILLO RUSH**
- Language toggle buttons: **한국어** / **English** (pill buttons; active language highlighted in gold). Defaults to Korean. Clicking either button re-renders the card in that language only.
- Three sections: 목표/Objective, 조작법/Controls, 팁/Tips (shown in the selected language only — not bilingual simultaneously)
- **시작하기** (Korean) or **Start Game** (English) button

### HUD panel (top-left)

Fixed position, semi-transparent dark background. Contains:
- Stats grid: STATE, SCORE, HEIGHT, DIST, TO MOON, SPEED, ANGLE, POWER

### Item effects panel (below HUD)

Separate `.item-effects-panel` div, fixed at `top: 220px; left: 16px`. Shows active Rocket and Boost effect bars (icon + label + horizontal gauge). Hidden when no effects are active. Not inside the stats panel.

### Lives (top-center)

Three pixel-art hearts. Filled = alive; empty = lost.

### Power gauge (left edge, during SLINGING)

Vertical pill bar (`22 × 168 px`), bottom-anchored, fills upward (orange → gold). **Shown only while actively dragging** (hidden before drag begins and after launch). Disappears immediately on release.

### Controls (top-right)

Pause / Restart buttons.

### SPACE button (bottom-center)

Wide spacebar-shaped key (200 × 56 px). Visible during active gameplay. Equivalent to holding Space. Shows yellow variant when ready to boost, depressed style when pressed.

### Respawn hint overlay

Centered pulsing overlay shown while `_respawnWaiting` is true: **부활 준비 완료! / Press Space or Click to drop**.

### Game-over card

Displays final score, distance, and height. Contains:
- Nickname input and **점수 등록 / Register** button to save score to the local leaderboard. After registering, the form is replaced by a **✓ 등록 완료 / Registered #N** indicator showing the achieved rank — duplicate registration is not possible.
- **리더보드 보기 / Leaderboard** button.
- **다시 시작 / Retry** button.

## Physics Parameters

| Constant | Value | Role |
| --- | --- | --- |
| MAX_SPEED | 1400 px/s | Rolling velocity ceiling |
| BOOST_ACCEL_PER_SEC | 1.7 (ratio/s) | Hold acceleration rate |
| BOOST_SPEED_LIMIT | 1.8 | speedRatio ceiling |
| BOOST_RELEASE_SPEED_KICK | 0.28 | Jump speed bonus |
| BOOST_RELEASE_VERTICAL_KICK | 820 px/s | Extra vy on jump |
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
  sea bounce + respawn (_doSeaBounce, _activateRespawn, _respawnWaiting),
  right-edge escape (_fallOff with fromRightEdge flag),
  camera follow, HUD (_renderHud — tutorial / game / game-over screens),
  scoreboard wiring (_saveScoreWithName), item collection + effects

src/game/terrain.js
  Shape generation (hill/valley/slope/bowl), biome config,
  105-island static layout, procedural continuation,
  damage system (damageTerrain, isTerrainDamagedAt, getTerrainTopY)

src/game/physics.js
  Planck.js world, ChainShape terrain fixtures, bullet CCD,
  gravity scaling by altitude, flushContacts() (sleep/wake trick),
  clearContacts(), setArmadilloPos(), setArmadilloVelocity()

src/game/particles.js
  Instanced geometry particle system (dirt, burst, flame, splash, ripple, rating)

src/game/items.js
  Item types (rocket/boost/heart), ITEM_SPAWN_TABLE, pixel-art mesh builders
  (pixRect helper, ShapeGeometry blocks, P=3 for rocket/boost, P=2 for heart),
  createItem, updateItems, checkItemCollection, markCollected,
  getProceduralItemSpec

src/game/scoreboard.js
  Local leaderboard (localStorage), submitScore, fetchLeaderboard,
  getSavedPlayerName / savePlayerName

src/renderer/
  WebGL scene, sky/background, post effects

src/ui.css
  HUD panel, tutorial screen (single-language with KO/EN toggle buttons),
  game-over modal + score register + 완료 indicator,
  pause menu, spacebar SPACE button, pixel heart lives, leaderboard overlay,
  respawn hint overlay, item effects panel (standalone fixed div, separate from HUD),
  vertical power gauge (22 × 168 px, shown only during active drag)
```

## Current Status

Implemented:
- Drag-only slingshot launch with vertical power gauge
- Wooden arcade slingshot visual (Y-shape, knots, rubber bands)
- Curled armadillo with spin identity
- Procedural terrain (hill/valley/slope/bowl) with biomes
- 105-island hand-authored static layout + unlimited procedural continuation
- Terrain destruction: momentum-preserving, push-out-free (2-frame Planck bypass grace window, flushContacts)
- Sea splash failure with 3-life bounce system + hover-wait respawn (straight-down drop on Space/Click)
- Right-edge escape: upward kick + clearContacts prevents wall-sliding
- Item system: Rocket, Boost, Heart — pixel-art collectible pickups with immediate and timed effects
  - Rocket: 25°, 860 px/s, 2.0 s thrust
  - Boost: 10 s passive speed gain (+0.22/s rolling), repeating jump bonus (+320 vy), not consumed on jump
  - Item icons redesigned as pixel-art meshes (rectangular block segments)
  - Item positions lowered ~20 px (offsetY 24–42 px above terrain)
- Cloud speed bonus and meteor reduced gravity
- Open-air fall acceleration (cloud/space layers, terrain-aware suppression)
- Tutorial screen: Korean by default, KO/EN toggle button, single language displayed at a time
- Bottom-center spacebar SPACE button
- Post-game nickname entry and local-only leaderboard; 완료 indicator after score registration (no duplicate)
- Moon-clear state
- Unified spin system — persists across all transitions
- Edge-fall grace jump (120 ms window after falling off right edge)
- Hill-crest launch bonus
- Jump angle clamped to 40–58°
- Top-surface-only collision
- Atomic boostHeld reconstruction at landing
- Input isolation: UI clicks never bleed into gameplay; start-game button consumes its own pointerup; 300 ms `_slingBlockUntil` dead zone prevents double-click from triggering sling drag
- Item effects panel: standalone fixed div below stats, 10 px horizontal gauge bars, 18 px icons
- Power gauge: 22 × 168 px, shown only while actively dragging sling
- Terrain left-entry ramp: grass mesh extended over ramp area for continuous visual (rampLeft = left − 60)
- GitHub Pages deployment at https://hundredman.github.io/armadillo-rush/
