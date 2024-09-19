<script setup lang="ts">
import type { AvatarProps } from '@/components/primitives/avatar/avatar.variant.ts'
import AvatarFallback from '@/components/primitives/avatar/AvatarFallback.vue'
import AvatarImage from '@/components/primitives/avatar/AvatarImage.vue'
import AvatarRoot from '@/components/primitives/avatar/AvatarRoot.vue'

const { alt, src, size } = defineProps<AvatarProps>()
</script>

<template>
  <AvatarRoot :size="size">
    <AvatarImage v-if="src" :src="src" />
    <AvatarFallback>
      {{ alt }}
    </AvatarFallback>
  </AvatarRoot>
</template>
