import { useRef, type ReactNode } from 'react'
import Cloud from '@/components/space/Cloud'
import Stars from '@/components/space/Stars'
import useParallax from '@/hooks/useParallax'

type SkyBackgroundProps = { children: ReactNode }

export default function SkyBackground({ children }: SkyBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)
  useParallax(backgroundRef)

  return (
    <div ref={backgroundRef} className="relative isolate min-h-svh bg-landing">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="sky-nebula absolute inset-0" />
        <Stars />
        <div
          data-parallax="cloud"
          className="absolute top-[51%] -left-24 opacity-90 sm:-left-16"
        >
          <Cloud size={420} className="w-[300px] sm:w-[420px]" />
        </div>
        <div
          data-parallax="cloud"
          className="absolute top-[60%] -right-32 opacity-90 sm:-right-24"
        >
          <Cloud variant="warm" size={520} className="w-[340px] sm:w-[520px]" />
        </div>
        <div
          data-parallax="cloud"
          className="absolute top-[69%] -left-12 opacity-80 sm:left-[6%]"
        >
          <Cloud variant="warm" size={300} className="w-[240px] sm:w-[300px]" />
        </div>
        <div
          data-parallax="cloud"
          className="absolute top-[74%] -right-20 opacity-75 sm:right-[8%]"
        >
          <Cloud size={360} className="w-[260px] sm:w-[360px]" />
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
