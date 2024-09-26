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
    class="relative animate-pulse select-none overflow-hidden rounded-md bg-primary-950 text-transparent"
  >
    <div class="absolute inset-0 bg-primary-800" />
    <slot />
  </div>
</template>
