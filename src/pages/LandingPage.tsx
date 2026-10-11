import { useCallback, useLayoutEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import HomePage from '@/pages/HomePage'
import Intro from '@/sections/Intro'
import useScrollLock from '@/hooks/useScrollLock'

export default function LandingPage() {
  const [phase, setPhase] = useState<'intro' | 'exiting' | 'home'>('intro')
  useScrollLock(phase !== 'home')

  const complete = useCallback(() => {
    setPhase('exiting')
  }, [])

  useLayoutEffect(() => {
    if (phase !== 'home') return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
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
