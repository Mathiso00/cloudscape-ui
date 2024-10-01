<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'radix-vue'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components'
import { useForwardPropsEmits, VisuallyHidden } from 'radix-vue'
import Command from './Command.vue'

const props = defineProps<DialogRootProps & { isPressed?: boolean }>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Dialog
    :open="forwarded.open"
    :default-open="forwarded.defaultOpen"
    :modal="forwarded.modal"
    @update:open="(e) => $emit('update:open', e)"
  >
    <DialogContent
      class="overflow-hidden p-0 shadow-lg transition-transform !bg-primary-950"
      :class="{
        'scale-98': props.isPressed,
      }"
    >
      <VisuallyHidden>
        <DialogTitle>Command</DialogTitle>
        <DialogDescription>Press up and down keys to navigate, press enter to execute</DialogDescription>
      </VisuallyHidden>
      <Command class="[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]]:px-2 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group-heading]]:text-white [&_[cmdk-group-heading]]:font-medium">
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>
