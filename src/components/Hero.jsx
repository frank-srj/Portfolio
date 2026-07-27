import arrowUpRight from '../assets/arrow-up-right.svg'
import frankArrowNew from '../assets/frank-arrow-new.svg'
import { jobs } from '../data/resume'

function Claim({ onContactClick }) {
  return (
    <h1 className="w-full font-sans text-[42px] font-normal leading-[48px] tracking-[-2px] text-text-primary min-[1180px]:min-w-0 min-[1180px]:max-w-[730px] min-[1180px]:text-[54px] min-[1180px]:leading-[60px]">
      I&apos;m{' '}
      {/* Hovering "Frank" makes it italic, underlines it, and reveals the arrow. Clicking opens the contact sheet. */}
      <span
        role="button"
        tabIndex={0}
        onClick={onContactClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onContactClick?.()
          }
        }}
        className="group/frank cursor-pointer"
      >
        <span className="italic transition-all group-hover/frank:underline">Frank</span>
        <span className="inline-flex h-12 w-0 items-center overflow-hidden align-middle opacity-0 transition-all duration-300 -my-4 group-hover/frank:w-14 group-hover/frank:opacity-100 min-[1180px]:h-[60px] min-[1180px]:-my-5 min-[1180px]:group-hover/frank:w-[68px]">
          <span className="w-2 shrink-0"></span>
          <img
            src={frankArrowNew}
            alt=""
            className="size-12 max-w-none shrink-0 object-contain min-[1180px]:size-[60px]"
          />
        </span>
      </span>
      , a product designer who crafts{' '}
      <span className="text-text-secondary">clear, intuitive</span> and{' '}
      <span className="text-text-secondary">refined</span> experiences.
    </h1>
  )
}

function Resume({ items }) {
  return (
    <div className="flex w-full flex-col items-start justify-end pb-1 min-[1180px]:mr-[var(--rail-margin-end)] min-[1180px]:w-rail min-[1180px]:shrink-0">
      <div className="flex w-full flex-col gap-3">
        {items.map((job, index) => (
          <div key={index} className="flex w-full items-start">
            {/* Year */}
            <div className="flex min-w-[100px] items-start self-stretch">
              <span className="font-mono text-[15px] leading-[22px] text-text-secondary">
                {job.year}
              </span>
            </div>

            {/* Job */}
            <div className="flex min-w-px flex-1 flex-wrap content-start items-start">
              {/* Company — same button/hover treatment as the navbar buttons */}
              <div className="flex min-w-0 items-center gap-1 min-[420px]:min-w-[210px]">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/job flex items-center gap-2"
                  >
                    <span className="whitespace-nowrap font-sans text-[15px] leading-[22px] text-text-primary transition-colors group-hover/job:text-brand">
                      {job.company}
                    </span>
                  </a>
                ) : (
                  <span className="whitespace-nowrap font-sans text-[15px] leading-[22px] text-text-primary">
                    {job.company}
                  </span>
                )}
                {job.url ? (
                  <img src={arrowUpRight} alt="" className="size-4 shrink-0" />
                ) : null}
              </div>

              {/* Job title */}
              <div className="flex min-w-0 flex-1 items-center justify-center min-[420px]:min-w-[210px]">
                <span className="min-w-px flex-1 font-sans text-[15px] leading-[22px] text-text-secondary">
                  {job.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Hero({
  heading,
  items = jobs,
  className = 'pt-16',
  contentClassName = 'min-[1180px]:pt-[177px]',
  onContactClick,
}) {
  const headingContent = heading ?? <Claim onContactClick={onContactClick} />
  return (
    <div
      className={`flex w-full flex-col items-end gap-4 px-6 pb-8 ${className}`}
    >
      <div
        className={`flex w-full flex-col gap-12 min-[1180px]:flex-row min-[1180px]:items-end min-[1180px]:justify-between min-[1180px]:gap-8 ${contentClassName}`}
      >
        {headingContent}
        <Resume items={items} />
      </div>
    </div>
  )
}

export default Hero
