import { useId } from 'react'

export default function Ground() {
  const hillId = useId()
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className="absolute inset-x-0 bottom-0 block h-[200px] w-full"
    >
      <defs>
        <linearGradient id={hillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BFE4B4" />
          <stop offset=".35" stopColor="#94CC93" />
          <stop offset="1" stopColor="#5E9E6C" />
        </linearGradient>
      </defs>
      <path
        d="M0 120 C260 70 520 110 760 96 C1000 82 1200 70 1440 92 L1440 200 L0 200 Z"
        fill="#CFE9C2"
        opacity=".7"
      />
      <path
        d="M0 140 C300 108 560 132 820 120 C1060 108 1260 96 1440 112 L1440 200 L0 200 Z"
        fill={`url(#${hillId})`}
      />
      <path
        d="M0 140 C300 108 560 132 820 120 C1060 108 1260 96 1440 112"
        stroke="#E4F5D9"
        strokeWidth="3"
        fill="none"
        opacity=".8"
      />
    </svg>
  )
}
