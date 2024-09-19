import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Avatar,
} from '@/components'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  argTypes: {

    size: {
      options: ['default', 'sm', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1718203694879-766b434639f2?q=80&w=2070&auto=format',
    size: 'default',
    alt: 'John Doe',
  },
}

export const WithImage: Story = {
  args: {
    size: 'default',
    alt: 'John Doe',
  },
}
