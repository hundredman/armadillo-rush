# Armadillo Rush

> 🌊 바다를 박차고 올라, 섬을 디디며, 🌕 달에 닿아라.

**[▶ 온라인 플레이](https://hundredman.github.io/armadillo-rush/)**

---

## 게임 소개

바다 절벽 위의 슬링에서 아르마딜로를 발사한다. 공중에 떠 있는 섬들을 타고 위로 올라가 달에 닿는 것이 목표.

섬에 착지하는 순간 타이밍에 맞게 입력하면 속도가 붙고, 속도가 높으면 장애물과 지형을 파괴하며 돌파할 수 있다. 속도가 부족하면 섬 사이 갭을 넘지 못하고 바다로 추락한다.

**세계 구조:**
```
🌕 달  ← 최종 목표 (MOON REACHED!)
  ↑
우주 (별, 은하수)
  ↑
성층권
  ↑
밤하늘
  ↑
🌊 바다 ← 추락 시 SPLASH! (게임 오버)
```

---

## 조작법

| 플랫폼 | 발사 | 타이밍 가속 |
|--------|------|------------|
| PC | 슬링 드래그 후 마우스 버튼 놓기 | 클릭 or Space |
| 모바일 | 슬링 드래그 후 손 떼기 | 화면 탭 |

- 드래그 방향과 반대 방향으로 발사
- 길게 당길수록 파워 증가
- 섬 착지 직후 타이밍에 맞게 입력 → PERFECT / GOOD / OK / MISS 판정

---

## 주요 기능

### 슬링 발사 시스템
마우스/터치 드래그로 각도와 파워를 직관적으로 설정. Y자 슬링 비주얼과 포물선 궤적 미리보기 제공.

### 속도 기반 물리
`speedRatio (0~1)` 하나가 모든 것을 결정한다.
- 높으면 장애물/지형 파괴 + 갭을 멀리 날아 넘음
- 낮으면 막힘 + 추락 위기

### 그릇(Bowl) 형태 지형
모든 섬은 매끄러운 CatmullRom 스플라인 곡선으로 생성된다.
- **Bowl** (U자): 중심이 낮고 양 끝이 올라가는 오목형 — 중심으로 굴러들어가며 자연 가속
- **Ramp** (경사): 완만한 오르막 — 오른쪽 끝에서 자연스러운 발사 각도
- **Wave** (파도): S자 곡선 — 낮은 입구에서 높은 출구로

### 절차적 무한 생성
아르마딜로가 진행할수록 섬이 자동 생성된다. 진행도에 따라 섬이 좁아지고 갭이 넓어져 난이도가 상승한다.

### Planck.js 물리 엔진
비행·추락 구간은 Box2D 포트인 Planck.js가 처리. 중력, 충돌, CCD(터널링 방지) 포함.

### 세계관 — 바다에서 달까지
배경 셰이더가 높이에 따라 5단계로 변화한다: **바다 수면(청록) → 밤하늘(남색) → 성층권(짙은 보라) → 우주(검정 + 별) → 달 궤도(회청 글로우)**. 바다로 추락하면 `SPLASH!`, 달 고도 도달 시 `🌕 MOON REACHED!` 클리어.

### Postprocessing 파이프라인
`postprocessing` 라이브러리 기반 EffectComposer:
- Bloom (trauma 반응형 강도)
- Chromatic Aberration (충격 시 강도 증가)
- Vignette

### GLSL 셰이더
- **파티클 셰이더** (`particle.vert/frag`): InstancedMesh 512슬롯, GPU 인스턴싱
- **크레이터 셰이더** (`crater.frag`): FBM 노이즈 기반 유기적 크레이터 엣지 + 생성 직후 플래시
- **배경 셰이더**: 높이에 따라 밤하늘 → 우주색으로 변화

### 타이밍 시스템
착지 순간부터 시작되는 타이밍 윈도우. 진행할수록 윈도우가 좁아져 반응 속도가 요구된다.
연속 PERFECT 시 콤보 보너스 속도 추가.

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 렌더링 | Three.js r171 (WebGL 2.0) |
| 포스트프로세싱 | postprocessing ^6 (EffectComposer) |
| 물리 | Planck.js ^1 (Box2D 포트) |
| 셰이더 | 커스텀 GLSL (ShaderMaterial) |
| 빌드 | Vite 6 |
| 언어 | Vanilla JavaScript (ES Modules) |

---

## 로컬 실행

```bash
npm install
npm run dev
```

빌드:

```bash
npm run build
```

---

## 파일 구조

```
src/
├── main.js                 # 게임 루프, 상태 머신, 슬링 시스템
├── state.js                # 상태 머신 (TITLE → SLINGING → FLYING → ROLLING ⇄ FALLING → GAMEOVER)
├── config.js               # 물리 상수, 점수 설정
├── assets.js               # 스프라이트 로더
├── ui.css                  # HUD 스타일
├── game/
│   ├── terrain.js          # Bowl/Ramp/Wave 지형 생성 + 절차적 생성 + 파괴 시스템
│   ├── particles.js        # InstancedMesh 파티클 시스템 (512슬롯)
│   └── physics.js          # Planck.js 래퍼 (비행·추락 물리)
├── renderer/
│   ├── scene.js            # Renderer + OrthographicCamera
│   ├── background.js       # 배경 그라데이션 셰이더
│   └── postfx.js           # PostFX 파이프라인 (Bloom + CA + Vignette)
└── shaders/
    ├── particle.vert/frag  # 인스턴스 파티클 셰이더
    ├── crater.vert/frag    # FBM 크레이터 셰이더
    └── background.vert/frag
```

---

## 점수 시스템

| 항목 | 점수 |
|------|------|
| 높이 1m | 100점 |
| 거리 1m | 10점 |
| 타이밍 PERFECT | +500점 |
| 타이밍 GOOD | +200점 |
| 연속 PERFECT 콤보 | 콤보 수 × 300점 |
| 장애물 파괴 | 재질별 100~500점 |

---

## 라이선스

스프라이트 에셋: [Kenney.nl](https://kenney.nl) (CC0 Public Domain) — [ATTRIBUTION.md](ATTRIBUTION.md) 참조
