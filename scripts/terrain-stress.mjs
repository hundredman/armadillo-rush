import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const RUNS = Number.parseInt(process.env.TERRAIN_STRESS_RUNS ?? '50', 10)
const ISLANDS_PER_RUN = Number.parseInt(process.env.TERRAIN_STRESS_ISLANDS ?? '420', 10)
const TERRAIN_MIN_GAP = 12
const MAX_HORIZONTAL_GAP = 58
const MAX_PROCEDURAL_VERTICAL_STEP = 260

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const terrainPath = path.join(rootDir, 'src/game/terrain.js')
const threeUrl = await import.meta.resolve('three')
const tempModulePath = path.join(os.tmpdir(), `armadillo-terrain-stress-${Date.now()}-${Math.random().toString(16).slice(2)}.mjs`)

try {
  const source = await fs.readFile(terrainPath, 'utf8')
  const transformedSource = source
    .replace("import * as THREE from 'three'", `import * as THREE from '${threeUrl}'`)
    .replace("import craterVert from '../shaders/crater.vert?raw'", "const craterVert = ''")
    .replace("import craterFrag from '../shaders/crater.frag?raw'", "const craterFrag = ''")

  await fs.writeFile(tempModulePath, transformedSource)
  const terrain = await import(pathToFileURL(tempModulePath).href)
  const three = await import('three')
  const failures = []
  const biomeCounts = { earth: 0, cloud: 0, meteor: 0 }
  const stats = {
    gapMin: Infinity,
    gapMax: -Infinity,
    gapSum: 0,
    verticalMax: -Infinity,
    verticalSum: 0,
    pairCount: 0,
    proceduralVerticalMax: -Infinity,
    proceduralVerticalSum: 0,
    proceduralPairCount: 0,
  }

  const avoidTerrainOverlap = (spec, previousIsland) => {
    if (!previousIsland) return spec
    const minLeft = previousIsland.bounds.right + TERRAIN_MIN_GAP
    const currentLeft = spec.x - spec.w / 2
    if (currentLeft >= minLeft) return spec
    return { ...spec, x: minLeft + spec.w / 2 }
  }

  const randomizeInitialTerrainSpec = (baseSpec, index) => {
    const shapePool = ['bowl', 'plateau', 'wave', 'ramp', 'dip', 'crest', 'double', 'saddle']
    const early = index < 4
    return {
      ...baseSpec,
      x: baseSpec.x + (Math.random() - 0.5) * 90,
      y: baseSpec.y + (Math.random() - 0.5) * (early ? 90 : 180),
      w: Math.round(baseSpec.w * three.MathUtils.lerp(0.78, 0.96, Math.random())),
      depth: Math.max(20, Math.round(baseSpec.depth + (Math.random() - 0.5) * 18)),
      rimH: Math.max(12, Math.round(baseSpec.rimH + (Math.random() - 0.5) * 10)),
      shapeType: early ? baseSpec.shapeType : shapePool[Math.floor(Math.random() * shapePool.length)],
    }
  }

  const validateIsland = (island, run, index) => {
    const prefix = `run ${run + 1}, island ${index + 1}`
    const { bounds, points } = island
    const values = [bounds.left, bounds.right, bounds.top, bounds.bottom, island.bowlFloor]
    if (values.some((value) => !Number.isFinite(value))) failures.push(`${prefix}: non-finite bounds`)
    if (bounds.left >= bounds.right) failures.push(`${prefix}: invalid horizontal bounds`)
    if (bounds.bottom >= bounds.top) failures.push(`${prefix}: invalid vertical bounds`)
    if (!Array.isArray(points) || points.length < 8) failures.push(`${prefix}: too few top points`)

    for (let i = 1; i < points.length; i++) {
      if (points[i].x < points[i - 1].x) failures.push(`${prefix}: top points are not monotonic`)
      if (!Number.isFinite(points[i].x) || !Number.isFinite(points[i].y)) failures.push(`${prefix}: non-finite point`)
    }
  }

  for (let run = 0; run < RUNS; run++) {
    const islands = []
    let previousIsland = null

    for (let i = 0; i < terrain.DEFAULT_ISLAND_LAYOUT.length; i++) {
      const spec = avoidTerrainOverlap(randomizeInitialTerrainSpec(terrain.DEFAULT_ISLAND_LAYOUT[i], i), previousIsland)
      const island = terrain.createCurvedTerrain(spec)
      islands.push(island)
      previousIsland = island
    }

    for (let i = terrain.DEFAULT_ISLAND_LAYOUT.length; i < ISLANDS_PER_RUN; i++) {
      const spec = avoidTerrainOverlap(terrain.generateNextIslandSpec(previousIsland, i), previousIsland)
      const island = terrain.createCurvedTerrain(spec)
      islands.push(island)
      previousIsland = island
    }

    for (let i = 0; i < islands.length; i++) {
      const island = islands[i]
      validateIsland(island, run, i)
      biomeCounts[island.biome] = (biomeCounts[island.biome] ?? 0) + 1

      if (i === 0) continue
      const prev = islands[i - 1]
      const gap = island.bounds.left - prev.bounds.right
      const verticalStep = Math.abs(island.bowlFloor - prev.bowlFloor)
      const isProceduralPair = i >= terrain.DEFAULT_ISLAND_LAYOUT.length
      stats.gapMin = Math.min(stats.gapMin, gap)
      stats.gapMax = Math.max(stats.gapMax, gap)
      stats.gapSum += gap
      stats.verticalMax = Math.max(stats.verticalMax, verticalStep)
      stats.verticalSum += verticalStep
      stats.pairCount += 1
      if (isProceduralPair) {
        stats.proceduralVerticalMax = Math.max(stats.proceduralVerticalMax, verticalStep)
        stats.proceduralVerticalSum += verticalStep
        stats.proceduralPairCount += 1
      }
      if (gap < TERRAIN_MIN_GAP - 0.001) failures.push(`run ${run + 1}, island ${i + 1}: overlap or too-small gap (${gap.toFixed(2)}px)`)
      if (gap > MAX_HORIZONTAL_GAP) failures.push(`run ${run + 1}, island ${i + 1}: excessive horizontal gap (${gap.toFixed(2)}px)`)
      if (isProceduralPair && verticalStep > MAX_PROCEDURAL_VERTICAL_STEP) {
        failures.push(`run ${run + 1}, island ${i + 1}: excessive procedural vertical step (${verticalStep.toFixed(2)}px)`)
      }
    }
  }

  for (const biome of ['earth', 'cloud', 'meteor']) {
    if ((biomeCounts[biome] ?? 0) <= 0) failures.push(`missing biome in stress run: ${biome}`)
  }

  if (failures.length > 0) {
    console.error(`Terrain stress failed with ${failures.length} issue(s).`)
    for (const failure of failures.slice(0, 40)) console.error(`- ${failure}`)
    if (failures.length > 40) console.error(`...and ${failures.length - 40} more`)
    process.exitCode = 1
  } else {
    console.log(`Terrain stress passed: ${RUNS} runs x ${ISLANDS_PER_RUN} islands`)
    console.log(`Biomes: ${Object.entries(biomeCounts).map(([key, value]) => `${key}=${value}`).join(', ')}`)
    console.log(`Gap px: min=${stats.gapMin.toFixed(1)}, avg=${(stats.gapSum / stats.pairCount).toFixed(1)}, max=${stats.gapMax.toFixed(1)}`)
    console.log(`Vertical step px: avg=${(stats.verticalSum / stats.pairCount).toFixed(1)}, max=${stats.verticalMax.toFixed(1)}`)
    console.log(`Procedural vertical step px: avg=${(stats.proceduralVerticalSum / stats.proceduralPairCount).toFixed(1)}, max=${stats.proceduralVerticalMax.toFixed(1)}`)
  }
} finally {
  await fs.rm(tempModulePath, { force: true })
}
