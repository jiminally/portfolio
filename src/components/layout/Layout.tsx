import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type LayoutProps = { children: ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-svh bg-landing">
      <a
        href="#main-content"
        className="fixed top-3 left-6 z-[60] -translate-y-24 rounded-lg bg-accent-orange px-4 py-3 text-text-on-light focus:translate-y-0"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1200px] px-6 pt-[var(--header-height)]"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
