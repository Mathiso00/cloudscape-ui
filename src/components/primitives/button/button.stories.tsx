import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button.tsx'

const meta = {
  title: 'Primitives/Button',
  component: Button,

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

/** Default button */
export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
}

export const PrimaryFocused: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: e => (<Button {...e} data-focus />),
}

/** Disabled button */
export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
  },

}

/** When a dangerous action is about to be performed */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
}

/** When a dangerous action is pending */
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

/** When the button is a link */
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
  },
}

/** When the button is a small button */
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
