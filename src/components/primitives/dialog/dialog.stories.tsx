import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Button } from '../button'
import { Input } from '../input'
import {
  Close,
  Content,
  Description,
  Dialog,
  DialogHeader,
  Footer,
  Title,
  Trigger,
} from './dialog.tsx'

const meta = {
  title: 'Components/DialogDemo',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <Trigger asChild>
        <Button
          variant="default"
        >
          OpenModal
        </Button>
      </Trigger>
      <Content>
        <DialogHeader>
          <Title>Edit profile</Title>
        </DialogHeader>
        <Description>
          Make changes to your profile here. Click save when you're done.
        </Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <Input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <Input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <Footer>
          <Close asChild>
            <Button
              variant="default"
            >
              Valider
            </Button>
          </Close>
          <Close asChild>
            <Button
              variant="destructive"
            >
              Fermer
            </Button>
          </Close>
        </Footer>
      </Content>
    </Dialog>
  ),
}

export const OpenDialog: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.getByText('Edit profile')
    await userEvent.click(button)
  },
}
