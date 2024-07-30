import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { presetShadcn } from 'unocss-preset-shadcn'
import { presetAnimations } from 'unocss-preset-animations'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
      // variablePrefix: 'koops-',
    }),
    presetHeroPatterns(),
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
})
