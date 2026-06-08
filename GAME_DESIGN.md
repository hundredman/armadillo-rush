# Armadillo Rush — Current Design Notes

Last updated: 2026-06-08

## Core Pitch

Armadillo Rush is a 2D arcade physics game about launching a curled armadillo from a slingshot, rolling across rounded terrain, and climbing from the sea to the moon.

The main skill is not repeated tapping. The player must identify the upper uphill boost zone and press at the right moment.

## Player Loop

1. Drag the slingshot pouch from the title screen.
2. Release the pouch to launch.
3. Fly, land, and roll along terrain.
4. Press the bottom `BOOST` button, click/tap, or press `Space` only on valid upper uphill boost zones.
5. Keep enough speed to cross gaps and climb.
6. Splash into the sea for game over, or reach moon altitude to clear.

## Controls

| Situation | Input | Result |
| --- | --- | --- |
| Title | Drag | Enter slingshot mode and aim |
| Game over | Click / Retry button / Space | Enter slingshot mode |
| Slingshot mode | Drag and release | Launch |
| Slingshot mode | Space | Does not launch |
| Rolling | Click / tap / `BOOST` button / Space | Jump; boost only if zone is valid |
| Flying / falling | Click / Space | No direct speed gain |

## Boost Rule

Boost is granted only when all conditions are true:

- Input source is player action: pointer, `BOOST` button, or keyboard.
- The armadillo is rolling on terrain.
- The terrain slope is uphill.
- The contact point is in the upper portion of that terrain.

No-input rolling, flat jumps, edge auto-launch, terrain tunneling, and ordinary uphill rolling do not add speed.

## Boost Visualization

The boost zone should feel like part of the terrain, not a UI sticker.

Current style:

- brighter biome-matched surface sheen
- high-contrast ridge strokes following the terrain tangent
- only shown on valid upper uphill segments

## Slingshot Design

The slingshot is inspired by arcade slingshots such as Angry Birds:

- thick rounded wooden Y frame
- dark rubber bands
- leather pouch
- visible wood knots and highlights
- drag-only launch
- dotted trajectory preview while dragging

## Armadillo Visual Design

The player character may read as a compact rolling ball during high-speed play, but the armadillo identity must be visible before launch.

Current approach:

- title screen portrait shows a curled armadillo form
- in-game object is a curled ball hybrid
- shell bands, small head, snout, ear, tail, and feet provide identity
- color flashes/tints show impact, boost, and special states without replacing the silhouette

## Terrain System

Terrain is made of smooth rounded floating islands. Each run randomizes terrain positions and shapes while avoiding overlaps.

Shape vocabulary:

- bowl
- ramp
- plateau
- dip
- double
- crest
- saddle
- wave

Design requirements:

- dense enough that the player does not fall too easily
- varied vertically and horizontally
- no overlapping terrain edges that can trap the armadillo
- rounded corners and smooth tops
- destructible soft dirt early in the run

## Biomes

| Biome | Altitude Role | Gameplay |
| --- | --- | --- |
| Earth | Early game | Rounded dirt/grass terrain, destructible soil |
| Cloud | Mid game | Springy bounce terrain |
| Meteor | Space | Rock terrain with reduced gravity |

## Sea And Failure

The sea is a visible world layer. When the armadillo touches it:

1. Splash particles and ripples trigger.
2. The armadillo disappears quickly.
3. The result modal appears shortly after.

This keeps the fail feedback readable without making the player wait through a long sinking animation.

## Physics

- Rolling is controlled by `speedRatio` and terrain slope.
- Uphill applies resistance unless a valid player boost is triggered.
- Flying/falling uses Planck.js.
- Space altitude lowers gravity.
- Cloud terrain applies a spring bounce.
- Terrain destruction is allowed regardless of speed, with softer early dirt damage.

## UI

Required visible UI:

- HUD stats
- top-right pause/restart controls
- bottom-center circular `BOOST` button during active play
- `BOOST` button press animation for pointer and Space input
- title portrait and launch instructions
- result modal for splash or moon clear

## Rendering

Core rendering features:

- Three.js orthographic side view
- procedural sky transition from sea-level blue to clouds to space
- visible sea layer and foam
- moon target visuals
- particle effects
- post-processing: bloom, chromatic aberration, vignette

## Implementation Map

```text
src/main.js
  Game state, input, slingshot, armadillo, sea, camera, UI

src/game/terrain.js
  Terrain shape generation, biomes, destruction, boost visuals

src/game/physics.js
  Planck.js world, terrain fixtures, gravity

src/game/particles.js
  Burst, dirt, rating, flame, splash particles

src/renderer/
  WebGL scene, background, post effects

src/ui.css
  HUD, title portrait, boost button, modals
```

## Current Status

Implemented:

- drag-only slingshot launch
- wooden arcade slingshot visual
- curled armadillo identity
- random dense terrain generation
- terrain overlap avoidance
- terrain destruction
- sea splash failure
- cloud and meteor biomes
- reduced space gravity
- bottom-center boost button
- Space-linked button press feedback
- natural terrain-integrated boost-zone visuals
- moon clear state
- terrain stress validation script

Known tuning areas:

- boost-zone color intensity after more playtesting
- exact terrain density and gap difficulty
- slingshot framing on small screens
- armadillo readability at very high speed

## Verification

Recommended checks before handing off a build:

```bash
npm run verify
```

`stress:terrain` validates dense random terrain generation across earth, cloud, and meteor biomes.
