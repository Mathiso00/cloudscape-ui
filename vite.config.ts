import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      formats: ['es'],
      name: '@koopsoperator/csui',
      fileName: (_, name) => `${name}.mjs`,
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue', 'tailwind-variants', 'unocss'],
    },
  },
})
