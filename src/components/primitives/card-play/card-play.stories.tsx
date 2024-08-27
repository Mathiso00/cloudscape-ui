import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card-play'

const meta = {
  title: 'Primitives/Card Play',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: 'default',
    content: 'Play',
    color: 'green',
    scndcontent: 'default',
  },

}
