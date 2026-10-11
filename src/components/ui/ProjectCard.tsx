import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'
import type { Project } from '@/types/project'

type ProjectCardProps = {
  project: Project
  href?: string
}

export default function ProjectCard({
  project,
  href = '#clouds',
}: ProjectCardProps) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.a
      href={href}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className="flex h-full items-start gap-[18px] rounded-[26px] p-6 glass-light text-text-on-light transition-shadow hover:shadow-[0_18px_40px_rgba(60,58,140,0.22)] focus-visible:shadow-[0_18px_40px_rgba(60,58,140,0.22)]"
    >
      <span
        aria-hidden="true"
        className="project-orb size-12 shrink-0 rounded-full"
        style={{ '--orb-color': project.color } as CSSProperties}
      />
      <div className="min-w-0 space-y-1.5 break-keep">
        <p className="font-mono text-xs text-[#4A4594]">{project.tag}</p>
        <h3 className="font-display text-[21px] font-normal">{project.name}</h3>
        <p className="font-sans text-[15px] leading-[1.6] text-[#3A3570]">
          {project.summary}
        </p>
      </div>
    </motion.a>
  )
}
