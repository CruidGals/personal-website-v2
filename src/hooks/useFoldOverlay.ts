import { useEffect, useRef } from 'react'

/**
 * Locks body scroll, focuses the close control, and closes on Escape while
 * a fold overlay is open.
 */
export function useFoldOverlay(
  isOpen: boolean,
  onEscapeOrCloseRequest: () => void,
) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const html = document.documentElement
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    // Focus after the slide-in finishes — mid-animation focus can cause layout jitter.
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 560)
    return () => {
      html.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      window.clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscapeOrCloseRequest()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onEscapeOrCloseRequest])

  return { closeButtonRef }
}
