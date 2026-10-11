import { hero } from '@/data/hero'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import AltitudeLabel from '@/components/ui/AltitudeLabel'
import InteractiveRobot from '@/components/robot/InteractiveRobot'

type SpaceHeroProps = { ready?: boolean }

const lines = [
  '삐빅! 반가워요.',
  '천천히 가도 괜찮아요.',
  '아래로 같이 내려가볼래요?',
]

export default function SpaceHero({ ready = true }: SpaceHeroProps) {
  const reducedMotion = useReducedMotion()
  const reveal: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : index * 0.16,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.section
      id="space"
      tabIndex={-1}
      aria-labelledby="space-title"
      initial={reducedMotion ? false : 'hidden'}
      animate={ready || reducedMotion ? 'visible' : 'hidden'}
      className="landing-section grid min-h-[calc(100svh-var(--header-height))] items-center gap-8 py-12 break-keep text-text-on-dark md:grid-cols-[minmax(0,1fr)_240px] md:gap-12 md:py-20"
    >
      <div className="min-w-0 space-y-7">
        <motion.div custom={0} variants={reveal}>
          <AltitudeLabel
            altitude="400km"
            label="우주"
            blinking
            className="text-[#C9C4EE]"
          />
        </motion.div>
        <h1
          id="space-title"
          className="font-display text-[clamp(40px,5vw,64px)] leading-[1.2] font-normal tracking-[-1.5px]"
        >
          {hero.copy.map((line, index) => (
            <motion.span
              key={index}
              custom={index + 1}
              variants={reveal}
              className="block"
            >
              {line.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className={
                    part.highlighted ? 'text-accent-orange' : undefined
                  }
                >
                  {part.text}
                </span>
              ))}
            </motion.span>
          ))}
        </h1>
        <motion.p
          custom={4}
          variants={reveal}
          className="max-w-[480px] font-sans text-[19px] leading-[1.75] text-[#DAD6F5]"
        >
          {hero.introduction}
        </motion.p>
        <motion.p
          custom={5}
          variants={reveal}
          className="pt-2 font-mono text-[13px] text-[#A9A4D4]"
        >
          스크롤해서 함께 착륙해요{' '}
          <span aria-hidden="true" className="hero-scroll-arrow inline-block">
            ↓
          </span>
        </motion.p>
      </div>
      {/* Keep positioning separate so this robot can move into a scroll rail later. */}
      <div className="-order-1 justify-self-center md:order-none">
        <InteractiveRobot
          mood="happy"
          pose="wave"
          antennaColor="orange"
          size={200}
          floating
          lines={lines}
          className="[&_.robot-svg]:w-[150px] md:[&_.robot-svg]:w-[200px]"
        />
      </div>
    </motion.section>
  )
}
