import path, { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'

import { libInjectCss } from 'vite-plugin-lib-inject-css'
import React from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'

import * as pkg from './package.json'

const externals: string[] = [
  ...Object.keys(pkg.peerDependencies || {}),
]

export default defineConfig({
  plugins: [
    UnoCSS(),
    libInjectCss(),
    dtsPlugin({
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    React(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: '@koops/csui',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: externals,
      output: {
        preserveModules: false,
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
