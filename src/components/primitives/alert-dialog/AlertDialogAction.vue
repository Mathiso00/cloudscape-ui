<script setup lang="ts">
import type { AlertDialogActionProps } from 'radix-vue'
import { buttonVariants } from '@/components/primitives/button'
import { cn } from '@/utils'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <div
    v-bind="delegatedProps" :class="cn(
      buttonVariants({ variant: 'destructive' }),
      props.class)"
  >
    <slot />
  </div>
</template>
