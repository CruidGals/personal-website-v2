import { type AnimationEvent, useCallback, useId, useState } from 'react'
import { AboutContent } from './components/about/AboutContent'
import { ExperienceTimeline } from './components/experience/ExperienceTimeline'
import { ProjectsContent } from './components/projects/ProjectsContent'
import { FoldOverlay } from './components/fold/FoldOverlay'
import { HomeLayout } from './components/home/HomeLayout'
import {
  SECTION_COPY,
  SECTION_SLIDE_FROM,
  type SectionId,
} from './data/sectionContent'
import { useFoldOverlay } from './hooks/useFoldOverlay'
import { prefersReducedMotion } from './utils/prefersReducedMotion'

function App() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null)
  const [exiting, setExiting] = useState(false)
  const titleId = useId()

  const requestClose = useCallback(() => {
    if (openSection === null) return
    if (prefersReducedMotion()) {
      setOpenSection(null)
      setExiting(false)
      return
    }
    setExiting(true)
  }, [openSection])

  const openSectionPanel = useCallback((id: SectionId) => {
    setExiting(false)
    setOpenSection(id)
  }, [])

  const { closeButtonRef } = useFoldOverlay(
    openSection !== null,
    requestClose,
  )

  const onExitAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (!exiting) return
    if (e.target !== e.currentTarget) return
    const name = (e.animationName || '').toLowerCase()
    if (!name.includes('slide-out-to-')) return
    setOpenSection(null)
    setExiting(false)
  }

  const copy = openSection ? SECTION_COPY[openSection] : null

  return (
    <>
      <div aria-hidden={openSection !== null}>
        <HomeLayout onOpenSection={openSectionPanel} />
      </div>

      {openSection !== null && copy && (
        <FoldOverlay
          sectionKey={openSection}
          slideFrom={SECTION_SLIDE_FROM[openSection]}
          title={copy.title}
          paragraphs={
            openSection === 'about' ||
            openSection === 'experience' ||
            openSection === 'projects'
              ? undefined
              : copy.paragraphs
          }
          exiting={exiting}
          titleId={titleId}
          closeButtonRef={closeButtonRef}
          onCloseClick={requestClose}
          onExitAnimationEnd={onExitAnimationEnd}
        >
          {openSection === 'about' && (
            <AboutContent onNavigateToSection={openSectionPanel} />
          )}
          {openSection === 'experience' && <ExperienceTimeline />}
          {openSection === 'projects' && <ProjectsContent />}
        </FoldOverlay>
      )}
    </>
  )
}

export default App
