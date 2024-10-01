<script setup lang="ts">
export interface KoopsSkeletonProps {
  readonly width?: string
  readonly height?: string
}

const { width, height } = defineProps<KoopsSkeletonProps>()
</script>

<template>
  <div
    :style="{
      width: width || '100%',
      height: height || '100%',
      display: 'inline-block',
    }"
    class="relative select-none overflow-hidden rounded-md bg-primary-950 text-transparent"
  >
    <div class="absolute inset-0 bg-secondary-950" />
    <div class="absolute inset-0 top-0 z-30 block h-full transform animate-shimmer animate-duration-1500 from-transparent to-secondary-900/10 bg-gradient-to-r -translate-x-120% -skew-x-10" />
    <slot />
  </div>
</template>
