import type { Preview } from '@storybook/vue3'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const preview: Preview = {
  parameters: {

    layout: 'centered',
    backgrounds: {
      default: 'koops',
      values: [
        {
          name: 'koops',
          value: '#222831',
        },
      ],
    },
  },
  decorators: [
    story => ({
      components: { story },
      template: `
        <div class="font-inter">
          <story/>
        </div>`,
    }),
  ],
}

export default preview
