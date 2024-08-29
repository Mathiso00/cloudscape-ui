import type { Meta, StoryObj } from '@storybook/react'
import { DinoAlert, DinoAlertDescription, DinoAlertTitle } from '@/components/primitives/dino-alert/dinoAlert.tsx'

const meta = {
  title: 'Primitives/Dino-Alert',
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
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DinoAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    trianglePosition: 'center',
    title: 'Default Alert',
    content: 'This is a default alert',
  },
  render: e => (
    <DinoAlert {...e}>
      <DinoAlertTitle>{e.title}</DinoAlertTitle>
      <DinoAlertDescription>{e.content}</DinoAlertDescription>
    </DinoAlert>
  ),
}
