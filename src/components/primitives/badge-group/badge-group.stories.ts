import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Badge,
  BadgeGroup,
} from '@/components'

const meta = {
  title: 'Primitives/Badges/Badge Group',
  component: BadgeGroup,

  tags: ['autodocs'],
} satisfies Meta<typeof BadgeGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => ({
    components: { Badge, BadgeGroup },
    template: `
          <BadgeGroup>
            <Badge size="xs" outlined>First action</Badge>
            <Badge size="xs" outlined>Second action</Badge>
            <Badge size="xs">Second action</Badge>
          </BadgeGroup>
        `,
  }),
}
