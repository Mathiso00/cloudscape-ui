import type { Meta, StoryObj } from '@storybook/react'
import type { Size, Weight } from './heading.tsx'
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
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: (e) => {
    const sizes: Size[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
      <div className="flex flex-col gap-2">
        {sizes.map(size => (
          <Heading key={size} size={size} {...e} />
        ))}
      </div>
    )
  },
}

export const Weights: Story = {
  args: {
    size: 6,
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: (e) => {
    const weights: Weight[] = ['light', 'regular', 'medium', 'bold']

    return (
      <div className="flex flex-col gap-2">
        {weights.map(weight => (
          <Heading key={weight} weight={weight} {...e} />
        ))}
      </div>
    )
  },
}

export const Truncate: Story = {
  args: {
    size: 6,
    weight: 'regular',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: e => (
    <div className="max-w-[200px] border">
      <Heading truncate {...e} />
    </div>
  ),
}
