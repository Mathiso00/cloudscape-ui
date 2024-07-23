import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header.tsx'

const meta = {
  title: 'Primitives/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
}
