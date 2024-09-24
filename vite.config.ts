import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    Dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/stories/**', 'src/**/*.stories.ts'],
    }),
    libInjectCss(),
    Vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      name: '@koopsoperator/csui',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },

    },
    rollupOptions: {
      external: ['vue', '@vue/runtime-core'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
