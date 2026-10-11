import { useLayoutEffect, type RefObject } from 'react'

export default function useParallax(
  containerRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    let disposed = false
    let revert = () => {}

    // Load scrolling animation code only when the home background is mounted.
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return
        gsap.registerPlugin(ScrollTrigger)
        // Reverts transforms and triggers when reduced motion is enabled.
        const media = gsap.matchMedia()
        revert = () => media.revert()
        media.add(
          '(prefers-reduced-motion: no-preference)',
          () => {
            container
              .querySelectorAll<HTMLElement>('[data-parallax]')
              .forEach((layer) => {
                const stars = layer.dataset.parallax === 'stars'
                gsap.fromTo(
                  layer,
                  { y: 0 },
                  {
                    y: () =>
                      stars ? 90 : -Math.min(240, window.innerHeight * 0.3),
                    ease: 'none',
                    scrollTrigger: {
                      trigger: container,
                      start: 'top top',
                      end: 'bottom bottom',
                      scrub: true,
                      invalidateOnRefresh: true,
                    },
                  },
                )
              })
          },
          container,
        )
      },
    )

    return () => {
      disposed = true
      revert()
    }
  }, [containerRef])
}
