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
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 80)
    return () => {
      document.body.style.overflow = ''
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
