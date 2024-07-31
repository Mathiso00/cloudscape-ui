import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '../skeleton'
import { Text } from '../../typography'
import { Button } from '@/components/primitives'

const meta = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loading: true,
    children: 'This is a skeleton',
  },
  argTypes: {
    children: {
      description: 'The content to display in the skeleton',
    },
    loading: {
      description: 'Whether to show the skeleton',
      type: { name: 'boolean' },
    },
    width: {
      description: 'The width of the skeleton',
      type: { name: 'string' },
    },
    height: {
      description: 'The height of the skeleton',
      type: { name: 'string' },
    },
    minHeight: {
      description: 'The minimum height of the skeleton',
      type: { name: 'string' },
    },
    minWidth: {
      description: 'The minimum width of the skeleton',
      type: { name: 'string' },
    },
    maxHeight: {
      description: 'The maximum height of the skeleton',
      type: { name: 'string' },
    },
    maxWidth: {
      description: 'The maximum width of the skeleton',
      type: { name: 'string' },
    },
  },
}

export const Size: Story = {
  args: {
    width: '48px',
    height: '48px',
  },
}

export const WithChildren: Story = {
  args: {

  },
  render: _ => (
    <>
      <Skeleton>
        <Button>Lorem Ipsum</Button>
      </Skeleton>

    </>
  ),
}

export const WithText: Story = {
  render: _ => (
    <div className="flex flex-col gap-1">
      <Text>
        <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
      </Text>

      <Skeleton>
        <Text>Lorem ipsum dolor sit amet</Text>
      </Skeleton>
    </div>
  ),
}

export const WithTextBlock: Story = {
  render: _ => (
    <div className="flex flex-col gap-1">
      <Text>
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
          erat, fringilla sed commodo sed, aliquet nec magna.
        </Skeleton>
      </Text>

      <Skeleton>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
          erat, fringilla sed commodo sed, aliquet nec magna.
        </Text>
      </Skeleton>
    </div>
  ),
}
