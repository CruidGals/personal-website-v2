import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import type { CarouselSkill } from '../../data/skillCarousel'
import { skillIconUrl } from '../../data/skillCarousel'
import { prefersReducedMotion } from '../../utils/prefersReducedMotion'
import './SkillsCarousel.css'

type SkillsCarouselProps = {
  label: string
  items: readonly CarouselSkill[]
  /** Pixels per second when auto-scrolling. */
  scrollSpeed?: number
}

function CarouselSlide({ skill }: { skill: CarouselSkill }) {
  return (
    <li className="skills-carousel-slide">
      <figure className="skills-carousel-card">
        <img
          className="skills-carousel-icon"
          src={skillIconUrl(skill.iconSlug)}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="skills-carousel-name">{skill.name}</figcaption>
      </figure>
    </li>
  )
}

export function SkillsCarousel({
  label,
  items,
  scrollSpeed = 42,
}: SkillsCarouselProps) {
  const labelId = useId()
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(prefersReducedMotion())
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion || paused || items.length === 0) return

    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    let last = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const delta = (now - last) / 1000
      last = now
      const half = track.scrollWidth / 2
      if (half > 0) {
        viewport.scrollLeft += scrollSpeed * delta
        if (viewport.scrollLeft >= half) {
          viewport.scrollLeft -= half
        }
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion, paused, items.length, scrollSpeed])

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const amount = Math.max(viewport.clientWidth * 0.55, 180)
    viewport.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }, [])

  if (items.length === 0) return null

  const loopItems = reducedMotion ? items : [...items, ...items]

  return (
    <section
      className="skills-carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="skills-carousel-header">
        <h4 id={labelId} className="skills-carousel-label">
          {label}
        </h4>
        <div className="skills-carousel-controls">
          <button
            type="button"
            className="skills-carousel-btn"
            aria-label={`Scroll ${label} backward`}
            onClick={() => scrollByPage(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="skills-carousel-btn"
            aria-label={`Scroll ${label} forward`}
            onClick={() => scrollByPage(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="skills-carousel-viewport"
        tabIndex={reducedMotion ? 0 : -1}
      >
        <ul
          ref={trackRef}
          className="skills-carousel-track"
          aria-label={`${label} icons`}
        >
          {loopItems.map((skill, index) => (
            <CarouselSlide key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  )
}
