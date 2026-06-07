import {
  EffectComposer,
  EffectPass,
  RenderPass,
  BloomEffect,
  ChromaticAberrationEffect,
  VignetteEffect,
  KernelSize,
  Pass,
} from 'postprocessing'
import { Vector2 } from 'three'

/**
 * Background를 composer 첫 번째 패스로 실행하는 커스텀 패스.
 * RenderPass 이전에 sky 셰이더를 그린 뒤 clear 없이 메인 씬을 합성한다.
 */
class BackgroundPass extends Pass {
  constructor(bgScene, bgCamera) {
    super('BackgroundPass')
    this.bgScene = bgScene
    this.bgCamera = bgCamera
    this.needsSwap = false
  }

  render(renderer, inputBuffer, outputBuffer) {
    renderer.setRenderTarget(outputBuffer)
    renderer.autoClear = false
    renderer.clear()   // color + depth + stencil 전부 클리어
    renderer.render(this.bgScene, this.bgCamera)
    renderer.autoClear = true
  }
}

/**
 * Postprocessing 파이프라인.
 * BackgroundPass → RenderPass(메인 씬) → Bloom + ChromaticAberration + Vignette
 * update(trauma, heightRatio, dt) 로 매 프레임 강도 조절.
 */
export class PostFX {
  constructor(threeRenderer, scene, camera, bgScene, bgCamera) {
    this.composer = new EffectComposer(threeRenderer)

    this.bgPass = new BackgroundPass(bgScene, bgCamera)

    this.renderPass = new RenderPass(scene, camera)
    this.renderPass.clear = false
    this.renderPass.clearDepth = true  // depth만 클리어해서 배경 위에 게임 오브젝트 정상 렌더

    this.bloom = new BloomEffect({
      intensity: 1.2,
      luminanceThreshold: 0.55,
      luminanceSmoothing: 0.22,
      kernelSize: KernelSize.MEDIUM,
    })

    this.chromatic = new ChromaticAberrationEffect({
      offset: new Vector2(0.0, 0.0),
      radialModulation: true,
      modulationOffset: 0.15,
    })

    this.vignette = new VignetteEffect({
      eskil: false,
      offset: 0.38,
      darkness: 0.72,
    })

    this.effectPass = new EffectPass(camera, this.bloom, this.chromatic, this.vignette)

    this.composer.addPass(this.bgPass)
    this.composer.addPass(this.renderPass)
    this.composer.addPass(this.effectPass)
  }

  /**
   * @param {number} trauma      0~1
   * @param {number} heightRatio 0~1
   * @param {number} dt
   */
  update(trauma, heightRatio, dt) {
    const t2 = trauma * trauma
    const targetBloom = 0.9 + t2 * 2.8 + (1 - heightRatio) * 0.2
    this.bloom.intensity += (targetBloom - this.bloom.intensity) * (1 - Math.pow(0.01, dt))

    const ca = t2 * 0.006
    this.chromatic.offset.set(ca, ca * 0.6)
  }

  render(dt) {
    this.composer.render(dt)
  }

  setSize(w, h) {
    this.composer.setSize(w, h)
  }
}
