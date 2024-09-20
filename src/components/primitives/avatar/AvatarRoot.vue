<script setup lang="ts">
import type { AvatarProps } from '@/components/primitives/avatar/avatar-variant'
import { avatarVariant } from '@/components/primitives/avatar/avatar-variant'
import { AvatarRoot } from 'radix-vue'

const { size } = defineProps<Pick<AvatarProps, 'size'>>()
</script>

<template>
  <AvatarRoot :class="avatarVariant({ size })">
    <slot />
  </AvatarRoot>
</template>
