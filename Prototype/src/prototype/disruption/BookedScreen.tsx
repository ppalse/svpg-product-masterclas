import { CheckCircleIcon, TicketIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { journey } from './data'
import { AppBar, Banner, ButtonLink, Card, FakeNotice, useFlowPath } from './ui'
import { buttonStyles } from './styles'

const { nextTrain, ticket } = journey

/** Screen 3 — confirmation that the ticket is valid on the new train. */
export function BookedScreen() {
  const path = useFlowPath()
  const [notice, setNotice] = useState<string | null>(null)

  return (
    <>
      <Banner tone="success" icon={CheckCircleIcon}>
        You're booked onto the {nextTrain.departs}
      </Banner>
      <AppBar title={`${nextTrain.from} to ${nextTrain.to}`} back={path('options')} />

      <div className="flex flex-col gap-3 p-4">
        <Card>
          <p className="text-[13px] font-semibold text-tl-dark-grey">{nextTrain.operator}</p>
          <dl className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-tl-mid-grey">Departs</dt>
              <dd className="text-xl font-semibold text-tl-navy">{nextTrain.departs}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-tl-mid-grey">Platform</dt>
              <dd className="text-xl font-semibold text-tl-navy">{nextTrain.platform}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-tl-mid-grey">Arrives</dt>
              <dd className="text-xl font-semibold text-tl-navy">{nextTrain.arrives}</dd>
            </div>
          </dl>
        </Card>

        <p className="text-[15px] leading-snug text-tl-dark-grey">
          Your {ticket.type} {ticket.reference} is valid on this train. No need to queue at the
          ticket office.
        </p>

        <Card className="flex items-center gap-3">
          <TicketIcon size={28} className="shrink-0 text-tl-mint" aria-hidden />
          <div>
            <p className="text-[13px] text-tl-mid-grey">Show this to the guard if asked</p>
            <p className="font-mono text-lg font-semibold tracking-wider text-tl-navy">
              {ticket.reference}
            </p>
          </div>
        </Card>

        <p className="text-[14px] text-tl-mid-grey">
          We'll keep watching your journey and tell you if anything changes.
        </p>

        <button
          type="button"
          className={buttonStyles.primary}
          onClick={() => setNotice('Your ticket would open here.')}
        >
          Show ticket
        </button>
        <ButtonLink to={path('')} variant="secondary">
          Back to your journey
        </ButtonLink>
      </div>

      {notice && <FakeNotice message={notice} onClose={() => setNotice(null)} />}
    </>
  )
}
