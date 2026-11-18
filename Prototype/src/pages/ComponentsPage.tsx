import {
  Badge,
  Banner,
  Button,
  Dialog,
  Input,
  LayerCard,
  Select,
  Switch,
  Tabs,
  Text,
} from '@cloudflare/kumo'
import { PlusIcon, WarningIcon } from '@phosphor-icons/react'
import { useState, type ReactNode } from 'react'
import { PageHeader } from '../components/PageHeader'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <LayerCard>
      <LayerCard.Secondary>{title}</LayerCard.Secondary>
      <LayerCard.Primary className="flex flex-wrap items-center gap-3">
        {children}
      </LayerCard.Primary>
    </LayerCard>
  )
}

/**
 * A quick reference of Kumo components, so prototype screens can be built
 * from parts that already match the shell. Full docs: `npx @cloudflare/kumo ls`.
 */
export function ComponentsPage() {
  const [enabled, setEnabled] = useState(true)
  const [tab, setTab] = useState('one')

  return (
    <>
      <PageHeader
        title="Components"
        description="Kumo building blocks used by this prototype."
      />

      <div className="flex flex-col gap-4">
        <Section title="Buttons">
          <Button variant="primary" icon={PlusIcon}>
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button loading>Saving</Button>
        </Section>

        <Section title="Badges">
          <Badge variant="success">On time</Badge>
          <Badge variant="warning">Delayed</Badge>
          <Badge variant="error">Cancelled</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="beta">Beta</Badge>
        </Section>

        <Section title="Form controls">
          <div className="grid w-full gap-4 sm:grid-cols-2">
            <Input label="Name" placeholder="e.g. Connection alert" />
            <Select label="Status" hideLabel={false} defaultValue="draft">
              <Select.Option value="draft">Draft</Select.Option>
              <Select.Option value="live">Live</Select.Option>
            </Select>
          </div>
          <Switch label="Notifications" checked={enabled} onCheckedChange={setEnabled} />
        </Section>

        <Section title="Tabs">
          <div className="flex w-full flex-col gap-3">
            <Tabs
              value={tab}
              onValueChange={(value) => setTab(String(value))}
              tabs={[
                { value: 'one', label: 'First' },
                { value: 'two', label: 'Second' },
              ]}
            />
            <Text variant="secondary">Selected tab: {tab}</Text>
          </div>
        </Section>

        <Section title="Feedback">
          <div className="flex w-full flex-col gap-3">
            <Banner
              variant="alert"
              icon={<WarningIcon weight="fill" />}
              title="Your connection is at risk"
              description="Your first train is running 12 minutes late."
            />
          </div>
        </Section>

        <Section title="Dialog">
          <Dialog.Root>
            <Dialog.Trigger render={(props) => <Button {...props}>Open dialog</Button>} />
            <Dialog className="flex flex-col gap-4 p-6">
              <Dialog.Title>Confirm change</Dialog.Title>
              <Dialog.Description>
                Dialogs are for decisions that need focus.
              </Dialog.Description>
              <div className="flex justify-end gap-2">
                <Dialog.Close render={(props) => <Button {...props}>Cancel</Button>} />
                <Dialog.Close
                  render={(props) => (
                    <Button variant="primary" {...props}>
                      Confirm
                    </Button>
                  )}
                />
              </div>
            </Dialog>
          </Dialog.Root>
        </Section>
      </div>
    </>
  )
}
