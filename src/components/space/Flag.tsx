import { useId } from 'react'

type FlagProps = { className?: string }

export default function Flag({ className = '' }: FlagProps) {
  const id = useId()
  return (
    <svg
      viewBox="0 0 150 230"
      width="150"
      height="230"
      aria-hidden="true"
      focusable="false"
      className={`block h-auto ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-metal`}>
          <stop stopColor="#8E846F" />
          <stop offset=".5" stopColor="#D6CDB8" />
          <stop offset="1" stopColor="#7D735F" />
        </linearGradient>
        <linearGradient id={`${id}-flag`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFC08A" />
          <stop offset="1" stopColor="#E0843A" />
        </linearGradient>
      </defs>
      <ellipse cx="22" cy="222" rx="20" ry="6" fill="#4F8A5C" opacity=".6" />
      <rect
        x="18"
        y="20"
        width="7"
        height="204"
        rx="3.5"
        fill={`url(#${id}-metal)`}
      />
      <circle cx="21.5" cy="18" r="7" fill="#F2A65A" />
      <g className="landing-flag-wave">
        <path
          d="M25 28 C60 18 90 40 140 28 L140 98 C90 110 60 88 25 98 Z"
          fill={`url(#${id}-flag)`}
        />
        <path
          d="M25 28 C60 18 90 40 140 28 L140 40 C90 52 60 30 25 40 Z"
          fill="white"
          opacity=".22"
        />
        <text
          x="82"
          y="70"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="24"
          fill="white"
          letterSpacing="2"
        >
          JIMIN
        </text>
      </g>
    </svg>
  )
}
