<script setup lang="ts">
import TooltipContent from '@/components/primitives/tooltip/TooltipContent.vue'
import TooltipRoot from '@/components/primitives/tooltip/TooltipRoot.vue'
import TooltipTrigger from '@/components/primitives/tooltip/TooltipTrigger.vue'
import { type TooltipRootEmits, type TooltipRootProps, useForwardPropsEmits } from 'radix-vue'

const props = withDefaults(defineProps<TooltipRootProps>(), {
  delayDuration: 0,
})

const emits = defineEmits<TooltipRootEmits>()
</script>

<template>
  <TooltipRoot
    v-bind="useForwardPropsEmits({
      ...props,
      ...emits,
    })"
  >
    <TooltipTrigger>
      <slot />
    </TooltipTrigger>
    <TooltipContent>
      <slot name="content" />
    </TooltipContent>
  </TooltipRoot>
</template>
