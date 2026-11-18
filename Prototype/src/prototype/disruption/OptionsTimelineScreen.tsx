import { ChatCircleIcon, CheckCircleIcon, WarningCircleIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { buttonStyles } from './styles'
import { journey, toMinutes } from './data'
import { Stop } from './timeline'
import { AppBar, ButtonLink, Card, FakeNotice, StatusLabel, useFlowPath, useMarkHome } from './ui'

const { leg1, leg2, connection, nextTrain, meetingTime } = journey

const minutesBetween = (from: string, to: string) => toMinutes(to) - toMinutes(from)
const waitAtYork = minutesBetween(leg1.expectedArrival, nextTrain.departs)
const spareIfMade = minutesBetween(leg2.arrives, meetingTime)
const spareIfNext = minutesBetween(nextTrain.arrives, meetingTime)

/** The answer first: when you arrive and whether that works for the meeting. */
function Outcome({ arrives, spare, ifYouMakeIt }: {
  arrives: string
  spare: number
  ifYouMakeIt?: boolean
}) {
  return (
    <div className="mb-3 flex items-center gap-3 rounded-lg bg-tl-soft-grey px-3 py-2.5">
      <div className="shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-tl-mid-grey">
          Arrive
        </p>
        <p className="text-2xl font-semibold leading-none text-tl-navy">{arrives}</p>
      </div>
      <p className="text-[14px] leading-snug text-tl-dark-grey">
        {ifYouMakeIt ? (
          <WarningCircleIcon
            size={16}
            weight="fill"
            className="mr-1 inline-block align-[-3px] text-tl-amber"
            aria-hidden
          />
        ) : (
          <CheckCircleIcon
            size={16}
            weight="fill"
            className="mr-1 inline-block align-[-3px] text-tl-green"
            aria-hidden
          />
        )}
        {ifYouMakeIt ? 'Only if you make the change. ' : ''}In time for your {meetingTime} meeting (
        {spare} min to spare)
      </p>
    </div>
  )
}

/* ---------- Screen ---------- */

/** Screen 2b — each option leads with its arrival time, then shows its timeline. */
export function OptionsTimelineScreen() {
  const path = useFlowPath()
  useMarkHome('timeline')
  const [notice, setNotice] = useState<string | null>(null)

  return (
    <>
      <AppBar title={`Your options at ${connection.station}`} back={path('')} />

      <div className="flex flex-col gap-3 p-4">
        <p className="text-[15px] leading-snug text-tl-dark-grey">
          You arrive at {connection.station} at{' '}
          <strong className="text-tl-navy">{leg1.expectedArrival}</strong> on platform{' '}
          {leg1.platform}. Your ticket is valid on both trains.
        </p>

        {/* Option 1: recommended */}
        <Card className="border-2 border-tl-mint">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-[17px] font-semibold text-tl-navy">
              Take the {nextTrain.departs}
            </h2>
            <span className="rounded-full bg-tl-light-mint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-tl-navy">
              Recommended
            </span>
          </div>

          <Outcome arrives={nextTrain.arrives} spare={spareIfNext} />

          <ol aria-label={`Take the ${nextTrain.departs}`} className="-mb-3">
            <Stop compact time={leg1.expectedArrival} dot="change" above="none" below="wait">
              <p className="text-[14px] text-tl-dark-grey">
                Arrive {connection.station}, platform {leg1.platform}
              </p>
            </Stop>
            <Stop compact dot="wait" above="wait" below="wait">
              <p className="text-[14px] text-tl-dark-grey">
                {waitAtYork} min to get to platform {nextTrain.platform}. No rush.
              </p>
            </Stop>
            <Stop compact time={nextTrain.departs} dot="stop" above="wait" below="ahead">
              <p className="text-[14px] text-tl-dark-grey">
                {nextTrain.operator}, platform {nextTrain.platform}
              </p>
            </Stop>
            <Stop compact time={nextTrain.arrives} dot="end" above="ahead" below="none">
              <p className="text-[14px] font-semibold text-tl-navy">{nextTrain.to}</p>
              <p className="text-[13px] text-tl-dark-grey">No extra cost ({nextTrain.extraCost})</p>
            </Stop>
          </ol>

          <div className="mt-3">
            <ButtonLink to={path('booked')}>Choose this train</ButtonLink>
          </div>
        </Card>

        {/* Option 2: try for the original connection */}
        <Card>
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-[17px] font-semibold text-tl-navy">Try for the {leg2.departs}</h2>
            <StatusLabel tone="warning">Tight</StatusLabel>
          </div>

          <Outcome arrives={leg2.arrives} spare={spareIfMade} ifYouMakeIt />

          <ol aria-label={`Try for the ${leg2.departs}`} className="-mb-3">
            <Stop compact time={leg1.expectedArrival} dot="change" above="none" below="change">
              <p className="text-[14px] text-tl-dark-grey">
                Arrive {connection.station}, platform {leg1.platform}
              </p>
            </Stop>
            <Stop compact dot="walk" above="change" below="change">
              <p className="text-[14px] text-tl-dark-grey">
                {connection.minutesAvailable} min to get to platform {leg2.platform}. You need
                about {connection.minutesNeeded}.
              </p>
            </Stop>
            <Stop compact time={leg2.departs} dot="stop" above="change" below="ahead">
              <p className="text-[14px] text-tl-dark-grey">
                {leg2.operator}, platform {leg2.platform}
              </p>
            </Stop>
            <Stop compact time={leg2.arrives} dot="end" above="ahead" below="none">
              <p className="text-[14px] font-semibold text-tl-navy">{leg2.to}</p>
            </Stop>
          </ol>

          <p className="mt-2 rounded-lg bg-tl-soft-grey px-3 py-2 text-[13px] text-tl-dark-grey">
            Miss it? Take the {nextTrain.departs} instead. Your ticket is still valid.
          </p>
          <div className="mt-3">
            <ButtonLink to={path('')} variant="secondary">
              I'll try
            </ButtonLink>
          </div>
        </Card>

        {/* Option 3: get help */}
        <Card className="flex items-center gap-3">
          <ChatCircleIcon size={28} className="shrink-0 text-tl-mint" aria-hidden />
          <div className="flex-1">
            <h2 className="text-[15px] font-semibold text-tl-navy">Not sure? Get help</h2>
            <p className="text-[13px] text-tl-mid-grey">Average reply 2 min</p>
          </div>
          <button
            type="button"
            className={`${buttonStyles.secondary.replace('w-full', 'w-auto')} shrink-0`}
            onClick={() => setNotice('Chat isn’t part of this prototype.')}
          >
            Chat
          </button>
        </Card>

        <p className="text-center text-[13px] text-tl-mid-grey">
          Times update live. Last updated {journey.updatedAt}.
        </p>
      </div>

      {notice && <FakeNotice message={notice} onClose={() => setNotice(null)} />}
    </>
  )
}
