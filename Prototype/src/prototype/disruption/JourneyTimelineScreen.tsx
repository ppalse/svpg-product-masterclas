import { TicketIcon, WarningIcon } from '@phosphor-icons/react'
import { journey } from './data'
import { Stop } from './timeline'
import {
  AppBar,
  Banner,
  ButtonLink,
  JourneyHeading,
  StatusLabel,
  useFlowPath,
  useMarkHome,
} from './ui'

const { leg1, leg2, connection, ticket } = journey

/** Screen 1b — the same journey as a timeline: booked trains, the change, and where to go. */
export function JourneyTimelineScreen() {
  const path = useFlowPath()
  useMarkHome('timeline')

  return (
    <>
      <Banner tone="warning" icon={WarningIcon}>
        Connection at risk
      </Banner>
      <AppBar title="Your journey today" />

      <div className="flex flex-col gap-4 p-4">
        <JourneyHeading />

        <p className="flex items-center gap-2 text-[13px] text-tl-dark-grey">
          <TicketIcon size={18} className="shrink-0 text-tl-mint" aria-hidden />
          Booked: {ticket.type} · {ticket.reference}
        </p>

        <ol aria-label="Your journey" className="-mb-5">
          <Stop time={leg1.departs} dot="past" above="none" below="done">
            <p className="text-[15px] font-semibold text-tl-mid-grey">{leg1.from}</p>
            <p className="text-[13px] text-tl-mid-grey">Departed · {leg1.operator}</p>
          </Stop>

          <Stop time="Now" dot="now" above="done" below="ahead">
            <p className="text-[15px] font-semibold text-tl-navy">You're on the {leg1.operator} train</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusLabel tone="warning">{leg1.minutesLate} min late</StatusLabel>
              <span className="text-[13px] text-tl-mid-grey">as of {journey.updatedAt}</span>
            </div>
          </Stop>

          <Stop
            time={leg1.expectedArrival}
            struck={leg1.scheduledArrival}
            dot="change"
            above="ahead"
            below="change"
          >
            <p className="text-[15px] font-semibold text-tl-navy">Get off at {connection.station}</p>
            <p className="text-[13px] text-tl-dark-grey">Arriving platform {leg1.platform}</p>
          </Stop>

          <Stop dot="walk" above="change" below="change">
            <div className="rounded-xl border-2 border-dashed border-tl-amber bg-white px-3 py-2.5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[15px] font-semibold text-tl-navy">
                  Go to platform {leg2.platform}
                </p>
                <StatusLabel tone="warning">Tight</StatusLabel>
              </div>
              <p className="mt-1 text-[14px] leading-snug text-tl-dark-grey">
                From platform {leg1.platform}, follow the signs to platform {leg2.platform}. You'll
                have {connection.minutesAvailable} min. You need about {connection.minutesNeeded}{' '}
                min.
              </p>
            </div>
          </Stop>

          <Stop time={leg2.departs} dot="stop" above="change" below="ahead">
            <p className="text-[15px] font-semibold text-tl-navy">
              {leg2.operator} to {leg2.to}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusLabel tone="success">On time</StatusLabel>
              <span className="text-[13px] text-tl-dark-grey">Platform {leg2.platform}</span>
            </div>
            <p className="mt-1 text-[13px] font-semibold text-tl-dark-grey">
              You'll probably miss this train
            </p>
          </Stop>

          <Stop time={leg2.arrives} dot="end" above="ahead" below="none">
            <p className="text-[15px] font-semibold text-tl-navy">{leg2.to}</p>
            <p className="text-[13px] text-tl-mid-grey">Your meeting is at {journey.meetingTime}</p>
          </Stop>
        </ol>

        <div className="rounded-xl bg-tl-light-mint p-4 text-[15px] leading-snug text-tl-dark-grey">
          If you miss the {leg2.departs}, your ticket is valid on the next {leg2.operator} train at
          no extra cost.
        </div>

        <ButtonLink to={path('options')}>See your options</ButtonLink>
      </div>
    </>
  )
}
