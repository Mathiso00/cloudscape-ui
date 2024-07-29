import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { default: 'dark' },
  },
}

export default preview
