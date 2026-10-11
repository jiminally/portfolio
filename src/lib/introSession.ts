export const INTRO_SESSION_KEY = 'jimin:intro-seen'

export function shouldShowIntro() {
  if (new URLSearchParams(window.location.search).get('intro') === '1')
    return true
  try {
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1'
  } catch {
    return true
  }
}

export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // Storage can be unavailable in privacy-restricted browsers; still allow entry.
  }
}
