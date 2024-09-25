<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Kbd } from '@/components'
import { cn } from '@/utils'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

export interface KoopsDropdownMenuItemProps extends DropdownMenuItemProps {
  text?: string
  icon?: string
  shortcut?: string[]
  preventDefault?: boolean
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<KoopsDropdownMenuItemProps>()

const emit = defineEmits<{
  (e: 'keyPressed'): void
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
      'relative w-full flex cursor-pointer select-none items-center rounded-md px-1.5 py-1.25 text-sm outline-none transition-colors focus:bg-white/5 text-white/90 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      props.class,
    )"
  >
    <template v-if="text">
      <div
        :class="cn('op-50 w-4 mr-2 h-4', icon)"
      />
      <span>{{ text }}</span>
    </template>
    <slot v-else />

    <template v-if="shortcut">
      <Kbd
        class="ml-auto"
        :prevent-default="preventDefault"
        :keys="shortcut"
        @key-pressed="() => emit('keyPressed')"
      />
    </template>
  </DropdownMenuItem>
</template>
