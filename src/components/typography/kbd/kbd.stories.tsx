import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
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
    onKeyCombination: {
      description: 'Function to call when all keys are pressed',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const MacOS: Story = {
  args: {
    keys: ['command', 'S'],
    onKeyCombination: action('Command + S pressed'),
    filled: false,
  },
}

export const Filled: Story = {
  args: {
    keys: ['command', 'S'],
    onKeyCombination: action('Command + S pressed'),
    filled: true,
  },
}
