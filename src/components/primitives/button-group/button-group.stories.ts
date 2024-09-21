import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Button,
  ButtonGroup,
} from '@/components'

const meta = {
  title: 'Primitives/Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      options: ['default', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
  render: ({ size }) => ({
    components: { Button, ButtonGroup },
    props: { size },
    template: `
        <ButtonGroup :size="size">
            <Button variant="outline">First action</Button>
            <Button variant="outline">Second action</Button>
            <Button variant="secondary" size="icon" icon="i-mdi:chevron-down" />
        </ButtonGroup>
        `,
  }),
}
