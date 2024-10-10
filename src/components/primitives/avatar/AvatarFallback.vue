<script setup lang="ts">
import { AvatarFallback } from 'radix-vue'
</script>

<template>
  <AvatarFallback class="h-full w-full flex items-center justify-center bg-primary-900 text-white uppercase">
    <slot />
  </AvatarFallback>
</template>
