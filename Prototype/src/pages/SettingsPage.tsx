import { LayerCard, Select } from '@cloudflare/kumo'
import { PageHeader } from '../components/PageHeader'
import { useTheme, type ThemePreference } from '../lib/theme'

export function SettingsPage() {
  const { preference, setPreference } = useTheme()

  return (
    <>
      <PageHeader title="Settings" description="Preferences stored in this browser." />
      <LayerCard className="max-w-xl">
        <LayerCard.Secondary>Appearance</LayerCard.Secondary>
        <LayerCard.Primary>
          <Select
            label="Theme"
            hideLabel={false}
            value={preference}
            onValueChange={(value) => setPreference(value as ThemePreference)}
          >
            <Select.Option value="system">Match system</Select.Option>
            <Select.Option value="light">Light</Select.Option>
            <Select.Option value="dark">Dark</Select.Option>
          </Select>
        </LayerCard.Primary>
      </LayerCard>
    </>
  )
}
