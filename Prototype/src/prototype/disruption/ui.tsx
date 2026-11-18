import type { Icon } from '@phosphor-icons/react'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { createContext, useContext, type ReactNode } from 'react'
import { Link } from 'react-router'
import { buttonStyles } from './styles'

/**
 * Shared pieces for the disruption flow, styled with Trainline brand colours
 * (see the tl-* tokens in index.css) rather than Kumo, because the screens
 * stand in for the Trainline app.
 */

const FlowBaseContext = createContext('/prototype/disruption')

export function FlowBase({ base, children }: { base: string; children: ReactNode }) {
  return <FlowBaseContext.Provider value={base}>{children}</FlowBaseContext.Provider>
}

/** Builds a link inside whichever layout (framed or full screen) is in use. */
// eslint-disable-next-line react-refresh/only-export-components
export function useFlowPath() {
  const base = useContext(FlowBaseContext)
  return (screen: '' | 'options' | 'booked') => (screen ? `${base}/${screen}` : base)
}

type Tone = 'warning' | 'success' | 'neutral'

const toneClasses: Record<Tone, string> = {
  // Navy on amber: amber text on white would fail contrast.
  warning: 'bg-tl-amber text-tl-navy',
  success: 'bg-tl-green text-white',
  neutral: 'bg-tl-soft-grey text-tl-dark-grey',
}

/** Status is always text plus colour, never colour alone. */
export function StatusLabel({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${toneClasses[tone]}`}
    >
      {children}
    </span>
  )
}

export function Banner({ tone, icon: IconComponent, children }: {
  tone: 'warning' | 'success'
  icon: Icon
  children: ReactNode
}) {
  return (
    <div
      role="status"
      className={`flex items-center gap-2 px-4 py-3 text-[15px] font-semibold ${toneClasses[tone]}`}
    >
      <IconComponent size={20} weight="fill" aria-hidden />
      {children}
    </div>
  )
}

export function AppBar({ title, back }: { title: string; back?: string }) {
  return (
    <div className="flex h-14 items-center gap-2 border-b border-tl-soft-grey bg-white px-2">
      {back ? (
        <Link
          to={back}
          aria-label="Back"
          className="flex size-11 items-center justify-center rounded-lg text-tl-navy hover:bg-tl-soft-grey"
        >
          <ArrowLeftIcon size={22} />
        </Link>
      ) : (
        <span className="w-2" />
      )}
      <h1 className="truncate text-base font-semibold text-tl-navy">{title}</h1>
    </div>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-tl-soft-grey bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}

export function ButtonLink({ to, variant = 'primary', children }: {
  to: string
  variant?: keyof typeof buttonStyles
  children: ReactNode
}) {
  return (
    <Link to={to} className={buttonStyles[variant]}>
      {children}
    </Link>
  )
}

/** "Fake it": features outside the prototype show this instead of working. */
export function FakeNotice({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div
      role="status"
      className="absolute inset-x-4 bottom-4 z-20 flex items-start justify-between gap-3 rounded-lg bg-tl-dark-grey p-3 text-sm text-white shadow-lg"
    >
      <span>{message}</span>
      <button type="button" onClick={onClose} className="font-semibold text-tl-light-mint">
        OK
      </button>
    </div>
  )
}
