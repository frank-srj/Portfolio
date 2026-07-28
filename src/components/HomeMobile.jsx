import arrowUpRight from '../assets/arrow-up-right.svg'
import arrowIcon from '../assets/case-studies/icons/arrow.svg'
import { jobs, studies } from '../data/resume'
import { caseStudies } from '../data/caseStudies'
import SiteFooter from './SiteFooter'

/*
  Phone-only homepage (Figma "Home-Mobile"). Rendered instead of the desktop
  stack when useIsPhone() matches — see App.jsx. Content comes from the same
  arrays the desktop layout uses, so only the presentation differs.
*/

function Resume({ items, rowGap = '' }) {
  return (
    <div className="flex w-full flex-col items-start justify-end pb-1">
      <div className="flex w-full flex-col gap-3">
        {items.map((item) => (
          <div
            key={`${item.year}-${item.company}`}
            className={`flex w-full items-start ${rowGap}`}
          >
            <div className="flex min-w-[100px] items-start self-stretch">
              <span className="font-mono text-[15px] leading-[22px] text-text-secondary">
                {item.year}
              </span>
            </div>

            {/* Company and title stack: the row is too narrow for both */}
            <div className="flex min-w-px flex-1 flex-col items-start">
              <div className="flex items-center gap-1">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="whitespace-nowrap font-sans text-[15px] leading-[22px] text-text-primary">
                      {item.company}
                    </span>
                  </a>
                ) : (
                  <span className="whitespace-nowrap font-sans text-[15px] leading-[22px] text-text-primary">
                    {item.company}
                  </span>
                )}
                {item.url ? (
                  <img src={arrowUpRight} alt="" className="size-4 shrink-0" />
                ) : null}
              </div>

              <span className="w-full font-sans text-[15px] leading-[22px] text-text-secondary">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Header({ onContactClick }) {
  return (
    <div className="flex w-full flex-col items-end gap-4 px-6 pb-8 pt-8">
      <div className="flex w-full flex-col gap-12">
        <h1 className="w-full font-sans text-[42px] font-normal leading-[48px] tracking-[-2px] text-text-primary">
          I&apos;m Frank,
          <br />a product designer who crafts{' '}
          <span className="text-text-secondary">clear, intuitive</span> and{' '}
          <span className="text-text-secondary">refined</span> experiences.
        </h1>

        <div className="flex w-full flex-col gap-6">
          <Resume items={jobs} />

          <button
            type="button"
            onClick={onContactClick}
            className="flex h-12 w-full items-center justify-center rounded-md bg-neutral-100 font-sans text-xl leading-7 text-text-invert transition-colors active:bg-neutral-90"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({
  tag,
  title,
  description,
  image,
  disabled,
  onOpen,
  priority = false,
}) {
  const interactive = !disabled && typeof onOpen === 'function'

  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={
        interactive
          ? (event) => {
              onOpen()
              event.currentTarget.blur()
            }
          : undefined
      }
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onOpen()
                event.currentTarget.blur()
              }
            }
          : undefined
      }
      className={`flex w-full flex-col gap-3 rounded-2xl border border-border-primary bg-surface-primary p-3 transition-colors ${
        disabled ? 'opacity-30' : ''
      } ${interactive ? 'cursor-pointer outline-none focus:outline-none active:bg-surface-secondary' : ''}`}
    >
      <div className="aspect-[683/378] w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="size-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-1">
          <h3 className="w-full font-sans text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-text-primary">
            {title}
          </h3>
          <p className="w-full font-sans text-[18px] font-normal leading-[28px] tracking-[-0.2px] text-text-primary">
            {Array.isArray(description)
              ? description.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))
              : description}
          </p>
        </div>

        {/* Tag + arrow: the desktop card reveals this row on hover, which a
           touch device can't do, so it stays visible here. */}
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-wrap content-start items-start gap-1">
            <div className="flex items-center justify-center gap-1.5 rounded-full border border-border-primary px-2 pb-1.5 pt-2">
              <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-secondary">
                {tag}
              </span>
            </div>
          </div>

          {!disabled && (
            <img src={arrowIcon} alt="" className="size-[31px] shrink-0" />
          )}
        </div>
      </div>
    </div>
  )
}

function CaseStudyList({ onProjectOpen }) {
  return (
    <div className="flex w-full flex-col gap-3 bg-surface-secondary p-3">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard
          key={caseStudy.title}
          {...caseStudy}
          priority={Boolean(caseStudy.id)}
          onOpen={caseStudy.id ? () => onProjectOpen?.(caseStudy.id) : undefined}
        />
      ))}
    </div>
  )
}

function Studies() {
  return (
    <div className="flex w-full flex-col items-end gap-4 border-b border-border-primary bg-surface-primary px-6 py-8">
      <div className="flex w-full flex-col gap-8">
        <h2 className="w-full font-sans text-[42px] font-normal leading-[48px] tracking-[-2px] text-text-primary">
          Studies
        </h2>
        <Resume items={studies} rowGap="gap-16" />
      </div>
    </div>
  )
}

function HomeMobile({ onContactClick, onProjectOpen, onColophoneClick }) {
  return (
    <div className="flex w-full flex-col items-start">
      <Header onContactClick={onContactClick} />
      <CaseStudyList onProjectOpen={onProjectOpen} />
      <Studies />
      <SiteFooter onColophoneClick={onColophoneClick} />
    </div>
  )
}

export default HomeMobile
