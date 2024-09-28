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
    <div class="absolute inset-0 bg-primary-800" />
    <div class="absolute inset-0 top-0 z-100 block h-full transform animate-[shimmer_2s_infinite] from-transparent to-primary-600 bg-gradient-to-r opacity-40 -translate-x-full -skew-x-3" />
    <slot />
  </div>
</template>
