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
      'Decentralized mesh safety alerts for off-grid use—on-device threat detection and navigation to safe zones. Offline-first iOS app that relays warnings phone-to-phone over Multipeer mesh (no internet), syncs a shared hazard map, and runs a Core ML classifier trained in PyTorch. Message de-duplication keeps broadcasts reliable; A* routing on street-graph data guides users toward safe zones while avoiding reported threats.',
    technologies: ['Swift', 'Mesh Networking', 'PyTorch'],
    links: [{ kind: 'github', href: 'https://github.com/CruidGals/surviv' }],
    featured: true,
  },
  {
    id: 'ml-library-scratch',
    title: 'ML Library From Scratch',
    dates: 'Jan 2026 – Present',
    tagline:
      'Educational machine learning framework built from scratch in NumPy—classic algorithms and a mini neural network stack without PyTorch or scikit-learn in the core library. Modular PCA, decision trees, and linear and logistic regression sit alongside convolutional, pooling, linear, and ReLU layers with custom backprop, regularization, and weight decay. Minibatch gradient descent and Adam optimization reach 98.01% accuracy on MNIST, with im2col + GEMM convolutions for efficient CPU training.',
    technologies: ['Python', 'NumPy', 'ML Principles'],
    links: [{ kind: 'github', href: 'https://github.com/CruidGals/ml-library-scratch' }],
  },
  {
    id: 'rubiks-cube',
    title: "Rubik's Cube Simulator",
    dates: 'Oct 2025 – Present',
    tagline:
      'Interactive 3D Rubik’s Cube with animated moves, race-condition-safe input, and group-theory state validation. Built with Vue.js and TresJS on Three.js so you can rehearse and visualize full solves in the browser, with GSAP-driven layer turns and keyboard controls. Mutex locking in the animation pipeline prevents race conditions from concurrent input, and a group-theory state manager tracks over 43 quintillion permutations with O(1) validation.',
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
      'Deep reinforcement learning Tetris agent—prioritized replay, vectorized training, and TensorBoard-driven iteration. Custom Afterstate DQN in PyTorch scores every legal placement before acting (lookahead across the action space), reaching 800+ lines cleared per trained game. NumPy-vectorized board updates cut training time roughly 3×, and segment-tree prioritized replay stabilizes learning across long runs.',
    technologies: ['Python', 'PyTorch', 'TensorBoard', 'NumPy'],
    links: [{ kind: 'github', href: 'https://github.com/CruidGals/tetris-dqn' }],
  },
]
