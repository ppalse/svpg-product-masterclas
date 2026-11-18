import { LinkProvider, TooltipProvider } from '@cloudflare/kumo'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './app/router'
import { RouterLink } from './components/RouterLink'
import './index.css'
import { ThemeProvider } from './lib/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LinkProvider component={RouterLink}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </LinkProvider>
    </ThemeProvider>
  </StrictMode>,
)
