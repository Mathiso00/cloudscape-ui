import type { Meta, StoryObj } from '@storybook/react'
import { AlertDialog, Button } from '../index.ts'

const meta = {
  title: 'Primitives/Alert Dialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultOpen: false,
    onOpenChange: () => {},
    open: false,
  },
  render: e => (
    <AlertDialog {...e}>
      <AlertDialog.Trigger>
        <Button
          variant="destructive"
          leftIcon="i-mdi-trash-can"
        >
          Delete my account
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>
            Delete your account ?
          </AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete your account? This action is irreversible.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Yes, delete it</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  ),
}
