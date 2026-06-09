# Armadillo Rush

> Launch the armadillo from a slingshot. Hold to accelerate on terrain, release to jump. Spin in the air. Break through terrain. Climb from the sea to the moon.

**Play online:** https://hundredman.github.io/armadillo-rush/

Scan to play on mobile:

![QR code — scan to play](qr.png)

---

## Overview

Armadillo Rush is a 2D arcade physics game built with Three.js and Planck.js.

The player launches a curled armadillo from a wooden slingshot, lands on floating terrain islands, and uses hold-and-release timing to build speed and jump between islands. The world climbs from bright sea and sky through cloud terrain into low-gravity space toward the moon.

## Gameplay

1. **Set a nickname** — shown on the leaderboard. Tap "Nickname: Anonymous" on the title screen to edit.
2. **Drag the slingshot pouch** and release to launch. A vertical power bar on the left shows pull strength.
3. **Land on terrain** — the armadillo rolls freely.
4. **Hold** Space / tap → accelerate while rolling.
5. **Release** → jump off the terrain with accumulated spin force.
6. **Hold** while airborne → continuous clockwise spin.
7. Release in the air → spin slows; no air-jump fires.
8. **Edge bonus**: releasing near the right edge of an island gives an extra upward kick.
9. **Hill crest bonus**: crossing the peak of a hill at speed fires a bonus launch upward.
10. **Collect items** floating above terrain to gain power-ups.
11. Fall into the sea → lose one life (3 total). Each sea hit respawns you on the nearest island ahead.
12. Reach moon altitude to clear the run.

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
| TITLE / GAMEOVER | Enter SLINGING | — |

Key rules:
- The armadillo never accelerates without held input — no passive slope effects.
- Releasing in the air never triggers a jump.
- If input is held through a landing, acceleration starts immediately on touchdown.
- Spin speed is preserved across air→ground transitions and converted to initial ground speed.

## Controls

| Device | Action |
| --- | --- |
| Mouse / Touch | Click and drag for all actions |
| Keyboard | Space to hold/release; Escape to pause |
| On-screen BOOST button | Equivalent to pointer hold (works on mobile) |

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
3. If lives remain → respawn at the nearest undamaged island ahead, with a forward speed bonus and a spawn-grace window to prevent instant re-contact.
4. All lives gone → result modal appears.

## Scoreboard

**Score formula:** accumulated from height, distance, and event bonuses.

Scores are stored in a **shared online leaderboard** (Supabase) so every player on the same deployed URL sees the same rankings. The client falls back to `localStorage` automatically if Supabase is not configured (local development without `.env.local`).

**Nicknames:** Enter a name before your first run (max 16 characters). Stored under `armadillo-rush-player-name`. Empty or skipped → displays as "Anonymous". Click "Nickname: …" on the title screen to change it.

### Leaderboard setup (Supabase)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL editor** and run `scripts/supabase-setup.sql` (creates the `scores` table and RLS policies).
3. Copy your **Project URL** and **anon public key** from *Settings → API*.
4. For local development create `.env.local` in the project root:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
5. For the deployed build, add the same two values as **repository secrets** in *GitHub → Settings → Secrets and variables → Actions*:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

   The GitHub Actions workflow (`.github/workflows/deploy.yml`) injects them at build time and deploys to GitHub Pages automatically on every push to `main`.

The anon key is safe to expose — Supabase Row Level Security only permits `SELECT` and `INSERT` with server-side score and name validation. `UPDATE` and `DELETE` are denied.

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
│                         #   terrain destruction, sea bounce, camera, HUD,
│                         #   scoreboard, item collection + effects
├── state.js              # State machine: TITLE → SLINGING → FLYING → ROLLING/FALLING → GAMEOVER
├── config.js             # Shared tuning constants (gravity, speed, camera)
├── ui.css                # All UI: HUD panel, title screen, modal, boost button,
│                         #   pixel hearts, leaderboard, name prompt, item bars,
│                         #   vertical power gauge
├── game/
│   ├── terrain.js        # Terrain generation (hill/valley/slope/bowl), biomes,
│   │                     #   105-island static layout + procedural continuation,
│   │                     #   damage system (damageTerrain, getTerrainTopY)
│   ├── items.js          # Rocket / Spring / Heart: spawn table, meshes,
│   │                     #   collection, animation, effect constants
│   ├── particles.js      # Instanced particle effects (dirt, burst, flame, splash)
│   ├── physics.js        # Planck.js world: terrain fixtures, gravity, flushContacts
│   └── scoreboard.js     # Local-first leaderboard, player name storage, backend stub
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
