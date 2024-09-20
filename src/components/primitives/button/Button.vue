<script setup lang="ts">
import type { ButtonProps } from '@/components/primitives/button/button-variant.ts'
import { buttonVariant } from '@/components/primitives/button/button-variant.ts'
import { cn } from '@/utils'

const {
  leftIcon,
  icon,
  size,
  variant,
  isLoading,
  disabled,
  block,
  class: buttonClass,
} = defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'click', data: MouseEvent): void
}>()

const LOADING_ICON: string = 'i-svg-spinners:ring-resize'
</script>

<template>
  <button
    :disabled="disabled || isLoading"
    :class="cn(buttonVariant({ variant, size, block }), buttonClass)"
    @click="(e) => isLoading ? e.preventDefault() : emit('click', e)"
  >
    <!-- If the button is loading, show the loading icon -->
    <template v-if="isLoading">
      <div v-if="isLoading" :class="cn(LOADING_ICON)" />
      <slot />
    </template>

    <!-- If the button has an icon, show the icon -->
    <template v-else-if="icon">
      <div :class="cn(icon)" />
    </template>

    <!-- If the button has a left icon, show the left icon and else show the slot -->
    <template v-else>
      <div v-if="leftIcon" :class="cn(leftIcon)" />
      <slot />
    </template>
  </button>
</template>
