import { PROJECT_ENTRIES, PROJECTS_LEAD } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import './ProjectsContent.css'

export function ProjectsContent() {
  return (
    <div className="projects-content">
      <p className="projects-lead">{PROJECTS_LEAD}</p>
      <ul className="projects-grid">
        {PROJECT_ENTRIES.map((entry) => (
          <li
            key={entry.id}
            className={`projects-grid-item${entry.featured ? ' projects-grid-item--featured' : ''}`}
          >
            <ProjectCard entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}
