import arrowIcon from '../assets/case-studies/icons/arrow.svg'
import { caseStudies } from '../data/caseStudies'

function CategoryTag({ label, icon }) {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-full bg-surface-tertiary pb-1.5 pl-3 pr-4 pt-2">
      <img src={icon} alt="" className="size-3 shrink-0" />
      <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-secondary">
        {label}
      </span>
    </div>
  )
}

function CaseStudyCard({
  tag,
  title,
  description,
  image,
  categories,
  disabled,
  onOpen,
  priority = false,
}) {
  // Layout math (resolved against the card’s outer width via 100cqw):
  //
  // Fixed block = image-base (683) + spacing-6 + content-min (531 = hover
  // category-tags + arrow row). This block does not change size due to hover.
  //
  // Priority as the container narrows:
  // 1. Compress default padding from spacing-32 → spacing-3
  // 2. Only then shrink the image (never above base)
  // 3. Once image width ≤ image height (378), stack content below the image
  //
  // Hover: padding animates to spacing-3. Content width is locked to its
  // default-state size so text doesn’t reflow. Image stays at base size;
  // freed space sits on the right as the block shifts toward the edges.
  //
  // Stack breakpoint: image-width = image-height when
  // 100cqw - 2×pad-min - gap - content-min = 378 → 100cqw = 957px
  const interactive = !disabled && typeof onOpen === 'function'

  return (
    <div className="@container w-full">
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
        className={`flex flex-col rounded-2xl border border-border-primary bg-surface-primary px-[var(--pad-default)] py-3 transition-[padding,background-color] @[958px]:h-[402px] @[958px]:flex-row @[958px]:items-stretch ${
          disabled
            ? 'opacity-30'
            : 'group hover:bg-surface-secondary hover:px-[var(--pad-min)]'
        } ${interactive ? 'cursor-pointer outline-none focus:outline-none' : ''}`}
        style={{
          '--image-base': '683px',
          '--image-height': '378px',
          // Shared rail width with navbar + hero (--width-content-min)
          '--content-min': 'var(--width-content-min)',
          '--cs-gap': 'var(--spacing-6)',
          '--pad-max': 'var(--spacing-32)',
          '--pad-min': 'var(--spacing-3)',
          '--image-width':
            'min(var(--image-base), max(0px, calc(100cqw - 2 * var(--pad-min) - var(--cs-gap) - var(--content-min))))',
          '--pad-space':
            'calc(100cqw - var(--image-width) - var(--cs-gap) - var(--content-min))',
          '--pad-default':
            'clamp(var(--pad-min), calc(var(--pad-space) / 2), var(--pad-max))',
          // Locked to default padding — same width in hover, so text doesn’t reflow
          '--content-width':
            'max(var(--content-min), calc(100cqw - 2 * var(--pad-default) - var(--image-width) - var(--cs-gap)))',
        }}
      >
        {/* Inner block: image + gap + content (row ≥958px, stacked below) */}
        <div className="flex min-w-0 flex-1 flex-col gap-6 @[958px]:h-full @[958px]:flex-row @[958px]:items-center">
          {/* Image — base size; shrinks only after padding is fully compressed */}
          <div className="aspect-[683/378] w-full shrink-0 overflow-hidden rounded-xl @[958px]:aspect-auto @[958px]:h-[var(--image-height)] @[958px]:w-[var(--image-width)]">
            <img
              src={image}
              alt=""
              className="size-full object-cover"
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'low'}
            />
          </div>

          {/* Right column — grows on hover to fill freed padding; head width stays locked */}
          <div className="flex w-full min-w-0 flex-1 flex-col items-start justify-between gap-6 pt-3 @[958px]:h-full @[958px]:min-w-[var(--content-width)] @[958px]:gap-0">
            {/* Head — same width in default & hover (no text reflow) */}
            <div className="flex w-full flex-col items-start gap-4 @[958px]:w-[var(--content-width)] @[958px]:shrink-0">
              {/* Tags */}
              <div className="flex flex-wrap content-start items-start gap-1">
                <div className="flex items-center justify-center gap-1.5 rounded-full border border-border-primary px-2 pb-1.5 pt-2">
                  <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-secondary">
                    {tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex w-full flex-col items-start gap-1">
                <h3 className="w-full font-sans text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-text-primary">
                  {title}
                </h3>
                <p
                  className={`w-full font-sans font-normal leading-[28px] tracking-[-0.2px] text-text-primary ${
                    disabled ? 'text-[18px]' : 'text-[20px]'
                  }`}
                >
                  {Array.isArray(description)
                    ? description.map((line, index) => (
                        <span key={index} className="block">
                          {line}
                        </span>
                      ))
                    : description}
                </p>
              </div>
            </div>

            {/* Hover reveal: tabs stay with content; row fills so arrow sits at pad-min (spacing-3) */}
            {!disabled && (
              <div className="flex w-full items-center justify-between gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="flex flex-wrap items-center gap-1">
                  {categories.map((category) => (
                    <CategoryTag key={category.label} {...category} />
                  ))}
                </div>
                <img src={arrowIcon} alt="" className="size-[31px] shrink-0" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStudies({ onProjectOpen }) {
  return (
    <div className="@container/studies w-full bg-surface-secondary p-3">
      <div className="grid w-full grid-cols-1 gap-3 @[2000px]/studies:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.title}
            {...caseStudy}
            priority={Boolean(caseStudy.id)}
            onOpen={
              caseStudy.id ? () => onProjectOpen?.(caseStudy.id) : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}

export default CaseStudies
