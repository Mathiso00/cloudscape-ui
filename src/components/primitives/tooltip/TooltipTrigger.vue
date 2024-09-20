<script setup lang="ts">
import { TooltipTrigger, type TooltipTriggerProps } from 'radix-vue'

const props = defineProps<TooltipTriggerProps>()
</script>

<template>
  <TooltipTrigger>
    <slot />
  </TooltipTrigger>
</template>
