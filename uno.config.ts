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
      secondary: {
        50: '#f7f8f8',
        100: '#edeef1',
        200: '#d7dbe0',
        300: '#b5bbc4',
        400: '#8c97a4',
        500: '#6e7a89',
        600: '#586171',
        700: '#48505c',
        800: '#3e444e',
        900: '#373c43',
        950: '#1b1d21',
      },
      primary: {
        50: '#f5f6f6',
        100: '#e5e7e8',
        200: '#cdd0d4',
        300: '#aab0b6',
        400: '#7f8791',
        500: '#646c76',
        600: '#565c64',
        700: '#4a4e54',
        800: '#414449',
        900: '#393b40',
        950: '#151618',
      },
    },
  },
})
