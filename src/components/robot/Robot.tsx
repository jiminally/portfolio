import { useId } from 'react'

export type RobotProps = {
  mood?: 'sleep' | 'idle' | 'happy'
  pose?: 'rest' | 'wave'
  antennaColor?: 'orange' | 'mint'
  size?: number
  floating?: boolean
  className?: string
}

// Keep this API independent from the SVG renderer for a future 3D replacement.
export default function Robot({
  mood = 'idle',
  pose = 'rest',
  antennaColor = 'mint',
  size = 200,
  floating = false,
  className = '',
}: RobotProps) {
  return (
    <svg
      width={size}
      height={(size * 300) / 230}
      viewBox="0 0 230 300"
      aria-hidden="true"
      focusable="false"
      data-sleep={mood === 'sleep'}
      className={`robot-svg ${floating ? 'robot-float' : ''} ${className}`}
    >
      <RobotArtwork
        sleeping
        mood="sleep"
        pose={pose}
        antennaColor={antennaColor}
      />
      <RobotArtwork
        sleeping={false}
        mood={mood === 'sleep' ? 'idle' : mood}
        pose={pose}
        antennaColor={antennaColor}
      />
      <g className="robot-power-off">
        <g className="robot-power-part" data-part="eyes">
          <path
            d="M86 93 H106 M126 93 H146"
            stroke="#9C97E0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  )
}

type ArtworkProps = Required<
  Pick<RobotProps, 'mood' | 'pose' | 'antennaColor'>
> & { sleeping: boolean }

function RobotArtwork({ sleeping, mood, pose, antennaColor }: ArtworkProps) {
  const instanceId = useId()
  const id = (name: string) => `${instanceId}-${name}`
  const paint = (name: string) => `url(#${id(name)})`
  const antenna = antennaColor === 'mint' ? '#8FD6C3' : '#F2A65A'
  return (
    <g className={sleeping ? 'robot-power-off' : 'robot-power-on'}>
      <defs>
        <radialGradient id={id('lShell')} cx="34%" cy="28%" r="80%">
          <stop offset="0" stopColor={sleeping ? '#625A86' : '#FFFFFF'}></stop>
          <stop
            offset=".45"
            stopColor={sleeping ? '#393253' : '#EDE6D8'}
          ></stop>
          <stop offset="1" stopColor={sleeping ? '#211C3B' : '#A89C83'}></stop>
        </radialGradient>
        <radialGradient id={id('lBody')} cx="32%" cy="25%" r="85%">
          <stop offset="0" stopColor={sleeping ? '#625A86' : '#FCF9F2'}></stop>
          <stop offset=".5" stopColor={sleeping ? '#393253' : '#E0D6C2'}></stop>
          <stop offset="1" stopColor={sleeping ? '#211C3B' : '#9C8F75'}></stop>
        </radialGradient>
        <linearGradient id={id('lArm')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={sleeping ? '#625A86' : '#FFFFFF'}></stop>
          <stop
            offset=".55"
            stopColor={sleeping ? '#393253' : '#E4DBC9'}
          ></stop>
          <stop offset="1" stopColor={sleeping ? '#211C3B' : '#ADA188'}></stop>
        </linearGradient>
        <linearGradient id={id('lVisor')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34306A"></stop>
          <stop offset="1" stopColor="#0B0A1E"></stop>
        </linearGradient>
        <linearGradient id={id('lMetal')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={sleeping ? '#625A86' : '#8E846F'}></stop>
          <stop offset=".5" stopColor={sleeping ? '#393253' : '#D6CDB8'}></stop>
          <stop offset="1" stopColor={sleeping ? '#211C3B' : '#7D735F'}></stop>
        </linearGradient>
        {/* A vertical line has no bounding-box width; use explicit SVG coordinates. */}
        <linearGradient
          id={id('lAntennaMetal')}
          href={`#${id('lMetal')}`}
          gradientUnits="userSpaceOnUse"
          x1="112.5"
          y1="0"
          x2="117.5"
          y2="0"
        />
        <radialGradient id={id('lEye')} cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#FFEBCC"></stop>
          <stop offset=".5" stopColor="#F2A65A"></stop>
          <stop offset="1" stopColor="#B9661E"></stop>
        </radialGradient>
        <radialGradient id={id('lWheel')} cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#7C77B8"></stop>
          <stop offset=".6" stopColor="#3F3B77"></stop>
          <stop offset="1" stopColor="#1C1A3E"></stop>
        </radialGradient>
        <radialGradient id={id('lPanel')} cx="50%" cy="20%" r="90%">
          <stop offset="0" stopColor={sleeping ? '#625A86' : '#C9BEA6'}></stop>
          <stop offset="1" stopColor={sleeping ? '#393253' : '#8F836B'}></stop>
        </radialGradient>
        <filter id={id('lGlow')} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
        </filter>
        <filter id={id('lSoft')} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
        </filter>
      </defs>
      <g className="robot-power-part" data-part="body">
        <ellipse
          cx="115"
          cy="292"
          rx="48"
          ry="6"
          fill="#000000"
          opacity=".22"
          filter={paint('lSoft')}
        ></ellipse>
      </g>
      <g className="robot-power-part" data-part="body">
        <circle cx="115" cy="262" r="26" fill={paint('lWheel')}></circle>
      </g>
      <g className="robot-power-part" data-part="body">
        <circle cx="115" cy="262" r="11" fill="#14122B"></circle>
      </g>
      <g className="robot-power-part" data-part="body">
        <path
          d="M98 250 A20 20 0 0 1 112 241"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity=".45"
        ></path>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="100"
          y="236"
          width="30"
          height="14"
          rx="4"
          fill={paint('lMetal')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="24"
          y="162"
          width="28"
          height="58"
          rx="14"
          fill={paint('lArm')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="178"
          y={pose === 'wave' ? 128 : 162}
          width="28"
          height="58"
          rx="14"
          fill={paint('lArm')}
          transform={pose === 'wave' ? 'rotate(-24 192 157)' : undefined}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="52"
          y="146"
          width="126"
          height="96"
          rx="32"
          fill={paint('lBody')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="light">
        <ellipse
          cx="80"
          cy="164"
          rx="20"
          ry="8"
          fill="#FFFFFF"
          opacity={sleeping ? 0.08 : 0.7}
          filter={paint('lSoft')}
        ></ellipse>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="82"
          y="162"
          width="66"
          height="62"
          rx="18"
          fill={paint('lPanel')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="84"
          y="164"
          width="62"
          height="58"
          rx="16"
          fill="#1E1B3D"
          opacity=".85"
        ></rect>
      </g>
      <g className="robot-power-part" data-part="light">
        <path
          d="M115 172 L133 182.5 L133 203.5 L115 214 L97 203.5 L97 182.5 Z"
          fill="none"
          stroke="#8FD6C3"
          strokeWidth="6"
          strokeLinejoin="round"
          opacity={sleeping ? 0 : 0.5}
          filter={paint('lGlow')}
        ></path>
      </g>
      <g className="robot-power-part" data-part="light">
        <path
          d="M115 172 L133 182.5 L133 203.5 L115 214 L97 203.5 L97 182.5 Z"
          fill="none"
          stroke={sleeping ? '#625B86' : '#A8F0DD'}
          strokeWidth="2.5"
          strokeLinejoin="round"
        ></path>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="102"
          y="132"
          width="26"
          height="18"
          rx="5"
          fill={paint('lMetal')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="antenna">
        <line
          x1="115"
          y1="40"
          x2="115"
          y2="14"
          stroke={sleeping ? '#5A5591' : paint('lAntennaMetal')}
          strokeWidth="5"
          strokeLinecap="round"
        ></line>
      </g>
      <g className="robot-power-part" data-part="antenna">
        <circle
          className={sleeping ? undefined : 'robot-blink'}
          cx="115"
          cy="11"
          r="14"
          fill={antenna}
          opacity={sleeping ? 0 : 0.55}
          filter={paint('lGlow')}
        ></circle>
      </g>
      <g className="robot-power-part" data-part="antenna">
        <circle
          cx="115"
          cy="11"
          r="8.5"
          fill={
            sleeping
              ? '#4A456D'
              : antennaColor === 'mint'
                ? '#A8F0DD'
                : paint('lEye')
          }
        ></circle>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="40"
          y="36"
          width="150"
          height="104"
          rx="42"
          fill={paint('lShell')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="light">
        <ellipse
          cx="78"
          cy="52"
          rx="26"
          ry="9"
          fill="#FFFFFF"
          opacity={sleeping ? 0.08 : 0.85}
          filter={paint('lSoft')}
        ></ellipse>
      </g>
      <g className="robot-power-part" data-part="body">
        <rect
          x="58"
          y="56"
          width="114"
          height="66"
          rx="28"
          fill={paint('lVisor')}
        ></rect>
      </g>
      <g className="robot-power-part" data-part="eyes">
        <ellipse
          cx="95"
          cy="89"
          rx="15"
          ry="17"
          fill="#F2A65A"
          opacity={sleeping ? 0 : 0.55}
          filter={paint('lGlow')}
        ></ellipse>
      </g>
      <g className="robot-power-part" data-part="eyes">
        <ellipse
          cx="135"
          cy="89"
          rx="15"
          ry="17"
          fill="#F2A65A"
          opacity={sleeping ? 0 : 0.55}
          filter={paint('lGlow')}
        ></ellipse>
      </g>
      <g className="robot-power-part" data-part="eyes">
        <g opacity={mood === 'happy' ? 1 : 0}>
          <path
            d="M84 92 Q95 78 106 92"
            stroke={paint('lEye')}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          ></path>
          <path
            d="M124 92 Q135 78 146 92"
            stroke={paint('lEye')}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          ></path>
          <path
            d="M104 107 Q115 114 126 107"
            stroke="#F2A65A"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          ></path>
        </g>
      </g>
      <g className="robot-power-part" data-part="eyes">
        <g opacity={mood === 'idle' ? 1 : 0}>
          <ellipse cx="97" cy="93" rx="10.5" ry="12.5" fill={paint('lEye')} />
          <ellipse cx="137" cy="93" rx="10.5" ry="12.5" fill={paint('lEye')} />
          <circle cx="94" cy="88" r="3.4" fill="#FFFFFF" />
          <circle cx="134" cy="88" r="3.4" fill="#FFFFFF" />
        </g>
      </g>
      <g className="robot-power-part" data-part="eyes">
        <g opacity={sleeping ? 1 : 0}>
          <path
            d="M86 93 H106 M126 93 H146"
            stroke="#9C97E0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
      <g className="robot-power-part" data-part="light">
        <path
          d="M68 66 Q88 58 118 60"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity={sleeping ? 0.08 : 0.18}
        ></path>
      </g>
    </g>
  )
}
