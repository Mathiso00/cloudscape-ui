import type { Meta, StoryObj } from '@storybook/react'
import { DinoAlert, DinoAlertDescription, DinoAlertTitle } from '@/components/primitives/dino-alert/dinoAlert.tsx'

const meta = {
  title: 'Primitives/Dino',
  component: DinoAlert,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'select' },
    },
    trianglePosition: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof DinoAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <DinoAlert {...e}>
      <DinoAlertTitle>Default Alert</DinoAlertTitle>
      <DinoAlertDescription>This is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alertThis is a default alert</DinoAlertDescription>
    </DinoAlert>
  ),
}
