import { LayerCard, Link, LinkButton, Text } from '@cloudflare/kumo'
import { ArrowsOutIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router'
import { PageHeader } from '../../components/PageHeader'
import { journey } from './data'
import { FlowBase } from './ui'

export const FRAMED_BASE = '/prototype/disruption'
export const FULLSCREEN_BASE = '/preview/disruption'

/**
 * The screen area. Overlays (sheets, notices) are absolutely positioned
 * against this element, while only the inner div scrolls.
 */
function Screen({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div data-mode="light" className={`relative flex flex-col overflow-hidden bg-white font-tl text-tl-dark-grey ${className}`}>
      {children}
    </div>
  )
}

const screens = [
  { label: '1. Your journey today', path: '' },
  { label: '2. Your options', path: '/options' },
  { label: '3. Booked onto the 12:22', path: '/booked' },
]

const fakes = [
  'All times are fixed sample data; "updated 11:14" never changes.',
  'No real rebooking, payment or operator connection.',
  '"Open chat" and "Show ticket" only show a message.',
  'No push notification: screen 1 starts as if the app was just opened.',
]

/** Inside the app shell: phone frame plus a facilitator panel. */
export function FramedFlowLayout() {
  const { pathname } = useLocation()

  return (
    <FlowBase base={FRAMED_BASE}>
      <PageHeader
        title="Disruption journey"
        description="Practicum prototype: one live page with status, data source and options when a connection is at risk."
        actions={
          <LinkButton href={FULLSCREEN_BASE} icon={ArrowsOutIcon} target="_blank">
            Open full screen
          </LinkButton>
        }
      />

      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <Screen className="h-[780px] w-[390px] max-w-full shrink-0 rounded-[44px] border-[10px] border-tl-dark-grey shadow-xl">
          <div className="flex h-8 shrink-0 items-center justify-between bg-white px-7 text-xs font-semibold text-tl-dark-grey">
            <span>{journey.now}</span>
            <span aria-hidden>●●●</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </Screen>

        <div className="flex w-full max-w-sm flex-col gap-4">
          <LayerCard>
            <LayerCard.Secondary>Screens</LayerCard.Secondary>
            <LayerCard.Primary>
              <ul className="flex flex-col gap-2">
                {screens.map((screen) => {
                  const href = `${FRAMED_BASE}${screen.path}`
                  return (
                    <li key={href}>
                      <Link href={href} variant={pathname === href ? 'current' : 'inline'}>
                        {screen.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </LayerCard.Primary>
          </LayerCard>

          <LayerCard>
            <LayerCard.Secondary>Fake it</LayerCard.Secondary>
            <LayerCard.Primary>
              <ul className="flex list-disc flex-col gap-1 pl-4">
                {fakes.map((item) => (
                  <li key={item}>
                    <Text variant="secondary" as="span">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </LayerCard.Primary>
          </LayerCard>
        </div>
      </div>
    </FlowBase>
  )
}

/** Outside the shell: the screens alone, for testing on a real phone. */
export function FullScreenFlowLayout() {
  return (
    <FlowBase base={FULLSCREEN_BASE}>
      <div className="flex min-h-svh justify-center bg-tl-soft-grey">
        <Screen className="h-svh w-full max-w-md">
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </Screen>
      </div>
    </FlowBase>
  )
}
