import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'
import SiteFooter from './components/SiteFooter'
import Colophone from './components/Colophone'
import ContactSheet from './components/contactsheet'
import ProjectSheet from './components/projectsheet'
import HomeMobile from './components/HomeMobile'
import { useIsPhone } from './hooks/useMediaQuery'

const HOME_ROUTE = {
  page: 'home',
  contactOpen: false,
  activeProject: null,
}

function normalizeRoute(state) {
  const route = state?.portfolioRoute

  if (!route) return HOME_ROUTE

  return {
    page: route.page === 'colophone' ? 'colophone' : 'home',
    contactOpen: Boolean(route.contactOpen),
    activeProject: route.activeProject ?? null,
  }
}

function blurActiveElement() {
  requestAnimationFrame(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  })
}

function App() {
  const isPhone = useIsPhone()
  const [route, setRoute] = useState(() => normalizeRoute(window.history.state))
  const { page, contactOpen, activeProject } = route
  const projectOpen = activeProject != null
  const wasSheetOpen = useRef(projectOpen || contactOpen)

  useEffect(() => {
    const isSheetOpen = projectOpen || contactOpen
    if (wasSheetOpen.current && !isSheetOpen) {
      blurActiveElement()
    }
    wasSheetOpen.current = isSheetOpen
  }, [projectOpen, contactOpen])

  const pushRoute = useCallback((nextRoute, { scrollTop = false } = {}) => {
    setRoute(nextRoute)
    window.history.pushState({ portfolioRoute: nextRoute }, '')
    if (scrollTop) window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    window.history.replaceState({ portfolioRoute: route }, '')
  }, [])

  useEffect(() => {
    const handlePopState = (event) => {
      setRoute(normalizeRoute(event.state))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openContact = () =>
    pushRoute(
      { page, contactOpen: true, activeProject },
      { scrollTop: false }
    )

  const closeContact = () => {
    if (contactOpen) {
      window.history.back()
      blurActiveElement()
    }
  }

  const openProject = (projectId) =>
    pushRoute(
      { page, contactOpen: false, activeProject: projectId },
      { scrollTop: false }
    )

  const closeProject = () => {
    if (!projectOpen) return

    pushRoute(
      { page, contactOpen: false, activeProject: null },
      { scrollTop: false }
    )
    blurActiveElement()
  }

  const goHome = () => {
    if (page === 'home' && !contactOpen && !projectOpen) return

    pushRoute(HOME_ROUTE, { scrollTop: true })
  }

  const openColophone = () =>
    pushRoute(
      { page: 'colophone', contactOpen: false, activeProject: null },
      { scrollTop: true }
    )

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-surface-primary text-text-primary">
      <Navbar
        onContactClick={openContact}
        onHomeClick={goHome}
        onWorkClick={goHome}
        workActive={page === 'home'}
        contactOpen={contactOpen}
      />
      {/* Homepage content (minus navbar) sinks down while dissolving as the
         project sheet opens, revealing the plain white background behind it. */}
      <div
        className={`transition-[translate,opacity] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          projectOpen
            ? 'pointer-events-none translate-y-32 opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {page === 'colophone' ? (
          <div className="flex min-h-[calc(100svh-var(--nav-height,64px))] flex-col bg-surface-secondary">
            <Colophone />
            <SiteFooter
              onColophoneClick={openColophone}
              className="bg-surface-secondary"
            />
          </div>
        ) : isPhone ? (
          <HomeMobile
            onContactClick={openContact}
            onProjectOpen={openProject}
            onColophoneClick={openColophone}
          />
        ) : (
          <>
            <Hero onContactClick={openContact} />
            <CaseStudies onProjectOpen={openProject} />
            <Footer />
            <SiteFooter onColophoneClick={openColophone} />
          </>
        )}
      </div>
      <ContactSheet open={contactOpen} onClose={closeContact} />
      <ProjectSheet
        open={projectOpen}
        projectId={activeProject}
        onClose={closeProject}
        onProjectOpen={openProject}
        onColophoneClick={openColophone}
        contactOpen={contactOpen}
      />
    </div>
  )
}

export default App
