<script setup lang="ts">
import type { ButtonProps } from '@/components/primitives/button/button-variant'

export interface ButtonGroupProps {
  /** The size of the progress bar. */
  size?: ButtonProps['size']
}

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  size: 'default',
})
</script>

<template>
  <div class="w-fit flex flex-row ![&>*]:rounded-none ![&>*:first-child]:rounded-l-md ![&>*:last-child]:rounded-r-md ![&>*:not(:last-child)]:border-r-none">
    <slot :size="props.size" />
  </div>
</template>
