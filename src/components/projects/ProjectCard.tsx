import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PROJECT_THUMBNAIL_BY_ID } from '../../data/projectThumbnails'
import type { ProjectEntry, ProjectLink } from '../../data/projects'
import {
  getProjectLinkVisual,
  simpleIconUrl,
  type ProjectLinkVisual,
} from '../../utils/projectLinkVisual'
import './ProjectCard.css'

type ProjectCardProps = {
  entry: ProjectEntry
}

function LinkIconGraphic({ visual }: { visual: ProjectLinkVisual }) {
  if (visual.type === 'simpleicon') {
    return (
      <img
        className="project-link-icon project-link-icon--brand"
        src={simpleIconUrl(visual.slug)}
        alt=""
        width={18}
        height={18}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <FontAwesomeIcon
      icon={visual.icon}
      className={`project-link-icon${visual.brand ? ' project-link-icon--brand' : ''}`}
    />
  )
}

function ProjectLinkIcon({ link }: { link: ProjectLink }) {
  const visual = getProjectLinkVisual(link)

  if (link.href === null) {
    return (
      <span
        className="project-link project-link--placeholder"
        aria-label={`${visual.label} (coming soon)`}
        aria-disabled="true"
      >
        <LinkIconGraphic visual={visual} />
      </span>
    )
  }

  return (
    <a
      className={`project-link project-link--${link.kind}`}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={visual.label}
    >
      <LinkIconGraphic visual={visual} />
    </a>
  )
}

export function ProjectCard({ entry }: ProjectCardProps) {
  const thumbnailSrc = PROJECT_THUMBNAIL_BY_ID[entry.id]

  return (
    <article
      className={`project-card${entry.featured ? ' project-card--featured' : ''}`}
      aria-labelledby={`project-title-${entry.id}`}
    >
      <div className="project-card-media">
        {thumbnailSrc ? (
          <img
            className="project-card-image"
            src={thumbnailSrc}
            alt={`${entry.title} preview`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-card-placeholder" aria-hidden="true">
            <span className="project-card-placeholder-glyph">
              {entry.title.charAt(0)}
            </span>
          </div>
        )}
        {entry.award && (
          <span className="project-card-award">{entry.award}</span>
        )}
      </div>

      <div className="project-card-body">
        <header className="project-card-header">
          <h3 className="project-card-title" id={`project-title-${entry.id}`}>
            {entry.title}
          </h3>
          <p className="project-card-dates">{entry.dates}</p>
        </header>

        <p className="project-card-tagline">{entry.tagline}</p>

        <div className="project-card-tags" role="list" aria-label="Technologies">
          {entry.technologies.map((tech) => (
            <span key={tech} className="project-card-tag" role="listitem">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-links" role="list" aria-label="Project links">
          {entry.links.map((link) => (
            <span key={link.kind} role="listitem">
              <ProjectLinkIcon link={link} />
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
