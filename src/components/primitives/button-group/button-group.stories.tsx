import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Tooltip } from '../tooltip'
import { ButtonGroup } from './button-group.tsx'

const meta = {
  title: 'Primitives/Button Group',
  component: ButtonGroup,

  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <ButtonGroup {...e} variant="outline">
      <Button>
        Button 1
      </Button>
      <Button>
        Button 2
      </Button>
      <Button size="icon" icon="i-mdi-chevron-down" />
    </ButtonGroup>
  ),
}

export const WithTooltip: Story = {
  render: e => (
    <ButtonGroup {...e} variant="default">
      <Button>
        Button 1
      </Button>
      <Tooltip content="This is a tooltip">
        <Button>
          Button 2
        </Button>
      </Tooltip>
      <Button size="icon" icon="i-mdi-chevron-down" />
    </ButtonGroup>
  ),
}
