import { World, Vec2, Circle, Chain } from 'planck'
import { PX_PER_METER } from '../config.js'

// Planck unit system: 1 planck-unit = PX_PER_METER px
// px → m: / PX_PER_METER,   m → px: * PX_PER_METER
const P = PX_PER_METER

function pxToM(px) { return px / P }
function mToPx(m)  { return m  * P }
function v2px(v)   { return { x: mToPx(v.x), y: mToPx(v.y) } }

/**
 * Planck.js physics world.
 * - armadillo: dynamic Circle body
 * - island terrain: static ChainShape (polyline)
 *
 * Usage:
 *   const phys = new PhysicsWorld()
 *   phys.addTerrain(island)
 *   phys.setArmadilloPos(x, y)
 *   phys.setArmadilloVelocity(vx, vy)
 *   phys.step(dt)
 *   const { x, y, vx, vy } = phys.getArmadilloState()
 */
export class PhysicsWorld {
  constructor() {
    this.world = World({ gravity: Vec2(0, -pxToM(980)) })
    this._terrainBodies = []

    // armadillo body (radius = ARMADILLO_SIZE/2 = 15px → m)
    const radius = pxToM(15)
    this.ballBody = this.world.createBody({
      type: 'dynamic',
      position: Vec2(0, 0),
      bullet: true,          // CCD — prevents high-speed tunneling
      linearDamping: 0,
    })
    this.ballBody.createFixture(Circle(radius), {
      density:     1.0,
      friction:    0.55,     // slope friction (0=slippery, 1=strong)
      restitution: 0.18,     // restitution (0=inelastic, 1=fully elastic)
    })

    // collision callback — landing / impact detection
    this._contactEvents = []
    this.world.on('begin-contact', (contact) => {
      const fA = contact.getFixtureA()
      const fB = contact.getFixtureB()
      const bA = fA.getBody()
      const bB = fB.getBody()
      if (bA === this.ballBody || bB === this.ballBody) {
        const vel = this.ballBody.getLinearVelocity()
        this._contactEvents.push({
          type: 'land',
          vx: mToPx(vel.x),
          vy: mToPx(vel.y),
        })
      }
    })
  }

  setGravity(pxPerSec2) {
    this.world.setGravity(Vec2(0, -pxToM(pxPerSec2)))
  }

  /**
   * Register a terrain object (returned by createCurvedTerrain) as a physics body.
   * Removes any existing body for the same terrain first.
   */
  addTerrain(terrain) {
    this.removeTerrain(terrain)
    const body = this.world.createBody({ type: 'static' })
    const segments = this._buildTerrainSegments(terrain)
    const restitution = terrain.biome === 'cloud' ? 0.72 : terrain.biome === 'meteor' ? 0.04 : 0.1
    const friction = terrain.biome === 'cloud' ? 0.38 : terrain.biome === 'meteor' ? 0.68 : 0.55
    for (const segment of segments) {
      body.createFixture(Chain(segment.map(p => Vec2(pxToM(p.x), pxToM(p.y))), false), {
        friction,
        restitution,
      })
    }
    body.setUserData(terrain)
    this._terrainBodies.push({ terrain, body })
    return body
  }

  _buildTerrainSegments(terrain) {
    const segments = []
    let current = []

    const isDamagedEdge = (a, b) => {
      if (!terrain.damageZones?.length) return false
      const midX = (a.x + b.x) / 2
      return terrain.damageZones.some((zone) => (
        midX >= zone.left && midX <= zone.right
      ))
    }

    for (let i = 0; i < terrain.points.length - 1; i++) {
      const a = terrain.points[i]
      const b = terrain.points[i + 1]
      if (isDamagedEdge(a, b)) {
        if (current.length >= 2) segments.push(current)
        current = []
        continue
      }
      if (current.length === 0) current.push(a)
      current.push(b)
    }

    if (current.length >= 2) segments.push(current)
    return segments
  }

  removeTerrain(terrain) {
    const idx = this._terrainBodies.findIndex(e => e.terrain === terrain)
    if (idx === -1) return
    this.world.destroyBody(this._terrainBodies[idx].body)
    this._terrainBodies.splice(idx, 1)
  }

  removeAllTerrain() {
    for (const { body } of this._terrainBodies) this.world.destroyBody(body)
    this._terrainBodies = []
  }

  setArmadilloPos(px, py) {
    this.ballBody.setPosition(Vec2(pxToM(px), pxToM(py)))
    this.ballBody.setLinearVelocity(Vec2(0, 0))
    this.ballBody.setAngularVelocity(0)
    this.ballBody.setAwake(true)
  }

  setArmadilloVelocity(pvx, pvy) {
    this.ballBody.setLinearVelocity(Vec2(pxToM(pvx), pxToM(pvy)))
    this.ballBody.setAwake(true)
  }

  /** dt: seconds */
  step(dt) {
    this._contactEvents = []
    this.world.step(dt, 8, 3)
  }

  getArmadilloState() {
    const pos = this.ballBody.getPosition()
    const vel = this.ballBody.getLinearVelocity()
    const ang = this.ballBody.getAngle()
    return {
      x:  mToPx(pos.x),
      y:  mToPx(pos.y),
      vx: mToPx(vel.x),
      vy: mToPx(vel.y),
      angle: ang,
    }
  }

  /** Collision events from this step (read-only). */
  get contactEvents() { return this._contactEvents }

  /** Whether the armadillo is touching a static body (grounded). */
  isGrounded() {
    for (let ce = this.ballBody.getContactList(); ce; ce = ce.next) {
      if (ce.contact.isTouching()) return true
    }
    return false
  }
}
