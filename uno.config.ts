import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetIcons(),
    presetShadcn(),
  ],
})
