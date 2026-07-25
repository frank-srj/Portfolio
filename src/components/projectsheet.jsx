import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import closeIcon from '../assets/contact/close.svg'
import closeIconNeutral from '../assets/contact/close-neutral.svg'
import productIcon from '../assets/case-studies/icons/product.svg'
import designSystemIcon from '../assets/case-studies/icons/design-system.svg'
import brandIcon from '../assets/case-studies/icons/brand.svg'
import urbanProjective from '../assets/case-studies/urban-projective.png'
import orbitCard from '../assets/case-studies/orbit.png'
import figmaCard from '../assets/case-studies/figma-sustainable-mode.png'

import figmaBanner from '../assets/case-studies/figma-sustainable-mode/Figma_Thumbnail.webp'
import carbonCalculator from '../assets/case-studies/figma-sustainable-mode/carbon-calculator.png'
import greenSoftware from '../assets/case-studies/figma-sustainable-mode/green-software.png'
import conceptMode from '../assets/case-studies/figma-sustainable-mode/concept-mode.png'
import capabilityMeasure from '../assets/case-studies/figma-sustainable-mode/capability-measure.png'
import capabilityGuide from '../assets/case-studies/figma-sustainable-mode/capability-guide.png'
import capabilityEducate from '../assets/case-studies/figma-sustainable-mode/capability-educate.png'
import userFlow from '../assets/case-studies/figma-sustainable-mode/user-flow.png'
import contextualBanners from '../assets/case-studies/figma-sustainable-mode/contextual-banners.png'
import figmaDeliverable1 from '../assets/case-studies/figma-sustainable-mode/deliverable-1.png'
import figmaDeliverable2 from '../assets/case-studies/figma-sustainable-mode/deliverable-2.png'
import figmaDeliverable3 from '../assets/case-studies/figma-sustainable-mode/deliverable-3.png'

import orbitBanner from '../assets/case-studies/orbit/Orbit_Thumbnail.png'
import marketApps from '../assets/case-studies/orbit/market-apps.png'
import stickyNotes from '../assets/case-studies/orbit/sticky-notes.png'
import orbitSearch from '../assets/case-studies/orbit/orbit-search.png'
import intentions from '../assets/case-studies/orbit/intentions.png'
import spiderWeb from '../assets/case-studies/orbit/spider-web.png'
import orbitDeliverable1 from '../assets/case-studies/orbit/deliverable-1.png'
import orbitDeliverable2 from '../assets/case-studies/orbit/deliverable-2.png'
import orbitDeliverable3 from '../assets/case-studies/orbit/deliverable-3.png'
import orbitDeliverable4 from '../assets/case-studies/orbit/deliverable-4.png'

import urbanBanner from '../assets/case-studies/urban-projective/Urban_Thumbnail.png'
import dualLayerResponse from '../assets/case-studies/urban-projective/dual-layer-response.png'
import mapLayers from '../assets/case-studies/urban-projective/map-layers.png'
import urbanLogo from '../assets/case-studies/urban-projective/logo.png'
import urbanMonitor from '../assets/case-studies/urban-projective/monitor.png'
import urbanTypography from '../assets/case-studies/urban-projective/typography.png'
import urbanStackedWindows from '../assets/case-studies/urban-projective/stacked-windows.png'

const defaultCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Design System', icon: designSystemIcon },
  { label: 'Brand', icon: brandIcon },
]

const figmaCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Design System', icon: designSystemIcon },
]

const urbanCategories = [
  { label: 'Product', icon: productIcon },
  { label: 'Brand', icon: brandIcon },
]

const figmaCapabilities = [
  {
    image: capabilityMeasure,
    title: 'To measure',
    description:
      'Concrete metrics tied to specific elements, giving designers a factual basis to act on.',
  },
  {
    image: capabilityGuide,
    title: 'To guide.',
    description:
      'Data translated into alternatives, right at the moment a decision is made.',
  },
  {
    image: capabilityEducate,
    title: 'To educate.',
    description:
      'The reasoning behind a recommendation, not just the recommendation itself.',
  },
]

const projects = {
  figma: {
    id: 'figma',
    banner: figmaBanner,
    bannerClassName: 'object-cover object-right',
    tags: [
      { label: 'Concept 2025', outline: true },
      { label: '3 Designers', outline: true },
      { label: 'Product', icon: productIcon },
      { label: 'Design System', icon: designSystemIcon },
    ],
    title: 'Figma Sustainable Mode',
    intro:
      ' is a concept that highlights the impact design decisions have on digital sustainability. By embedding sustainability features directly into Figma, it lowers the barrier to making more sustainable choices in design, addressing a gap most designers aren\u2019t even aware of. The goal was to make that impact visible, understandable, and actionable at the exact moment a design choice',
    navItems: [
      { label: 'My Role', target: 'my-role' },
      { label: 'The Problem', target: 'the-problem' },
      { label: 'Design Decisions', target: 'design-decisions' },
      { label: 'Reflection', target: 'reflection' },
    ],
    otherProjects: [
      {
        id: 'urban',
        tag: 'Concept 2023',
        title: 'UrbanProjective',
        description:
          'Rethinking Human\u2013AI Interaction\nBeyond Chat Interfaces',
        image: urbanProjective,
        categories: urbanCategories,
      },
      {
        id: 'orbit',
        tag: 'Concept 2024',
        title: 'Orbit',
        description:
          'Exploring the potential of a tag-based search instead of traditional folder systems for saving and finding content',
        image: orbitCard,
        categories: defaultCategories,
      },
    ],
  },
  orbit: {
    id: 'orbit',
    banner: orbitBanner,
    // Match Figma crop: tall source shifted up so the phone sits in frame.
    bannerClassName: 'object-cover object-[center_32%]',
    tags: [
      { label: 'Concept 2024', outline: true },
      { label: '2 Designers', outline: true },
      { label: 'Product', icon: productIcon },
      { label: 'Design System', icon: designSystemIcon },
      { label: 'Brand', icon: brandIcon },
    ],
    title: 'Orbit',
    intro:
      ' started with a problem I kept running into myself: I save things constantly, screenshots, links, half-formed ideas and almost never find them again. Together with Niclas Stengel we designed a single storage solution that allows users to confidently rediscover their saved content across different media.  ',
    navItems: [
      { label: 'My Role', target: 'my-role' },
      { label: 'Design Decisions', target: 'design-decisions' },
      { label: 'Reflection', target: 'reflection' },
    ],
    otherProjects: [
      {
        id: 'urban',
        tag: 'Concept 2023',
        title: 'UrbanProjective',
        description:
          'Rethinking Human\u2013AI Interaction\nBeyond Chat Interfaces',
        image: urbanProjective,
        categories: urbanCategories,
      },
      {
        id: 'figma',
        tag: 'Concept 2025',
        title: 'Figma Sustainable Mode',
        description:
          'Making the environmental impact of digital design visible through a new Figma Mode.',
        image: figmaCard,
        categories: figmaCategories,
      },
    ],
  },
  urban: {
    id: 'urban',
    banner: urbanBanner,
    // Match Figma crop: tall source shifted so the skyline sits in frame.
    bannerClassName: 'object-cover object-[center_32%]',
    tags: [
      { label: 'Concept 2023', outline: true },
      { label: '2 Designers', outline: true },
      { label: 'Product', icon: productIcon },
      { label: 'Brand', icon: brandIcon },
    ],
    title: 'UrbanProjective',
    intro:
      ' is exploring how AI-powered forecasting could support policymakers in navigating the complexity of urban decision-making. Created during the early rise of generative AI interfaces, the project focused on how people might interact with AI systems beyond chat-based conversations. ',
    navItems: [
      { label: 'My Role', target: 'my-role' },
      { label: 'The Problem', target: 'the-problem' },
      { label: 'Design Decisions', target: 'design-decisions' },
      { label: 'Outcome', target: 'reflection' },
    ],
    otherProjects: [
      {
        id: 'orbit',
        tag: 'Concept 2024',
        title: 'Orbit',
        description:
          'Exploring the potential of a tag-based search instead of traditional folder systems for saving and finding content',
        image: orbitCard,
        categories: defaultCategories,
      },
      {
        id: 'figma',
        tag: 'Concept 2025',
        title: 'Figma Sustainable Mode',
        description:
          'Making the environmental impact of digital design visible through a new Figma Mode.',
        image: figmaCard,
        categories: figmaCategories,
      },
    ],
  },
}

const ProjectDataContext = createContext(null)

function useProjectData() {
  return useContext(ProjectDataContext)
}

const ImageLightboxContext = createContext(null)

function useOpenLightbox() {
  return useContext(ImageLightboxContext)
}

function ImageLightbox({ src, caption, onClose }) {
  if (!src) return null

  // Size the image against the viewport (minus overlay padding, close icon,
  // and gap-3), not a flex wrapper — so object-contain keeps the real ratio.
  // When a caption is present, reserve vertical room below for gap-3 + text.
  const imageMax = caption
    ? 'max-h-[calc(100vh-4rem-4rem)] max-w-[calc(100vw-4rem-50px-var(--spacing-3))] min-[720px]:max-h-[calc(100vh-8rem-4rem)] min-[720px]:max-w-[calc(100vw-8rem-50px-var(--spacing-3))]'
    : 'max-h-[calc(100vh-4rem)] max-w-[calc(100vw-4rem-50px-var(--spacing-3))] min-[720px]:max-h-[calc(100vh-8rem)] min-[720px]:max-w-[calc(100vw-8rem-50px-var(--spacing-3))]'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Expanded image"
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-neutral-black/50 p-8 min-[720px]:p-16"
      onClick={(event) => {
        event.stopPropagation()
        onClose()
      }}
    >
      {/* Image + close: top-aligned, close sits to the right with gap-3 */}
      <div
        className="flex w-fit max-w-full items-start gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex min-w-0 flex-col items-start gap-3">
          <img
            src={src}
            alt=""
            className={`rounded-xl object-contain ${imageMax}`}
          />
          {caption ? (
            <figcaption className="max-w-full text-left font-sans text-[15px] font-normal leading-[22px] text-neutral-20">
              {caption}
            </figcaption>
          ) : null}
        </div>

        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="block h-[48.97px] w-[50px] shrink-0 cursor-pointer transition-opacity hover:opacity-80"
        >
          <img src={closeIcon} alt="" className="size-full" />
        </button>
      </div>
    </div>
  )
}

/** Click-to-enlarge image — no hover animation, just a zoom cursor. */
function ZoomableImage({ src, caption, alt = '', className }) {
  const openLightbox = useOpenLightbox()
  const open = () => openLightbox?.({ src, caption })

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-zoom-in ${className}`}
      role="button"
      tabIndex={0}
      aria-label="View larger image"
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          open()
        }
      }}
    />
  )
}

function scrollToSection(target) {
  document
    .getElementById(target)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function getScrollParent(el) {
  // Prefer the project-sheet scrollport (full-viewport overlay) when present.
  const sheetRoot = document.querySelector('[data-project-sheet-scroll]')
  if (sheetRoot && el && sheetRoot.contains(el)) return sheetRoot

  let node = el?.parentElement
  while (node) {
    const { overflowY } = getComputedStyle(node)
    if (overflowY === 'auto' || overflowY === 'scroll') return node
    node = node.parentElement
  }
  return null
}

function CaseStudyNav() {
  const { navItems } = useProjectData()
  const asideRef = useRef(null)
  const [activeTarget, setActiveTarget] = useState(navItems[0].target)

  useEffect(() => {
    setActiveTarget(navItems[0].target)
  }, [navItems])

  useEffect(() => {
    const root = getScrollParent(asideRef.current)
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean)
    if (!root || sections.length === 0) return

    const navH =
      parseFloat(getComputedStyle(root).getPropertyValue('--nav-height')) || 0

    // A section counts as active once its top has crossed below the main navbar.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (visible[0]) setActiveTarget(visible[0].target.id)
      },
      {
        root,
        rootMargin: `-${navH + 32}px 0px -55% 0px`,
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navItems])

  return (
    <aside
      ref={asideRef}
      className="flex w-full shrink-0 flex-col items-start gap-2 py-8 min-[982px]:sticky min-[982px]:top-[var(--nav-height,0px)] min-[982px]:w-auto min-[982px]:min-w-[325px]"
    >
      {navItems.map((item) => {
        const isActive = item.target === activeTarget
        return (
          <button
            key={item.target}
            type="button"
            onClick={() => {
              setActiveTarget(item.target)
              scrollToSection(item.target)
            }}
            className={`font-sans text-lg font-medium leading-7 tracking-[-0.2px] transition-colors ${
              isActive
                ? 'text-text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {item.label}
          </button>
        )
      })}
      <button
        type="button"
        onClick={() => scrollToSection('deliverables')}
        className="flex flex-col items-start justify-end gap-1 rounded-md bg-neutral-100 px-3 py-2 transition-colors hover:bg-neutral-90"
      >
        <span className="font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-invert">
          Jump to Deliverables
        </span>
      </button>
    </aside>
  )
}

function Tag({ label, icon, outline }) {
  return (
    <div
      className={`flex items-center justify-center gap-1.5 rounded-full pb-1.5 pl-3 pr-4 pt-2 ${
        outline ? 'border border-border-primary' : 'bg-surface-secondary'
      }`}
    >
      {icon && <img src={icon} alt="" className="size-3 shrink-0" />}
      <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-secondary">
        {label}
      </span>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-secondary">
      {children}
    </p>
  )
}

function Heading({ children }) {
  return (
    <h2 className="w-full font-sans text-[28px] font-medium leading-9 tracking-[-0.5px] text-text-primary">
      {children}
    </h2>
  )
}

function Body({ children }) {
  return (
    <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
      {children}
    </p>
  )
}

function Caption({ children }) {
  return (
    <p className="w-full font-sans text-[15px] font-normal leading-[22px] text-text-secondary">
      {children}
    </p>
  )
}

// Section 01 uses framed screenshots: a surface-secondary card holding a
// rounded, cover-cropped thumbnail, with a caption beneath.
function FramedImage({ src, caption }) {
  return (
    <figure className="flex min-w-0 flex-1 flex-col items-start gap-2">
      <div className="flex w-full items-center justify-center overflow-clip rounded-xl border border-border-primary bg-surface-secondary px-[46px] py-[30px]">
        <div className="aspect-[235.622/159] w-full max-w-[235.622px] overflow-clip rounded-[8.633px]">
          <ZoomableImage
            src={src}
            caption={caption}
            className="size-full object-cover"
          />
        </div>
      </div>
      <Caption>{caption}</Caption>
    </figure>
  )
}

function CapabilityRow({ image, title, description }) {
  return (
    <div className="flex w-full flex-col items-start gap-8 @min-[633px]:flex-row @min-[633px]:items-end">
      <div className="aspect-[426/406] w-full shrink-0 overflow-hidden rounded-xl @min-[633px]:w-[426px]">
        <ZoomableImage src={image} className="size-full object-cover" />
      </div>
      <div className="flex min-w-[175px] flex-1 flex-col items-start gap-1">
        <p className="w-full font-sans text-lg font-medium leading-7 tracking-[-0.2px] text-text-primary">
          {title}
        </p>
        <p className="w-full font-sans text-lg font-normal leading-7 tracking-[-0.2px] text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}

function FigmaCaseStudyContent() {
  return (
    <>
      {/* My Role */}
      <section
        id="my-role"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>MY ROLE</SectionLabel>
        <Body>
          {`In this project, I primarily took on the role of an interaction designer. I defined the user flow and structure behind the concept, iterated the interface through multiple rounds of high-fidelity design, and built the final prototype in Figma. Alongside my teammates, I conducted user research and performed testing.`}
        </Body>
      </section>

      {/* The Problem */}
      <section
        id="the-problem"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>THE PROBLEM</SectionLabel>
        <Body>
          {`Digital products are rarely thought of as having an environmental footprint, but every design choice, from image weight to hosting to how often a screen updates, carries a real impact. As designers, we're used to considering accessibility, usability, and business goals. Climate impact rarely makes that list. Not because it doesn't matter, but because most designers have never been shown the influence they might have. This concept sets out to challenge that gap.`}
        </Body>
      </section>

      {/* Design Decisions */}
      <section
        id="design-decisions"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>DESIGN DECISIONS</SectionLabel>
        <div className="flex w-full flex-col items-start gap-12">
          {/* 01 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>Embedding Sustainability into Existing Workflows</Heading>
            <div className="flex w-full flex-col items-start gap-8">
              <Body>
                {`To understand where this influence could actually take shape, I talked with senior designers at ING and Randstad. Sustainability, it turned out, had no real place in their companies' design processes. Most weren't aware of how their individual choices contributed to carbon impact in the first place. Looking further, desk research showed that educational resources and tools did exist, but almost always outside the design process itself, requiring designers to already know to look for them.`}
              </Body>
              <div className="flex w-full items-start gap-2 max-[560px]:flex-col">
                <FramedImage
                  src={carbonCalculator}
                  caption="Website Carbon Calculator: A web-based tool enabling users to evaluate the impact of a website by submitting its URL."
                />
                <FramedImage
                  src={greenSoftware}
                  caption="Green Software Foundation: A non-profit foundation participating towards building greener software."
                />
              </div>
              <Body>
                {`In other words, awareness was the very thing missing that these resources depended on. That shaped the core decision behind the concept. Instead of designing another standalone tool designers would have to seek out, sustainability should live inside the software designers already use every day. Therefore, we built Sustainability Mode as a concept for Figma, aiming to keep it visible at the exact moment decisions are made, making it part of the design process itself.`}
              </Body>
              <figure className="flex w-full flex-col items-start gap-3">
                <div className="aspect-[663/279] w-full overflow-hidden rounded-xl border border-border-primary">
                  <ZoomableImage
                    src={conceptMode}
                    caption="Concept: Sustainability Mode"
                    className="size-full object-cover"
                  />
                </div>
                <Caption>Concept: Sustainability Mode</Caption>
              </figure>
            </div>
          </div>

          {/* 02 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>
              Structuring Sustainable Mode Around 3 Capabilities
            </Heading>
            <div className="@container flex w-full flex-col items-start gap-8">
              <Body>
                {`A workshop with five designers made it clear that a more holistic approach was needed. The results showed that designers wanted to measure impact, get guided toward better choices, and understand why it mattered, in order to make informed decisions. So we based our feature development on these three core capabilities as well as sketches provided by the participants.`}
              </Body>
              {figmaCapabilities.map((capability) => (
                <CapabilityRow key={capability.title} {...capability} />
              ))}
            </div>
          </div>

          {/* 03 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>
              Designing a clear information architecture to prevent cognitive
              overload
            </Heading>
            <div className="flex w-full flex-col items-start gap-6">
              <Body>
                {`In a design tool like Figma, with many parallel options and complex interactions, it is critical to prevent cognitive overload and maintain usability. Therefore, I mapped a user flow and built a clear hierarchy of features, placing measurement and guidance right on the surface, with education just one step behind. After testing with six designers, I refined the hierarchy further. Multiple participants saw a metric without understanding what it meant or why it mattered. So I decided to move education and guidance closer together, connecting every recommendation directly to the reasoning behind it.`}
              </Body>
              <div className="flex w-full flex-col items-start gap-6 min-[561px]:flex-row">
                <figure className="flex min-w-0 w-full flex-col items-start gap-3 min-[561px]:flex-[469]">
                  {/* Native 469/542 beside the banner; when stacked, match the
                     contextual-banner frame so both share one ratio. */}
                  <div className="aspect-[810/542] w-full overflow-hidden rounded-xl border border-border-primary min-[561px]:aspect-[469/542]">
                    <ZoomableImage
                      src={userFlow}
                      caption="Excerpt from the User Flow"
                      className="size-full object-cover"
                    />
                  </div>
                  <Caption>Excerpt from the User Flow</Caption>
                </figure>
                <figure className="flex min-w-0 w-full flex-col items-start gap-3 min-[561px]:flex-[810]">
                  <div className="aspect-[810/542] w-full overflow-hidden rounded-xl border border-border-primary">
                    <ZoomableImage
                      src={contextualBanners}
                      caption="Introducing Contextual banners that explain the impact"
                      className="size-full object-cover"
                    />
                  </div>
                  <Caption>
                    Introducing Contextual banners that explain the impact
                  </Caption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>REFLECTION</SectionLabel>
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-6">
            <Heading>Think in systems.</Heading>
            <Body>
              {`This Project was not just about designing an great feature, but had to fit within Figmas existing Interface. It's important to work with established systems and consider how it fits into users' mental models.`}
            </Body>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <Heading>One Product Isn&apos;t Enough.</Heading>
            <Body>
              {`This Figma Concept can make impact visible, but it won't fix a systemic problem. Real change needs software providers, companies, and designers moving together, not one tool changing minds one at a time. Good design might start a shift, but it most likely can't carry it alone.`}
            </Body>
          </div>
        </div>
      </section>
    </>
  )
}

function OrbitCaseStudyContent() {
  return (
    <>
      {/* My Role */}
      <section
        id="my-role"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>MY ROLE</SectionLabel>
        <Body>
          {`Niclas and I co-designed Orbit end-to-end, from research and concept through design and prototyping, with no fixed roles. Rather than dividing tasks, we divided on perspectives. I pushed toward simplicity, reducing clutter, keeping interfaces easy to scan, and questioning anything that added complexity without clear value. I also focused on translating our underlying concepts, like the \u201cOrbit\u201d and \u201cIntentions\u201d, into something thats easily understood by users.`}
        </Body>
      </section>

      {/* Design Decisions */}
      <section
        id="design-decisions"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>DESIGN DECISIONS</SectionLabel>
        <div className="flex w-full flex-col items-start gap-12">
          {/* 01 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>
              Choosing a Tag-based Search instead of traditional folder systems
            </Heading>
            <div className="flex w-full flex-col items-start gap-8">
              <Body>
                {`Early in our research, we conducted market research and looked at how existing tools handle saved content. We found a consistent pattern across popular software: users are often asked to sort content into folders or labels at the moment of saving. This creates friction, because users often don't yet know how they'll want to retrieve their content later, which leads to weak recall of the storage location. Users do, however, usually remember what they were looking for, meaning recall of the content itself is strong.`}
              </Body>
              <div className="flex w-full flex-col items-start gap-6 min-[561px]:flex-row">
                <figure className="flex min-w-0 w-full flex-col items-start min-[561px]:flex-[832]">
                  {/* Native 832/586 beside the sticky notes; when stacked, match
                     the wider frame so both share one ratio. */}
                  <div className="aspect-[832/586] w-full overflow-hidden rounded-xl border border-border-primary">
                    <ZoomableImage
                      src={marketApps}
                      className="size-full object-cover"
                    />
                  </div>
                </figure>
                <figure className="flex min-w-0 w-full flex-col items-start min-[561px]:flex-[478]">
                  <div className="aspect-[832/586] w-full overflow-hidden rounded-xl border border-border-primary min-[561px]:aspect-[478/586]">
                    <ZoomableImage
                      src={stickyNotes}
                      className="size-full object-cover"
                    />
                  </div>
                </figure>
              </div>
              <div className="flex w-full flex-col items-start gap-0">
                <Body>
                  {`This insight informed our decision to design around the content itself rather than users' saving logic. We removed the friction at the moment of saving entirely by opting for a single space where all content is stored. We called it the "Orbit".`}
                </Body>
                <Body>
                  {`It is structured chronologically and left unsorted by default. Instead of requiring users to organize this space, we opted for an intelligent tag system, where each item is automatically described through image, speech, text, and video recognition. Users can thereby filter their Orbit intuitively and confidently rediscover content by describing what they're looking for through tags. Combining multiple tags refines the search further.`}
                </Body>
              </div>
              <figure className="flex w-full flex-col items-start gap-3">
                <div className="aspect-[663/439] w-full overflow-hidden rounded-xl border border-border-primary">
                  <ZoomableImage
                    src={orbitSearch}
                    caption="Left: The Orbit (Homescreen) / Right: Tag-Based Search"
                    className="size-full object-cover"
                  />
                </div>
                <Caption>
                  Left: The Orbit (Homescreen) / Right: Tag-Based Search
                </Caption>
              </figure>
            </div>
          </div>

          {/* 02 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>
              Organizing Content by Purpose Instead of Location
            </Heading>
            <div className="flex w-full flex-col items-start gap-8">
              <div className="flex w-full flex-col items-start gap-0">
                <Body>
                  {`While a tag-based search solved how users retrieve individual items, it didn't address a separate need: sometimes items only make sense together.`}
                </Body>
                <Body>
                  {`Through jobs to be done and persona work, we identified that users often pursue a specific goal, such as furnishing an apartment, that requires multiple items to be considered as a set rather than found one by one.`}
                </Body>
              </div>
              <div className="aspect-[663/414] w-full overflow-hidden rounded-xl">
                <ZoomableImage
                  src={intentions}
                  className="size-full object-cover"
                />
              </div>
              <Body>
                {`This led us to introduce "Intentions," a way for users to assign existing items to a specific goal. Rather than a new place to store content, an Intention acts as a temporary lens over the Orbit, tied to one specific purpose. Because it only reflects that seeked for goal, an Intention exists purly as long as it's relevant. Once it's achieved, it can be deleted. The content itself is not at risk, since the items simply lose that affiliation. `}
              </Body>
            </div>
          </div>

          {/* 03 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>
              Simplifying Retrieval by Deciding Against a Node Network
            </Heading>
            <div className="flex w-full flex-col items-start gap-6">
              <Body>
                {`During wireframing, we explored an interaction we called the "spider web," a node-link diagram of related tags that users could navigate to narrow down their search. However, when translating this into prototypes, we ultimately decided against it. The network was visually cluttered and too detailed to navigate comfortably on mobile, especially when considering the hit areas of each tag.  This interaction pattern was just adding complexity rather than removing it, so we chose to keep the retrieval simple and focused on building around direct tag input instead.`}
              </Body>
              <figure className="flex w-full flex-col items-start gap-3">
                <div className="aspect-[663/610] w-full overflow-hidden rounded-xl border border-border-primary">
                  <ZoomableImage
                    src={spiderWeb}
                    caption={`Wireframe and Low-Fideltiy Screen of the \u201cSpider Web\u201d`}
                    className="size-full object-cover"
                  />
                </div>
                <Caption>
                  Wireframe and Low-Fideltiy Screen of the &ldquo;Spider
                  Web&rdquo;
                </Caption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section
        id="reflection"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>REFLECTION</SectionLabel>
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-6">
            <Heading>Test Earlier, Refine Later.</Heading>
            <Body>
              {`Looking back, we spent a long time refining ideas like the "spider web" before ever putting them in front of a prototype, only to discover they didn't work once we did. That time could have gone into testing earlier, smaller versions of our ideas instead. I learned that a polished concept on paper says very little about whether it actually works, and that getting to a rough, testable version faster, even an imperfect one, would have taught us more than another round of refining it in theory.`}
            </Body>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <Heading>
              Believing In an Idea Isn&apos;t the Same as Validating It.
            </Heading>
            <Body>
              {`Orbit was built as a fully working prototype, though the project concluded before we were able to test it with real users. As a result, we don't have direct user validation. With Orbit, we weren't only designing for better usability, we were designing for trust. Asking users to let go of control over how their content is organized requires real user feedback, not just conviction. If I were to continue this project, my next step would be structured usability testing focused specifically on trust and retrieval confidence: can users find content they haven't looked at in months, without ever having filed it anywhere? That question, more than any visual or interaction detail, would determine whether Orbit's core premise holds up.`}
            </Body>
          </div>
        </div>
      </section>
    </>
  )
}

function UrbanCaseStudyContent() {
  return (
    <>
      {/* My Role */}
      <section
        id="my-role"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>MY ROLE</SectionLabel>
        <Body>
          {`On this project, I worked together with Kilian Wachowiak. We explored the limits of chat-based interaction together: prompting, testing, and pushing early AI tools to see where the pattern broke down. Design and interface work was primarily mine, the dual-layer response system, the map view, and the overall interface, refined through multiple iterations.`}
        </Body>
      </section>

      {/* The Problem */}
      <section
        id="the-problem"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>THE PROBLEM</SectionLabel>
        <div className="flex w-full flex-col items-start gap-0">
          <Body>
            {`With the release of ChatGPT in November 2022, and the rapid adoption that followed, I got curious how this kind of tool might reshape the way people interact with AI more broadly. Based on my own early experiences using it back then, I started noticing real limits within chat-based interaction. Often, once a task got a bit more complex, a single linear thread struggled to offer a satisfying experience.`}
          </Body>
          <Body>
            {`Together with Kilian Wachowiak, I set out to question that pattern and explore what an alternative could look like. We chose urban development as the context to design for, however we were not trying to solve it, but its complexity made the limits of chat-based interaction impossible to ignore.`}
          </Body>
        </div>
      </section>

      {/* Design Decisions */}
      <section
        id="design-decisions"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>DESIGN DECISIONS</SectionLabel>
        <div className="flex w-full flex-col items-start gap-12">
          {/* 01 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>Creating A Dual-Layer Response System</Heading>
            <div className="flex w-full flex-col items-start gap-8">
              <Body>
                {`To understand where chat-based interaction actually broke down, we became our own users. We picked common city development scenarios, reducing street traffic being one of them, and prompted ChatGPT the way a policymaker might, then just kept going. We quickly realized, that refining a scenario meant explaining ourselves over and over again. This included naming the specific factor we wanted to change and often even asking the AI which factors were relevant in the first place before we could adjust anything. `}
              </Body>
              <figure className="flex w-full flex-col items-start gap-3">
                <div className="aspect-[663/439] w-full overflow-hidden rounded-xl border border-border-primary">
                  <ZoomableImage
                    src={dualLayerResponse}
                    caption="A generated response, paired with the filters behind it."
                    className="size-full object-cover"
                  />
                </div>
                <Caption>
                  A generated response, paired with the filters behind it.
                </Caption>
              </figure>
              <Body>
                {`That shaped the core decision behind UrbanProjective. I decided that alongside every generated response, the system should also inform the user about the relevant factors behind that scenario. It does that by surfacing those factors directly as filters and sliders, ready to adjust. It's a dual-layer response: one layer answers the prompt, the other hands over control.`}
              </Body>
            </div>
          </div>

          {/* 02 */}
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <Heading>Making the Response Visual</Heading>
            <div className="flex w-full flex-col items-start gap-8">
              <div className="flex w-full flex-col items-start gap-0">
                <Body>
                  {`In our research, we also understood that complex urban decisions are hardly grasped through text alone. When ChatGPT described the effects of a policy change in dense paragraphs of consequences, tradeoffs, and affected areas, we kept wishing we could see the impact rather than read it, to actually understand the forecast.`}
                </Body>
                <Body>
                  {`For that reason, we decided to make responses spatial by default. Every forecast is simulated directly on a map, showing exactly where traffic would shift, where congestion would build, which streets would be affected. For data that's better read as numbers than seen on a map, the software switches to charts instead. One underlying response, shown in whichever form actually makes it legible.`}
                </Body>
              </div>
              <figure className="flex w-full flex-col items-start gap-3">
                <div className="aspect-[663/498] w-full overflow-hidden rounded-xl">
                  <ZoomableImage
                    src={mapLayers}
                    caption="Map layers showing traffic, air pollution, and business impact."
                    className="size-full object-cover"
                  />
                </div>
                <Caption>
                  Map layers showing traffic, air pollution, and business
                  impact.
                </Caption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Reflection */}
      <section
        id="reflection"
        className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-start gap-4"
      >
        <SectionLabel>OUTCOME & REFLECTION</SectionLabel>
        <Body>
          {`Since this was a speculative design, the goal was to question common patterns rather than create solutions. In early 2023, linear chat-based prompting was essentially the only interaction pattern that most people were familiar with, and it often still is today. We were able to spark real discussions with professors and other students about AI interactions and its possibilities. Now, three years later, we can see that AI prompting has actually become broader. Opening wizards to clarify user intent, generating small interfaces to improve user interaction, and implementing edit modes have become very common in linear chat interfaces. It's a small thing, but it's nice to see that the question we asked back then has since been addressed by the industry.`}
        </Body>
      </section>
    </>
  )
}

function CaseStudyContent() {
  const project = useProjectData()

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 pb-10 pt-5 min-[720px]:px-16 min-[720px]:pb-16 min-[720px]:pt-8 min-[982px]:flex-row min-[982px]:pt-16">
        <CaseStudyNav />

        <article className="flex w-full min-w-px flex-1 flex-col items-center gap-12 py-8 min-[982px]:max-w-[663px]">
          {project.id === 'orbit' ? (
            <OrbitCaseStudyContent />
          ) : project.id === 'urban' ? (
            <UrbanCaseStudyContent />
          ) : (
            <FigmaCaseStudyContent />
          )}
        </article>
      </div>
    </div>
  )
}

// Deliverables gallery — full-bleed section; images center within the shared
// 1440px content width (1376px media + p-8).
function FigmaImageGallery() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 p-8">
      {/* Wide ratio on desktop; on the stacked/narrow breakpoint the frame
         gets taller so the shot reads larger, cropping the right edge. */}
      <div className="aspect-[3/2] w-full overflow-hidden rounded-xl min-[561px]:aspect-[1376/628]">
        <ZoomableImage
          src={figmaDeliverable1}
          className="size-full object-cover object-left"
        />
      </div>
      <div className="flex w-full gap-5 max-[560px]:flex-col">
        <div className="aspect-[678/475] min-w-px flex-1 overflow-hidden rounded-xl">
          <ZoomableImage
            src={figmaDeliverable2}
            className="size-full object-cover"
          />
        </div>
        <div className="aspect-[678/475] min-w-px flex-1 overflow-hidden rounded-xl">
          <ZoomableImage
            src={figmaDeliverable3}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function OrbitImageGallery() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 p-8">
      <div className="flex w-full items-start gap-6 max-[720px]:flex-col">
        {/* Stacked: taller frame + object-left so the crop eats the right edge.
           Desktop keeps the wide 1033/628 composition. */}
        <div className="aspect-[4/3] min-w-px w-full flex-1 overflow-hidden rounded-xl min-[721px]:aspect-[1033/628]">
          <ZoomableImage
            src={orbitDeliverable1}
            className="size-full object-cover object-left"
          />
        </div>
        {/* Stacked: square, crop from the bottom (object-top). Desktop stretches
           to match the row height beside deliverable-1. */}
        <div className="aspect-square w-full overflow-hidden rounded-xl min-[721px]:aspect-auto min-[721px]:h-auto min-[721px]:w-[min(323px,23.5%)] min-[721px]:shrink-0 min-[721px]:basis-[23.5%] min-[721px]:self-stretch">
          <ZoomableImage
            src={orbitDeliverable2}
            className="size-full object-cover object-top"
          />
        </div>
      </div>
      <div className="flex w-full items-start gap-6 max-[720px]:flex-col">
        <div className="aspect-[722/475] min-w-px flex-[722] overflow-hidden rounded-xl">
          <ZoomableImage
            src={orbitDeliverable3}
            className="size-full scale-[1.2] object-cover"
          />
        </div>
        <div className="aspect-[634/475] min-w-px flex-[634] overflow-hidden rounded-xl">
          <ZoomableImage
            src={orbitDeliverable4}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function UrbanImageGallery() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-3 p-8">
      <div className="flex w-full items-start gap-3 max-[720px]:flex-col">
        <div className="aspect-[722/475] min-w-px flex-[722] overflow-hidden rounded-xl">
          <ZoomableImage
            src={urbanLogo}
            className="size-full object-cover"
          />
        </div>
        <div className="aspect-[642/475] min-w-px flex-[642] overflow-hidden rounded-xl">
          <ZoomableImage
            src={urbanMonitor}
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full items-start gap-3 max-[720px]:flex-col">
        {/* Stacked: taller frame + object-left so the crop eats the right edge.
           Desktop keeps the wide 1033/628 composition. */}
        <div className="aspect-[4/3] min-w-px w-full flex-1 overflow-hidden rounded-xl min-[721px]:aspect-[1033/628]">
          <ZoomableImage
            src={dualLayerResponse}
            className="size-full object-cover object-left"
          />
        </div>
        {/* Hidden when stacked; desktop stretches to match the row. */}
        <div className="hidden aspect-[323/475] w-full overflow-hidden rounded-xl min-[721px]:block min-[721px]:aspect-auto min-[721px]:h-auto min-[721px]:w-[min(323px,23.5%)] min-[721px]:shrink-0 min-[721px]:basis-[23.5%] min-[721px]:self-stretch">
          <ZoomableImage
            src={urbanTypography}
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="aspect-[1376/611] w-full overflow-hidden rounded-xl">
        <ZoomableImage
          src={urbanStackedWindows}
          className="size-full object-cover"
        />
      </div>
    </div>
  )
}

function ImageGallery() {
  const project = useProjectData()

  return (
    <section
      id="deliverables"
      className="flex w-full scroll-mt-[calc(var(--nav-height,0px)+var(--spacing-8))] flex-col items-center border-b border-border-primary bg-surface-primary"
    >
      {project.id === 'orbit' ? (
        <OrbitImageGallery />
      ) : project.id === 'urban' ? (
        <UrbanImageGallery />
      ) : (
        <FigmaImageGallery />
      )}
    </section>
  )
}

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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 31 31"
      className="size-[31px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="15.995"
        cy="15.214"
        r="15"
        className="fill-surface-primary transition-colors duration-300 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:fill-surface-secondary"
      />
      <path
        d="M12.6854 6.44472L11.4289 5.18302L7.25681 9.39432L7.16921 0H5.39601L5.48361 9.39432L1.23291 5.18302L0 6.44472L6.40181 12.7871L12.6854 6.44472Z"
        transform="translate(9.619 8.773) rotate(180 6.3427 6.3936)"
        className="fill-icon-primary"
      />
    </svg>
  )
}

function OtherProjectCard({
  tag,
  title,
  description,
  image,
  categories = [],
  onOpen,
}) {
  const interactive = typeof onOpen === 'function'

  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={
        interactive
          ? (event) => {
              event.stopPropagation()
              onOpen()
            }
          : undefined
      }
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                event.stopPropagation()
                onOpen()
              }
            }
          : undefined
      }
      className={`group flex h-full min-w-px flex-1 flex-col items-start rounded-2xl border border-border-primary bg-surface-secondary p-3 transition-colors duration-300 ease-[cubic-bezier(0.33,0,0.2,1)] hover:bg-surface-primary ${
        interactive ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex size-full flex-col items-start gap-3">
        <div className="aspect-[678/378] w-full shrink-0 overflow-hidden rounded-xl">
          <img src={image} alt="" className="size-full object-cover" />
        </div>

        <div className="flex w-full min-w-[299px] flex-1 flex-col items-start gap-4">
          {/* Year tag — same height across cards so titles align */}
          <div className="flex flex-wrap content-start items-start gap-1">
            <div className="flex items-center justify-center gap-1.5 rounded-full border border-border-primary px-2 pb-1.5 pt-2">
              <span className="whitespace-nowrap font-mono text-[15px] font-medium leading-[14px] tracking-[-0.5px] text-text-secondary">
                {tag}
              </span>
            </div>
          </div>

          {/* Title + description share a top edge across the row */}
          <div className="flex w-full flex-col items-start gap-1">
            <h3 className="w-full font-sans text-[20px] font-medium leading-7 tracking-[-0.5px] text-text-primary">
              {title}
            </h3>
            <p className="w-full whitespace-pre-line font-sans text-[20px] font-normal leading-7 tracking-[-0.2px] text-text-primary">
              {description}
            </p>
          </div>

          {/* Bottom row: hover tags + arrow (always bottom-right, card p-3) */}
          <div className="flex w-full flex-1 flex-col justify-end">
            <div className="flex w-full items-end gap-2">
              <div className="flex flex-wrap items-end gap-1 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:opacity-100">
                {categories.map((category) => (
                  <CategoryTag key={category.label} {...category} />
                ))}
              </div>
              <div className="ml-auto shrink-0">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OtherProjects({ onProjectOpen }) {
  const { otherProjects } = useProjectData()

  return (
    <section className="flex w-full flex-col items-center bg-surface-secondary">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-5 px-8 pb-24 pt-16">
        <div className="flex w-full items-start px-4">
          <h2 className="whitespace-nowrap font-sans text-[32px] font-medium leading-[42px] tracking-[-0.64px] text-text-primary">
            Other Projects
          </h2>
        </div>
        <div className="flex w-full items-stretch gap-5 max-[720px]:flex-col">
          {otherProjects.map((item) => (
            <OtherProjectCard
              key={item.id ?? item.title}
              {...item}
              onOpen={
                item.id ? () => onProjectOpen?.(item.id) : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectSheet({ open, onClose, projectId, onProjectOpen }) {
  // The sheet's top edge stops spacing-12 below the (sticky) navbar, so the
  // navbar stays visible and interactable above it. Measure the navbar so the
  // gap holds across breakpoints.
  const [navHeight, setNavHeight] = useState(65)
  const [lightbox, setLightbox] = useState(null)
  const openLightbox = useCallback((payload) => setLightbox(payload), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  // Keep mounted through the exit so the sheet can slide down instead of vanishing.
  const [visible, setVisible] = useState(false)
  const closing = visible && !open
  // Scroll the overlay only after the enter animation finishes — never during
  // open/close, so motion stays identical to the original sheet animation.
  const [scrollReady, setScrollReady] = useState(false)
  const scrollRef = useRef(null)
  // Keep the last project while the exit animation plays.
  const [activeProjectId, setActiveProjectId] = useState(projectId)
  // When switching from Other Projects, the previous sheet becomes the bg peek.
  const [backgroundProjectId, setBackgroundProjectId] = useState(null)
  // Bump to remount enter animations when navigating sheet → sheet.
  const [enterKey, setEnterKey] = useState(0)
  const project = projects[activeProjectId] ?? projects.figma
  const backgroundProject = backgroundProjectId
    ? projects[backgroundProjectId]
    : null

  // Travel distance matches the old viewport-tall frame so translateY distance
  // (and thus the animation feel) stays the same even when content is taller.
  const sheetSlide = `calc(100dvh - ${navHeight}px - var(--spacing-12))`

  useEffect(() => {
    if (!projectId) return

    // Fresh open (or still closed): sync without a sheet→sheet transition.
    if (!visible || !open) {
      setActiveProjectId(projectId)
      setBackgroundProjectId(null)
      return
    }

    if (projectId === activeProjectId) return

    // Sheet already open: previous project becomes the background sheet,
    // new project slides in as the main sheet (same enter motion as homepage).
    setBackgroundProjectId(activeProjectId)
    setActiveProjectId(projectId)
    setEnterKey((key) => key + 1)
    setLightbox(null)
  }, [projectId, open, visible, activeProjectId])

  useEffect(() => {
    if (open) setVisible(true)
  }, [open])

  // After the exit unmounts, clear stack state for the next fresh open.
  useEffect(() => {
    if (visible) return
    setBackgroundProjectId(null)
    setEnterKey(0)
  }, [visible])

  useEffect(() => {
    if (!open || !visible || closing) {
      setScrollReady(false)
      return
    }
    // slide-up: 0.2s delay + 0.8s duration
    const timer = setTimeout(() => setScrollReady(true), 1000)
    return () => clearTimeout(timer)
  }, [open, visible, closing, enterKey])

  // Sheet→sheet: jump to top before the new enter animation paints.
  useLayoutEffect(() => {
    if (enterKey > 0 && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [enterKey])

  // Before the exit paints, jump back to the top so slide-down matches open.
  useLayoutEffect(() => {
    if (closing && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [closing])

  useEffect(() => {
    if (!visible) return

    if (!open) setLightbox(null)

    const measureNav = () => {
      const nav = document.querySelector('nav')
      if (nav) setNavHeight(nav.getBoundingClientRect().height)
    }
    measureNav()
    window.addEventListener('resize', measureNav)

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape' || closing) return
      // Close the lightbox first; only then close the sheet.
      if (lightbox) {
        setLightbox(null)
      } else {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('resize', measureNav)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [visible, open, closing, onClose, lightbox])

  if (!visible) return null

  const canScroll = scrollReady && !closing

  return (
    <ProjectDataContext.Provider value={project}>
      <ImageLightboxContext.Provider value={openLightbox}>
        <div
          ref={scrollRef}
          data-project-sheet-scroll
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          className={`fixed inset-0 z-40 ${
            closing ? 'pointer-events-none overflow-hidden' : ''
          } ${canScroll ? 'overflow-y-auto' : 'overflow-hidden'}`}
          style={{ '--nav-height': `${navHeight}px` }}
          onClick={closing ? undefined : onClose}
        >
          {/* Sheet sits spacing-12 below the navbar at rest; scrolling this
             overlay moves the whole sheet up underneath the (higher-z) navbar. */}
          <div
            className={`relative ${closing ? 'animate-slide-down' : ''}`}
            style={{
              marginTop: `calc(${navHeight}px + var(--spacing-12))`,
              '--sheet-slide': sheetSlide,
            }}
            onAnimationEnd={(event) => {
              if (event.target !== event.currentTarget) return
              if (closing) setVisible(false)
            }}
          >
            {/* Background sheet peeking behind the top edge.
               Fresh open: neutrals/10 placeholder.
               Sheet→sheet: previous project settles into this slot, then
               dissolves into neutrals/10 (same end state as a fresh open). */}
            {backgroundProject ? (
              <div
                key={`bg-${backgroundProject.id}-${enterKey}`}
                aria-hidden="true"
                className="animate-sheet-become-bg pointer-events-none absolute -top-5 left-10 right-10 z-0 overflow-hidden rounded-t-3xl bg-neutral-10"
                style={{ height: 'var(--sheet-slide)' }}
              >
                <div className="animate-sheet-bg-dissolve flex h-full w-full flex-col overflow-hidden rounded-t-3xl bg-surface-primary">
                  <div className="relative h-[clamp(160px,15vw+80px,280px)] w-full shrink-0 overflow-clip">
                    <img
                      src={backgroundProject.banner}
                      alt=""
                      className={`pointer-events-none absolute inset-0 size-full ${backgroundProject.bannerClassName}`}
                    />
                  </div>
                  <div className="h-full w-full bg-surface-primary" />
                </div>
              </div>
            ) : (
              <div
                key={`bg-neutral-${enterKey}`}
                aria-hidden="true"
                className="animate-sheet-bg-in pointer-events-none absolute -top-5 left-10 right-10 h-16 rounded-t-3xl bg-neutral-10"
              />
            )}

            {/* Main sheet surface — height follows content; min-height keeps the
               open/close travel distance equal to the old viewport frame. */}
            <div
              key={`main-${project.id}-${enterKey}`}
              onClick={(event) => event.stopPropagation()}
              className="animate-slide-up relative z-10 flex w-full flex-col rounded-t-3xl bg-surface-primary"
              style={{ minHeight: 'var(--sheet-slide)' }}
            >
              {/* Project thumbnail — full-bleed banner with the close icon top-right.
                 Height scales with viewport so narrow sheets stay landscape-ish
                 instead of squaring up and over-cropping the wide banner. */}
              <div className="relative flex h-[clamp(160px,15vw+80px,280px)] w-full shrink-0 flex-col items-end overflow-clip rounded-t-3xl p-8">
                <img
                  src={project.banner}
                  alt=""
                  className={`pointer-events-none absolute inset-0 size-full ${project.bannerClassName}`}
                />
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="relative z-10 block h-[48.97px] w-[50px] shrink-0 cursor-pointer transition-opacity hover:opacity-80"
                >
                  <img
                    src={project.id === 'orbit' ? closeIconNeutral : closeIcon}
                    alt=""
                    className="size-full"
                  />
                </button>
              </div>

              {/* Hero / intro — full-bleed surface; text centers within the shared content width */}
              <div className="flex w-full flex-col items-center">
                <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 py-10 min-[720px]:p-16">
                  {/* Tags */}
                  <div className="flex w-full flex-wrap content-start items-start gap-1">
                    {project.tags.map((tag) => (
                      <Tag key={tag.label} {...tag} />
                    ))}
                  </div>

                  {/* Title + intro */}
                  <div className="flex w-full max-w-[1120px] items-center">
                    <h1 className="min-w-px flex-1 font-sans text-[32px] font-medium leading-[42px] tracking-[-0.64px] text-text-primary">
                      {project.title}
                      <span className="text-text-secondary">{project.intro}</span>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full shrink-0 bg-border-primary" />

              {/* Content — sticky nav + case study body */}
              <CaseStudyContent />

              {/* Divider */}
              <div className="h-px w-full shrink-0 bg-border-primary" />

              {/* Deliverables gallery */}
              <ImageGallery />

              {/* Other projects */}
              <OtherProjects onProjectOpen={onProjectOpen} />
            </div>
          </div>
        </div>

        <ImageLightbox
          src={lightbox?.src}
          caption={lightbox?.caption}
          onClose={closeLightbox}
        />
      </ImageLightboxContext.Provider>
    </ProjectDataContext.Provider>
  )
}

export default ProjectSheet
