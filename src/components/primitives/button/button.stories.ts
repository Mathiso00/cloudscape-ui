import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Button,
} from '@/components'
import { fn } from '@storybook/test'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isLoading: false,
    variant: 'default',
    size: 'default',
  },
  parameters: {
    slots: {
      default: {
        description: 'The default slot',
        template: 'This a button',
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    isLoading: true,
    variant: 'destructive',
  },
  parameters: {
    slots: {
      default: {
        description: 'The default slot',
        template: 'This a button',
      },
    },
  },

}
