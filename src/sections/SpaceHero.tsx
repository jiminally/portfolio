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
          <motion.span custom={1} variants={reveal} className="block">
            오래 떠돌았지만,
          </motion.span>
          <motion.span custom={2} variants={reveal} className="block">
            이제 <span className="text-accent-orange">여기</span>에
          </motion.span>
          <motion.span custom={3} variants={reveal} className="block">
            내려앉았어요
          </motion.span>
        </h1>
        <motion.p
          custom={4}
          variants={reveal}
          className="max-w-[480px] font-sans text-[19px] leading-[1.75] text-[#DAD6F5]"
        >
          느리게 배우지만 한 번 붙잡으면 끝까지 파고드는, 사람들과 함께 굴러가는
          걸 좋아하는 개발자 남지민입니다.
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
