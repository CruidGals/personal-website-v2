import {
  CONTACT_CHANNELS,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_INTRO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_RESUME_HREF,
  CONTACT_RESUME_LABEL,
  CONTACT_RESUME_UPDATED,
} from '../../data/contact'
import './ContactContent.css'

export function ContactContent() {
  return (
    <article className="contact-content">
      <div className="contact-intro">
        {CONTACT_INTRO.map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>

      <ul className="contact-details" aria-label="Contact details">
        <li className="contact-detail">
          <span className="contact-detail-label">Email</span>
          <a className="contact-detail-value" href={CONTACT_EMAIL_HREF}>
            {CONTACT_EMAIL}
          </a>
        </li>

        <li className="contact-detail">
          <span className="contact-detail-label">Phone</span>
          <a className="contact-detail-value" href={CONTACT_PHONE_HREF}>
            {CONTACT_PHONE_DISPLAY}
          </a>
        </li>

        {CONTACT_CHANNELS.map((channel) => (
          <li key={channel.id} className="contact-detail">
            <span className="contact-detail-label">
              {channel.id === 'linkedin' ? 'LinkedIn' : 'GitHub'}
            </span>
            <a
              className="contact-detail-value"
              href={channel.href}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer me' }
                : {})}
            >
              {channel.label}
            </a>
          </li>
        ))}

        <li className="contact-detail">
          <span className="contact-detail-label">PDF</span>
          <span className="contact-detail-value contact-detail-value--stacked">
            <a className="contact-resume-link" href={CONTACT_RESUME_HREF}>
              {CONTACT_RESUME_LABEL}
            </a>
            <span className="contact-resume-updated">{CONTACT_RESUME_UPDATED}</span>
          </span>
        </li>
      </ul>
    </article>
  )
}
