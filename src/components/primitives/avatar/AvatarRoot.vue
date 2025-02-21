<script lang="ts">
import type { KoopsAvatarRootProps } from '@/components/primitives/avatar/avatar-variant.ts'
import { avatarVariant } from '@/components/primitives/avatar/avatar-variant.ts'
</script>

<script setup lang="ts">
import { AvatarRoot } from 'reka-ui'

withDefaults(defineProps<KoopsAvatarRootProps>(), {
  shape: 'circle',
  size: 'md',
})
</script>

<template>
  <AvatarRoot :class="avatarVariant({ size, shape })">
    <slot />
  </AvatarRoot>
</template>
