<script setup lang="ts">
import type { ButtonProps } from '@/components/primitives/button/button-variant'

const { size } = defineProps<Pick<ButtonProps, 'size'>>()
</script>

<template>
  <div class="w-fit flex flex-row ![&>*]:rounded-none ![&>*:first-child]:rounded-l-md ![&>*:last-child]:rounded-r-md ![&>*:not(:last-child)]:border-r-none">
    <slot :size="size" />
  </div>
</template>
