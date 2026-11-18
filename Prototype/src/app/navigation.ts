import type { Icon } from '@phosphor-icons/react'
import {
  ChartLineIcon,
  FolderIcon,
  HouseIcon,
  SquaresFourIcon,
} from '@phosphor-icons/react'

/**
 * Single source of truth for the side menu. Add a page by adding an entry
 * here and a matching route in `router.tsx`.
 */
export interface NavLeaf {
  label: string
  href: string
  badge?: string
}

export interface NavItem {
  label: string
  icon: Icon
  /** Leaf item: navigates directly. */
  href?: string
  /** Parent item: expands to show children (like the Cloudflare dashboard). */
  children?: NavLeaf[]
  badge?: string
}

export interface NavGroup {
  /** Omit for an unlabelled top group. */
  label?: string
  items: NavItem[]
}

export const navigation: NavGroup[] = [
  {
    items: [{ label: 'Overview', icon: HouseIcon, href: '/' }],
  },
  {
    label: 'Workspace',
    items: [
      { label: 'Projects', icon: FolderIcon, href: '/projects' },
      {
        label: 'Analytics',
        icon: ChartLineIcon,
        children: [
          { label: 'Traffic', href: '/analytics/traffic' },
          { label: 'Reports', href: '/analytics/reports', badge: 'Beta' },
        ],
      },
    ],
  },
  {
    label: 'Reference',
    items: [{ label: 'Components', icon: SquaresFourIcon, href: '/components' }],
  },
]

/** Exact match for "/", prefix match for everything else. */
export function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
