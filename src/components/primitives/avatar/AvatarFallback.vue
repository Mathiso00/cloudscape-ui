<script setup lang="ts">
import { AvatarFallback } from 'reka-ui'
</script>

<template>
  <AvatarFallback v-bind="$attrs" class="h-full w-full flex items-center justify-center bg-primary-900 text-white uppercase">
    <slot />
  </AvatarFallback>
</template>
