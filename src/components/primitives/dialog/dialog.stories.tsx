import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Input } from '../input'
import { Dialog } from '.'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <Dialog {...e}>
      <Dialog.Trigger asChild>
        <Button
          variant="default"
        >
          OpenModal
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
        </Dialog.Header>
        <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <Input className="Input mt-1" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <Input className="Input mt-1 " id="username" defaultValue="@peduarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="bio">
            Bio
          </label>
          <Input className="Input mt-1" id="bio" defaultValue="Software Engineer" />
        </fieldset>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button
              variant="outline"
            >
              Fermer
            </Button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <Button
              variant="default"
            >
              Valider
            </Button>
          </Dialog.Close>

        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
}
