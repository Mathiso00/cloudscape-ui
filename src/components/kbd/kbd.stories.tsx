import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from '../index.ts'

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    os: 'macos',
    children: 'CTRL S',
  },
}
