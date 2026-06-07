// 인스턴스 파티클 프래그먼트 셰이더
// 원형 소프트 글로우 마스킹 + 수명 기반 페이드
precision mediump float;

varying float vLife;
varying vec3 vColor;

// gl_PointCoord 없이 PlaneGeometry UV를 직접 계산할 수 없으므로
// instanceMatrix를 통해 전달된 중심 기준 거리를 vLife/vColor만으로 계산.
// 대신 vertex 단에서 position.xy를 varying으로 전달해 원형 마스킹.
varying vec2 vLocalPos;

void main() {
  // 중심으로부터의 거리 (PlaneGeometry는 ±0.5 범위)
  float dist = length(vLocalPos);

  // 외곽 원형 클리핑
  float circle = 1.0 - smoothstep(0.28, 0.50, dist);

  // 중심 코어 글로우
  float core = 1.0 - smoothstep(0.0, 0.22, dist);

  float alpha = (circle * 0.75 + core * 0.55) * vLife * vLife;

  // 코어는 조금 더 밝게
  vec3 col = mix(vColor, vColor * 1.6 + 0.15, core * 0.5);

  gl_FragColor = vec4(col, alpha);
}
