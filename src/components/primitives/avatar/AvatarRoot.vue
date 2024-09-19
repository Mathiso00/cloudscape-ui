<script setup lang="ts">
import type { AvatarVariant } from '@/components/primitives/avatar/avatar.variant.ts'
import { avatarVariant } from '@/components/primitives/avatar/avatar.variant.ts'
import { AvatarRoot } from 'radix-vue'

const { size } = defineProps<Pick<AvatarVariant, 'size'>>()
</script>

<template>
  <AvatarRoot :class="avatarVariant({ size })">
    <slot />
  </AvatarRoot>
</template>
