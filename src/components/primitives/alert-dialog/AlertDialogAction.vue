<script setup lang="ts">
import type { AlertDialogActionProps } from 'reka-ui'
import { cn } from '@/utils'
import { AlertDialogAction } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { buttonVariant } from '../button/button-variant'

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps" :class="cn(
      buttonVariant({ variant: 'destructive' }),
      'text-white',
      props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
