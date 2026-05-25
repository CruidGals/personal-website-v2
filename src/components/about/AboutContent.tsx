import {
  ABOUT_CROSS_LINKS,
  ABOUT_INTRO,
  ABOUT_RESUME_HREF,
  ABOUT_RESUME_LABEL,
  ABOUT_SKILL_GROUPS,
  type SkillEntry,
} from '../../data/about'
import {
  navigateToSection,
  type SectionNavigator,
} from '../../utils/sectionCrossLinks'
import './AboutContent.css'

type AboutContentProps = {
  onNavigateToSection: SectionNavigator
}

function skillIconUrl(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}`
}

function SkillChip({ skill }: { skill: SkillEntry }) {
  if (!skill.iconSlug) {
    return (
      <span className="about-skill-chip about-skill-chip--concept">
        {skill.name}
      </span>
    )
  }

  return (
    <span className="about-skill-chip">
      <img
        className="about-skill-icon"
        src={skillIconUrl(skill.iconSlug)}
        alt=""
        width={18}
        height={18}
        loading="lazy"
        decoding="async"
      />
      {skill.name}
    </span>
  )
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

      <section className="about-skills" aria-labelledby="about-skills-heading">
        <h3 id="about-skills-heading" className="about-section-title">
          Technical skills
        </h3>
        {ABOUT_SKILL_GROUPS.map((group) => (
          <div key={group.label} className="about-skill-group">
            <h4 className="about-section-title about-skill-group-label">
              {group.label}
            </h4>
            <div className="about-skill-grid">
              {group.skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </section>

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
