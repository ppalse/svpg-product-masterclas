import { createBrowserRouter } from 'react-router'
import { ComponentsPage } from '../pages/ComponentsPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { AppShell, type RouteHandle } from './AppShell'

const crumb = (label: string): RouteHandle => ({ crumb: label })

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    handle: crumb('Overview'),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage />, handle: crumb('Projects') },
      {
        path: 'analytics',
        handle: crumb('Analytics'),
        children: [
          {
            path: 'traffic',
            element: <PlaceholderPage title="Traffic" />,
            handle: crumb('Traffic'),
          },
          {
            path: 'reports',
            element: <PlaceholderPage title="Reports" />,
            handle: crumb('Reports'),
          },
        ],
      },
      { path: 'components', element: <ComponentsPage />, handle: crumb('Components') },
      { path: 'settings', element: <SettingsPage />, handle: crumb('Settings') },
      { path: '*', element: <NotFoundPage />, handle: crumb('Not found') },
    ],
  },
])
