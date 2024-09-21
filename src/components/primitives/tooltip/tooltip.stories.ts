import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, ButtonGroup, Tooltip } from '@/components'

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
      Button,
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

export const Multiple: Story = {
  render: _ => ({
    components: {
      Tooltip,
      Button,
      ButtonGroup,
    },
    template: `
      <ButtonGroup>
        <Tooltip content="Hello, here is the info!">
          <Button variant="destructive">
            First Tooltip
          </Button>
        </Tooltip>
        <Tooltip content="Hello, here is the info!">
          <Button variant="destructive">
            Second Tooltip
          </Button>
        </Tooltip>
        <Tooltip content="Hello, here is the info!">
          <Button variant="destructive">
            Third Tooltip
          </Button>
        </Tooltip>
      </ButtonGroup>
        `,
  }),
}
