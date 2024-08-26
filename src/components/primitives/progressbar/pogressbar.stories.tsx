import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progressbar'

const meta = {
  title: 'Primitives/Progress',
  component: Progress,

  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}
