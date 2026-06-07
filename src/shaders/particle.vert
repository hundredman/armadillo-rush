// 인스턴스 파티클 버텍스 셰이더
// instanceMatrix: 위치·크기 (CPU에서 Object3D.updateMatrix로 계산)
// aLife: 남은 수명 비율 (1→0)
// aColor: RGB 색상
attribute float aLife;
attribute vec3 aColor;

varying float vLife;
varying vec3 vColor;
varying vec2 vLocalPos;   // 원형 마스킹용 로컬 위치 (-0.5~0.5)

void main() {
  vLife     = aLife;
  vColor    = aColor;
  vLocalPos = position.xy;  // PlaneGeometry: position.xy ∈ [-0.5, 0.5]

  vec4 mvPos = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPos;
}
