import { CheckCircleIcon, WarningCircleIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { journey, yorkArrivalMatchesBoard } from './data'
import { BottomSheet } from './ui'

/**
 * "Timeline + board": shows what the station departure board says next to
 * our own times, so customers can see where we agree and where we don't.
 */

const { board, leg1, connection } = journey

/** A departure-board style chip with what the board shows, and whether we match it. */
export function BoardCheck({ station, shows, matches, ours }: {
  station: string
  /** What the board shows, e.g. "11:45 · Plat 9". */
  shows: string
  matches: boolean
  /** Our value, shown when it differs from the board. */
  ours?: string
}) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="inline-flex items-baseline gap-1.5 rounded-md bg-[#1b1b1b] px-2 py-1 font-mono text-[12px] font-semibold uppercase tracking-wide text-[#ffb000]">
        <span className="text-[10px] text-[#ffb000]/75">{station} board</span>
        {shows}
      </span>
      {matches ? (
        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-tl-green">
          <CheckCircleIcon size={14} weight="fill" aria-hidden />
          Matches
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-tl-dark-grey">
          <WarningCircleIcon size={14} weight="fill" className="text-tl-amber" aria-hidden />
          Differs: we say {ours}
        </span>
      )}
    </div>
  )
}

/** The York arrival is the one stop where we and the board disagree. */
const checks = [
  yorkArrivalMatchesBoard,
  true, // 11:52 departure
  true, // Manchester arrival
]
const matching = checks.filter(Boolean).length

/** Summary at the top of the screen: how many stops match the boards, and why they can differ. */
export function BoardSummary() {
  const [showWhy, setShowWhy] = useState(false)
  const allMatch = matching === checks.length

  return (
    <div className="flex items-start gap-3 rounded-xl border border-tl-soft-grey bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <span
        aria-hidden
        className="mt-0.5 shrink-0 rounded-md bg-[#1b1b1b] px-1.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#ffb000]"
      >
        Board
      </span>
      <div className="min-w-0 text-[13px] leading-snug text-tl-dark-grey">
        <p className="text-[15px] font-semibold text-tl-navy">
          {allMatch
            ? 'We match the station boards'
            : `${matching} of ${checks.length} times match the station boards`}
        </p>
        {!allMatch && (
          <p className="mt-0.5">
            {connection.station} board shows {board.yorkArrival.shows} for your arrival. We expect{' '}
            {leg1.expectedArrival}.
          </p>
        )}
        <p className="mt-0.5 text-tl-mid-grey">
          Checked at {board.checkedAt} ·{' '}
          <button
            type="button"
            onClick={() => setShowWhy(true)}
            className="font-semibold text-tl-mint underline-offset-2 hover:underline"
          >
            Why can they differ?
          </button>
        </p>
      </div>

      {showWhy && (
        <BottomSheet title="Why the board and the app can differ" onClose={() => setShowWhy(false)}>
          <p>
            Station boards and Trainline use the same live National Rail data, but they refresh at
            different moments. For a short while, times can be a minute apart.
          </p>
          <p className="mt-3">
            <strong className="text-tl-navy">If a platform is different, follow the board</strong>{' '}
            and tell us.
          </p>
        </BottomSheet>
      )}
    </div>
  )
}
