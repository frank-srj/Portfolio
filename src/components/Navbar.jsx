import { useEffect, useState } from "react"
import cvPdf from "../assets/CV_Frank,Stryj.pdf"

const navLinks = [
  { label: "Work", active: true },
  { label: "Play", active: false },
  { label: "Resume", active: false, href: cvPdf, external: true },
]

function NavLink({ link, onClick }) {
  return (
    <a
      href={link.href ?? "#"}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      onClick={onClick}
      className={`flex items-center gap-2 font-mono text-[15px] leading-[22px] transition-colors ${
        link.active ? "text-brand" : "text-text-secondary hover:text-brand"
      }`}
    >
      {link.active && (
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-brand"
        />
      )}
      {link.label}
    </a>
  )
}

function Navbar({ onContactClick, onHomeClick, contactOpen = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Keep the menu open under the contact sheet (avoids a layout jump), then
  // collapse it once the sheet closes.
  useEffect(() => {
    if (!contactOpen) setMenuOpen(false)
  }, [contactOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      // Contact sheet owns Escape while it's open.
      if (event.key === "Escape" && !contactOpen) setMenuOpen(false)
    }

    const handleResize = () => {
      if (window.matchMedia("(min-width: 982px)").matches) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [menuOpen, contactOpen])

  const handleHomeClick = () => {
    setMenuOpen(false)
    onHomeClick?.()
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border-primary bg-surface-primary">
      {/* Mobile — matches the case study card stack point (container 958px + 24px page padding) */}
      <div className="flex h-16 items-center justify-between px-6 min-[982px]:hidden">
        <button
          type="button"
          onClick={handleHomeClick}
          className="font-mono text-[15px] leading-[22px] text-text-secondary transition-colors hover:text-brand"
        >
          F. Stryj
        </button>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-sheet"
          onClick={() => setMenuOpen((open) => !open)}
          className="group flex items-center gap-3"
        >
          <span className="font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-primary transition-colors group-hover:text-brand">
            Menu
          </span>
          <span
            aria-hidden="true"
            className="relative size-6"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-[18px] -translate-x-1/2 bg-icon-primary transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand ${
                menuOpen
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-[3px] rotate-0"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-[18px] -translate-x-1/2 bg-icon-primary transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand ${
                menuOpen
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-[3px] rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu sheet — Figma M-Opened */}
      <div
        id="mobile-nav-sheet"
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
        className={`grid min-[982px]:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex w-full items-end justify-between gap-8 p-8 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-start justify-center gap-3">
              {navLinks.map((link) => (
                <NavLink key={link.label} link={link} onClick={closeMenu} />
              ))}
            </div>

            <button
              type="button"
              onClick={onContactClick}
              className="flex h-12 shrink-0 items-center justify-center rounded-md bg-neutral-100 px-6 font-sans text-xl leading-7 text-text-invert transition-colors hover:bg-neutral-90"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Desktop — matches the case study card stack point (container 958px + 24px page padding) */}
      <div className="hidden items-center justify-between px-6 py-2 min-[982px]:flex">
        {/* Name — same treatment as the nav links, but no selected state */}
        <button
          type="button"
          onClick={handleHomeClick}
          className="font-mono text-[15px] leading-[22px] text-text-secondary transition-colors hover:text-brand"
        >
          Frank Stryj
        </button>

        {/* Nav — links share the resume/content left edge; Contact fills to the top-right corner */}
        <div className="flex w-[calc(var(--width-rail)+var(--rail-margin-end))] shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </div>

          <button
            type="button"
            onClick={onContactClick}
            className="flex h-12 items-center justify-center rounded-md bg-neutral-100 px-6 font-sans text-xl leading-7 text-text-invert transition-colors hover:bg-neutral-90"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
