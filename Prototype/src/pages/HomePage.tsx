import { Badge, Banner, Grid, LayerCard, Link, Loader, Text } from '@cloudflare/kumo'
import { InfoIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { api, type Health } from '../lib/api'

type HealthState =
  | { status: 'loading' }
  | { status: 'ok'; data: Health }
  | { status: 'error'; message: string }

function ApiHealthCard() {
  const [state, setState] = useState<HealthState>({ status: 'loading' })

  useEffect(() => {
    api
      .health()
      .then((data) => setState({ status: 'ok', data }))
      .catch((error: Error) => setState({ status: 'error', message: error.message }))
  }, [])

  return (
    <LayerCard>
      <LayerCard.Secondary>Worker API</LayerCard.Secondary>
      <LayerCard.Primary className="flex items-center justify-between gap-2">
        <Text variant="mono-secondary">GET /api/health</Text>
        {state.status === 'loading' && <Loader />}
        {state.status === 'ok' && <Badge variant="success">Healthy</Badge>}
        {state.status === 'error' && <Badge variant="error">{state.message}</Badge>}
      </LayerCard.Primary>
    </LayerCard>
  )
}

const quickLinks = [
  {
    title: 'Projects',
    href: '/projects',
    text: 'An empty-state list page to start from.',
  },
  {
    title: 'Components',
    href: '/components',
    text: 'The Kumo building blocks available to every screen.',
  },
]

export function HomePage() {
  return (
    <>
      <PageHeader
        title="Overview"
        description="Boilerplate app shell: side menu, routing, theming and a Worker API."
      />

      <div className="flex flex-col gap-6">
        <Banner
          icon={<InfoIcon weight="fill" />}
          title="Start here"
          description="Add a screen in src/pages, register it in src/app/router.tsx, and list it in src/app/navigation.ts."
        />

        <Grid variant="3up" gap="base">
          <ApiHealthCard />
          {quickLinks.map((card) => (
            <LayerCard key={card.href}>
              <LayerCard.Secondary>
                <Link href={card.href}>{card.title}</Link>
              </LayerCard.Secondary>
              <LayerCard.Primary>
                <Text variant="secondary">{card.text}</Text>
              </LayerCard.Primary>
            </LayerCard>
          ))}
        </Grid>
      </div>
    </>
  )
}
