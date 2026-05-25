import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faGlobe,
  faFileLines,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import type { ProjectLink, ProjectLinkKind } from '../data/projects'

export type FontAwesomeLinkVisual = {
  type: 'fontawesome'
  icon: IconDefinition
  label: string
  /** Brand icons (GitHub, YouTube) use the brands set. */
  brand?: boolean
}

export type SimpleIconLinkVisual = {
  type: 'simpleicon'
  slug: string
  label: string
}

export type ProjectLinkVisual = FontAwesomeLinkVisual | SimpleIconLinkVisual

function hostFromHref(href: string | null): string {
  if (!href) return ''
  try {
    return new URL(href).hostname.toLowerCase()
  } catch {
    return ''
  }
}

function labelForKind(kind: ProjectLinkKind): string {
  if (kind === 'github') return 'View source on GitHub'
  return 'Open live demo'
}

/** Icon + accessible label matched to link destination (GitHub, GitHub Pages, etc.). */
export function getProjectLinkVisual(link: ProjectLink): ProjectLinkVisual {
  const host = hostFromHref(link.href)
  const fallbackLabel = labelForKind(link.kind)

  if (link.kind === 'github' || host === 'github.com' || host.endsWith('.github.com')) {
    return {
      type: 'fontawesome',
      icon: faGithub,
      label: 'View source on GitHub',
      brand: true,
    }
  }

  if (host.includes('youtube.com') || host === 'youtu.be') {
    return {
      type: 'fontawesome',
      icon: faYoutube,
      label: 'Watch on YouTube',
      brand: true,
    }
  }

  if (host.includes('vercel.app')) {
    return {
      type: 'simpleicon',
      slug: 'vercel',
      label: 'Open live demo on Vercel',
    }
  }

  if (host.includes('netlify.app')) {
    return {
      type: 'simpleicon',
      slug: 'netlify',
      label: 'Open live demo on Netlify',
    }
  }

  if (link.kind === 'demo' || host.endsWith('github.io')) {
    if (link.href?.endsWith('.pdf')) {
      return {
        type: 'fontawesome',
        icon: faFileLines,
        label: 'View document',
      }
    }

    return {
      type: 'fontawesome',
      icon: faGlobe,
      label: 'Open live demo',
    }
  }

  return {
    type: 'fontawesome',
    icon: faArrowUpRightFromSquare,
    label: fallbackLabel,
  }
}

export function simpleIconUrl(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}`
}
