<script setup lang="ts">
import TooltipContent from '@/components/primitives/tooltip/TooltipContent.vue'
import TooltipProvider from '@/components/primitives/tooltip/TooltipProvider.vue'
import TooltipRoot from '@/components/primitives/tooltip/TooltipRoot.vue'
import TooltipTrigger from '@/components/primitives/tooltip/TooltipTrigger.vue'

const props = defineProps<{
  content?: string
}>()
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <TooltipRoot>
      <TooltipTrigger v-bind="props">
        <slot />
      </TooltipTrigger>
      <TooltipContent>
        <template v-if="content && !$slots.content">
          {{ content }}
        </template>
        <template v-else>
          <slot name="content" />
        </template>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
