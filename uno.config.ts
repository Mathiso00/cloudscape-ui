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
})
