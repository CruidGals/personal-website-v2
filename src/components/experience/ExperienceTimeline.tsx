import { EXPERIENCE_ENTRIES, EXPERIENCE_LEAD, type ExperienceEntry } from '../../data/experience'
import './ExperienceTimeline.css'

function statusLabel(status: ExperienceEntry['status']): string | null {
  if (status === 'incoming') return 'Incoming'
  if (status === 'current') return 'Present'
  return null
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const badge = statusLabel(entry.status)

  return (
    <article
      className={`experience-entry${entry.status === 'incoming' ? ' experience-entry--incoming' : ''}`}
      aria-labelledby={`experience-role-${entry.id}`}
    >
      <span className="experience-entry-marker" aria-hidden="true" />
      <div className="experience-card">
        <header className="experience-card-header">
          <div className="experience-card-titles">
            <h3 className="experience-role" id={`experience-role-${entry.id}`}>
              {entry.role}
            </h3>
            <p className="experience-org">{entry.organization}</p>
          </div>
          {badge && (
            <span
              className={`experience-badge${entry.status === 'current' ? ' experience-badge--current' : ''}`}
            >
              {badge}
            </span>
          )}
        </header>

        <p className="experience-meta">
          <span className="experience-meta-item">{entry.dates}</span>
          <span className="experience-meta-item">{entry.location}</span>
        </p>

        <p className="experience-summary">{entry.summary}</p>

        <ul className="experience-bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="experience-tags" role="list" aria-label="Technologies (placeholder)">
          {entry.technologies.map((tech) => (
            <span key={tech} className="experience-tag" role="listitem">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function ExperienceTimeline() {
  return (
    <div className="experience-content">
      <p className="experience-lead">{EXPERIENCE_LEAD}</p>
      <ol className="experience-timeline">
        {EXPERIENCE_ENTRIES.map((entry) => (
          <li key={entry.id}>
            <ExperienceCard entry={entry} />
          </li>
        ))}
      </ol>
    </div>
  )
}
