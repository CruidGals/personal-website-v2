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
  'What pulls me in most is reinforcement learning, computer vision, and humanoid robotics, plus the same curiosity that shows up in basketball, speedcubing, and side projects that feel like sci‑fi made practical.',
] as const

export const ABOUT_SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'C', iconSlug: 'c' },
      { name: 'C++', iconSlug: 'cplusplus' },
      { name: 'CSS', iconSlug: 'css' },
      { name: 'HTML', iconSlug: 'html5' },
      { name: 'Java', iconSlug: 'openjdk' },
      { name: 'JavaScript', iconSlug: 'javascript' },
      { name: 'Kotlin', iconSlug: 'kotlin' },
      { name: 'Python', iconSlug: 'python' },
      { name: 'SQL', iconSlug: 'sqlite' },
      { name: 'Swift', iconSlug: 'swift' },
      { name: 'TypeScript', iconSlug: 'typescript' },
    ],
  },
  {
    label: 'Technologies',
    skills: [
      { name: 'FastAPI', iconSlug: 'fastapi' },
      { name: 'Firebase', iconSlug: 'firebase' },
      { name: 'Flutter', iconSlug: 'flutter' },
      { name: 'Git', iconSlug: 'git' },
      { name: 'Isaac Lab', iconSlug: 'nvidia' },
      { name: 'MySQL', iconSlug: 'mysql' },
      { name: 'NestJS', iconSlug: 'nestjs' },
      { name: 'Next.js', iconSlug: 'nextdotjs' },
      { name: 'Node.js', iconSlug: 'nodedotjs' },
      { name: 'NumPy', iconSlug: 'numpy' },
      { name: 'PyTorch', iconSlug: 'pytorch' },
      { name: 'React', iconSlug: 'react' },
      { name: 'SQLAlchemy', iconSlug: 'sqlalchemy' },
      { name: 'Swagger', iconSlug: 'swagger' },
      { name: 'Three.js', iconSlug: 'threedotjs' },
      { name: 'Vite', iconSlug: 'vite' },
      { name: 'Vue.js', iconSlug: 'vuedotjs' },
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
