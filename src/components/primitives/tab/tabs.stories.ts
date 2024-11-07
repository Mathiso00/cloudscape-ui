import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Tabs,
} from '@/components'

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      {
        value: 'account',
        label: 'Account',
        icon: 'i-mdi-account',
        content: 'Account content',
      },
      {
        value: 'logs',
        label: 'Logs',
        icon: 'i-mdi-format-list-bulleted',
        content: 'Logs content',
        count: 5,
      },
    ],
  },
}

export const WithContent: Story = {
  args: {
    tabs: [
      {
        value: 'account',
        label: 'Account',
        icon: 'i-mdi-account',
        content: 'Account content',
      },
      {
        value: 'logs',
        label: 'Logs',
        icon: 'i-mdi-format-list-bulleted',
        content: 'Logs content',
        count: 5,
      },
      {
        value: 'settings',
        label: 'Settings',
        icon: 'i-mdi-cog',
        content: 'Settings content',
        disabled: true,
      },
      {
        value: 'security',
        icon: 'i-mdi-lock',
        label: 'Security',
      },
    ],
  },

  render(args) {
    return {
      props: Object.keys(args),
      data: () => ({ args }),
      components: { Tabs },
      template: `
        <Tabs :tabs="args.tabs">
          
          <template #account="{ tab }">
            <div class="w-full h-30 bg-red text-white">
              A custom account tab
            </div>
          </template>
          <template #security="{ tab }">
            this is the {{ tab.label }} tab
          </template>
        </Tabs>
      `,
    }
  },
}
