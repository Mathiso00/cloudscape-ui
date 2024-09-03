import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, Dropdown } from '../index.ts'

const meta = {
  title: 'Primitives/Dropdown',
  component: Dropdown,

  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: e => (
    <Dropdown {...e}>
      <Dropdown.Trigger>
        <Avatar
          alt="John Doe"
          size="default"
        />
      </Dropdown.Trigger>
      <Dropdown.Content className="w-200px" align="start">
        <Dropdown.Group>
          <Dropdown.Item
            icon="i-ph:user"
            text="Profile"
            shortcut={['command', 'P']}
          />
          <Dropdown.Item
            icon="i-ph:credit-card"
            text="Billing"
          />
          <Dropdown.Item
            icon="i-ph:gear"
            text="Settings"
          />
          <Dropdown.Item
            icon="i-ph:keyboard"
            text="Keyboard shortcuts"
          />

        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Group>

          <Dropdown.Item
            icon="i-ph:users"
            text="Team"
          />

          <Dropdown.Sub>
            <Dropdown.SubTrigger
              icon="i-ph:user-plus"
              text="Invite users"
            />
            <Dropdown.Portal>
              <Dropdown.SubContent>
                <Dropdown.Item
                  icon="i-ph:envelope"
                  text="Email"
                />
                <Dropdown.Item
                  icon="i-ph:chat"
                  text="Message"
                />
                <Dropdown.Separator />
                <Dropdown.Item
                  icon="i-ph:plus-circle"
                  text="More..."
                />
              </Dropdown.SubContent>
            </Dropdown.Portal>
          </Dropdown.Sub>

          <Dropdown.Item
            icon="i-ph:plus"
            text="New Team"
            shortcut={['option', 'command', 'T']}
          />
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Item
          icon="i-ph:sign-out"
          text="Log out"
        />
      </Dropdown.Content>
    </Dropdown>
  ),
}
