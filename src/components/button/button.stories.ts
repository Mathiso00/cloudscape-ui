import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../index.ts'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Button',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
}
