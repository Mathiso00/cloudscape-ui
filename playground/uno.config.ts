import { defineConfig, presetIcons, presetMini, presetUno, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetIcons(),
    presetMini(),
  ],
})
