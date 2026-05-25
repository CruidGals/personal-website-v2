/** Icon link on a project card — `href: null` renders as a disabled placeholder. */
export type ProjectLinkKind = 'github' | 'demo'

export type ProjectLink = {
  kind: ProjectLinkKind
  href: string | null
}

export type ProjectEntry = {
  id: string
  title: string
  dates: string
  /** Short line under the title (problem or scope). */
  tagline: string
  technologies: readonly string[]
  links: readonly ProjectLink[]
  /** Optional headline badge, e.g. hackathon award. */
  award?: string
  /** Thumbnail path under `public/` — omit for CSS placeholder graphic. */
  imageSrc?: string
  imageAlt?: string
  /** Span two columns in the projects grid when space allows. */
  featured?: boolean
}

export const PROJECTS_LEAD =
  'Selected work from my résumé—problem, stack, and measurable outcomes. Newest first.'

export const PROJECT_ENTRIES: readonly ProjectEntry[] = [
  {
    id: 'surviv',
    title: 'Surviv',
    dates: 'Mar 2026 – Present',
    award: "HooHacks Spring '26 Winner",
    tagline:
      'Decentralized mesh safety alerts for off-grid use—on-device threat detection and navigation to safe zones.',
    technologies: ['Swift', 'Mesh Networking', 'PyTorch'],
    links: [{ kind: 'github', href: 'https://github.com/CruidGals/surviv' }],
    featured: true,
  },
  {
    id: 'rubiks-cube',
    title: "Rubik's Cube Simulator",
    dates: 'Oct 2025 – Present',
    tagline:
      'Interactive 3D Rubik’s Cube with animated moves, race-condition-safe input, and group-theory state validation.',
    technologies: ['TypeScript', 'Vue.js', 'Three.js', 'GSAP'],
    links: [
      { kind: 'github', href: 'https://github.com/CruidGals/rubiks-cube-agent' },
      { kind: 'demo', href: 'https://cruidgals.github.io/rubiks-cube-agent/' },
    ],
  },
  {
    id: 'tetris-ai',
    title: 'Tetris AI',
    dates: 'May 2025 – Oct 2025',
    tagline:
      'Deep reinforcement learning Tetris agent—prioritized replay, vectorized training, and TensorBoard-driven iteration.',
    technologies: ['Python', 'PyTorch', 'TensorBoard', 'NumPy'],
    links: [{ kind: 'github', href: 'https://github.com/CruidGals/tetris-dqn' }],
  },
]
