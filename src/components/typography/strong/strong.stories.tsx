import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../'
import { Strong } from './'

const meta = {
  title: 'Typography/Strong',
  component: Strong,
  tags: ['autodocs'],
} satisfies Meta<typeof Strong>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <Text>
      The most important thing to remember is,&nbsp;
      <Strong {...e}>stay positive</Strong>
      .
    </Text>
  ),
}

export const Truncate: Story = {
  args: {
    truncate: true,
  },
  render: e => (
    <span className="flex max-w-[300px]">
      <Strong {...e}>
        The goal of typography is to relate font size, line height, and line width
        in a proportional way that maximizes beauty and makes reading easier and
        more pleasant.he goal of typography is to relate font size, line height, and line width
        in a proportional way that maximizes beauty and makes reading easier and
        more pleasant.
      </Strong>
    </span>
  ),
}
