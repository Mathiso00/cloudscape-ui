import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components'

const meta = {
  title: 'Primitives/Dialogs/Dialog',
  component: Dialog,

  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Button,
      Dialog,
      DialogClose,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogScrollContent,
      DialogTitle,
      DialogTrigger,
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            Save changes
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}
