import type { Meta, StoryObj } from '@storybook/react'
import { Quest } from '@/components/components'

const meta = {
  title: 'Components/Quest',
  component: Quest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => (
    <div className="flex flex-row gap-2">
      <Quest name="Docker" icon="i-mdi-docker" />
      <Quest name="Kubernetes" icon="i-mdi-kubernetes" />
      <Quest name="Terraform" icon="i-mdi-terraform" />
    </div>
  ),
}
