// 인스턴스 파티클 버텍스 셰이더
// instanceMatrix: 위치·크기·회전 (CPU에서 Object3D.updateMatrix로 계산)
// aLife: 남은 수명 비율 (1→0)
// aColor: RGB 색상
attribute float aLife;
attribute vec3 aColor;

varying float vLife;
varying vec3 vColor;

void main() {
  vLife  = aLife;
  vColor = aColor;

  // instanceMatrix 적용 (Three.js InstancedMesh가 자동 주입)
  vec4 mvPos = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPos;
}
