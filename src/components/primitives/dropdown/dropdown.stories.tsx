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
      <Dropdown.Trigger >
        <Avatar
          src="https://github.com/shadcn.png"
          alt="avatar"
          size="default"
        />
      </Dropdown.Trigger>
      <Dropdown.Content align="start">
        <Dropdown.Label>My Account</Dropdown.Label>
        <Dropdown.Separator />
        <Dropdown.Group>
          <Dropdown.Item>
            <div className="i-mdi-user mr-2 h-4 w-4" />
            <span>Profile</span>
            <Dropdown.Shortcut>shift+command+P</Dropdown.Shortcut>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="i-mdi-credit-card mr-2 h-4 w-4" />
            <span>Billing</span>
            <Dropdown.Shortcut>command+B</Dropdown.Shortcut>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="i-mdi-cog mr-2 h-4 w-4" />
            <span>Settings</span>
            <Dropdown.Shortcut>command+S</Dropdown.Shortcut>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="i-mdi-keyboard mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <Dropdown.Shortcut>command+K</Dropdown.Shortcut>
          </Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Group>
          <Dropdown.Item>
            <div className="i-mdi-users mr-2 h-4 w-4" />
            <span>Team</span>
          </Dropdown.Item>
          <Dropdown.Sub>
            <Dropdown.SubTrigger>
              <div className="i-mdi-user-add mr-2 h-4 w-4" />
              <span>Invite users</span>
            </Dropdown.SubTrigger>
            <Dropdown.Portal>
              <Dropdown.SubContent>
                <Dropdown.Item>
                  <div className="i-mdi-email mr-2 h-4 w-4" />
                  <span>Email</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="i-mdi-message mr-2 h-4 w-4" />
                  <span>Message</span>
                </Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>
                  <div className="i-mdi-plus-circle mr-2 h-4 w-4" />
                  <span>More...</span>
                </Dropdown.Item>
              </Dropdown.SubContent>
            </Dropdown.Portal>
          </Dropdown.Sub>
          <Dropdown.Item>
            <div className="i-mdi-plus mr-2 h-4 w-4" />
            <span>New Team</span>
            <Dropdown.Shortcut>option+command+T</Dropdown.Shortcut>
          </Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Item>
          <div className="i-mdi-github mr-2 h-4 w-4" />
          <span>GitHub</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="i-mdi-safe mr-2 h-4 w-4" />
          <span>Support</span>
        </Dropdown.Item>
        <Dropdown.Item disabled>
          <div className="i-mdi-cloud mr-2 h-4 w-4" />
          <span>API</span>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <div className="i-mdi-logout mr-2 h-4 w-4" />
          <span>Log out</span>
          <Dropdown.Shortcut>CTRL+Q</Dropdown.Shortcut>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
}
