import { Button, Empty } from '@cloudflare/kumo'
import { FolderIcon, PlusIcon } from '@phosphor-icons/react'
import { PageHeader } from '../components/PageHeader'

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="A list page template. Replace the empty state with a Table once there is data."
        actions={
          <Button variant="primary" icon={PlusIcon}>
            Create project
          </Button>
        }
      />
      <Empty
        size="lg"
        icon={<FolderIcon size={48} />}
        title="No projects yet"
        description="Create your first project to see it listed here."
      />
    </>
  )
}
