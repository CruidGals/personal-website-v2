import type { SectionId } from '../../data/sectionContent'
import { HeroPanel } from '../hero/HeroPanel'
import { SectionNavButton } from './SectionNavButton'
import './HomeShell.css'

type HomeLayoutProps = {
  onOpenSection: (id: SectionId) => void
}

export function HomeLayout({ onOpenSection }: HomeLayoutProps) {
  return (
    <div className="home-shell">
      <nav className="section-corner-nav" aria-label="Site sections">
        <div className="section-corner section-corner--tl">
          <SectionNavButton onClick={() => onOpenSection('about')}>
            About
          </SectionNavButton>
        </div>
        <div className="section-corner section-corner--bl">
          <SectionNavButton onClick={() => onOpenSection('projects')}>
            Projects
          </SectionNavButton>
        </div>
        <div className="section-corner section-corner--tr">
          <SectionNavButton onClick={() => onOpenSection('experience')}>
            Experience
          </SectionNavButton>
        </div>
        <div className="section-corner section-corner--br">
          <SectionNavButton onClick={() => onOpenSection('contact')}>
            Contact
          </SectionNavButton>
        </div>
      </nav>

      <div className="home-hero-slot">
        <HeroPanel />
      </div>
    </div>
  )
}
