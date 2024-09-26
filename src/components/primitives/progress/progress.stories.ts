import type { Meta, StoryObj } from '@storybook/vue3'
import { ProgressBar } from '@/components'

const meta = {
  title: 'Primitives/Progress',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    class: 'min-w-[200px]',
    height: 12,
    modelValue: 50,
  },
}
