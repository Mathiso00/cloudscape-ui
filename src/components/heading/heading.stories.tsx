import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading.tsx'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    weight: 'regular',
    children: 'Heading',
  },
  render: e => (
    <div className="flex flex-col gap-2">
      <Heading size={1} {...e} />
      <Heading size={2} {...e} />
      <Heading size={3} {...e} />
      <Heading size={4} {...e} />
      <Heading size={5} {...e} />
      <Heading size={6} {...e} />
      <Heading size={7} {...e} />
      <Heading size={8} {...e} />
      <Heading size={9} {...e} />
    </div>
  ),
}
