type SpeechBubbleProps = {
  text: string
  className?: string
}

export default function SpeechBubble({
  text,
  className = '',
}: SpeechBubbleProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`min-h-16 max-w-[220px] ${className}`}
    >
      {text && (
        <p
          key={text}
          className="speech-pop rounded-[18px_18px_18px_4px] bg-white px-4 py-3 text-[15px] leading-relaxed wrap-break-word text-text-on-light shadow-lg"
        >
          {text}
        </p>
      )}
    </div>
  )
}
