import { useEffect } from 'react'
import frankProfile from '../assets/contact/frank-profile.jpg'
import linkedinIcon from '../assets/contact/linkedin.svg'
import mapPinIcon from '../assets/contact/map-pin.svg'
import shareIcon from '../assets/contact/share.svg'
import closeIcon from '../assets/contact/close.svg'
import cvPdf from '../assets/CV_Frank,Stryj.pdf'

function ContactSheet({ open, onClose }) {
  // Close on Escape and lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Frank"
      className="animate-fade-in fixed inset-0 z-[60] overflow-x-auto bg-neutral-100/60"
      onClick={onClose}
    >
      {/* Frame is always at least the full contact wrapper + side insets, so
         content and close stay inside the layout even if the viewport is
         narrower (horizontal scroll on this overlay). */}
      <div className="relative h-full w-[max(100%,var(--page-min-width))]">
        {/* Sheet width = --contact-wrapper-width (content + gap + close). */}
        <div
          className="animate-slide-in-bl absolute bottom-3 left-3 flex w-[var(--contact-wrapper-width)] max-h-[calc(100vh-var(--spacing-6))] flex-row items-start gap-1 min-[1064px]:w-auto"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Content containers — rounded clip + scroll (close sits outside). */}
          <div className="flex max-h-[calc(100vh-var(--spacing-6))] w-[var(--contact-content-width)] shrink-0 flex-col gap-1 overflow-auto rounded-xl min-[1064px]:w-auto min-[1064px]:flex-row min-[1064px]:items-stretch">
            {/* Left column */}
            <div className="flex w-[var(--contact-content-width)] shrink-0 flex-col items-start justify-center gap-1">
              {/* Contact card */}
              <div className="flex h-[656px] w-full flex-col items-start overflow-clip rounded-xl bg-surface-primary">
                {/* Profile image: fixed height, cover-cropped, anchored slightly
                   below center. */}
                <div className="h-[317px] w-full shrink-0 overflow-hidden">
                  <img
                    src={frankProfile}
                    alt="Frank"
                    className="size-full object-cover object-[50%_60%]"
                  />
                </div>

                {/* Body */}
                <div className="flex w-full flex-1 flex-col items-end justify-between overflow-clip p-8">
                  <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full items-start justify-between">
                      <h2 className="shrink-0 whitespace-nowrap font-sans text-[28px] font-medium leading-9 tracking-[-0.5px] text-text-primary">
                        Hello, I&rsquo;m Frank!
                      </h2>
                      <div className="flex shrink-0 items-center justify-center gap-1.5 self-stretch rounded-full border border-brand pb-1.5 pl-3 pr-4 pt-2">
                        <img
                          src={mapPinIcon}
                          alt=""
                          className="size-5 shrink-0"
                        />
                        <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-primary">
                          Amsterdam, NL
                        </span>
                      </div>
                    </div>
                    <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
                      I&rsquo;m a German product designer based in Amsterdam.
                      I&rsquo;m open to new work, so if you&rsquo;re working on
                      something exciting and looking for a designer to join your
                      team, I&rsquo;d love to connect!
                    </p>
                  </div>

                  {/* Contact links */}
                  <div className="flex w-full items-start justify-end">
                    <div className="flex items-center gap-1">
                      <a
                        href="https://www.linkedin.com/in/frankstryj/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary transition-colors hover:bg-surface-tertiary"
                      >
                        <img src={linkedinIcon} alt="" className="size-5" />
                      </a>
                      <a
                        href={cvPdf}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Curriculum Vitae"
                        className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary font-sans text-xl font-bold tracking-[-0.6px] text-text-primary transition-colors hover:bg-surface-tertiary"
                      >
                        CV
                      </a>
                      <button
                        type="button"
                        aria-label="Share"
                        className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary transition-colors hover:bg-surface-tertiary"
                      >
                        <img src={shareIcon} alt="" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact options */}
              <div className="flex w-full items-start gap-1">
                <a
                  href="tel:+491794171933"
                  className="flex flex-1 items-center justify-center overflow-clip rounded-xl bg-brand px-6 py-7 transition-opacity hover:opacity-90"
                >
                  <span className="whitespace-nowrap font-sans text-lg leading-7 tracking-[-0.2px] text-text-invert">
                    (+49) 179 4171933
                  </span>
                </a>
                <a
                  href="mailto:frank.stryj@gmail.com"
                  className="flex flex-1 flex-col items-center justify-center overflow-clip rounded-xl bg-surface-primary px-6 py-7 transition-colors hover:bg-surface-secondary"
                >
                  <span className="whitespace-nowrap font-sans text-lg leading-7 tracking-[-0.2px] text-text-primary">
                    frank.stryj@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Right column — matches contact width when stacked */}
            <div className="flex w-[var(--contact-content-width)] shrink-0 flex-col items-start justify-between gap-8 rounded-xl bg-surface-primary px-10 py-8 min-[1064px]:w-[519px] min-[1064px]:gap-0 min-[1064px]:self-stretch">
              <div className="flex w-full flex-col items-start gap-1">
                <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
                  About me
                </p>
                <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
                  I enjoy exploring unfamiliar territory and navigating complexity. I combine
                  analytical thinking with creativity to design experiences that feel
                  intuitive, purposeful, and refined. Above all, I think deeply about
                  the people behind the product, the details that shape experiences,
                  and the possibilities that technology can create for the future.
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
                  A little fun fact
                </p>
                <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
                  At 16, I built Snapchat geofilters so my friends and I could use them
                  in our hometown. That was the first time I made something simply
                  because I wanted it to exist and seeing people actually use it brought
                  me a lot of joy. That&rsquo;s still the case today.
                </p>
              </div>
            </div>
          </div>

          {/* Close — outside the rounded content wrapper, top-aligned to its right */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="block h-[48.97px] w-[var(--contact-close-width)] shrink-0 cursor-pointer transition-opacity hover:opacity-80"
          >
            <img src={closeIcon} alt="" className="size-full" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSheet
