<script setup lang="ts">
import type { KoopsBadgeProps } from '@/components/primitives/badge/badge-variant'
import { badgeVariant } from '@/components/primitives/badge/badge-variant'

const props = withDefaults(
  defineProps<KoopsBadgeProps>(),
  {
    variant: 'primary',
    size: 'md',
    outlined: false,
    content: undefined,
  },
)
</script>

<template>
  <div :class="badgeVariant(props)">
    <slot v-if="!props.content" />
    <template v-else>
      {{ props.content }}
    </template>
  </div>
</template>
