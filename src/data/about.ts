import type { CrossLink } from '../utils/sectionCrossLinks'

export type SkillEntry = {
  name: string
  /** simple-icons slug for CDN logo; omit for concept-only chips */
  iconSlug?: string
}

export type SkillGroup = {
  label: string
  skills: readonly SkillEntry[]
}

/** Two-sentence opener — education & interests (not work history). */
export const ABOUT_INTRO = [
  'As a Schreyer Honors scholar at Penn State, I am studying computer science and mathematics in the College of Engineering, grounded in algorithms, systems programming, and digital design.',
  'What pulls me in most is reinforcement learning, computer vision, and humanoid robotics, plus the same curiosity that shows up in basketball, speedcubing, and side projects that feel like sci‑fi made practical. Here\'s my resume if you\'d like to see more:',
] as const

export const ABOUT_RESUME_LABEL = 'Resume [PDF]'

export const ABOUT_RESUME_HREF = '/kylechiem_4_9_2026_2028.pdf'

export const ABOUT_SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', iconSlug: 'python' },
      { name: 'TypeScript', iconSlug: 'typescript' },
      { name: 'Java', iconSlug: 'openjdk' },
      { name: 'C++', iconSlug: 'cplusplus' },
      { name: 'C', iconSlug: 'c' },
      { name: 'SQL', iconSlug: 'mysql' },
      { name: 'JavaScript', iconSlug: 'javascript' },
      { name: 'Kotlin', iconSlug: 'kotlin' },
      { name: 'Flutter', iconSlug: 'flutter' },
    ],
  },
  {
    label: 'Technologies',
    skills: [
      { name: 'FastAPI', iconSlug: 'fastapi' },
      { name: 'SQLAlchemy', iconSlug: 'sqlalchemy' },
      { name: 'NestJS', iconSlug: 'nestjs' },
      { name: 'Node.js', iconSlug: 'nodedotjs' },
      { name: 'MySQL', iconSlug: 'mysql' },
      { name: 'Git', iconSlug: 'git' },
      { name: 'PyTorch', iconSlug: 'pytorch' },
      { name: 'Firebase', iconSlug: 'firebase' },
    ],
  },
] as const

export const ABOUT_CROSS_LINKS: readonly CrossLink[] = [
  {
    label: 'Full timeline and roles',
    hint: 'Experience',
    target: 'experience',
  },
  {
    label: 'Selected work',
    hint: 'Projects',
    target: 'projects',
  },
] as const
