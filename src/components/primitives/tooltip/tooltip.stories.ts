import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip } from '@/components'

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Tooltip,
    },
    template: `
      <Tooltip content="Hello, here is the info!">
         <Button variant="destructive">
           Hover me to display the tooltip
         </Button>
      </Tooltip>
        `,
  }),
}

export const WithSlot: Story = {
  render: _ => ({
    components: {
      Tooltip,
    },
    template: `
      <Tooltip>
         <Button variant="destructive">
           Hover me to display the tooltip
         </Button>
        
        <template #content>
          <div class="bg-red">Attention ! </div>
          Content of the tooltip
        </template>
      </Tooltip>
        `,
  }),
}
