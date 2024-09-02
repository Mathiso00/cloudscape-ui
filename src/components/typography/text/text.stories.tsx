import type { Meta, StoryObj } from '@storybook/react'
import { Strong } from '../'
import { Text } from './'

const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    weight: 'regular',
    as: 'span',
    size: '2',
    children: 'The quick brown fox jumps over the lazy dog.',
    truncate: false,
    trim: 'normal',
    align: 'left',
    highContrast: false,
  },
  argTypes: {
    trim: { control: 'select', type: { name: 'enum', value: ['normal', 'start', 'end', 'both'] } },
    weight: { control: 'select', type: { name: 'enum', value: ['light', 'regular', 'medium', 'bold'] } },
    as: { control: 'select', type: { name: 'enum', value: ['span', 'p', 'div', 'label'] } },
    size: { control: 'select', type: { name: 'enum', value: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] } },
    align: { control: 'select', type: { name: 'enum', value: ['left', 'center', 'right'] } },
  },
}

export const As: Story = {
  render: _ => (
    <>
      <Text as="p">
        This is a
        {' '}
        <Strong>paragraph</Strong>
        {' '}
        element.
      </Text>
      <Text as="label">
        This is a
        {' '}
        <Strong>label</Strong>
        {' '}
        element.
      </Text>
      <Text as="div">
        This is a
        {' '}
        <Strong>div</Strong>
        {' '}
        element.
      </Text>
      <Text as="span">
        This is a
        {' '}
        <Strong>span</Strong>
        {' '}
        element.
      </Text>
    </>
  ),
}

export const Size: Story = {
  render: _ => (
    <div className="flex flex-col">
      <Text size="1">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="2">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="3">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="4">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="5">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="6">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="7">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="8">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="9">The quick brown fox jumps over the lazy dog.</Text>
    </div>
  ),
}

export const AlternativeSizes: Story = {
  render: _ => (
    <>
      <Text as="p" mb="5" size="4">
        The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
      </Text>

      <Text as="p" mb="5" size="3">
        The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
      </Text>

      <Text as="p" size="2" color="gray">
        The goal of typography is to relate font size, line height, and line width in a proportional way that maximizes beauty and makes reading easier and more pleasant. The question is: What proportion(s) will give us the best results? The golden ratio is often observed in nature where beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these attributes in our typography.
      </Text>
    </>
  ),
}

export const Weight: Story = {
  render: _ => (
    <>
      <Text weight="regular" as="div">
        The quick brown fox jumps over the lazy dog.
      </Text>

      <Text weight="medium" as="div">
        The quick brown fox jumps over the lazy dog.
      </Text>

      <Text weight="bold" as="div">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </>
  ),
}

/**
 * Must not be a `span` element to apply the `text-align` CSS property.
 */
export const Alignment: Story = {
  render: _ => (
    <>
      <Text align="left" as="div">Left</Text>
      <Text align="center" as="div">Center</Text>
      <Text align="right" as="div">Right</Text>
    </>
  ),
}

export const Trim: Story = {
  render: _ => (
    <div className="flex flex-col gap-4">
      <Text
        trim="normal"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        Without trim
      </Text>
      <Text
        trim="both"
        style={{
          background: 'var(--gray-a2)',
          borderTop: '1px dashed var(--gray-a7)',
          borderBottom: '1px dashed var(--gray-a7)',
        }}
      >
        With trim
      </Text>
    </div>
  ),
}

export const Truncate: Story = {
  render: _ => (
    <div className="max-w-300px">
      <Text truncate as="p">
        The goal of typography is to relate font size, line height, and line width
        in a proportional way that maximizes beauty and makes reading easier and
        more pleasant.
      </Text>
    </div>
  ),
}
