import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '@radix-ui/themes/styles.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import { CSUIThemeProvider } from '../src'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    Story => (
      <CSUIThemeProvider
        data-is-root-theme={false}
        appearance="dark"
        hasBackground={false}
      >
        <Story />
      </CSUIThemeProvider>
    ),
  ],

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default preview
