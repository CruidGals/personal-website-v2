/** Résumé-backed experience entry — sourced from `public/kylechiem_4_9_2026_2028.pdf`. */
export type ExperienceStatus = 'incoming' | 'current'

export type ExperienceEntry = {
  id: string
  role: string
  organization: string
  dates: string
  location: string
  /** Short line under the header (team, focus area, or scope). */
  summary: string
  bullets: readonly string[]
  technologies: readonly string[]
  status?: ExperienceStatus
}

export const EXPERIENCE_LEAD =
  'Professional experience from my résumé—newest first.'

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'adobe',
    role: 'Incoming Software Development Engineer',
    organization: 'Adobe',
    dates: 'May 2026 – Aug 2026',
    location: 'San Jose, CA',
    status: 'incoming',
    summary:
      'Engagement Services and Products — full-stack React.js and Node.js platforms.',
    bullets: [
      'Selected for the Engagement Services and Products team to develop full-stack React.js and Node.js platforms that facilitate Agent-to-Agent (A2A) workflows and integrate Model Context Protocol (MCP) on AWS infrastructure.',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MCP', 'A2A'],
  },
  {
    id: 'hackpsu',
    role: 'Software Engineer',
    organization: 'HackPSU Tech Team',
    dates: 'Aug 2025 – Present',
    location: 'University Park, PA',
    status: 'current',
    summary: 'Full-stack platform for campus hackathon operations and services.',
    bullets: [
      'Contribute to full-stack Next.js (React, TypeScript) platform supporting 1000+ participants during hackathon.',
      'Standardize API development by implementing Role-Based Access Control (RBAC) and Swagger (OpenAPI) documentation, using DTO-based validation to ensure 99% schema accuracy across all hackathon services.',
      'Engineered NestJS room reservation API, implementing validation logic and asynchronous conflict detection providing continuous data integrity, reducing workspace discovery time upwards of 10 minutes to less than 10 seconds.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Swagger', 'RBAC'],
  },
  {
    id: 'psu-robotics',
    role: 'Research Intern — Robotics & Deep Learning',
    organization: 'The Pennsylvania State University',
    dates: 'Feb 2025 – Sep 2025',
    location: 'University Park, PA',
    summary: 'Reinforcement learning, imitation learning, and sim-to-real for humanoid locomotion.',
    bullets: [
      'Developed reinforcement learning locomotion controllers on Isaac Lab to observe humanoid robot stability metrics.',
      'Leveraged imitation learning using proprietary motion capture data to pretrain, reducing simulation steps by 50%.',
      'Executed 4000+ parallel simulations, automating pipelines with PyTorch and evaluation with TensorBoard.',
      'Integrated domain randomization and sensor noise modeling, making controller robust for in-person deployment.',
    ],
    technologies: ['PyTorch', 'Isaac Lab', 'TensorBoard', 'Python'],
  },
  {
    id: 'nittany-ai',
    role: 'Machine Learning Apprentice',
    organization: 'Nittany AI Alliance Student Chapter',
    dates: 'Jan 2025 – May 2025',
    location: 'University Park, PA',
    summary: 'RAG systems and medical imaging with rigorous model evaluation.',
    bullets: [
      'Designed a RAG Chatbot using Sentence Transformers and Tiny LLaMa LLM for finance-related Q&A over PDFs.',
      'Preprocessed 100,000+ NIH Chest X-ray data to train a CNN to detect pneumonia patients at an accuracy of 92%.',
      'Explored overfitting control, RL reward shaping, and model evaluation with precision and confusion matrix analysis.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'Sentence Transformers',
      'CNN',
      'RAG',
    ],
  },
] as const
