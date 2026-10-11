import ExplorationLog from '@/sections/ExplorationLog'
import SpaceHero from '@/sections/SpaceHero'
import Layout from '@/components/layout/Layout'
import SkyBackground from '@/components/space/SkyBackground'

type HomePageProps = { ready?: boolean }

export default function HomePage({ ready = true }: HomePageProps) {
  return (
    <SkyBackground>
      <Layout>
        <SpaceHero ready={ready} />
        <ExplorationLog />
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
