import type { Meta, StoryObj } from '@storybook/vue3'
import { Kbd } from '@/components'

const meta = {
  title: 'Typography/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const MacOS: Story = {
  args: {
    keys: ['command', 'S'],
    preventDefault: true,
    onKeyPressed: () => {},
    filled: false,
  },
}

export const Filled: Story = {
  args: {
    keys: ['command', 'C'],
    preventDefault: false,
    onKeyPressed: () => {},
    filled: true,
  },
}
