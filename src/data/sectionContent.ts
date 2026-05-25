export const SECTION_COPY = {
  about: {
    title: 'About',
    paragraphs: [],
  },
  projects: {
    title: 'Projects',
    paragraphs: [
      'Highlight a few projects here: problem, stack, and outcome.',
      'You can later swap this block for cards, links to repos, or demos.',
    ],
  },
  experience: {
    title: 'Experience',
    paragraphs: [],
  },
  contact: {
    title: 'Contact',
    paragraphs: [],
  },
} as const

export type SectionId = keyof typeof SECTION_COPY

/** Which edge the full-screen panel slides in from (and exits toward). */
export const SECTION_SLIDE_FROM: Record<SectionId, 'left' | 'right'> = {
  about: 'left',
  projects: 'left',
  experience: 'right',
  contact: 'right',
}
