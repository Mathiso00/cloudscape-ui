<script setup lang="ts">
import type { KoopsBadgeProps } from '@/components/primitives/badge/badge-variant'
import { badgeVariant } from '@/components/primitives/badge/badge-variant'

const props = withDefaults(
  defineProps<KoopsBadgeProps>(),
  {
    variant: 'primary',
    size: 'md',
    outlined: false,
  },
)
</script>

<template>
  <div :class="badgeVariant(props)">
    <slot />
  </div>
</template>
