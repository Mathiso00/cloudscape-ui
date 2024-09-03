import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { presetShadcn } from 'unocss-preset-shadcn'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
      // variablePrefix: 'koops-',
    }),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: 'Inter:300,400,500,600,700',
      },
    }),
    presetShadcn({
      color: 'neutral',
      darkSelector: '.dark',
    }),
    presetAnimations(),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Include Storybook stories
        'src/**/*.stories.{js,ts}',
        'stories/**/*',
      ],
    },
  },
  theme: {
    colors: {
      primary: '#222831',
      secondary: '#31363F',
    },
  },
})
