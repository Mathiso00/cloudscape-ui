import type { Meta, StoryObj } from '@storybook/vue3'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@/components'

const meta = {
  title: 'Primitives/Alert Dialog',
  component: AlertDialog,

  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: { Button, AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction },
    template: `
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="destructive">
            Delete my account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete your account ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your account? This action is irreversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction>
              Yes, delete it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}
