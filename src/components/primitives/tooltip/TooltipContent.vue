<script setup lang="ts">
import { cn } from '@/utils'
import { TooltipContent, type TooltipContentEmits, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      :side-offset="4"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn('bg-[#2C3236] z-50 overflow-hidden rounded-md px-2 py-1.5 text-white text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', props.class)"
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
