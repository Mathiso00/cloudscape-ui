import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './kbd.tsx'

const meta = {
  title: 'Typography/Kbd',
  component: Kbd,
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    keys: {
      description: 'Array of keys to display',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const MacOS: Story = {
  args: {
    keys: ['command', 'S'],
    filled: false,
  },
}

export const Filled: Story = {
  args: {
    keys: ['command', 'S'],
    filled: true,
  },
}
