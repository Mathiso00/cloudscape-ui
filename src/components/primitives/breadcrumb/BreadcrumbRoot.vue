<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="cn('relative -ml-2', props.class)">
    <slot />
  </nav>
</template>
