import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    weight: 'medium',
    as: 'h2',
    size: '2',
    children: 'The quick brown fox jumps over the lazy dog.',
    truncate: false,
    trim: 'normal',
  },
  argTypes: {
    trim: { control: 'select', type: { name: 'enum', value: ['normal', 'start', 'end', 'both'] } },
    weight: { control: 'select', type: { name: 'enum', value: ['light', 'regular', 'medium', 'bold'] } },
    as: { control: 'select', type: { name: 'enum', value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } },
    size: { control: 'select', type: { name: 'enum', value: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] } },
  },
}

export const Size: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: (e) => {
    return (
      <>
        <Heading size="1" {...e} />
        <Heading size="2" {...e} />
        <Heading size="3" {...e} />
        <Heading size="4" {...e} />
        <Heading size="5" {...e} />
        <Heading size="6" {...e} />
        <Heading size="7" {...e} />
        <Heading size="8" {...e} />
        <Heading size="9" {...e} />
      </>
    )
  },
}

export const Weight: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: (e) => {
    return (
      <>
        <Heading weight="regular" {...e} />
        <Heading weight="medium" {...e} />
        <Heading weight="bold" {...e} />
      </>
    )
  },
}

export const Alignment: Story = {
  render: (_) => {
    return (
      <>
        <Heading align="left">Left</Heading>
        <Heading align="center">Center</Heading>
        <Heading align="right">Right</Heading>
      </>
    )
  },
}

export const Trim: Story = {

  render: _ => (
    <div className="flex flex-col gap-4">
      <Heading
        trim="normal"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        Without trim
      </Heading>
      <Heading
        trim="both"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        With trim
      </Heading>
    </div>
  ),
}

export const Truncate: Story = {
  args: {
    truncate: true,
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  render: e => (
    <div className="flex max-w-[300px]">
      <Heading {...e} />
    </div>
  ),
}
