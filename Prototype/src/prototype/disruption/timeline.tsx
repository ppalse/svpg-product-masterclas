import { ClockIcon, PersonSimpleWalkIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

/** The vertical journey timeline used by screens 1b and 2b. */

/** How the rail looks above and below a stop. */
type Rail = 'done' | 'ahead' | 'change' | 'wait' | 'none'

const railClasses: Record<Rail, string> = {
  done: 'border-l-2 border-tl-mid-grey/40',
  ahead: 'border-l-2 border-tl-mint',
  change: 'border-l-2 border-dashed border-tl-amber',
  wait: 'border-l-2 border-dotted border-tl-mid-grey/60',
  none: '',
}

/** The marker on the rail. */
type Dot = 'past' | 'now' | 'stop' | 'change' | 'walk' | 'wait' | 'end'

function Marker({ dot }: { dot: Dot }) {
  switch (dot) {
    case 'past':
      return <span className="size-3 rounded-full bg-tl-mid-grey/60" />
    case 'now':
      return (
        <span className="relative flex size-4 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-tl-navy/30 motion-reduce:hidden" />
          <span className="size-4 rounded-full border-[3px] border-white bg-tl-navy shadow" />
        </span>
      )
    case 'stop':
      return <span className="size-3.5 rounded-full border-[3px] border-tl-mint bg-white" />
    case 'change':
      return <span className="size-4 rounded-full border-[3px] border-white bg-tl-amber shadow" />
    case 'walk':
      return (
        <span className="flex size-7 items-center justify-center rounded-full bg-tl-amber text-tl-navy">
          <PersonSimpleWalkIcon size={16} weight="bold" aria-hidden />
        </span>
      )
    case 'wait':
      return (
        <span className="flex size-7 items-center justify-center rounded-full bg-tl-soft-grey text-tl-dark-grey">
          <ClockIcon size={16} weight="bold" aria-hidden />
        </span>
      )
    case 'end':
      return <span className="size-3.5 rounded-sm bg-tl-navy" />
  }
}

export function Stop({ time, struck, dot, above, below, compact, children }: {
  time?: ReactNode
  /** The scheduled time, shown crossed out when a train is late. */
  struck?: string
  dot: Dot
  above: Rail
  below: Rail
  /** Tighter spacing, for timelines inside option cards. */
  compact?: boolean
  children: ReactNode
}) {
  // Rows with the larger walk marker centre it on the content; others align to the first line.
  const bigMarker = dot === 'walk' || dot === 'wait'
  const markerTop = bigMarker ? (compact ? '-top-1' : 'top-2') : 'top-1'

  return (
    <li className="grid grid-cols-[3.25rem_1.75rem_1fr] gap-x-2">
      <div className="pt-0.5 text-right text-[15px] leading-tight">
        {time && <span className="font-semibold text-tl-navy">{time}</span>}
        {struck && (
          <>
            <span className="block text-[12px] text-tl-mid-grey line-through">{struck}</span>
            <span className="sr-only">(scheduled {struck})</span>
          </>
        )}
      </div>

      <div className="relative flex justify-center" aria-hidden>
        <span className={`absolute left-1/2 top-0 h-2 -translate-x-px ${railClasses[above]}`} />
        <span className={`absolute bottom-0 left-1/2 top-2 -translate-x-px ${railClasses[below]}`} />
        <span className={`absolute ${markerTop} flex justify-center`}>
          <Marker dot={dot} />
        </span>
      </div>

      <div className={`min-w-0 ${compact ? 'pb-3' : 'pb-5'}`}>{children}</div>
    </li>
  )
}
