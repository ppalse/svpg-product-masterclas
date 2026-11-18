import { Breadcrumbs, Sidebar, useSidebar } from '@cloudflare/kumo'
import { Fragment } from 'react'
import { Outlet, useMatches, type UIMatch } from 'react-router'
import { AppSidebar } from './AppSidebar'

/** Routes declare `handle: { crumb: 'Label' }` to appear in the breadcrumb trail. */
export interface RouteHandle {
  crumb?: string
}

function TopBar() {
  const { isMobile } = useSidebar()
  const crumbs = (useMatches() as UIMatch<unknown, RouteHandle | undefined>[])
    .filter((match) => match.handle?.crumb)
    .map((match) => ({ label: match.handle!.crumb!, href: match.pathname }))

  return (
    // 58px matches Sidebar.Header so the two bottom borders form one line.
    <header className="sticky top-0 z-10 flex h-[58px] shrink-0 items-center gap-3 border-b border-kumo-line bg-kumo-base px-4 sm:px-8">
      {isMobile && <Sidebar.Trigger />}
      <Breadcrumbs size="sm">
        {crumbs.map((crumb, index) => (
          <Fragment key={crumb.href}>
            {index > 0 && <Breadcrumbs.Separator />}
            {index === crumbs.length - 1 ? (
              <Breadcrumbs.Current>{crumb.label}</Breadcrumbs.Current>
            ) : (
              <Breadcrumbs.Link href={crumb.href}>{crumb.label}</Breadcrumbs.Link>
            )}
          </Fragment>
        ))}
      </Breadcrumbs>
    </header>
  )
}

export function AppShell() {
  return (
    // Fixed viewport height: the sidebar always spans the screen and only the
    // main column scrolls, as in the Cloudflare dashboard.
    <Sidebar.Provider defaultOpen collapsible="icon" className="h-svh">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-kumo-canvas">
        <TopBar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-8">
          <Outlet />
        </main>
      </div>
    </Sidebar.Provider>
  )
}
