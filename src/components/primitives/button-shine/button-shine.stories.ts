import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonShine } from '@/components'

const meta = {
  title: 'Primitives/Buttons/Button Shine',
  component: ButtonShine,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'secondary-outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonShine>

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
