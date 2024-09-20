import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components'
import { DropdownMenuPortal } from 'radix-vue'

const meta = {
  title: 'Primitives/Dropdown Menu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Avatar,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuSub,
      DropdownMenuTrigger,
      DropdownMenuSubContent,
      DropdownMenuSubTrigger,
      DropdownMenuPortal,
    },
    template: `
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar alt="John Doe"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" class="w-2OOpx">
              <DropdownMenuGroup>
              <DropdownMenuItem
                  icon="i-ph:user"
                  text="Profile"
              />
              <DropdownMenuItem
                  icon="i-ph:credit-card"
                  text="Billing"
              />
              <DropdownMenuItem
                  icon="i-ph:gear"
                  text="Settings"
              />
              <DropdownMenuItem
                  icon="i-ph:keyboard"
                  text="Keyboard shortcuts"
              />
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                    icon="i-ph:users"
                    text="Team"
                />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                      icon="i-ph:user-plus"
                      text="Invite users"
                  />
                    <DropdownMenuSubContent>
                      <DropdownMenuItem
                          icon="i-ph:envelope"
                          text="Email"
                      />
                      <DropdownMenuItem
                          icon="i-ph:chat"
                          text="Message"
                      />
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                          icon="i-ph:plus-circle"
                          text="More..."
                      />
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem
                    icon="i-ph:plus"
                text="New Team"
                />
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                  icon="i-ph:sign-out"
                  text="Log out"
              />
            </DropdownMenuContent>
          </DropdownMenu>
        `,
  }),
}
