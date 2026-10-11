import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import AltitudeLabel from '@/components/ui/AltitudeLabel'
import { about } from '@/data/about'

type RevealCardProps = {
  children: ReactNode
  index: number
  className?: string
}

function RevealCard({ children, index, className = '' }: RevealCardProps) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        delay: reducedMotion ? 0 : index * 0.12,
      }}
      className={className}
    >
      <motion.article
        whileHover={reducedMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25 }}
        className="h-full rounded-3xl p-7 glass-dark"
      >
        {children}
      </motion.article>
    </motion.div>
  )
}

export default function ExplorationLog() {
  return (
    <section
      id="log"
      tabIndex={-1}
      aria-labelledby="log-title"
      className="landing-section min-h-[960px] pt-20 pb-40 break-keep text-text-on-dark"
    >
      <header className="mb-9 space-y-3">
        <AltitudeLabel
          altitude={about.altitude}
          label={about.altitudeLabel}
          className="text-[#FFD3AE]"
        />
        <h2 id="log-title" className="font-display text-[42px] font-normal">
          {about.title}
        </h2>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {about.traits.map((trait, index) => (
          <RevealCard key={trait.label} index={index}>
            <p className="mb-3 font-mono text-[13px] text-[#C9C4EE]">
              {trait.label}
            </p>
            <h3 className="mb-3 font-display text-[22px] font-normal">
              {trait.title}
            </h3>
            <p className="font-sans text-base leading-[1.7] text-[#E4E1F7]">
              {trait.description}
            </p>
          </RevealCard>
        ))}
        <RevealCard index={3} className="md:col-span-3">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-[26px] font-normal">
              {about.equipmentTitle}
            </h3>
            <p className="font-mono text-xs tracking-widest text-[#C9C4EE]">
              {about.equipmentLabel}
            </p>
          </div>
          <dl className="space-y-5">
            {about.stack.map(({ category, technologies }) => (
              <div
                key={category}
                className="grid gap-3 sm:grid-cols-[112px_1fr] sm:items-start"
              >
                <dt className="pt-1.5 font-mono text-[13px] text-[#C9C4EE]">
                  {category}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-text-on-dark/20 bg-text-on-dark/10 px-4 py-1.5 text-sm text-[#E4E1F7]"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </RevealCard>
      </div>
    </section>
  )
}
