import type { Icon } from '@phosphor-icons/react'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import { journey } from './data'
import { buttonStyles } from './styles'

/**
 * Shared pieces for the disruption flow, styled with Trainline brand colours
 * (see the tl-* tokens in index.css) rather than Kumo, because the screens
 * stand in for the Trainline app.
 */

/** Which version of screen 1 the tester started from: cards ('') or timeline. */
export type Home = '' | 'timeline'
type FlowScreen = Home | 'options' | 'booked'

interface FlowContext {
  base: string
  home: Home
  setHome: (home: Home) => void
}

const FlowBaseContext = createContext<FlowContext>({
  base: '/prototype/disruption',
  home: '',
  setHome: () => {},
})

export function FlowBase({ base, children }: { base: string; children: ReactNode }) {
  const [home, setHome] = useState<Home>('')
  const value = useMemo(() => ({ base, home, setHome }), [base, home])
  return <FlowBaseContext.Provider value={value}>{children}</FlowBaseContext.Provider>
}

/**
 * Builds a link inside whichever layout (framed or full screen) is in use.
 * `path('')` and `path('options')` stay in the version (cards or timeline)
 * the tester started from.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useFlowPath() {
  const { base, home } = useContext(FlowBaseContext)
  return (screen: FlowScreen) => {
    const start = home ? `${base}/${home}` : base
    switch (screen) {
      case '':
        return start
      case 'timeline':
        return `${base}/timeline`
      case 'options':
        return `${start}/options`
      case 'booked':
        return `${base}/booked`
    }
  }
}

/** Which version the tester is in, and a way to switch it (used by the facilitator panel). */
// eslint-disable-next-line react-refresh/only-export-components
export function useFlowHome() {
  const { home, setHome } = useContext(FlowBaseContext)
  return { home, setHome }
}

/** Called by screens 1 and 2 of each version so later screens link back to it. */
// eslint-disable-next-line react-refresh/only-export-components
export function useMarkHome(home: Home) {
  const { setHome } = useContext(FlowBaseContext)
  useEffect(() => setHome(home), [home, setHome])
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

function TrustSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-20 flex items-end bg-tl-navy/40" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="trust-title"
        className="w-full rounded-t-2xl bg-white p-5 pb-6"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="trust-title" className="mb-2 text-lg font-semibold text-tl-navy">
          Where these times come from
        </h2>
        <p className="mb-5 text-[15px] leading-relaxed text-tl-dark-grey">
          We use the same live feed as station departure boards. If our times and the board ever
          disagree, trust the board and tell us.
        </p>
        <button type="button" className={buttonStyles.primary} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  )
}

/** Route title plus the data-source line and its "Why trust this?" sheet. */
export function JourneyHeading() {
  const [showTrust, setShowTrust] = useState(false)
  const { ticket } = journey

  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-tl-navy">
        {ticket.from} to {ticket.to}
      </h2>
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[13px] text-tl-mid-grey">
        <span>
          {journey.dataSource} · updated {journey.updatedAt}
        </span>
        <button
          type="button"
          onClick={() => setShowTrust(true)}
          className="font-semibold text-tl-mint underline-offset-2 hover:underline"
        >
          Why trust this?
        </button>
      </p>
      {showTrust && <TrustSheet onClose={() => setShowTrust(false)} />}
    </div>
  )
}
