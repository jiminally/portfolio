export type SectionId = 'space' | 'log' | 'clouds' | 'timeline' | 'earth'

// Replace the scrolling implementation here when Lenis is introduced in #7.
// CSS owns smooth scrolling and the reduced-motion preference.
export function scrollToSection(id: SectionId) {
  const section = document.getElementById(id)
  if (!section) return

  if (window.location.hash !== `#${id}`) {
    window.history.pushState(null, '', `#${id}`)
  }

  section.focus({ preventScroll: true })
  if (id === 'space') {
    window.scrollTo({ top: 0, behavior: 'auto' })
  } else {
    section.scrollIntoView({ behavior: 'auto', block: 'start' })
  }
}
