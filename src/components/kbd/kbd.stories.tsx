import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from '../index.ts'

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const MacOS: Story = {
  args: {
    os: 'macos',
    children: 'CTRL S',
    filled: false,
  },
}

export const Windows: Story = {
  args: {
    os: 'windows',
    children: 'CTRL S',
    filled: false,
  },
}

export const Filled: Story = {
  args: {
    os: 'default',
    children: 'CTRL S',
    filled: true,
  },
  parameters: {
    darkMode: {
      current: 'dark',
    },
  },
}
