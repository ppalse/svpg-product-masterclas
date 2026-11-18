import { TrainIcon, WarningIcon } from '@phosphor-icons/react'
import { journey } from './data'
import {
  AppBar,
  Banner,
  ButtonLink,
  Card,
  JourneyHeading,
  StatusLabel,
  useFlowPath,
  useMarkHome,
} from './ui'

const { leg1, leg2, connection } = journey

/** Screen 1a — the key screen as cards: live status, data source, and the connection risk. */
export function JourneyScreen() {
  const path = useFlowPath()
  useMarkHome('')

  return (
    <>
      <Banner tone="warning" icon={WarningIcon}>
        Connection at risk
      </Banner>
      <AppBar title="Your journey today" />

      <div className="flex flex-col gap-3 p-4">
        <JourneyHeading />

        <Card>
          <p className="flex items-center gap-2 text-[13px] font-semibold text-tl-dark-grey">
            <TrainIcon size={18} aria-hidden /> {leg1.operator} · {leg1.departs} {leg1.from} to{' '}
            {leg1.to}
          </p>
          <p className="mt-2 text-[15px] text-tl-dark-grey">
            Arrives <strong className="text-tl-navy">{leg1.expectedArrival}</strong>{' '}
            <span className="text-tl-mid-grey line-through">{leg1.scheduledArrival}</span>{' '}
            <span className="sr-only">(scheduled {leg1.scheduledArrival})</span>
          </p>
          <div className="mt-2 flex items-center justify-between">
            <StatusLabel tone="warning">{leg1.minutesLate} min late</StatusLabel>
            <span className="text-[13px] text-tl-mid-grey">Arriving platform {leg1.platform}</span>
          </div>
        </Card>

        <div className="flex items-start gap-3 rounded-xl border-2 border-dashed border-tl-amber bg-white px-4 py-3">
          <div className="flex-1 text-[14px] leading-snug text-tl-dark-grey">
            <strong className="text-tl-navy">Change at {connection.station}:</strong>{' '}
            {connection.minutesAvailable} min to get from platform {leg1.platform} to platform{' '}
            {leg2.platform}. You need about {connection.minutesNeeded} min.
          </div>
          <StatusLabel tone="warning">Tight</StatusLabel>
        </div>

        <Card>
          <p className="flex items-center gap-2 text-[13px] font-semibold text-tl-dark-grey">
            <TrainIcon size={18} aria-hidden /> {leg2.operator} · {leg2.departs} {leg2.from} to{' '}
            {leg2.to}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[15px] text-tl-dark-grey">
              Departs platform {leg2.platform}
            </span>
            <StatusLabel tone="success">On time</StatusLabel>
          </div>
        </Card>

        <div className="rounded-xl bg-tl-light-mint p-4 text-[15px] leading-snug text-tl-dark-grey">
          You'll probably miss the {leg2.departs}. Your ticket is valid on the next{' '}
          {leg2.operator} train at no extra cost.
        </div>

        <ButtonLink to={path('options')}>See your options</ButtonLink>
      </div>
    </>
  )
}
