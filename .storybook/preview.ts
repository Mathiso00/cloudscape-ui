import type { Preview } from '@storybook/vue3'
import { ConfigProvider } from 'radix-vue'

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
      components: { story, ConfigProvider },
      template: `
              <ConfigProvider>
                <div class="font-inter">
                  <story/>
                </div>
              </ConfigProvider>
            `,
    }),
  ],
}

export default preview
