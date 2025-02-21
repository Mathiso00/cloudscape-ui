<script setup lang="ts">
import { PopoverTrigger, type PopoverTriggerProps } from 'reka-ui'

const props = defineProps<Omit<PopoverTriggerProps, 'asChild'>>()
</script>

<template>
  <PopoverTrigger class="bg-transparent" v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
