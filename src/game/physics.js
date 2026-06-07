import { World, Vec2, Circle, Chain } from 'planck'
import { PX_PER_METER } from '../config.js'

// Planck 단위계: 1 planck-unit = PX_PER_METER px
// px → m: / PX_PER_METER,   m → px: * PX_PER_METER
const P = PX_PER_METER

function pxToM(px) { return px / P }
function mToPx(m)  { return m  * P }
function v2px(v)   { return { x: mToPx(v.x), y: mToPx(v.y) } }

/**
 * Planck.js 기반 물리 월드.
 * - 아르마딜로: dynamic Circle body
 * - 섬 지형:   static ChainShape (폴리라인 지형)
 *
 * 사용법:
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

    // 아르마딜로 body (반지름 = ARMADILLO_SIZE/2 = 15px → m)
    const radius = pxToM(15)
    this.ballBody = this.world.createBody({
      type: 'dynamic',
      position: Vec2(0, 0),
      bullet: true,          // CCD — 고속 터널링 방지
      linearDamping: 0,
    })
    this.ballBody.createFixture(Circle(radius), {
      density:     1.0,
      friction:    0.55,     // 슬로프 마찰 (0=미끄럼, 1=강한 마찰)
      restitution: 0.18,     // 탄성 (0=완전 비탄성, 1=완전 탄성)
    })

    // 충돌 콜백 — 착지·충격 감지용
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

  /**
   * terrain 객체(createCurvedTerrain 반환값)를 지형 body로 등록.
   * 기존 동일 terrain이 있으면 먼저 제거한다.
   */
  addTerrain(terrain) {
    this.removeTerrain(terrain)
    const pts = terrain.points.map(p => Vec2(pxToM(p.x), pxToM(p.y)))
    const body = this.world.createBody({ type: 'static' })
    body.createFixture(Chain(pts, false), { friction: 0.55, restitution: 0.1 })
    body.setUserData(terrain)
    this._terrainBodies.push({ terrain, body })
    return body
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

  /** dt: 초 단위 */
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

  /** 이번 step에서 발생한 충돌 이벤트 목록 (읽기 전용) */
  get contactEvents() { return this._contactEvents }

  /** 아르마딜로가 지면(정적 body)과 접촉 중인지 */
  isGrounded() {
    for (let ce = this.ballBody.getContactList(); ce; ce = ce.next) {
      if (ce.contact.isTouching()) return true
    }
    return false
  }
}
