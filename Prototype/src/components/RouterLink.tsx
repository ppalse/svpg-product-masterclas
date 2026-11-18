import { forwardRef } from 'react'
import { Link } from 'react-router'
import type { LinkComponentProps } from '@cloudflare/kumo'

/**
 * Lets every Kumo component that takes `href` (sidebar items, breadcrumbs,
 * links) navigate client-side through React Router. External URLs fall back
 * to a plain anchor.
 */
export const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  function RouterLink({ href = '', to: _to, ...rest }, ref) {
    void _to
    if (/^(https?:|mailto:|#)/.test(href)) {
      return <a ref={ref} href={href} {...rest} />
    }
    return <Link ref={ref} to={href} {...rest} />
  },
)
