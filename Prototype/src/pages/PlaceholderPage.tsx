import { Empty } from '@cloudflare/kumo'
import { CompassIcon } from '@phosphor-icons/react'
import { PageHeader } from '../components/PageHeader'

/** Stand-in for screens that exist in the menu but haven't been built yet. */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <PageHeader title={title} />
      <Empty
        icon={<CompassIcon size={48} />}
        title={`${title} isn't built yet`}
        description="This route is wired into the menu and router, ready for a real screen."
      />
    </>
  )
}
