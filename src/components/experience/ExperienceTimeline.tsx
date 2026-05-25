import { EXPERIENCE_ENTRIES, EXPERIENCE_LEAD, type ExperienceEntry } from '../../data/experience'
import './ExperienceTimeline.css'

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className="experience-entry"
      aria-labelledby={`experience-role-${entry.id}`}
    >
      <span className="experience-entry-marker" aria-hidden="true" />
      <div className="experience-card">
        <header className="experience-header">
          <div className="experience-header-col experience-header-col--primary">
            <h3
              className="experience-title"
              id={`experience-role-${entry.id}`}
            >
              {entry.role}
            </h3>
            <span className="experience-company">{entry.organization}</span>
          </div>
          <div className="experience-header-col experience-header-col--meta">
            <span className="experience-dates">{entry.dates}</span>
            <span className="experience-location">{entry.location}</span>
          </div>
        </header>

        <p className="experience-summary">{entry.summary}</p>

        <ul className="experience-bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
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
