import { createBrowserRouter, type RouteObject } from 'react-router'
import { BookedScreen } from '../prototype/disruption/BookedScreen'
import { JourneyScreen } from '../prototype/disruption/JourneyScreen'
import { JourneyTimelineScreen } from '../prototype/disruption/JourneyTimelineScreen'
import { FramedFlowLayout, FullScreenFlowLayout } from '../prototype/disruption/layouts'
import { OptionsScreen } from '../prototype/disruption/OptionsScreen'
import { OptionsTimelineScreen } from '../prototype/disruption/OptionsTimelineScreen'
import { ComponentsPage } from '../pages/ComponentsPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { SettingsPage } from '../pages/SettingsPage'
import { AppShell, type RouteHandle } from './AppShell'

const crumb = (label: string): RouteHandle => ({ crumb: label })

/** The practicum screens, shared by the framed and full-screen layouts. */
const disruptionScreens: RouteObject[] = [
  { index: true, element: <JourneyScreen /> },
  {
    path: 'timeline',
    handle: crumb('Timeline'),
    children: [
      { index: true, element: <JourneyTimelineScreen /> },
      { path: 'options', element: <OptionsTimelineScreen />, handle: crumb('Options') },
    ],
  },
  {
    path: 'board',
    handle: crumb('Timeline + board'),
    children: [
      { index: true, element: <JourneyTimelineScreen compareBoard /> },
      {
        path: 'options',
        element: <OptionsTimelineScreen compareBoard />,
        handle: crumb('Options'),
      },
    ],
  },
  { path: 'options', element: <OptionsScreen />, handle: crumb('Options') },
  { path: 'booked', element: <BookedScreen />, handle: crumb('Booked') },
]

export const router = createBrowserRouter([
  // Full screen, outside the shell: for testing on a real phone.
  {
    path: '/preview/disruption',
    element: <FullScreenFlowLayout />,
    children: disruptionScreens,
  },
  {
    path: '/',
    element: <AppShell />,
    handle: crumb('Overview'),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'prototype/disruption',
        element: <FramedFlowLayout />,
        handle: crumb('Disruption journey'),
        children: disruptionScreens,
      },
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
