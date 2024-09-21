import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components'
import AreaChart from '@/components/charts/AreaChart.vue'

const meta = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: {
      Button,
      Avatar,
      Popover,
      PopoverTrigger,
      PopoverContent,
      AreaChart,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuItem,
      DropdownMenuContent,
      DropdownMenuSeparator,
    },
    template: `
          <Popover>
            <PopoverTrigger>
              <Button
                  variant="secondary-outline"
                  left-icon="i-material-symbols:auto-graph"
                  right-icon="i-mdi-caret-down"
              >
                Server metrics
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" class="min-w-50 text-white">
              <div class="p-4">
                <h1 class="text-lg font-bold">Server metrics</h1>
                <p class="text-sm text-white/70">Server metrics for the last 24 hours</p>
                <AreaChart/>
              </div>

              <div class="flex justify-end align-end p-4 border-t border-white/10">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                        size="sm"
                        variant="secondary-outline"
                        right-icon="i-ic:baseline-arrow-right"
                    >
                        Advanced
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" class="min-w-230px">
                    <DropdownMenuItem 
                        text="More detailed metrics"
                        icon="i-ic:round-insert-chart"
                        :shortcut="['Ctrl', 'I', 'S']"
                    />
                    <DropdownMenuItem
                        text="Export metrics"
                        icon="i-ic:round-get-app"
                        prevent-default
                        :shortcut="['Ctrl', 'E']"
                    />
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem
                        text="Ask for help"
                        icon="i-ic:round-help"
                        :shortcut="['Ctrl', 'H']"
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </PopoverContent>
          </Popover>
        `,
  }),
}
