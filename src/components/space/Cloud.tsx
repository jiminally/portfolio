import { useId } from 'react'

type CloudProps = {
  variant?: 'cool' | 'warm'
  size?: number
  className?: string
}

export default function Cloud({
  variant = 'cool',
  size = 420,
  className = '',
}: CloudProps) {
  const gradientId = useId()
  const warm = variant === 'warm'
  const fill = `url(#${gradientId})`

  return (
    <svg
      width={size}
      height={(size * 200) / 420}
      viewBox="0 0 420 200"
      aria-hidden="true"
      focusable="false"
      className={`sky-cloud ${warm ? 'sky-drift-slow' : 'sky-drift'} ${className}`}
    >
      <defs>
        <radialGradient id={gradientId} cx="34%" cy="28%" r="78%">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop
            offset={warm ? '.45' : '.42'}
            stopColor={warm ? '#F3DCEB' : '#D4D6FA'}
          />
          <stop offset="1" stopColor={warm ? '#B9A2D8' : '#8188E0'} />
        </radialGradient>
      </defs>
      <circle cx="110" cy="120" r="70" fill={fill} />
      <circle cx="200" cy="90" r="88" fill={fill} />
      <circle cx="300" cy="118" r="72" fill={fill} />
      <ellipse cx="210" cy="160" rx="170" ry="40" fill={fill} />
    </svg>
  )
}
