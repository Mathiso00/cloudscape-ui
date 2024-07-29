import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Tooltip } from '../tooltip'
import { ButtonGroup } from './button-group.tsx'

const meta = {
  title: 'Primitives/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <ButtonGroup {...e}>
      <Button>
        Button 1
      </Button>
      <Button variant="outline">
        Button 2
      </Button>
      <Button size="icon" icon="i-mdi-chevron-down" />
    </ButtonGroup>
  ),
}

export const Small: Story = {
  render: e => (
    <ButtonGroup {...e} size="sm">
      <Button variant="secondary">
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
    <ButtonGroup {...e}>
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
