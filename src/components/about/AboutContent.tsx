import {
  ABOUT_CROSS_LINKS,
  ABOUT_INTRO,
  ABOUT_RESUME_HREF,
  ABOUT_RESUME_LABEL,
} from '../../data/about'
import {
  LANGUAGE_CAROUSEL_SKILLS,
  TECHNOLOGY_CAROUSEL_SKILLS,
} from '../../data/skillCarousel'
import {
  navigateToSection,
  type SectionNavigator,
} from '../../utils/sectionCrossLinks'
import { SkillsCarousel } from './SkillsCarousel'
import './AboutContent.css'

type AboutContentProps = {
  onNavigateToSection: SectionNavigator
}

export function AboutContent({ onNavigateToSection }: AboutContentProps) {
  return (
    <article className="about-content">
      <div className="about-intro">
        {ABOUT_INTRO.map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>

      <p className="about-resume">
        <a className="about-resume-link" href={ABOUT_RESUME_HREF}>
          {ABOUT_RESUME_LABEL}
        </a>
      </p>

      <hr className="about-divider" aria-hidden="true" />

      <section className="about-skills" aria-labelledby="about-skills-heading">
        <h3 id="about-skills-heading" className="about-section-title">
          Technical skills
        </h3>

        <SkillsCarousel label="Languages" items={LANGUAGE_CAROUSEL_SKILLS} />
        <SkillsCarousel
          label="Technologies"
          items={TECHNOLOGY_CAROUSEL_SKILLS}
          scrollSpeed={38}
        />
      </section>

      <hr className="about-divider" aria-hidden="true" />

      <nav className="about-cross-links" aria-label="Other sections">
        {ABOUT_CROSS_LINKS.map((link) => (
          <button
            key={link.target}
            type="button"
            className="about-cross-link about-cross-link--enabled"
            onClick={() => navigateToSection(onNavigateToSection, link.target)}
          >
            <span className="about-cross-link-label">{link.label}</span>
            <span className="about-cross-link-arrow" aria-hidden="true">
              →
            </span>
            <span className="about-cross-link-hint">{link.hint}</span>
          </button>
        ))}
      </nav>
    </article>
  )
}
