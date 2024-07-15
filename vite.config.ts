import path, { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'

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
    dtsPlugin(),
    React(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts.ts'),
      formats: ['es', 'umd'],
      name: '@koops/csui',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: externals,
      output: {
        format: 'esm',
        dir: './dist',
        globals: {
          react: 'React',
        },
      },
    },
  },
})
