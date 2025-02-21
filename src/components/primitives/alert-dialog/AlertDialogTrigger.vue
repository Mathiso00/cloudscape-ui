<script setup lang="ts">
import { AlertDialogTrigger, type AlertDialogTriggerProps } from 'reka-ui'

const props = defineProps<AlertDialogTriggerProps>()
</script>

<template>
  <AlertDialogTrigger class="cursor-pointer outline-none" v-bind="props">
    <slot />
  </AlertDialogTrigger>
</template>
