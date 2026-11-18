import { Empty, LinkButton } from '@cloudflare/kumo'
import { ArrowRightIcon, CompassIcon } from '@phosphor-icons/react'

export function NotFoundPage() {
  return (
    <Empty
      size="lg"
      icon={<CompassIcon size={48} />}
      title="Page not found"
      description="The page you're looking for doesn't exist or has moved."
      contents={
        <LinkButton href="/" icon={ArrowRightIcon}>
          Back to overview
        </LinkButton>
      }
    />
  )
}
