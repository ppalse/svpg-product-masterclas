import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ThemePreference = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'prototype.theme'

function readPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'light' || value === 'dark' || value === 'system') return value
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
  }
  return 'system'
}

function writePreference(value: ThemePreference) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Ignore: the choice just won't persist across reloads.
  }
}

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

/** Kumo switches to dark tokens via `data-mode="dark"` on an ancestor. */
function applyMode(preference: ThemePreference) {
  const dark =
    preference === 'dark' || (preference === 'system' && darkQuery().matches)
  document.documentElement.dataset.mode = dark ? 'dark' : 'light'
}

interface ThemeContextValue {
  preference: ThemePreference
  setPreference: (value: ThemePreference) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState(readPreference)

  useEffect(() => {
    applyMode(preference)
    if (preference !== 'system') return
    const query = darkQuery()
    const onChange = () => applyMode('system')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [preference])

  const setPreference = useCallback((value: ThemePreference) => {
    writePreference(value)
    setPreferenceState(value)
  }, [])

  return (
    <ThemeContext.Provider value={{ preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>')
  return context
}
