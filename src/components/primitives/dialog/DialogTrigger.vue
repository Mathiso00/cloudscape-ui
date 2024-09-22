<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'radix-vue'

const props = defineProps<DialogTriggerProps>()
</script>

<template>
  <DialogTrigger class="cursor-pointer outline-none" v-bind="props">
    <slot />
  </DialogTrigger>
</template>
