import { resolve } from 'node:path'
import * as path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    UnoCSS(),
    Dts({
      cleanVueFileName: true,
      insertTypesEntry: true,
    }),
    libInjectCss(),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
    Vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/index.ts',
      name: '@koopsoperator/csui',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `koops-csui.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css')
            return 'my-library-vue-ts.css'
          return assetInfo.name
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
