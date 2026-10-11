export default function Footer() {
  return (
    <footer className="bg-[#5E9E6C] text-[#102819]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-sm">
        <p>© 2026 JIMIN</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-full border border-current px-4 py-2"
        >
          인트로 다시 보기
        </button>
      </div>
    </footer>
  )
}
