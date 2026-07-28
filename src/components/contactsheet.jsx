import { useCallback, useEffect, useRef, useState } from 'react'
import frankProfile from '../assets/contact/frank.webp'
import linkedinIcon from '../assets/contact/linkedin.svg'
import mapPinIcon from '../assets/contact/map-pin.svg'
import shareIcon from '../assets/contact/share.svg'
import closeIcon from '../assets/contact/close.svg'
import cvPdf from '../assets/CV_Stryj,Frank.pdf'
import { useIsPhone } from '../hooks/useMediaQuery'

const BANNER_VISIBLE_MS = 5000
const BANNER_DISSOLVE_MS = 400
const CONTACT_EXIT_MS = 600

function getPortfolioUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  return envUrl || window.location.origin
}

async function copyPortfolioUrl() {
  const url = getPortfolioUrl()
  try {
    await navigator.clipboard.writeText(url)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = url
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}

function ShareBanner({ dissolving }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 right-6 z-[70] overflow-clip rounded-xl bg-white/50 p-3 shadow-[0px_7px_4px_0px_rgba(0,0,0,0.02),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.03)] ${
        dissolving ? 'animate-banner-dissolve' : 'animate-banner-float-in'
      }`}
    >
      <p className="whitespace-nowrap font-sans text-[15px] font-normal leading-[22px] text-text-primary">
        Portfolio Link was copied
      </p>
    </div>
  )
}

// Shared by both layouts so the phone and desktop sheets always read the same.
const copy = {
  heading: 'Hello, I’m Frank!',
  intro:
    'I’m a German product designer based in Amsterdam. I’m open to new work, so if you’re working on something exciting and looking for a designer to join your team, I’d love to connect!',
  aboutLabel: 'About me',
  about:
    'I enjoy exploring unfamiliar territory and navigating complexity. I combine analytical thinking with creativity to design experiences that feel intuitive, purposeful, and refined. Above all, I think deeply about the people behind the product, the details that shape experiences, and the possibilities that emerge when design and technology come together. I actively explore new tools and workflows, using AI to prototype, build, and bring ideas to life. This portfolio is a reflection of that.',
  funFactLabel: 'A little fun fact',
  funFact:
    'At 16, I built Snapchat geofilters so my friends and I could use them in our hometown. That was the first time I made something simply because I wanted it to exist and seeing people actually use it brought me a lot of joy. That’s still the case today.',
}

/* Figma "Contact-Mobile": fills the screen, close above the stack, cards at
   4px side margins, and the whole stack scrolls as one column. */
function MobileSheet({ onClose, closing }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Frank"
      className={`fixed inset-0 z-[60] flex flex-col gap-2.5 overflow-hidden bg-neutral-100/60 px-1 pt-3 ${
        closing ? 'animate-fade-out' : 'animate-fade-in'
      }`}
      onClick={onClose}
    >
      <div className="flex w-full shrink-0 justify-end pr-3">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="block h-[48.97px] w-[var(--contact-close-width)] shrink-0 cursor-pointer"
        >
          <img src={closeIcon} alt="" className="size-full" />
        </button>
      </div>

      <div
        className="animate-slide-up flex min-h-0 w-full flex-1 flex-col gap-1 overflow-y-auto rounded-xl pb-1"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Contact card */}
        <div className="flex w-full shrink-0 flex-col overflow-clip rounded-xl bg-surface-primary">
          <div className="h-[317px] w-full shrink-0 overflow-hidden">
            <img
              src={frankProfile}
              alt="Frank"
              className="size-full object-cover object-[50%_60%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="flex w-full flex-col items-end gap-6 px-6 py-8">
            <div className="flex w-full flex-col gap-2">
              <h2 className="w-full font-sans text-[24px] font-medium leading-8 tracking-[-0.48px] text-text-primary">
                {copy.heading}
              </h2>
              <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
                {copy.intro}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/frankstryj/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary transition-colors active:bg-surface-tertiary"
              >
                <img src={linkedinIcon} alt="" className="size-5" />
              </a>
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                aria-label="Curriculum Vitae"
                className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary font-sans text-xl font-extrabold tracking-[-0.03em] text-text-primary transition-colors active:bg-surface-tertiary"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        {/* Contact options */}
        <div className="flex w-full shrink-0 items-stretch gap-1">
          <a
            href="tel:+491794171933"
            className="flex min-w-px flex-1 items-center justify-center overflow-clip rounded-xl bg-brand px-3 py-7 transition-opacity active:opacity-90"
          >
            <span className="whitespace-nowrap font-sans text-lg leading-7 tracking-[-0.2px] text-text-invert">
              (+49) 179 4171933
            </span>
          </a>
          <a
            href="mailto:frank.stryj@gmail.com"
            className="flex min-w-px flex-1 items-center justify-center overflow-clip rounded-xl bg-surface-primary px-3 py-7 transition-colors active:bg-surface-secondary"
          >
            <span className="whitespace-nowrap font-sans text-lg leading-7 tracking-[-0.2px] text-text-primary">
              frank.stryj@gmail.com
            </span>
          </a>
        </div>

        {/* About */}
        <div className="flex w-full shrink-0 flex-col gap-8 rounded-xl bg-surface-primary px-6 py-8">
          <div className="flex w-full flex-col gap-1">
            <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
              {copy.aboutLabel}
            </p>
            <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
              {copy.about}
            </p>
          </div>
          <div className="flex w-full flex-col gap-1">
            <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
              {copy.funFactLabel}
            </p>
            <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
              {copy.funFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopSheet({ onClose, onShare, closing }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Frank"
      className={`fixed inset-0 z-[60] overflow-x-auto bg-neutral-100/60 ${
        closing ? 'animate-fade-out' : 'animate-fade-in'
      }`}
      onClick={onClose}
    >
      {/* Frame is always at least the full contact wrapper + side insets, so
         content and close stay inside the layout even if the viewport is
         narrower (horizontal scroll on this overlay). */}
      <div className="relative h-full w-[max(100%,var(--page-min-width))]">
        {/* Sheet width = --contact-wrapper-width (content + gap + close). */}
        <div
          className={`absolute bottom-3 left-3 flex w-[var(--contact-wrapper-width)] max-h-[calc(100vh-var(--spacing-6))] flex-row items-start gap-1 min-[1064px]:w-auto ${
            closing ? 'animate-slide-out-bl' : 'animate-slide-in-bl'
          }`}
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
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>

                {/* Body */}
                <div className="flex w-full flex-1 flex-col items-end justify-between overflow-clip p-8">
                  <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full items-start justify-between">
                      <h2 className="shrink-0 whitespace-nowrap font-sans text-[28px] font-medium leading-9 tracking-[-0.5px] text-text-primary">
                        {copy.heading}
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
                      {copy.intro}
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
                        className="flex h-14 w-[58px] items-center justify-center rounded-full bg-surface-secondary font-sans text-xl font-extrabold tracking-[-0.03em] text-text-primary transition-colors hover:bg-surface-tertiary"
                      >
                        CV
                      </a>
                      <button
                        type="button"
                        aria-label="Share"
                        onClick={onShare}
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
                  {copy.aboutLabel}
                </p>
                <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
                  {copy.about}
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
                  {copy.funFactLabel}
                </p>
                <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-primary">
                  {copy.funFact}
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

function ContactSheet({ open, onClose }) {
  const isPhone = useIsPhone()
  const [bannerPhase, setBannerPhase] = useState(null)
  const [visible, setVisible] = useState(open)
  const visibleTimerRef = useRef(null)
  const dissolveTimerRef = useRef(null)
  const closeTimerRef = useRef(null)
  const closing = visible && !open

  const clearBannerTimers = useCallback(() => {
    clearTimeout(visibleTimerRef.current)
    clearTimeout(dissolveTimerRef.current)
  }, [])

  const dismissBanner = useCallback(() => {
    clearBannerTimers()
    setBannerPhase(null)
  }, [clearBannerTimers])

  useEffect(() => {
    clearTimeout(closeTimerRef.current)

    if (open) {
      setVisible(true)
      return
    }

    if (!visible) return

    closeTimerRef.current = setTimeout(() => setVisible(false), CONTACT_EXIT_MS)

    return () => clearTimeout(closeTimerRef.current)
  }, [open, visible])

  const handleShare = useCallback(async () => {
    await copyPortfolioUrl()
    clearBannerTimers()
    setBannerPhase('visible')

    visibleTimerRef.current = setTimeout(() => {
      setBannerPhase('dissolving')
      dissolveTimerRef.current = setTimeout(() => {
        setBannerPhase(null)
      }, BANNER_DISSOLVE_MS)
    }, BANNER_VISIBLE_MS)
  }, [clearBannerTimers])

  // Lock body scroll while the sheet is visible, including its exit animation.
  useEffect(() => {
    if (!visible) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [visible])

  useEffect(() => {
    if (!open) dismissBanner()
  }, [open, dismissBanner])

  useEffect(
    () => () => {
      clearBannerTimers()
      clearTimeout(closeTimerRef.current)
    },
    [clearBannerTimers]
  )

  if (!visible) return null

  return (
    <>
      {bannerPhase && <ShareBanner dissolving={bannerPhase === 'dissolving'} />}
      {isPhone ? (
        <MobileSheet onClose={onClose} closing={closing} />
      ) : (
        <DesktopSheet onClose={onClose} onShare={handleShare} closing={closing} />
      )}
    </>
  )
}

export default ContactSheet
