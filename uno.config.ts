import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetShadcn } from 'unocss-preset-shadcn'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetIcons(),
    presetShadcn(),
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
