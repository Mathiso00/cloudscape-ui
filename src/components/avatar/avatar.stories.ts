import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar.tsx'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'avatar',
  },
}
export const FallBack: Story = {
  args: {
    src: '',
    alt: 'avatar',
  },
}
