import { useState } from 'react'
import Robot, { type RobotProps } from '@/components/robot/Robot'
import InteractiveRobot from '@/components/robot/InteractiveRobot'

const palette = [
  { name: 'Orange', value: '#F2A65A', background: 'bg-accent-orange' },
  { name: 'Mint', value: '#8FD6C3', background: 'bg-accent-mint' },
  { name: 'On dark', value: '#F4EEE3', background: 'bg-text-on-dark' },
  { name: 'On light', value: '#1F1B4D', background: 'bg-text-on-light' },
]

const atmosphere = [
  { value: '#07061A', background: 'bg-space-950' },
  { value: '#141133', background: 'bg-space-900' },
  { value: '#262062', background: 'bg-space-800' },
  { value: '#4A47A6', background: 'bg-space-700' },
  { value: '#7880DF', background: 'bg-sky-600' },
  { value: '#A3A5EE', background: 'bg-sky-500' },
  { value: '#CDB6DF', background: 'bg-cloud-400' },
  { value: '#F6C9B6', background: 'bg-dawn-300' },
  { value: '#FFE2C6', background: 'bg-dawn-200' },
]

// Reference screen for the design tokens introduced in issue #2.
function DesignSystemPage() {
  const [robotMood, setRobotMood] =
    useState<NonNullable<RobotProps['mood']>>('idle')
  const [signalSent, setSignalSent] = useState(false)

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-10 sm:py-20">
      <header className="mb-14 max-w-2xl">
        <p className="mb-4 font-mono text-sm tracking-widest text-accent-mint">
          JIMIN / DESIGN SYSTEM / 02
        </p>
        <h1 className="mb-5 text-5xl sm:text-7xl">지구로 향하는 첫 신호</h1>
        <p>
          우주에서 착륙까지, 포트폴리오의 색과 글자, 표면을 확인하는 임시
          화면입니다.
        </p>
      </header>

      <section aria-labelledby="type-title" className="mb-14">
        <h2 id="type-title" className="mb-6 text-3xl">
          01. 글자의 목소리
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl p-6 glass-dark">
            <p className="mb-4 font-mono text-sm text-accent-mint">
              DISPLAY / Do Hyeon
            </p>
            <h3 className="font-display text-3xl">천천히, 그러나 끝까지</h3>
            <p className="mt-4 text-sm">제목 · 굵기 400</p>
          </article>
          <article className="rounded-3xl p-6 glass-dark">
            <p className="mb-4 font-mono text-sm text-accent-mint">
              BODY / Noto Sans KR
            </p>
            <p className="font-sans text-lg">
              낯선 궤도에서도 배우며 나아갑니다. 함께 만드는 이야기를 담습니다.
            </p>
          </article>
          <article className="rounded-3xl p-6 glass-dark">
            <p className="mb-4 font-mono text-sm text-accent-mint">
              LABEL / IBM Plex Mono
            </p>
            <p className="font-mono text-xl">
              ALT 400km
              <br />
              SIGNAL 001
              <br />
              0123456789
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="color-title" className="mb-14">
        <h2 id="color-title" className="mb-6 text-3xl">
          02. 여행의 색
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {palette.map(({ name, value, background }) => (
            <li key={name}>
              <div
                aria-hidden="true"
                className={`${background} mb-3 h-24 rounded-2xl border border-text-on-dark/20`}
              />
              <p>{name}</p>
              <p className="font-mono text-sm">{value}</p>
            </li>
          ))}
        </ul>
        <ul
          aria-label="배경 그라데이션 색상"
          className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-9"
        >
          {atmosphere.map(({ value, background }) => (
            <li key={value}>
              <div
                aria-hidden="true"
                className={`${background} mb-2 h-16 rounded-xl border border-text-on-dark/20`}
              />
              <p className="font-mono text-xs">{value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="surface-title">
        <h2 id="surface-title" className="mb-6 text-3xl">
          03. 우주에서 구름까지
        </h2>
        <div className="flex flex-col gap-48 rounded-3xl bg-landing p-6 sm:p-10">
          <article className="max-w-lg rounded-3xl p-6 glass-dark sm:p-8">
            <p className="mb-3 font-mono text-sm text-accent-mint">
              ALT 400km / GLASS DARK
            </p>
            <h3 className="mb-4 text-3xl">어둠 속에서 발견한 신호</h3>
            <p>따뜻한 텍스트와 반투명 유리 표면으로 우주의 깊이를 담습니다.</p>
            <button
              type="button"
              onClick={() => setSignalSent((sent) => !sent)}
              aria-pressed={signalSent}
              className="mt-6 rounded-full bg-accent-orange px-6 py-3 font-medium text-text-on-light glow-btn"
            >
              {signalSent ? '신호 다시 보내기' : '신호에 응답하기'}
            </button>
            <p role="status" className="mt-4 text-sm">
              {signalSent
                ? '신호를 받았어요. 착륙을 준비합니다.'
                : '버튼에 마우스를 올리거나 Tab 키로 이동해 보세요.'}
            </p>
          </article>
          <article className="max-w-lg self-end rounded-3xl p-6 glass-light sm:p-8">
            <p className="mb-3 font-mono text-sm">ALT 10km / GLASS LIGHT</p>
            <h3 className="mb-4 text-3xl">구름 너머의 새로운 이야기</h3>
            <p>
              밝은 구간에서는 짙은 보라색 글자와 부드러운 유리 표면을
              사용합니다.
            </p>
          </article>
        </div>
      </section>
      <section aria-labelledby="robot-title" className="mt-14">
        <h2 id="robot-title" className="mb-6 text-3xl">
          04. 여행을 함께할 로봇
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(['sleep', 'idle', 'happy'] as const).flatMap((mood) =>
            (['rest', 'wave'] as const).map((pose) => (
              <figure
                key={`${mood}-${pose}`}
                className="flex flex-col items-center gap-6 rounded-3xl p-6 glass-dark"
              >
                <Robot
                  mood={mood}
                  pose={pose}
                  antennaColor={pose === 'rest' ? 'mint' : 'orange'}
                  size={180}
                />
                <figcaption className="font-mono text-sm">
                  {mood} / {pose}
                </figcaption>
              </figure>
            )),
          )}
        </div>
        <div className="mt-6 rounded-3xl p-6 glass-dark">
          <h3 className="mb-4 text-2xl">로봇에게 인사해 보세요</h3>
          <p className="mb-6">
            상태를 바꾸면 색과 눈이 전환됩니다. 로봇을 클릭하거나 Enter·Space
            키로 대사를 확인하세요.
          </p>
          <div
            role="group"
            aria-label="로봇 기분"
            className="mb-8 flex flex-wrap gap-3"
          >
            {(['sleep', 'idle', 'happy'] as const).map((mood) => (
              <button
                key={mood}
                type="button"
                aria-pressed={robotMood === mood}
                onClick={() => setRobotMood(mood)}
                className="rounded-full border border-accent-mint px-4 py-2 font-mono text-sm aria-pressed:bg-accent-mint aria-pressed:text-text-on-light"
              >
                {mood}
              </button>
            ))}
          </div>
          <InteractiveRobot
            mood={robotMood}
            pose="wave"
            antennaColor="orange"
            floating
            lines={[
              '안녕! 지구의 신호를 따라왔어요.',
              '천천히 가도 괜찮아요. 함께 가요!',
              '다음에는 어떤 곳을 탐험할까요?',
            ]}
          />
        </div>
      </section>
    </main>
  )
}

export default DesignSystemPage
