import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from '../index.ts'

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
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