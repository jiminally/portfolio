type AltitudeLabelProps = {
  altitude: string
  label: string
  blinking?: boolean
  className?: string
}

export default function AltitudeLabel({
  altitude,
  label,
  blinking = false,
  className = '',
}: AltitudeLabelProps) {
  return (
    <p className={`font-mono text-sm tracking-[2px] ${className}`}>
      ALT {altitude} · {label}
      {blinking && (
        <span
          aria-hidden="true"
          className="altitude-beacon ml-2 inline-block text-accent-orange"
        >
          ●
        </span>
      )}
    </p>
  )
}
