# Armadillo Rush

> Drag the slingshot, roll across rounded terrain, boost only on valid uphill zones, and climb from the sea to the moon.

**Play online:** https://hundredman.github.io/armadillo-rush/

## Overview

Armadillo Rush is a 2D arcade physics game built with Three.js and Planck.js.

The player launches a curled armadillo from a wooden slingshot, lands on floating terrain, rolls along the surface, and uses timed boost jumps to keep climbing. The lower world is bright sea and sky, mid altitude becomes cloud terrain, and the highest region turns into low-gravity space with meteor terrain.

## Current Gameplay

1. Drag the slingshot and release to launch.
2. The armadillo rolls smoothly along terrain after landing.
3. Click, tap, press the bottom `BOOST` button, or press `Space` to jump.
4. A boost is granted only when the input happens on the upper part of an uphill boost zone.
5. No input means no uphill acceleration. Passive rolling can slow down but does not create boost.
6. Falling into the sea triggers a short splash, hides the armadillo, then shows the result screen.
7. Reaching the moon height clears the run.

## Controls

| State | Mouse / Touch | Keyboard |
| --- | --- | --- |
| Title | Drag to enter slingshot mode | No action |
| Retry | Click the result screen or Retry button | Space |
| Slingshot | Drag and release to launch | No launch from Space |
| Rolling | Click, tap, or bottom `BOOST` button to jump | Space |
| Flying / Falling | No direct speed gain | No direct speed gain |

## Boost Rules

Boost is intentionally strict:

- The player must click, tap, press the `BOOST` button, or press `Space`.
- The armadillo must be on an uphill surface.
- The contact point must be in the upper portion of that terrain.
- Flat jumps, passive uphill rolling, terrain tunneling, and automatic edge exits do not add speed.

The boost zone is shown as a subtle terrain-integrated highlight: a light surface sheen and short ridge strokes along the valid upper uphill region.

## Terrain And Biomes

- **Earth terrain:** rounded soil islands with grass, destructible surfaces, and soft early dirt.
- **Cloud terrain:** appears at higher altitude and behaves like a springy bounce surface.
- **Meteor terrain:** appears in space with heavier-looking rock colors and reduced gravity.
- **Sea:** a real visible fail layer at the bottom of the world, not just a background.

Terrain is generated randomly on each attempt, with overlap avoidance and denser placement so the player has frequent landing options.

## Visual Direction

- The title screen shows a curled armadillo identity clearly before launch.
- The in-game character is a compact curled armadillo/ball hybrid for readability at speed.
- The slingshot is styled after a chunky wooden arcade slingshot with dark rubber bands and a leather pouch.
- The sky transitions from bright sea-level blue to clouds and then to space.

## Tech Stack

| Area | Technology |
| --- | --- |
| Rendering | Three.js |
| Physics | Planck.js |
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
├── main.js                 # Game loop, slingshot, UI state, gameplay rules
├── state.js                # TITLE → SLINGING → FLYING → ROLLING/FALLING → GAMEOVER
├── config.js               # Shared tuning values
├── ui.css                  # HUD, title, modal, boost button, portrait UI
├── game/
│   ├── terrain.js          # Terrain generation, biomes, destruction, boost-zone visuals
│   ├── particles.js        # Instanced particle effects
│   └── physics.js          # Planck.js world wrapper
├── renderer/
│   ├── scene.js            # WebGL renderer and orthographic camera
│   ├── background.js       # Background layers, sea, clouds, moon
│   └── postfx.js           # Bloom, chromatic aberration, vignette
└── shaders/
    ├── crater.vert/frag
    ├── particle.vert/frag
    └── sky.vert/frag
```

## Assets And License

Kenney assets in `src/assets/kenney/` are CC0. See [ATTRIBUTION.md](ATTRIBUTION.md).
