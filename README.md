# Armadillo Rush

> Launch the armadillo from a slingshot. Hold to accelerate on terrain, release to jump. Spin in the air. Break through terrain. Climb from the sea to the moon.

**Play online:** https://hundredman.github.io/armadillo-rush/

---

## Overview

Armadillo Rush is a 2D arcade physics game built with Three.js and Planck.js.

The player launches a curled armadillo from a wooden slingshot, lands on floating terrain islands, and uses hold-and-release timing to build speed and jump between islands. The world climbs from bright sea and sky through cloud terrain into low-gravity space toward the moon.

## Gameplay

1. **Read the tutorial** — shown on the start screen in Korean and English. Click **시작하기 / Start Game** to begin.
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
| **Rocket** | Orange rocket tilted 45° | Immediately launches armadillo upward-forward at 45° (~940 px/s) for 2.2 s; gravity ignored during thrust |
| **Spring** | Cyan arrow with coil | Instant +speed bonus; next jump gets +420 px/s vertical kick; consumed on that jump |
| **Heart** | Red heart | Restore one life (max 3) |

Active Rocket and Spring effects show as color-coded bars inside the stats panel (bottom of the panel, below stats).

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
- After destruction the armadillo coasts through a 2-frame grace window (pure JS integration, Planck fully off) so no push-out impulse is possible.
- Dirt particles burst from the impact point.
- Speed is preserved and receives a small forward bonus.
- Destruction is continuous: successive frames keep breaking until the ball exits.

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
│   │                     #   105-island static layout + procedural continuation,
│   │                     #   damage system (damageTerrain, getTerrainTopY)
│   ├── items.js          # Rocket / Spring / Heart: spawn table, meshes,
│   │                     #   collection, animation, effect constants
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

- Kenney assets in `src/assets/kenney/` are CC0. See [ATTRIBUTION.md](ATTRIBUTION.md).
- Game-icons assets in `src/assets/game-icons/` are CC BY 3.0.
- Elthen sprite sheet in `src/assets/elthen/` is used with permission per itch.io listing terms.
