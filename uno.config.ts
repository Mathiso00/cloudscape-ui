import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetIcons(),
  ],
})
