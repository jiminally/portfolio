import { motion, useReducedMotion } from 'motion/react'
import AltitudeLabel from '@/components/ui/AltitudeLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  const reducedMotion = useReducedMotion()
  return (
    <section
      id="clouds"
      tabIndex={-1}
      aria-labelledby="clouds-title"
      className="landing-section relative min-h-[960px] py-24 break-keep text-text-on-light"
    >
      <header className="mb-9 max-w-[700px] space-y-3">
        <AltitudeLabel
          altitude="10km"
          label="구름층 통과"
          className="text-[#2D2870]"
        />
        <h2 id="clouds-title" className="font-display text-[42px] font-normal">
          지나온 프로젝트들
        </h2>
        <p className="text-[17px] text-[#2D2870]">
          구름 하나하나가 제가 다녀온 곳이에요.
        </p>
      </header>
      <ul className="grid gap-[18px] md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              delay: reducedMotion ? 0 : index * 0.1,
            }}
          >
            {/* Use href={`/projects/${project.id}`} when issue #11 adds the detail route. */}
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
