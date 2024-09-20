import type { Meta, StoryObj } from '@storybook/vue3'
import { Kbd } from '@/components'
import { action } from '@storybook/addon-actions'

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
    onKeyPressed: action('Command + S pressed'),
    filled: false,
  },
}

export const Filled: Story = {
  args: {
    keys: ['command', 'C'],
    preventDefault: false,
    onKeyPressed: action('Command + C pressed'),
    filled: true,
  },
}
