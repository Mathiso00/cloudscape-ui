import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Badge,
} from '@/components'

const meta = {
  title: 'Primitives/Badges/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['primary', 'success', 'danger', 'warning', 'info'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    outlined: false,
    content: 'This is a badge',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'xs',
    outlined: false,
    content: 'This is a badge',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'xs',
    outlined: false,
    content: 'This is a badge',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    size: 'xs',
    outlined: false,
    content: 'This is a badge',
  },
}

export const Sizes: Story = {
  render: _ => ({
    components: {
      Badge,
    },
    setup() {
      return { sizes: ['xs', 'sm', 'md'] }
    },
    template: `
          <div class="flex gap-2 items-center">
            <Badge v-for="size in sizes" :size="size" :content="'Size: ' + size"/>
          </div>
        `,
  }),
}

export const Outlined: Story = {
  render: _ => ({
    components: {
      Badge,
    },
    setup() {
      return { variants: ['primary', 'success', 'danger', 'warning', 'info'] }
    },
    template: `
          <div class="flex gap-2 items-center">
            <template v-for="variant in variants">
              <div class="flex flex-col gap-2">
                <Badge size="xs" outlined :variant="variant" content="Outlined"/>
                <Badge size="xs" :variant="variant" content="Filled"/>
            </template>
          </div>

        `,
  }),
}
