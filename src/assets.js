import * as THREE from 'three'
import charIdleUrl from './assets/kenney/platformChar_idle.png'
import charJumpUrl from './assets/kenney/platformChar_jump.png'
import charWalk1Url from './assets/kenney/platformChar_walk1.png'
import charWalk2Url from './assets/kenney/platformChar_walk2.png'
import item001Url from './assets/kenney/platformPack_item001.png'
import item011Url from './assets/kenney/platformPack_item011.png'
import item013Url from './assets/kenney/platformPack_item013.png'
import tile001Url from './assets/kenney/platformPack_tile001.png'
import tile002Url from './assets/kenney/platformPack_tile002.png'
import tile023Url from './assets/kenney/platformPack_tile023.png'
import tile024Url from './assets/kenney/platformPack_tile024.png'
import tile039Url from './assets/kenney/platformPack_tile039.png'

const loader = new THREE.TextureLoader()

function loadTexture(url) {
  const texture = loader.load(url)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.LinearFilter
  return texture
}

export const SPRITES = {
  character: {
    idle: loadTexture(charIdleUrl),
    jump: loadTexture(charJumpUrl),
    walk1: loadTexture(charWalk1Url),
    walk2: loadTexture(charWalk2Url),
  },
  obstacle: {
    wood: loadTexture(tile001Url),
    stone: loadTexture(tile023Url),
    moving: loadTexture(item013Url),
    iron: loadTexture(tile024Url),
    spike: loadTexture(item011Url),
  },
  terrain: {
    grass: loadTexture(tile001Url),
    dirt: loadTexture(tile002Url),
    rock: loadTexture(tile039Url),
    coin: loadTexture(item001Url),
  },
}

export function createSprite(texture, width, height) {
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
  })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(width, height, 1)
  return sprite
}
