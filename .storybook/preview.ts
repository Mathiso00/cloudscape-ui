import type { Preview } from '@storybook/vue3'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
