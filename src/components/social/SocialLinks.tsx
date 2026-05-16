import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import {
  SOCIAL_ICON_LINK_CLASS,
  SOCIAL_LINKS,
} from '../../constants/socialLinks'

export function SocialLinks() {
  return (
    <nav
      id="social"
      className="flex flex-wrap items-center justify-center gap-1"
      aria-label="Social and resume links"
    >
      <a
        className={SOCIAL_ICON_LINK_CLASS}
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="hero-icon" />
      </a>
      <a
        className={SOCIAL_ICON_LINK_CLASS}
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} className="hero-icon" />
      </a>
      <a
        className={SOCIAL_ICON_LINK_CLASS}
        href={SOCIAL_LINKS.resume}
        aria-label="Resume"
      >
        <FontAwesomeIcon icon={faFileLines} className="hero-icon" />
      </a>
    </nav>
  )
}
