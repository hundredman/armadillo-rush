// 세계관 배경 셰이더 — 5단계 높이 그라데이션
// 0.0 = 바다 수면 근처  →  1.0 = 달 궤도
//
// 구간:
//   0.00 ~ 0.12  바다 & 해안 (청록 → 어두운 파랑)
//   0.12 ~ 0.35  낮은 하늘 (밤 → 짙은 남색)
//   0.35 ~ 0.60  성층권 (남색 → 짙은 보라/검정)
//   0.60 ~ 0.85  우주 (거의 검정, 별 가득)
//   0.85 ~ 1.00  달 궤도 (연한 회청 글로우)
precision highp float;

varying vec2 vUv;
uniform float uHeightRatio;   // 0~1
uniform float uTime;

// ── 구간별 색상 ──
const vec3 C_SEA       = vec3(0.02,  0.18,  0.32);   // 바다 수면
const vec3 C_COAST     = vec3(0.05,  0.10,  0.28);   // 해안 하늘
const vec3 C_NIGHT     = vec3(0.06,  0.07,  0.22);   // 밤하늘
const vec3 C_DEEP      = vec3(0.02,  0.02,  0.10);   // 깊은 성층권
const vec3 C_SPACE     = vec3(0.0,   0.0,   0.02);   // 우주
const vec3 C_MOON_GLOW = vec3(0.10,  0.13,  0.22);   // 달 궤도 배경 글로우

// ── 해시 기반 pseudo-random ──
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// ── 별 렌더 (우주 구간) ──
vec3 stars(vec2 uv, float visibility) {
  if (visibility < 0.01) return vec3(0.0);

  vec3 col = vec3(0.0);

  // 레이어 1 — 작고 많은 별
  vec2 g1 = floor(uv * 120.0);
  float s1 = hash(g1);
  if (s1 > 0.978) {
    float tw = 0.5 + 0.5 * sin(uTime * (1.2 + s1 * 3.0) + s1 * 40.0);
    float brightness = 0.6 + 0.4 * tw;
    col += vec3(brightness) * visibility;
  }

  // 레이어 2 — 크고 드문 밝은 별
  vec2 g2 = floor(uv * 40.0);
  float s2 = hash(g2 + 7.3);
  if (s2 > 0.992) {
    float tw = 0.7 + 0.3 * sin(uTime * 0.8 + s2 * 20.0);
    col += vec3(0.9, 0.95, 1.0) * tw * visibility * 1.4;
  }

  return col;
}

// ── 은하수 힌트 (희미한 대각 밴드) ──
float milkyWay(vec2 uv) {
  float band = uv.x * 0.4 + uv.y * 0.9;
  float w = smoothstep(0.42, 0.50, band) * (1.0 - smoothstep(0.50, 0.58, band));
  return w * 0.04;
}

// ── 바다 반짝임 (낮은 높이) ──
float seaSparkle(vec2 uv, float seaVis) {
  if (seaVis < 0.01) return 0.0;
  vec2 g = floor(uv * vec2(60.0, 30.0));
  float h = hash(g + floor(uTime * 4.0));
  return step(0.94, h) * 0.35 * seaVis;
}

void main() {
  float h = clamp(uHeightRatio, 0.0, 1.0);

  // 세로 방향도 살짝 섞어 화면 아래가 조금 더 어둡게
  float hScreen = h + (1.0 - vUv.y) * 0.10;

  // ── 배경 색상 5단계 보간 ──
  vec3 col;
  if (hScreen < 0.12) {
    col = mix(C_SEA,   C_COAST, hScreen / 0.12);
  } else if (hScreen < 0.35) {
    col = mix(C_COAST, C_NIGHT, (hScreen - 0.12) / 0.23);
  } else if (hScreen < 0.60) {
    col = mix(C_NIGHT, C_DEEP,  (hScreen - 0.35) / 0.25);
  } else if (hScreen < 0.85) {
    col = mix(C_DEEP,  C_SPACE, (hScreen - 0.60) / 0.25);
  } else {
    col = mix(C_SPACE, C_MOON_GLOW, (hScreen - 0.85) / 0.15);
  }

  // ── 별 ──
  float starVis = smoothstep(0.25, 0.55, h);
  col += stars(vUv, starVis);

  // ── 은하수 (우주 구간) ──
  float mwVis = smoothstep(0.55, 0.75, h);
  col += milkyWay(vUv) * mwVis;

  // ── 바다 반짝임 (바다/해안 구간) ──
  float seaVis = smoothstep(0.15, 0.0, h);   // 낮을수록 강함
  float sparkle = seaSparkle(vUv, seaVis);
  col += vec3(0.4, 0.7, 1.0) * sparkle;

  // ── 달 궤도 글로우 (상단) ──
  float moonZoneVis = smoothstep(0.80, 1.0, h);
  // 화면 위쪽에 달빛 산란 효과
  float moonGlow = (1.0 - vUv.y) * moonZoneVis * 0.12;
  col += vec3(0.7, 0.8, 1.0) * moonGlow;

  gl_FragColor = vec4(col, 1.0);
}
