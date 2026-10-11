import { useEffect, useState, type MouseEvent } from 'react'
import { scrollToSection, type SectionId } from '@/lib/scrollToSection'

function navigate(event: MouseEvent<HTMLAnchorElement>, id: SectionId) {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return
  event.preventDefault()
  scrollToSection(id)
}

export default function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={`site-header fixed inset-x-0 top-0 z-50 border-x-0 border-t-0 transition-colors duration-300 ${scrolled ? 'glass-dark' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[1200px] flex-col justify-center gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <a
          href="#space"
          onClick={(event) => navigate(event, 'space')}
          aria-label="JIMIN, 맨 위로"
          className="w-fit font-display text-[28px] leading-none font-normal text-text-on-dark"
        >
          JIMIN<span className="text-accent-orange">.</span>
        </a>
        <nav
          aria-label="주요 메뉴"
          className="flex items-center gap-0 font-mono text-xs sm:gap-2 sm:text-sm"
        >
          <a
            href="#log"
            onClick={(event) => navigate(event, 'log')}
            className="rounded-full px-2 py-3 whitespace-nowrap text-text-on-dark hover:text-accent-orange sm:px-3.5"
          >
            탐사 일지
          </a>
          <a
            href="#clouds"
            onClick={(event) => navigate(event, 'clouds')}
            className="rounded-full px-2 py-3 whitespace-nowrap text-text-on-dark hover:text-accent-orange sm:px-3.5"
          >
            프로젝트
          </a>
          <a
            href="#timeline"
            onClick={(event) => navigate(event, 'timeline')}
            className="rounded-full px-2 py-3 whitespace-nowrap text-text-on-dark hover:text-accent-orange sm:px-3.5"
          >
            활동 기록
          </a>
          <a
            href="#earth"
            onClick={(event) => navigate(event, 'earth')}
            className="rounded-full bg-accent-orange px-3 py-3 whitespace-nowrap text-text-on-light glow-btn sm:px-[18px]"
          >
            착륙 지점
          </a>
        </nav>
      </div>
    </header>
  )
}
