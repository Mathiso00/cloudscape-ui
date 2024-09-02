import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input.tsx'

const meta = {
  title: 'Primitives/Input',
  component: Input,

  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Enter your name',
    type: 'text',
  },
}
export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
  },
}
export const Email: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
  },
}
export const Number: Story = {
  args: {
    placeholder: 'Enter a number',
    type: 'number',
  },
}
