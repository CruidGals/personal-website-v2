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
      { name: 'Python', iconSlug: 'python' },
      { name: 'TypeScript', iconSlug: 'typescript' },
      { name: 'Java', iconSlug: 'openjdk' },
      { name: 'C++', iconSlug: 'cplusplus' },
      { name: 'C', iconSlug: 'c' },
      { name: 'SQL', iconSlug: 'mysql' },
      { name: 'JavaScript', iconSlug: 'javascript' },
      { name: 'Kotlin', iconSlug: 'kotlin' },
      { name: 'Swift', iconSlug: 'swift' },
      { name: 'Flutter', iconSlug: 'flutter' },
    ],
  },
  {
    label: 'Technologies',
    skills: [
      { name: 'React', iconSlug: 'react' },
      { name: 'Next.js', iconSlug: 'nextdotjs' },
      { name: 'Vue.js', iconSlug: 'vuedotjs' },
      { name: 'Three.js', iconSlug: 'threedotjs' },
      { name: 'Vite', iconSlug: 'vite' },
      { name: 'HTML', iconSlug: 'html5' },
      { name: 'CSS', iconSlug: 'css' },
      { name: 'FastAPI', iconSlug: 'fastapi' },
      { name: 'NestJS', iconSlug: 'nestjs' },
      { name: 'Node.js', iconSlug: 'nodedotjs' },
      { name: 'SQLAlchemy', iconSlug: 'sqlalchemy' },
      { name: 'Swagger', iconSlug: 'swagger' },
      { name: 'MySQL', iconSlug: 'mysql' },
      { name: 'Firebase', iconSlug: 'firebase' },
      { name: 'PyTorch', iconSlug: 'pytorch' },
      { name: 'NumPy', iconSlug: 'numpy' },
      { name: 'TensorBoard', iconSlug: 'tensorboard' },
      { name: 'Isaac Lab', iconSlug: 'nvidia' },
      { name: 'Git', iconSlug: 'git' },
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
