import { useEffect } from 'react'

export default function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const { body, documentElement } = document
    const scrollY = window.scrollY
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      htmlOverflow: documentElement.style.overflow,
    }
    documentElement.style.overflow = 'hidden'
    Object.assign(body.style, {
      overflow: 'hidden',
      position: 'fixed',
      top: `-${scrollY}px`,
      width: '100%',
    })
    return () => {
      Object.assign(body.style, {
        overflow: previous.overflow,
        position: previous.position,
        top: previous.top,
        width: previous.width,
      })
      documentElement.style.overflow = previous.htmlOverflow
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    }
  }, [locked])
}
