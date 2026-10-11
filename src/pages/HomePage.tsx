import Layout from '@/components/layout/Layout'
import SkyBackground from '@/components/space/SkyBackground'

export default function HomePage() {
  return (
    <SkyBackground>
      <Layout>
        <section
          id="space"
          tabIndex={-1}
          aria-labelledby="space-title"
          className="landing-section min-h-[960px] py-24 text-text-on-dark"
        >
          <p className="mb-6 font-mono text-sm text-accent-mint">
            ALT 400km · 우주
          </p>
          <h1 id="space-title" className="max-w-2xl text-5xl sm:text-7xl">
            오래 떠돌았지만,
            <br />
            이제 <span className="text-accent-orange">여기</span>에 내려앉았어요
          </h1>
          <p className="mt-8 max-w-lg">
            우주에서 시작하는 이야기. 첫 인사를 담을 공간입니다.
          </p>
        </section>
        <section
          id="log"
          tabIndex={-1}
          aria-labelledby="log-title"
          className="landing-section min-h-[960px] py-24"
        >
          <div className="max-w-2xl rounded-3xl p-8 glass-dark">
            <p className="mb-6 font-mono text-sm">ALT 120km · 대기권 진입</p>
            <h2 id="log-title" className="text-4xl sm:text-5xl">
              탐사 일지
            </h2>
            <p className="mt-6">
              배우고 경험한 이야기가 이곳에 쌓일 예정입니다.
            </p>
          </div>
        </section>
        <section
          id="clouds"
          tabIndex={-1}
          aria-labelledby="clouds-title"
          className="landing-section min-h-[960px] py-24 text-text-on-light"
        >
          <p className="mb-6 font-mono text-sm">ALT 10km · 구름층 통과</p>
          <h2 id="clouds-title" className="text-4xl sm:text-5xl">
            지나온 프로젝트들
          </h2>
          <p className="mt-6">여정을 함께한 프로젝트를 소개할 공간입니다.</p>
        </section>
        <section
          id="earth"
          tabIndex={-1}
          aria-labelledby="earth-title"
          className="landing-section min-h-[960px] py-24 text-text-on-light"
        >
          <p className="mb-6 font-mono text-sm">ALT 0m · 착륙 완료</p>
          <h2 id="earth-title" className="text-4xl sm:text-5xl">
            착륙 지점
          </h2>
          <p className="mt-6">새로운 만남과 연락을 위한 공간입니다.</p>
        </section>
      </Layout>
    </SkyBackground>
  )
}
