<script setup lang="ts">
import { cn } from '@/utils'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

export interface KoopsDropdownMenuItemProps {
  text?: string
  icon?: string
}

const props = defineProps<KoopsDropdownMenuItemProps & DropdownMenuItemProps & {
  class?: HTMLAttributes['class']
  inset?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-pointer select-none items-center rounded-md px-1.5 py-1.25 text-sm outline-none transition-colors focus:bg-white/5 text-white/90 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
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
  </DropdownMenuItem>
</template>
