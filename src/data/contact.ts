export const contact = {
  email: '[이메일]',
  github: '[GitHub URL]',
  blog: '[Blog URL]',
  resume: '/resume.pdf',
}

// Horizontal positions are relative to the full-width ground scene.
// Reuse the robot anchor as the destination of the future descent animation.
export const LANDING_POSITION = {
  robot: { right: 'calc(8% + 142px)', bottom: '88px' },
  flag: { right: '8%', bottom: '88px' },
} as const
