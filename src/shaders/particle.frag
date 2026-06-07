// 인스턴스 파티클 프래그먼트 셰이더
// 수명에 따른 페이드아웃 + 중심 글로우 (soft circle)
precision mediump float;

varying float vLife;
varying vec3 vColor;

void main() {
  // 사각형 지오메트리의 UV 없이 gl_PointCoord 대신 vLife 페이드만 사용
  float alpha = vLife * vLife;  // 이차 페이드
  gl_FragColor = vec4(vColor, alpha);
}
