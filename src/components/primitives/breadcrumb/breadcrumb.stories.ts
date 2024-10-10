import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Breadcrumb,
} from '@/components'

const meta = {
  title: 'Primitives/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    skip: [0, 1],
    items: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'About',
        to: '/about',
      },
      {
        text: 'Contact',
        to: '/contact',
      },
      {
        text: 'FAQ',
      },
    ],
  },
}
