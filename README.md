<h1 align="center">
Koops UI Design System
</h1>
<p align="center">
The official design system for Koops applications.
CSUI is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. <br>
<p>

<p align="center">
<a href="https://www.npmjs.com/package/@koopsoperator/csui" target="__blank"><img src="https://img.shields.io/npm/v/@koopsoperator/csui?style=flat&colorA=002438&colorB=2b67a6" alt="NPM version"></a>
</p>

## Tech Stack
- [pnpm](https://pnpm.io/)
- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [UnoCSS](https://unocss.dev/)
- [RadixVue](https://www.radix-vue.com/)

### Installation

```bash
pnpm add -D @koopsoperator/csui
```

### Usage

```vue
<script setup lang="ts">
import { Button } from '@koopsoperator/csui'
</script>

<template>
  <Button variant="destructive">
    Destructive Button
  </Button>
</template>
```

### Development

> [!CAUTION]
> To install packages, you need to have [pnpm](https://pnpm.io/) installed on your machine, if you need to install packages to create new components please, run the following command: `pnpm add -w -D <package-name>`

```bash
pnpm install --frozen-lockfile
```

### Build process (while developing)
```bash
pnpm build:watch
```

### Storybook

```bash
pnpm storybook
```
