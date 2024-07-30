import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar.tsx'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,

  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'avatar',
    size: 'default',

  },
}
export const FallBack: Story = {
  args: {
    src: '',
    alt: 'avatar',
    size: 'default',

  },
}
