<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from '@/components/primitives/button/button-variant'
import { Button } from '@/components'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ButtonProps>()
const emit = defineEmits<ButtonEmits>()

function removeKeyFromObject<T extends Record<string, any>>(key: string, obj: T): Omit<T, typeof key> {
  const { [key]: _, ...rest } = obj
  return rest
}
const forwarded = useForwardPropsEmits(removeKeyFromObject('variant', props), emit)
</script>

<template>
  <div class="btn-shine p-.4">
    <Button class="relative z-10" variant="secondary-outline" v-bind="forwarded">
      <slot />
    </Button>
  </div>
</template>

<style scoped>
.btn-shine {
  @apply relative overflow-hidden rounded-lg;
}

.btn-shine::before {
  background: conic-gradient(
      rgba(1, 239, 42, 0.46) 0deg,
      transparent 180deg
  );

  @apply absolute left-[-150%] top-[-150%] h-[400%] w-[400%] animate-duration-1500 animate-border-spin content-[''];

  z-index: 0;
}

.btn-shine > * {
  position: relative;
  z-index: 10;
}
</style>
