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
    class="relative select-none overflow-hidden rounded-md text-transparent"
  >
    <div class="absolute inset-0 bg-secondary" />
    <div class="absolute inset-0 animate-pulse bg-white/15" />
    <slot />
  </div>
</template>
