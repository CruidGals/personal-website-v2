import { ABOUT_SKILL_GROUPS, type SkillEntry } from './about'

export type CarouselSkill = SkillEntry & { iconSlug: string }

function withIcons(skills: readonly SkillEntry[]): CarouselSkill[] {
  return skills.filter((s): s is CarouselSkill => s.iconSlug !== undefined)
}

export const LANGUAGE_CAROUSEL_SKILLS = withIcons(
  ABOUT_SKILL_GROUPS.find((g) => g.label === 'Languages')?.skills ?? [],
)

export const TECHNOLOGY_CAROUSEL_SKILLS = withIcons(
  ABOUT_SKILL_GROUPS.find((g) => g.label === 'Technologies')?.skills ?? [],
)

export function skillIconUrl(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}`
}
