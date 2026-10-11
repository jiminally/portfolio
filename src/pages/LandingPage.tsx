import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import HomePage from '@/pages/HomePage'
import Intro from '@/sections/Intro'
import useScrollLock from '@/hooks/useScrollLock'
import { markIntroSeen, shouldShowIntro } from '@/lib/introSession'

export default function LandingPage() {
  const [phase, setPhase] = useState<'intro' | 'exiting' | 'home'>(() =>
    shouldShowIntro() ? 'intro' : 'home',
  )
  const hadIntro = useRef(phase === 'intro')
  useScrollLock(phase !== 'home')

  const complete = useCallback(() => {
    markIntroSeen()
    setPhase('exiting')
  }, [])

  useEffect(() => {
    if (phase !== 'home' || !hadIntro.current) return
    hadIntro.current = false
    const target =
      document.getElementById(window.location.hash.slice(1)) ??
      document.getElementById('main-content')
    target?.focus({ preventScroll: true })
    if (window.location.hash) target?.scrollIntoView({ behavior: 'instant' })
  }, [phase])

  return (
    <>
      {phase !== 'intro' && (
        <div inert={phase !== 'home'}>
          <HomePage />
        </div>
      )}
      <AnimatePresence onExitComplete={() => setPhase('home')}>
        {phase === 'intro' && <Intro key="intro" onComplete={complete} />}
      </AnimatePresence>
    </>
  )
}
