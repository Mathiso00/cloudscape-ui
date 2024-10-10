<script setup lang="ts">
import type { AvatarProps } from '@/components/primitives/avatar/avatar-variant'
import { avatarVariant } from '@/components/primitives/avatar/avatar-variant'
import { AvatarRoot } from 'radix-vue'

interface KoopsAvatarRoot {
  size: AvatarProps['size']
  shape: AvatarProps['shape']
}
const { size, shape } = defineProps<KoopsAvatarRoot>()
</script>

<template>
  <AvatarRoot :class="avatarVariant({ size, shape })">
    <slot />
  </AvatarRoot>
</template>
