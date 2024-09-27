import type { Meta, StoryObj } from '@storybook/vue3'
import { CardPlay } from '@/components'

const meta = {
  parameters: {
    controls: {
      excludes: ['text'],
    },
  },
  title: 'Application/CardPlay/Card Play',
  component: CardPlay,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPlay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Play',
    description: 'lorem ipsum lorem ipsum',
  },
}
