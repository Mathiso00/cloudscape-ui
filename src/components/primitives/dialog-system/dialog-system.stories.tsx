import type { Meta, StoryObj } from '@storybook/react'
import {
  DialogSystem,
  DialogSystemDescription,
  DialogSystemTitle,
} from '@/components/primitives/dialog-system/dialogSystem.tsx'

const meta = {
  title: 'Primitives/Dialog-System',
  component: DialogSystem,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'select' },
    },
    trianglePosition: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    SvgPosition: {
      options: ['left', 'center', 'right', 'otherLeft', 'otherRight'],
      control: { type: 'select' },
    },
    inverseSvg: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogSystem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    trianglePosition: 'center',
    SvgPosition: 'center',
    inverseSvg: false,
    title: 'Default Alert',
    content: 'This is a default alert',
  },
  render: e => (
    <DialogSystem {...e}>
      <DialogSystemTitle>{e.title}</DialogSystemTitle>
      <DialogSystemDescription>{e.content}</DialogSystemDescription>
    </DialogSystem>
  ),
}
