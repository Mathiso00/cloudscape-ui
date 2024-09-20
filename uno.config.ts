import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: 'Inter:300,400,500,600,700',
      },
    }),
    presetAnimations(),

  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|ts|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
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
