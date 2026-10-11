import { motion, useReducedMotion } from 'motion/react'
import AltitudeLabel from '@/components/ui/AltitudeLabel'
import { timeline } from '@/data/timeline'
import type { TimelineKind } from '@/types/timeline'

const markerColors: Record<TimelineKind, string> = {
  EDUCATION: '#7C9BE8',
  ACTIVITY: '#8FD6C3',
  CONTEST: '#F2A65A',
  CAREER: '#F4A0B5',
}

export default function ActivityTimeline() {
  const reducedMotion = useReducedMotion()
  return (
    <section
      id="timeline"
      tabIndex={-1}
      aria-labelledby="timeline-title"
      className="landing-section py-24 break-keep text-[#2A2557]"
    >
      <header className="mb-9 space-y-3">
        <AltitudeLabel
          altitude="1km"
          label="착륙 접근"
          className="text-[#6A2F5E]"
        />
        <h2
          id="timeline-title"
          className="font-display text-[42px] font-normal"
        >
          지나온 항로
        </h2>
        <p className="text-[17px]">배우고, 만들고, 함께했던 기록이에요.</p>
      </header>
      <ol className="relative space-y-5">
        {timeline.map((entry, index) => (
          <motion.li
            key={`${entry.kind}-${entry.title}`}
            initial={reducedMotion ? false : 'hidden'}
            animate={reducedMotion ? 'visible' : undefined}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-8 sm:pl-10"
          >
            {index < timeline.length - 1 && (
              <motion.span
                aria-hidden="true"
                variants={{
                  hidden: { clipPath: 'inset(0 0 100% 0)' },
                  visible: {
                    clipPath: 'inset(0 0 0% 0)',
                    transition: {
                      duration: reducedMotion ? 0 : 0.65,
                      delay: reducedMotion ? 0 : index * 0.12,
                    },
                  },
                }}
                className="pointer-events-none absolute top-8 left-[7px] h-[calc(100%+20px)] border-l-2 border-dashed border-[#2A2557]/30"
              />
            )}
            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: reducedMotion ? 0 : 0.3,
                    delay: reducedMotion ? 0 : index * 0.12,
                  },
                },
              }}
              style={{ backgroundColor: markerColors[entry.kind] }}
              className="absolute top-8 left-0 z-10 size-4 rounded-full border-2 border-white/80"
            />
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reducedMotion ? 0 : 0.55,
                    delay: reducedMotion ? 0 : index * 0.12,
                  },
                },
              }}
              className="grid gap-4 rounded-3xl p-6 glass-light sm:grid-cols-[140px_minmax(0,1fr)] sm:p-7"
            >
              <p className="font-mono text-sm text-[#4A4370]">{entry.when}</p>
              <div className="min-w-0 space-y-2">
                <p className="font-mono text-xs tracking-wider text-[#4A4370]">
                  {entry.kind}
                </p>
                <h3 className="font-display text-[24px] font-normal text-[#2A2557]">
                  {entry.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4A4370]">
                  {entry.desc}
                </p>
              </div>
            </motion.article>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
