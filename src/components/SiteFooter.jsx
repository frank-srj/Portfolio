function SiteFooter({ onColophoneClick, className = 'bg-surface-primary' }) {
  return (
    <footer
      className={`flex w-full flex-col items-end gap-4 border-t border-border-primary px-6 py-8 ${className}`}
    >
      <div className="flex w-full items-end justify-between">
        <p className="min-w-px flex-1 font-mono text-[15px] leading-[22px] text-text-primary">
          ©2026 Frank Stryj
        </p>
        <button
          type="button"
          onClick={onColophoneClick}
          className="shrink-0 cursor-pointer font-mono text-[15px] leading-[22px] text-text-primary underline transition-colors hover:text-brand"
        >
          Colophone
        </button>
      </div>
    </footer>
  )
}

export default SiteFooter
