<script setup lang="ts">
import type { KoopsDropdownMenuItemProps } from '@/components/primitives/dropdown/DropdownMenuItem.vue'
import { cn } from '@/utils'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
  KoopsDropdownMenuItemProps &
  DropdownMenuSubTriggerProps &
  {
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-pointer select-none items-center rounded-md px-1.5 py-1.5 text-sm outline-none transition-colors text-white/90 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-white/5 data-[state=open]:bg-white/5',
      props.class,
    )"
  >
    <template v-if="icon && text">
      <div
        :class="cn('op-50 w-4 mr-2 h-4', icon)"
      />
      <span>{{ text }}</span>
    </template>
    <slot v-else />
    <div class="i-mdi-chevron-right ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
