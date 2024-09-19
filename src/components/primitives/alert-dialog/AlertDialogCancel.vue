<script setup lang="ts">
import { cn } from '@/utils'
import { AlertDialogCancel, type AlertDialogCancelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { buttonVariants } from '../button/button.variant.ts'

const props = defineProps<AlertDialogCancelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogCancel v-bind="delegatedProps" :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0 text-white', props.class)">
    <slot />
  </AlertDialogCancel>
</template>
