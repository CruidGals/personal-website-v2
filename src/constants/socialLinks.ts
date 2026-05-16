/** Edit these URLs; drop `public/resume.pdf` (or point `resume` elsewhere). */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  resume: '/resume.pdf',
} as const

export const SOCIAL_ICON_LINK_CLASS =
  'inline-flex p-2 text-[var(--text-h)] transition-[color,filter] duration-200 hover:text-[var(--accent)] hover:drop-shadow-[0_0_12px_rgba(170,59,255,0.45)]'
