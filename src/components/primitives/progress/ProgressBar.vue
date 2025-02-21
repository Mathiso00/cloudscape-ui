<script setup lang="ts">
import { cn } from '@/utils'
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'], height?: number }>(),
  {
    modelValue: 40,
    height: 10,
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
    :style="`height: ${props.height}px;`"
    :class="
      cn(
        'relative overflow-hidden rounded-md bg-white/10',
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
