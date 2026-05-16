export const SECTION_COPY = {
  about: {
    title: 'About',
    paragraphs: [
      'This is a placeholder for your bio: background, interests, and what you are building toward.',
      'Replace this copy when you are ready to tell your story.',
    ],
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
    paragraphs: [
      'Summarize roles, impact, and technologies. Timeline or grouped by company works well.',
      'Placeholder text until you wire real résumé content.',
    ],
  },
  contact: {
    title: 'Contact',
    paragraphs: [
      'Add an email, form, or calendar link here so visitors can reach you.',
      'Social links on the home screen can complement this section.',
    ],
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
