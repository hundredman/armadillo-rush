# Armadillo Rush

> Launch the armadillo from a slingshot. Hold to accelerate on terrain, release to jump. Spin in the air. Break through terrain. Climb from the sea to the moon.

**Play online:** https://hundredman.github.io/armadillo-rush/

---

## Overview

Armadillo Rush is a 2D arcade physics game built with Three.js and Planck.js.

The player launches a curled armadillo from a wooden slingshot, lands on floating terrain islands, and uses hold-and-release timing to build speed and jump between islands. The world climbs from bright sea and sky through cloud terrain into low-gravity space toward the moon.

It runs on the desktop (mouse + keyboard); nearly all visuals are generated in code rather than drawn as sprites.

## Graphics & Implementation Highlights

- **Physics-based movement** — Planck.js (bullet CCD) drives flight and landings; rolling uses a gravity-projected slope model so the armadillo coasts, stalls and rolls back naturally on inclines instead of being scripted forward.
- **Destructible terrain** — the armadillo smashes through soft soil; craters are carved into the live mesh, debris chunks are flung and tinted to the broken terrain's own soil/grass colors (brown earth, white cloud, grey meteor), and the Planck collision is rebuilt to match — including for the left-entry "ramp" auxiliary terrain.
- **Terrain-clipped contact shadow** — the shadow geometry is rebuilt each frame to ride the ground surface directly beneath the armadillo and is drawn only where it actually overlaps terrain, so it reads as a real dropped shadow rather than a floating disc.
- **Layered sky & parallax** — a procedural sky shader blends sea → cloud → space by altitude, with parallax scenery (sun, mountains, drifting clouds) and an animated foam sea; bloom, chromatic aberration and vignette are applied as post effects.
- **Pixel-art & themed UI** — item icons (rocket / boost / heart) are built from character grids with an automatic crisp outline and consistent shading, reused as inline SVG in the HUD; menus, the best-record badge and the on-screen SPACE key share a wooden/arcade theme matching the slingshot.
- **Instanced particle system** — dirt, bursts, rocket flame trails, sea splash and ripple rings run through a single instanced geometry pass.

## Gameplay

1. **Read the tutorial** — shown on the start screen in one language at a time (Korean by default). A **한국어 / English** pill toggle switches the whole card; click the **시작하기** (or **Start Game**) button to begin.
2. **Drag the slingshot pouch** and release to launch. A vertical power bar on the left shows pull strength.
3. **Land on terrain** — the armadillo rolls freely.
4. **Hold** Space → accelerate while rolling.
5. **Release** → jump off the terrain with accumulated spin force.
6. **Hold** while airborne → continuous clockwise spin.
7. Release in the air → spin slows; no air-jump fires.
8. **Edge bonus**: releasing near the right edge of an island gives an extra upward kick.
9. **Hill crest bonus**: crossing the peak of a hill at speed fires a bonus launch upward.
10. **Collect items** floating above terrain to gain power-ups.
11. Fall into the sea → lose one life (3 total). After a sea bounce, the armadillo hovers frozen above the respawn island — press Space or click to drop straight down.
12. Reach moon altitude to clear the run.
13. **After the run** — enter a nickname to register your score on the leaderboard (max 16 characters).

## Items

Three collectible pickups float above terrain islands on a gentle bob animation:

| Item | Visual | Effect |
| --- | --- | --- |
| **Rocket** | Orange pixel-art rocket tilted 25° | Immediately launches armadillo upward-forward at 25° (~860 px/s) for 2.0 s; gravity ignored during thrust |
| **Boost** | Yellow pixel-art lightning bolt | +0.28 speedRatio on collect; +0.22/s passive while rolling; +320 px/s vertical kick on every jump (repeats, not consumed) for 10 s |
| **Heart** | Red pixel-art heart | Restore one life (max 3) |

Active Rocket and Boost effects show as color-coded bars in a standalone panel below the stats HUD.

## Input

Input has two states: **held** and **released**. Effect depends on game state:

| State | Hold begins | Hold ends (release) |
| --- | --- | --- |
| ROLLING | Accelerate | Jump |
| FLYING / FALLING | Continuous spin | Spin decays — no air jump |
| SLINGING | Sling drag | Launch (if pull ≥ minimum) |

Key rules:
- The armadillo never accelerates without held input — no passive slope effects.
- Releasing in the air never triggers a jump.
- If input is held through a landing, acceleration starts immediately on touchdown.
- Spin speed is preserved across air→ground transitions and converted to initial ground speed.

## Controls

| Action | Input |
| --- | --- |
| All actions | Mouse click and drag |
| Hold / release | Space bar |
| Pause | Escape |
| On-screen SPACE button | Equivalent to Space bar hold |

## Terrain Destruction

The armadillo punches through soft terrain above a minimum speed threshold:

- Planck physics is bypassed entirely for the impact frame — no bounce-back.
- After destruction the armadillo coasts through a short grace window (5 frames, 7 for upward punch-throughs) of pure JS integration with the Planck step off, so no push-out impulse is possible; the cleared fixtures are rebuilt just before it ends.
- Debris particles burst from the impact point, tinted to the broken terrain's own soil/grass colors.
- Speed is preserved and receives a small forward bonus.
- Destruction is continuous: successive frames keep breaking until the ball exits. A simple top-down landing is **not** treated as a smash, and an island that ends up fully cratered is dropped entirely (no leftover collision).

Thresholds:
- Soft-break entry: ~176 px/s
- Standard break: ~320 px/s
- Full-force break: ~700 px/s

## Respawn

On sea contact:
1. Splash particles and ripples trigger.
2. One life is lost.
3. If lives remain → the armadillo is placed frozen above the nearest undamaged island ahead. A **부활 준비 완료! / Press Space or Click to drop** hint appears. Press Space or click to release — the armadillo drops straight down onto the island.
4. All lives gone → result modal appears.

## Scoreboard

**Score formula:** accumulated from height, distance, and event bonuses.

Scores are stored in a **local leaderboard** backed by `localStorage`. No account or network connection required.

**Nicknames:** Entered after each run when registering a score (max 16 characters). The last used name is pre-filled on the next registration. Leaving the field empty stores the run as "Anonymous".

## Tech Stack

| Area | Technology |
| --- | --- |
| Rendering | Three.js |
| Physics | Planck.js (CCD bullet mode) |
| Post effects | postprocessing (bloom, aberration, vignette) |
| Build | Vite |
| Language | Vanilla JavaScript ES modules |
| Hosting | GitHub Pages |

## Local Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```text
src/
├── main.js               # Game loop, input, slingshot, rolling, flight,
│                         #   terrain destruction, sea bounce + respawn,
│                         #   camera, HUD (tutorial/game-over/leaderboard),
│                         #   scoreboard wiring, item collection + effects
├── state.js              # State machine: TITLE → SLINGING → FLYING → ROLLING/FALLING → GAMEOVER
├── config.js             # Shared tuning constants (gravity, speed, camera)
├── ui.css                # All UI: HUD panel, tutorial screen, game-over modal,
│                         #   pause menu, spacebar SPACE button, pixel hearts,
│                         #   leaderboard overlay, respawn hint, item bars,
│                         #   vertical power gauge
├── game/
│   ├── terrain.js        # Terrain generation (hill/valley/slope/bowl), biomes,
│   │                     #   100-island static layout + procedural continuation,
│   │                     #   left-entry ramp surface/slope, damage system
│   ├── items.js          # Rocket / Boost / Heart: spawn table, grid-based
│   │                     #   pixel-art icons, collection, effect constants
│   ├── particles.js      # Instanced particle effects (dirt, burst, flame, splash)
│   ├── physics.js        # Planck.js world: terrain fixtures, gravity, flushContacts
│   └── scoreboard.js     # Local leaderboard (localStorage), player name storage
├── renderer/
│   ├── scene.js          # WebGL renderer, orthographic camera
│   ├── background.js     # Background layers, sea, clouds, moon
│   └── postfx.js         # Bloom, chromatic aberration, vignette
└── shaders/
    ├── sky.vert / sky.frag
    ├── particle.vert / particle.frag
    └── crater.vert / crater.frag
scripts/
├── deploy.mjs            # GitHub Pages deploy (gh-pages branch)
└── terrain-stress.mjs    # Offline terrain generation smoke test
```

## Assets and License

Most of the visuals are generated in code (procedural terrain meshes, the wooden slingshot, pixel-art item icons, particles, shaders). The only external image assets are:

- Elthen armadillo sprite sheet in `src/assets/elthen/` — used for the armadillo, per the itch.io listing terms.
- Slingshot icon in `src/assets/game-icons/` — Delapouite, CC BY 3.0.

Full attribution: [ATTRIBUTION.md](ATTRIBUTION.md).
