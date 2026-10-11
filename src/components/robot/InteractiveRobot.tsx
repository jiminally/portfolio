import { useRef, useState } from 'react'
import Robot, { type RobotProps } from '@/components/robot/Robot'
import SpeechBubble from '@/components/robot/SpeechBubble'

type InteractiveRobotProps = RobotProps & {
  lines: readonly string[]
  ariaLabel?: string
}

export default function InteractiveRobot({
  lines,
  ariaLabel = '착륙 로봇과 인사하기',
  className = '',
  ...robotProps
}: InteractiveRobotProps) {
  const [clickCount, setClickCount] = useState(0)
  const reactionRef = useRef<HTMLSpanElement>(null)
  const text =
    clickCount > 0 && lines.length > 0
      ? lines[(clickCount - 1) % lines.length]
      : ''

  function greet() {
    setClickCount((count) => count + 1)
    // Restart only the reaction wrapper; preserve Robot's SVG IDs and mood transitions.
    const reaction = reactionRef.current
    if (reaction) {
      reaction.classList.remove('robot-bounce')
      void reaction.offsetWidth
      reaction.classList.add('robot-bounce')
    }
  }

  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
      <SpeechBubble text={text} />
      <button
        type="button"
        aria-label={ariaLabel}
        disabled={lines.length === 0}
        onClick={greet}
        className="max-w-full rounded-3xl border-0 bg-transparent p-2 focus-visible:outline-accent-orange disabled:cursor-default"
      >
        <span ref={reactionRef} className="block">
          <Robot {...robotProps} />
        </span>
      </button>
    </div>
  )
}
