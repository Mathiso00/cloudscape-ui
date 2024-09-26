import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components'
import { ref } from 'vue'

const meta = {
  title: 'Primitives/Command',
  component: Command,

  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Button,
      Command,
      CommandDialog,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      CommandList,
      CommandInput,
      CommandSeparator,
      CommandShortcut,
    },
    setup() {
      const open = ref<boolean>(false)
      return {
        open,
        handleOpenChange: () => {
          open.value = !open.value
        },
      }
    },
    template: `
      <Button @click="open = !open">Toggle Command</Button>
      <CommandDialog :open="open" @update:open="handleOpenChange" class="rounded-lg border shadow-md max-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">
              <div class="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="Search Emoji">
              <div class="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="Launch">
              <div class="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="Profile">
              <div class="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem value="Mail">
              <div class="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem value="Settings">
              <div class="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    `,
  }),
}
