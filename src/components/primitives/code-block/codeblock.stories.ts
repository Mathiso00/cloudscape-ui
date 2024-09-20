import type { Meta, StoryObj } from '@storybook/vue3'
import {
  CodeBlock,
} from '@/components'

const meta = {
  title: 'Primitives/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    code: 'const foo = "bar"',
  },
}
