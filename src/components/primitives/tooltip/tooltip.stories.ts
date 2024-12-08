import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, Tooltip, TooltipProvider } from '@/components'

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
      Button,
      TooltipProvider,
    },
    template: `
          <TooltipProvider>
            <Tooltip>
              <Button variant="destructive">
                Hover me to display the tooltip
              </Button>
              
              <template #content>
                Hello, here is the info
              </template>
            </Tooltip>
          </TooltipProvider>
        `,
  }),
}

export const WithSlot: Story = {
  render: _ => ({
    components: {
      Tooltip,
      Button,
      TooltipProvider,
    },
    template: `
      <TooltipProvider>
          <Tooltip>
            <Button variant="destructive">
              Hover me to display the tooltip
            </Button>

            <template #content>
              <div class="bg-red">Attention !</div>
              Content of the tooltip
            </template>
          </Tooltip>
      </TooltipProvider>
        `,
  }),
}
