import type { AnimationEvent, RefObject } from 'react'
import type { SectionId } from '../../data/sectionContent'
import './FoldOverlay.css'

type FoldOverlayProps = {
  sectionKey: SectionId
  slideFrom: 'left' | 'right'
  title: string
  paragraphs: readonly string[]
  exiting: boolean
  titleId: string
  closeButtonRef: RefObject<HTMLButtonElement | null>
  onCloseClick: () => void
  onExitAnimationEnd: (e: AnimationEvent<HTMLDivElement>) => void
}

export function FoldOverlay({
  sectionKey,
  slideFrom,
  title,
  paragraphs,
  exiting,
  titleId,
  closeButtonRef,
  onCloseClick,
  onExitAnimationEnd,
}: FoldOverlayProps) {
  const edgeClass =
    slideFrom === 'right' ? 'fold-panel--from-right' : 'fold-panel--from-left'

  return (
    <div className="fold-root" role="presentation">
      <div
        key={sectionKey}
        className={`fold-panel ${edgeClass}${exiting ? ' fold-panel--out' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onAnimationEnd={onExitAnimationEnd}
      >
        <div className="fold-panel-header">
          <h2 id={titleId}>{title}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="fold-close"
            onClick={onCloseClick}
          >
            Close
          </button>
        </div>
        <div className="fold-panel-body">
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
