import { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import NavBar from "./components/01_NavBar/NavBar"
import About from './components/02_About/About'
import Wave from './components/common/Wave'
import CommandPalette from './components/common/CommandPalette'
import StickyHireBar from './components/common/StickyHireBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll } from 'react-scroll'
import { SCROLL_DURATION, SCROLL_EASING } from './utils/scrollProps'

const Experience = lazy(() => import('./components/03_Experience/Experience'))
const Skills = lazy(() => import('./components/04_Skills/Skills'))
const Services = lazy(() => import('./components/05_Services/Services'))
const Projects = lazy(() => import('./components/06_Projects/Projects'))
const Contact = lazy(() => import('./components/07_Contact/Contact'))
const Footer = lazy(() => import('./components/08_Footer/Footer'))

function App() {
  const { t } = useTranslation()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: SCROLL_DURATION, smooth: SCROLL_EASING })
  }

  return (
    <>
      <a href="#main-content" className="skip-link">{t('a11y.skipToContent')}</a>

      <NavBar onOpenPalette={() => setIsPaletteOpen(true)} />

      <section id="about">
        <div className="section-decor" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <div className="dot-grid" />
        </div>
        <About />
        <Wave variant="elevated" />
      </section>

      <section id="experience">
        <div className="section-decor" aria-hidden="true">
          <span className="blob blob-a" />
        </div>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Wave variant="base" flip />
      </section>

      <section id="skills">
        <div className="section-decor" aria-hidden="true">
          <span className="blob blob-b" />
        </div>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      </section>

      <section id="services">
        <div className="section-decor" aria-hidden="true">
          <span className="blob blob-a" />
        </div>
        <Suspense fallback={null}>
          <Services />
        </Suspense>
        <Wave variant="elevated" />
      </section>

      <section id="projects">
        <div className="section-decor" aria-hidden="true">
          <span className="blob blob-a" />
        </div>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Wave variant="base" flip />
      </section>

      <section id="contact">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label={t('a11y.backToTop')}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      <StickyHireBar />

      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
    </>
  )
}

export default App
