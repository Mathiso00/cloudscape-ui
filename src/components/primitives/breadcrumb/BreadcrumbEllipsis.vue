<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)"
  >
    <slot>
      <div class="i-mdi:dots-horizontal h-4 w-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
