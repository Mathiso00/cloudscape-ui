import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@/components'
import Skeleton from './Skeleton.vue'

const meta = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Skeleton,
    },
    template: `
      <Skeleton loading>
        This is a skeleton
      </Skeleton>
        `,
  }),
}

export const Size: Story = {
  render: _ => ({
    components: {
      Skeleton,
    },
    template: `
      <Skeleton
          height="48px"
          width="48px"
      />
        `,
  }),
}

export const WithChildren: Story = {
  render: _ => ({
    components: {
      Skeleton,
      Button,
    },
    template: `
      <Skeleton>
        <Button variant="destructive">
          Lorem Ipsum
        </Button>
      </Skeleton>
        `,
  }),
}
export const WithText: Story = {
  render: _ => ({
    components: {
      Skeleton,
    },
    template: `
      <div className="flex flex-col gap-1">
        <p>
          <Skeleton>
            Lorem ipsum dolor sit amet.
          </Skeleton>
        </p>
        <Skeleton>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </Skeleton>
      </div>
        `,
  }),
}

export const WithTextBlock: Story = {
  render: _ => ({
    components: {
      Skeleton,
    },
    template: `
      <div className="flex flex-col gap-1">
        <p>
          <Skeleton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis tellus, efficitur id convallis a, viverra eget libero. Nam magna erat, fringilla sed commodo sed, aliquet nec magna.
          </Skeleton>
        </p>
        <Skeleton>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis tellus, efficitur id convallis a, viverra eget libero. Nam magna erat, fringilla sed commodo sed, aliquet nec magna.
          </p>
        </Skeleton>
      </div>
        `,
  }),
}
