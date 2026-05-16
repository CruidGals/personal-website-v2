import type { ReactNode } from 'react'

type SectionNavButtonProps = {
  children: ReactNode
  onClick: () => void
}

export function SectionNavButton({
  children,
  onClick,
}: SectionNavButtonProps) {
  return (
    <button type="button" className="section-nav-btn" onClick={onClick}>
      {children}
    </button>
  )
}
