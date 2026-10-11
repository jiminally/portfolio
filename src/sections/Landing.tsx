import { useEffect, useState } from 'react'
import AltitudeLabel from '@/components/ui/AltitudeLabel'
import Robot from '@/components/robot/Robot'
import Flag from '@/components/space/Flag'
import Ground from '@/components/space/Ground'
import { contact, LANDING_POSITION } from '@/data/contact'

export default function Landing() {
  const [notice, setNotice] = useState<{ text: string } | null>(null)
  useEffect(() => {
    if (!notice) return
    const timer = window.setTimeout(() => setNotice(null), 3000)
    return () => window.clearTimeout(timer)
  }, [notice])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setNotice({ text: '복사됐어요' })
    } catch {
      setNotice({ text: '복사하지 못했어요. 이메일 주소를 직접 복사해주세요.' })
    }
  }

  const outline =
    'rounded-full border border-current px-6 py-3 text-[#2A2557] aria-disabled:opacity-60'
  const github = /^https?:\/\//.test(contact.github)
    ? contact.github
    : undefined
  const blog = /^https?:\/\//.test(contact.blog) ? contact.blog : undefined

  return (
    <section
      id="earth"
      tabIndex={-1}
      aria-labelledby="earth-title"
      className="landing-section relative pt-16 break-keep text-[#2A2557]"
    >
      <div className="mx-auto max-w-[1200px] space-y-[22px] px-6">
        <AltitudeLabel
          altitude="0m"
          label="착륙 완료"
          className="text-[#8A4A1E]"
        />
        <h2
          id="earth-title"
          className="font-display text-[clamp(36px,4vw,48px)] leading-[1.25] font-normal tracking-[-1px]"
        >
          여기에 깃발을 꽂았어요.
          <br />
          이제 같이 걸어볼래요?
        </h2>
        <p className="max-w-[480px] text-lg leading-[1.7] text-[#4A4370]">
          함께 일할 동료를 찾고 있다면 언제든 연락 주세요. 천천히, 그러나 꼭
          답할게요.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex max-w-full items-center gap-2">
            <a
              href={
                contact.email.includes('@')
                  ? `mailto:${contact.email}`
                  : undefined
              }
              aria-disabled={!contact.email.includes('@')}
              className="min-w-0 rounded-full bg-[#2A2557] px-6 py-3 wrap-anywhere text-white glow-btn"
            >
              {contact.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="이메일 주소 복사"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-current"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V4H4v12h4" />
              </svg>
            </button>
          </div>
          <a
            href={github}
            aria-disabled={!github}
            target="_blank"
            rel="noopener noreferrer"
            className={outline}
          >
            GitHub
          </a>
          <a
            href={blog}
            aria-disabled={!blog}
            target="_blank"
            rel="noopener noreferrer"
            className={outline}
          >
            Blog
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={outline}
          >
            이력서 보기
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none relative mt-12 h-[300px] overflow-hidden sm:h-[360px]"
        aria-hidden="true"
      >
        <Ground />
        <div
          id="robot-landing-target"
          className="absolute w-[120px] sm:w-[180px]"
          style={LANDING_POSITION.robot}
        >
          <Robot mood="happy" pose="wave" antennaColor="orange" size={180} />
        </div>
        <div
          className="absolute w-[90px] sm:w-[130px]"
          style={LANDING_POSITION.flag}
        >
          <Flag className="w-full" />
        </div>
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-6 bottom-6 z-[70] flex justify-center"
      >
        {notice && (
          <p className="rounded-2xl bg-[#2A2557] px-5 py-3 text-center text-sm text-white shadow-lg">
            {notice.text}
          </p>
        )}
      </div>
    </section>
  )
}
