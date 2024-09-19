<script setup lang="ts">
import { AlertDialogTrigger, type AlertDialogTriggerProps } from 'radix-vue'

const props = defineProps<AlertDialogTriggerProps>()
</script>

<template>
  <AlertDialogTrigger class="cursor-pointer outline-none" v-bind="props">
    <slot />
  </AlertDialogTrigger>
</template>
