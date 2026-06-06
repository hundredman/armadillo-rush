// 높이 기반 배경 그라데이션 (§11).
// uHeightRatio: 0(낮은 높이) ~ 1(높은 높이/우주). 위로 올라갈수록 색이 어두워짐.
precision highp float;

varying vec2 vUv;
uniform float uHeightRatio;   // 0~1, 플레이어 높이로 갱신
uniform float uTime;          // 별 반짝임용

// 기획서 색상: #1A237E (낮음) → #000011 (높음)
const vec3 LOW_SKY  = vec3(0.102, 0.137, 0.494);
const vec3 HIGH_SKY = vec3(0.0,   0.0,   0.067);

// 간단한 해시 기반 별 (높은 높이에서만 등장)
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  // 화면 세로 방향 + 전체 높이 진행도를 섞어 자연스러운 그라데이션
  float t = clamp(uHeightRatio + (1.0 - vUv.y) * 0.3, 0.0, 1.0);
  vec3 col = mix(LOW_SKY, HIGH_SKY, t);

  // 높이 올라갈수록 별이 보이기 시작
  float starVisibility = smoothstep(0.4, 1.0, uHeightRatio);
  vec2 grid = floor(vUv * 80.0);
  float star = hash(grid);
  if (star > 0.985) {
    float tw = 0.6 + 0.4 * sin(uTime * 2.0 + star * 40.0);  // 반짝임
    col += vec3(tw) * starVisibility;
  }

  gl_FragColor = vec4(col, 1.0);
}
