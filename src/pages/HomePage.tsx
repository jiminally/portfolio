import Landing from '@/sections/Landing'
import ActivityTimeline from '@/sections/ActivityTimeline'
import Projects from '@/sections/Projects'
import ExplorationLog from '@/sections/ExplorationLog'
import SpaceHero from '@/sections/SpaceHero'
import Layout from '@/components/layout/Layout'
import SkyBackground from '@/components/space/SkyBackground'

type HomePageProps = { ready?: boolean }

export default function HomePage({ ready = true }: HomePageProps) {
  return (
    <SkyBackground>
      <Layout>
        <div className="mx-auto max-w-[1200px] px-6">
          <SpaceHero ready={ready} />
          <ExplorationLog />
          <Projects />
          <ActivityTimeline />
        </div>
        <Landing />
      </Layout>
    </SkyBackground>
  )
}
