import { Text } from '@cloudflare/kumo'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  /** Buttons shown on the right, e.g. a primary "Create" action. */
  actions?: ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div className="flex min-w-0 flex-col gap-1">
        <Text variant="heading" size="lg" as="h1">
          {title}
        </Text>
        {description && <Text variant="secondary">{description}</Text>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}
