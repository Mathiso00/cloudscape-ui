import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Badge,
} from '@/components'

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['primary', 'success', 'danger', 'warning', 'info'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    outlined: false,
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
