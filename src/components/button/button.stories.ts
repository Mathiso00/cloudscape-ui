import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../index.ts'

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
    children: 'Hello World',
    isLoading: false,
    disabled: false,
    onClick: action('onClick'),
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

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
}

export const DestructiveLoading: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    isLoading: true,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    icon: 'i-material-symbols:search',
    children: undefined,
  },
}

export const SmallLoading: Story = {
  args: {
    children: 'Small button loading',
    isLoading: true,
    disabled: false,
    variant: 'default',
    size: 'sm',
  },
}
