import { useState } from 'react'
import { journey } from './data'
import { AppBar, ButtonLink, Card, FakeNotice, useFlowPath, useMarkHome } from './ui'
import { buttonStyles } from './styles'

const { leg2, connection, nextTrain } = journey

/** Screen 2a — options with arrival time and cost, one recommended. */
export function OptionsScreen() {
  const path = useFlowPath()
  useMarkHome('')
  const [notice, setNotice] = useState<string | null>(null)

  return (
    <>
      <AppBar title={`Your options at ${connection.station}`} back={path('')} />

      <div className="flex flex-col gap-3 p-4">
        <Card className="border-2 border-tl-mint">
          <span className="mb-2 inline-block rounded-full bg-tl-light-mint px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-tl-navy">
            Recommended
          </span>
          <h2 className="text-[17px] font-semibold text-tl-navy">
            Take the {nextTrain.departs} to {nextTrain.to}
          </h2>
          <p className="mt-1 text-[15px] text-tl-dark-grey">
            Arrive {nextTrain.arrives} · platform {nextTrain.platform} · {nextTrain.extraCost}
          </p>
          <p className="mt-1 text-[13px] text-tl-mid-grey">
            Arrives in time for your {journey.meetingTime} meeting with{' '}
            {nextTrain.minutesBeforeMeeting} min to spare.
          </p>
          <div className="mt-3">
            <ButtonLink to={path('booked')}>Choose this train</ButtonLink>
          </div>
        </Card>

        <Card>
          <h2 className="text-[17px] font-semibold text-tl-navy">Try for the {leg2.departs}</h2>
          <p className="mt-1 text-[15px] text-tl-dark-grey">
            {connection.minutesAvailable} min to change platforms. You need about{' '}
            {connection.minutesNeeded} min.
          </p>
          <p className="mt-1 text-[13px] text-tl-mid-grey">
            If you miss it, your ticket is still valid on the {nextTrain.departs}.
          </p>
          <div className="mt-3">
            <ButtonLink to={path('')} variant="secondary">
              I'll try
            </ButtonLink>
          </div>
        </Card>

        <Card>
          <h2 className="text-[17px] font-semibold text-tl-navy">Get help</h2>
          <p className="mt-1 text-[13px] text-tl-mid-grey">
            Talk to us in chat. Average reply 2 min.
          </p>
          <div className="mt-3">
            <button
              type="button"
              className={buttonStyles.secondary}
              onClick={() => setNotice('Chat isn’t part of this prototype.')}
            >
              Open chat
            </button>
          </div>
        </Card>

        <p className="text-center text-[13px] text-tl-mid-grey">
          Times update live. Last updated {journey.updatedAt}.
        </p>
      </div>

      {notice && <FakeNotice message={notice} onClose={() => setNotice(null)} />}
    </>
  )
}
