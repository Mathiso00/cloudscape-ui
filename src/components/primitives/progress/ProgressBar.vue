<script setup lang="ts">
import { cn } from '@/utils'
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    modelValue: 40,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'relative h-4 overflow-hidden rounded-md bg-white/10',
        props.class,
      )
    "
  >
    <ProgressIndicator
      class="h-full w-full flex-1 rounded-md bg-white/80 transition-all"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
