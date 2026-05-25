import { SOCIAL_LINKS } from '../constants/socialLinks'

export const CONTACT_INTRO = [
  'I am open to internships, research collaborations, hackathon organizing, and software engineering roles.'
] as const

export const CONTACT_EMAIL = 'kyle.chiem@outlook.com'
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`

export const CONTACT_PHONE_DISPLAY = '(267) 312-5131'
export const CONTACT_PHONE_HREF = 'tel:+12673125131'

export const CONTACT_RESUME_HREF = SOCIAL_LINKS.resume
export const CONTACT_RESUME_LABEL = 'Resume [PDF]'
export const CONTACT_RESUME_UPDATED = 'Last updated April 2026'

export type ContactChannel = {
  id: string
  label: string
  href: string
  external?: boolean
}

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: 'linkedin',
    label: 'linkedin.com/in/kyle-chiem',
    href: SOCIAL_LINKS.linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'github.com/CruidGals',
    href: SOCIAL_LINKS.github,
    external: true,
  },
] as const
