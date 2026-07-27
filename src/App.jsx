import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'
import ContactSheet from './components/contactsheet'
import ProjectSheet from './components/projectsheet'
import HomeMobile from './components/HomeMobile'
import { useIsPhone } from './hooks/useMediaQuery'

function App() {
  const isPhone = useIsPhone()

  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  const [activeProject, setActiveProject] = useState(null)
  const openProject = (projectId) => setActiveProject(projectId)
  const closeProject = () => setActiveProject(null)
  const projectOpen = activeProject != null

  // Clicking the navbar name always returns to the homepage.
  const goHome = () => {
    setContactOpen(false)
    setActiveProject(null)
  }

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-surface-primary text-text-primary">
      <Navbar
        onContactClick={openContact}
        onHomeClick={goHome}
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
        {isPhone ? (
          <HomeMobile
            onContactClick={openContact}
            onProjectOpen={openProject}
          />
        ) : (
          <>
            <Hero onContactClick={openContact} />
            <CaseStudies onProjectOpen={openProject} />
            <Footer />
          </>
        )}
      </div>
      <ContactSheet open={contactOpen} onClose={closeContact} />
      <ProjectSheet
        open={projectOpen}
        projectId={activeProject}
        onClose={closeProject}
        onProjectOpen={openProject}
      />
    </div>
  )
}

export default App
