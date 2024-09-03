import type { Meta, StoryObj } from '@storybook/react'
import {
  DialogSystem,
  DialogSystemDescription,
  DialogSystemTitle,
} from '@/components/primitives/floating-dialog-system/floating-dialog-system.tsx'

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
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
  // Ajouter les paramètres pour fixer la taille de la vue dans Storybook
  parameters: {
    layout: 'centered', // Centrer l'histoire dans la vue
    viewport: {
      defaultViewport: 'responsive', // Vue réactive par défaut
    },

  },
} satisfies Meta<typeof DialogSystem>

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
    <div style={{ width: '400px', height: '200px', overflowY: 'auto' }}>
      <DialogSystem {...e}>
        <DialogSystemTitle>{e.title}</DialogSystemTitle>
        <DialogSystemDescription>{e.content}</DialogSystemDescription>

      </DialogSystem>
    </div>

  ),

}
