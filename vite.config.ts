import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/story/**', 'src/**/*.story.vue'],
    }),
    libInjectCss(),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    dedupe: [
      'vue',
      '@vue/runtime-core',
    ],
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
      external: ['vue'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
