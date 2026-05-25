import type { SectionId } from '../data/sectionContent'

/** Sections the About overlay can point visitors toward. */
export type CrossLinkTarget = Extract<SectionId, 'experience' | 'projects'>

export type CrossLink = {
  /** Visible CTA, e.g. "Full timeline and roles" */
  label: string
  /** Short hint after the arrow */
  hint: string
  target: CrossLinkTarget
}

/** Opens another fold section (e.g. About → Experience). */
export type SectionNavigator = (target: CrossLinkTarget) => void

export function navigateToSection(
  navigate: SectionNavigator,
  target: CrossLinkTarget,
): void {
  navigate(target)
}
