import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip } from '../index.ts'

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    content: 'Hello World',
    children: 'Hover me',
  },
  render: args => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
}
