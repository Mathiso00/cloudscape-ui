import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components'

const meta = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Button,
      Avatar,
      Popover,
      PopoverTrigger,
      PopoverContent,
    },
    template: `
          <Popover>
            <PopoverTrigger>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent class="p-4 min-w-50 text-white">
              Popover content
            </PopoverContent>
          </Popover>
        `,
  }),
}
