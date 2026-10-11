import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Robot from '@/components/robot/Robot'

type IntroProps = { onComplete: () => void }

export default function Intro({ onComplete }: IntroProps) {
  const [powered, setPowered] = useState(false)
  const started = useRef(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    buttonRef.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    if (!powered) return
    const timer = window.setTimeout(onComplete, reducedMotion ? 0 : 4200)
    return () => window.clearTimeout(timer)
  }, [powered, reducedMotion, onComplete])

  function powerOn() {
    if (started.current) return
    started.current = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
    } else {
      setPowered(true)
    }
  }

  return (
    <motion.section
      aria-label="로봇 전원 켜기"
      className="intro-screen fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      initial={false}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.6 }}
    >
      <div
        aria-hidden="true"
        className="intro-stars pointer-events-none absolute inset-0"
      />
      <div className="relative flex flex-col items-center gap-12 px-6 py-8">
        <div className={powered ? 'intro-robot-wake' : ''}>
          <Robot
            mood={powered ? 'idle' : 'sleep'}
            antennaColor="orange"
            size={230}
            floating
            className="intro-robot"
          />
        </div>
        <button
          ref={buttonRef}
          type="button"
          aria-label="전원 켜기"
          aria-disabled={powered}
          aria-pressed={powered}
          onClick={powerOn}
          data-powered={powered}
          className="intro-power relative flex size-[84px] shrink-0 items-center justify-center rounded-full border text-accent-orange focus-visible:outline-accent-orange"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 3v9M6.34 5.66a8 8 0 1 0 11.32 0" />
          </svg>
        </button>
      </div>
    </motion.section>
  )
}
