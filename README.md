# Armadillo Rush

> Launch the armadillo from a slingshot. Hold to accelerate on terrain, release to jump. Spin in the air. Break through terrain. Climb from the sea to the moon.

**Play online:** https://hundredman.github.io/armadillo-rush/

## Overview

Armadillo Rush is a 2D arcade physics game built with Three.js and Planck.js.

The player launches a curled armadillo from a wooden slingshot, lands on floating terrain islands, and uses hold-and-release timing to build speed and jump between islands. The lower world is bright sea and sky; mid altitude transitions to cloud terrain; the highest region is low-gravity space with meteor terrain.

## Gameplay

1. Enter your nickname (shown on the leaderboard).
2. Drag the slingshot pouch and release to launch.
3. Land on terrain — the armadillo rolls freely.
4. **Hold** Space / tap → accelerate while rolling.
5. **Release** → jump off the terrain with accumulated spin force.
6. **Hold** while airborne → continuous clockwise spin.
7. Release in the air → spin slows; no air-jump fires.
8. **Edge bonus**: releasing near the right edge of a terrain island gives an extra upward kick.
9. **Hill crest bonus**: crossing the peak of a hill at speed fires a bonus launch upward.
10. **Collect items** floating above terrain to gain power-ups (see Items below).
11. Fall into the sea → lose one life (3 total). Each sea hit respawns you on the nearest island ahead.
12. Reach moon altitude to clear the run.

## Items

Three collectible pickups float above terrain islands:

| Item | Icon | Effect |
| --- | --- | --- |
| **Booster** | ⚡ Gold diamond | Instant +speed; acceleration rate ×1.6 for 6 seconds |
| **Jump** | ↑ Cyan arrow | Next jump gets a large extra upward kick (+420 px/s vy); consumed on use |
| **Heart** | ♥ Red heart | Restore one life (max 3) |

Items are placed near risky sections and recovery paths. Active Booster and Jump effects are shown as colored bars in the HUD top-left.

## Input Rules

Input has two states: **held** and **released**. Effect depends on game state.

| State | Hold begins | Hold ends (release) |
| --- | --- | --- |
| ROLLING | Accelerate | Jump |
| FLYING / FALLING | Continuous spin | Spin decays — no air jump |
| SLINGING | Sling drag | Launch (if pull sufficient) |
| TITLE / GAMEOVER | Start new run | — |

Key rules:
- The armadillo never accelerates without held input — no passive slope effects.
- Releasing in the air never triggers a jump.
- If input is held through a landing, acceleration starts immediately on touchdown.
- Spin speed is preserved across air→ground transitions and converted to initial ground speed.

## Controls

| Device | Action |
| --- | --- |
| Mouse / Touch | Click / drag for all actions |
| Keyboard | Space to hold/release; Escape to pause |
| On-screen BOOST | Equivalent to pointer hold |

## Terrain Destruction

The armadillo can punch through soft terrain above a minimum speed threshold. When destruction triggers:

- The game manually advances the armadillo's position through the terrain for that frame — Planck physics is bypassed entirely so no bounce-back occurs.
- Dirt particles burst from the impact point.
- Speed and `speedRatio` increase slightly from the impact energy.
- The damage zone is recorded and excluded from future collision checks.
- Destruction is continuous: successive frames keep breaking until the ball exits or loses speed.

Destruction thresholds (approximate):
- Soft-break entry: ~176 px/s
- Standard break: ~320 px/s
- Full-force break: ~700 px/s

## Scoreboard

Armadillo Rush has a local-first leaderboard with a backend-ready API.

**Score formula:** `floor(score)` — accumulated from height, distance, and event bonuses.

**Saving scores:** After each run the score is saved to `localStorage` automatically. The leaderboard button on the game-over card shows ranked scores.

**Player names:** Enter a nickname before your first run. It is persisted across sessions. You can change it by clearing the stored name (`armadillo-rush-player-name` in localStorage).

**Backend extension:** `src/game/scoreboard.js` exports async `submitScore` and `fetchLeaderboard`. Replace the `_syncRemote` stub with a `fetch('/api/scores', ...)` call to add online sync — no caller changes needed.

Score entry shape:
```json
{
  "id": "unique-run-id",
  "name": "Player",
  "score": 12345,
  "heightM": 430,
  "distanceM": 2200,
  "moonClear": false,
  "date": "2026-06-09T..."
}
```

## Tech Stack

| Area | Technology |
| --- | --- |
| Rendering | Three.js |
| Physics | Planck.js (CCD bullet mode) |
| Post effects | postprocessing |
| Build | Vite |
| Language | Vanilla JavaScript ES modules |

## Local Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Full verification:

```bash
npm run verify
```

## Project Structure

```text
src/
├── main.js               # Game loop, input, slingshot, rolling, flight,
│                         #   terrain destruction, sea bounce, camera, UI, scoreboard HUD,
│                         #   item collection + effects (_updateItems, _applyItemEffect)
├── state.js              # TITLE → SLINGING → FLYING → ROLLING/FALLING → GAMEOVER
├── config.js             # Shared tuning constants
├── ui.css                # HUD, title, modal, boost button, hearts, leaderboard,
│                         #   name prompt, item effect bars
├── game/
│   ├── terrain.js        # Terrain generation (hill/valley/slope/bowl), biomes,
│   │                     #   105-island static layout, procedural continuation,
│   │                     #   destruction (damageTerrain, isTerrainDamagedAt, getTerrainTopY)
│   ├── items.js          # Item types (Booster/Jump/Heart), spawn table, mesh builders,
│   │                     #   collection check, animation, effect constants
│   ├── particles.js      # Instanced particle effects (dirt, burst, flame, splash)
│   ├── physics.js        # Planck.js world wrapper — terrain fixtures, gravity
│   └── scoreboard.js     # Local-first leaderboard, player name storage, backend stub
├── renderer/
│   ├── scene.js          # WebGL renderer and orthographic camera
│   ├── background.js     # Background layers, sea, clouds, moon
│   └── postfx.js         # Bloom, chromatic aberration, vignette
└── shaders/
    ├── crater.vert/frag
    ├── particle.vert/frag
    └── sky.vert/frag
```

## Assets And License

Kenney assets in `src/assets/kenney/` are CC0. See [ATTRIBUTION.md](ATTRIBUTION.md).
