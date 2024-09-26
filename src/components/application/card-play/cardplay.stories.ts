import type { ProgressBar } from '@/components'
import type { Meta, StoryObj } from '@storybook/vue3'
import { CardPlay } from '@/components'

const meta = {
  title: 'Application/CardPlay/Card Play',
  component: CardPlay,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>

export default meta
  type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  },
}
