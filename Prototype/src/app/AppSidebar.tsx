import { Sidebar } from '@cloudflare/kumo'
import {
  CubeIcon,
  DesktopIcon,
  GearIcon,
  MoonIcon,
  SunIcon,
} from '@phosphor-icons/react'
import { useLocation } from 'react-router'
import { useTheme, type ThemePreference } from '../lib/theme'
import { isActive, navigation, type NavItem } from './navigation'

export const APP_NAME = 'Prototype'

const themeCycle: Record<ThemePreference, ThemePreference> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
}
const themeIcon = { system: DesktopIcon, light: SunIcon, dark: MoonIcon }
const themeLabel = { system: 'System theme', light: 'Light theme', dark: 'Dark theme' }

function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  if (!item.children) {
    return (
      <Sidebar.MenuButton
        icon={item.icon}
        href={item.href}
        active={item.href ? isActive(item.href, pathname) : false}
        tooltip={item.label}
      >
        {item.label}
        {item.badge && <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>}
      </Sidebar.MenuButton>
    )
  }

  const childActive = item.children.some((child) => isActive(child.href, pathname))

  return (
    <Sidebar.MenuItem>
      <Sidebar.Collapsible defaultOpen={childActive}>
        <Sidebar.CollapsibleTrigger
          render={
            <Sidebar.MenuButton icon={item.icon} tooltip={item.label} active={childActive}>
              {item.label}
              <Sidebar.MenuChevron />
            </Sidebar.MenuButton>
          }
        />
        <Sidebar.CollapsibleContent>
          <Sidebar.MenuSub>
            {item.children.map((child) => (
              <Sidebar.MenuSubButton
                key={child.href}
                href={child.href}
                active={isActive(child.href, pathname)}
              >
                {child.label}
                {child.badge && <Sidebar.MenuBadge>{child.badge}</Sidebar.MenuBadge>}
              </Sidebar.MenuSubButton>
            ))}
          </Sidebar.MenuSub>
        </Sidebar.CollapsibleContent>
      </Sidebar.Collapsible>
    </Sidebar.MenuItem>
  )
}

export function AppSidebar() {
  const { pathname } = useLocation()
  const { preference, setPreference } = useTheme()

  return (
    <Sidebar>
      <Sidebar.Header>
        <div className="flex items-center gap-2 font-semibold text-kumo-default">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-kumo-brand text-white">
            <CubeIcon size={16} weight="bold" />
          </span>
          <span className="truncate group-data-[state=collapsed]/sidebar:hidden">
            {APP_NAME}
          </span>
        </div>
      </Sidebar.Header>

      <Sidebar.Content>
        {navigation.map((group, index) => (
          <Sidebar.Group key={group.label ?? index}>
            {group.label && <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>}
            <Sidebar.Menu>
              {group.items.map((item) => (
                <NavEntry key={item.label} item={item} pathname={pathname} />
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        ))}
      </Sidebar.Content>

      {/* Pinned above the footer; padding mirrors Sidebar.Content so icons line up. */}
      <div className="shrink-0 border-t border-kumo-line px-[11px] py-3 transition-[padding] duration-(--sidebar-animation-duration) group-not-data-[state=collapsed]/sidebar:px-3.5">
        <Sidebar.Menu>
          <Sidebar.MenuButton
            icon={GearIcon}
            href="/settings"
            active={isActive('/settings', pathname)}
            tooltip="Settings"
          >
            Settings
          </Sidebar.MenuButton>
          <Sidebar.MenuButton
            icon={themeIcon[preference]}
            tooltip={themeLabel[preference]}
            onClick={() => setPreference(themeCycle[preference])}
          >
            {themeLabel[preference]}
          </Sidebar.MenuButton>
        </Sidebar.Menu>
      </div>

      {/* Kumo's footer is a fixed-height row sized for the collapse button only. */}
      <Sidebar.Footer>
        <Sidebar.Trigger />
      </Sidebar.Footer>
    </Sidebar>
  )
}
