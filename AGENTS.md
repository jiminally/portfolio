# 프로젝트 개요

남지민의 개인 포트폴리오 웹사이트.
컨셉은 **"우주를 떠돌던 로봇이 지구의 신호를 받고 내려와 착륙하는 이야기"**.

- 첫 화면(인트로): 우주에 떠 있는 로봇에게 지구에서 신호가 온다. [신호에 응답하기]를 누르면 로봇이 지구로 내려가며 본 페이지로 전환된다.
- 본 페이지: 스크롤을 내릴수록 우주 → 대기권 → 구름층 → 지구로 내려온다. 로봇이 화면을 따라 함께 내려오다가 맨 아래 언덕 위 깃발 옆에 착지한다.
- 구간별 고도 표시: ALT 400km(우주, 히어로) → ALT 120km(탐사 일지) → ALT 10km(프로젝트) → ALT 0m(착륙, 연락처)

정적 사이트로 만들고, 방명록(신호 보내기) 기능만 나중에 별도 API로 붙인다.

# 기술 스택

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion: 인트로 화면 상태 전환 애니메이션
- GSAP + ScrollTrigger: 스크롤 연동 연출 (로봇 하강, 패럴랙스, 고도 표시)
- Lenis: 부드러운 스크롤
- React Router: 메인, 프로젝트 상세 페이지 라우팅
- ESLint + Prettier (eslint-config-prettier, prettier-plugin-tailwindcss)
- 배포: Vercel

# 디자인 기준

- 시안 파일: `design/Landing.dc.html`
  - 디자인 툴 전용 형식이라 `<x-dc>`, `<sc-for>`, `<sc-if>`, `{{ }}`, `DCLogic` 같은 문법은 무시한다.
  - SVG(로봇, 지구, 깃발, 구름), 색상값, 그라데이션, 레이아웃, 애니메이션 keyframes만 참고해서 React 컴포넌트로 옮긴다.
- 폰트
  - 제목, 로고, 카드 제목: Do Hyeon (font-weight 400 고정, 가짜 볼드 금지)
  - 본문: Noto Sans KR
  - 고도 라벨, 메뉴, 작은 라벨: IBM Plex Mono
- 색상
  - 포인트 주황: #F2A65A
  - 포인트 민트: #8FD6C3
  - 배경 그라데이션(위→아래): #07061A → #141133 → #262062 → #4A47A6 → #7880DF → #A3A5EE → #CDB6DF → #F6C9B6 → #FFE2C6
  - 어두운 구간 텍스트: #F4EEE3, 밝은 구간 텍스트: #1F1B4D
- 카드: 반투명 유리 질감 (어두운 구간은 어두운 유리, 구름 구간부터는 밝은 유리)

# 폴더 구조

```
src/
├─ assets/images/
├─ components/
│  ├─ robot/       Robot.tsx, SpeechBubble.tsx
│  ├─ space/       Earth.tsx, Cloud.tsx, Stars.tsx, Flag.tsx
│  ├─ ui/          GlassCard.tsx, Button.tsx, AltitudeLabel.tsx
│  └─ layout/      Header.tsx, Footer.tsx
├─ sections/       Intro.tsx, SpaceHero.tsx, ExplorationLog.tsx, Projects.tsx, Landing.tsx
├─ pages/          HomePage.tsx, ProjectDetailPage.tsx
├─ data/           projects.ts, projects/*.md
├─ hooks/          useLenis.ts, useRobotDescent.ts
├─ lib/            api.ts
├─ styles/         globals.css
├─ types/          project.ts
├─ App.tsx
└─ main.tsx
```

- components: 여러 곳에서 재사용하는 부품
- sections: 메인 페이지의 고도 구간 하나씩
- hooks: GSAP, Lenis 같은 연출 로직은 컴포넌트에서 분리해 훅으로 둔다
- data: 프로젝트 내용은 코드와 분리한다
- import는 `@/` 절대 경로를 사용한다

# 코드 규칙

- 함수형 컴포넌트 + TypeScript, props 타입은 명시한다.
- 스타일은 Tailwind를 기본으로 하고, 복잡한 keyframes나 그라데이션만 globals.css에 둔다.
- 접근성
  - 클릭 가능한 요소는 `button` 또는 `a` 태그를 쓴다 (div에 onClick 금지).
  - 아이콘만 있는 버튼은 `aria-label`을 단다.
  - 장식용 SVG는 `aria-hidden="true"`.
  - 텍스트 명도 대비 4.5:1 이상을 지킨다.
- `prefers-reduced-motion: reduce`일 때 애니메이션을 최소화한다.
- 모바일(390px)에서도 가로 스크롤 없이 동작해야 한다.
- 로봇 SVG는 나중에 Spline 3D로 교체할 수 있도록 Robot 컴포넌트의 props 인터페이스를 단순하게 유지한다.

# Git 규칙

- 브랜치: `타입/이슈번호-작업내용` (예: `feat/4-robot`, `chore/1-project-setup`)
- 커밋 메시지: `타입: 작업 내용` (한글 가능)
  - feat: 기능 추가 / fix: 버그 수정 / style: 스타일, UI 수정 / refactor: 리팩터링 / chore: 설정, 빌드 / docs: 문서
  - 예: `feat: 인트로 신호 화면 구현`
- PR 본문에 `close #이슈번호`를 적는다.
- 작업 단위는 이슈 하나. 이슈 범위를 넘는 수정은 하지 말고 따로 알려준다.

# 작업 완료 시

- 변경한 파일 목록
- 직접 확인해야 할 부분 (브라우저에서 볼 화면, 동작)
- 남은 TODO나 다음 이슈로 넘길 것
