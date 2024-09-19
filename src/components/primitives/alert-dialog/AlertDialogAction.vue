<script setup lang="ts">
import type { AlertDialogActionProps } from 'radix-vue'
import { cn } from '@/utils'
import { AlertDialogAction } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { buttonVariants } from '../button/button.variant.ts'

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps" :class="cn(
      buttonVariants({ variant: 'destructive' }),
      'text-white',
      props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
