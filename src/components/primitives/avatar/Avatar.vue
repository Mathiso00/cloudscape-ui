<script setup lang="ts">
import AvatarFallback from '@/components/primitives/avatar/AvatarFallback.vue'
import AvatarImage from '@/components/primitives/avatar/AvatarImage.vue'
import AvatarRoot from '@/components/primitives/avatar/AvatarRoot.vue'

export interface AvatarProps {
  alt: string
  src?: string
  size?: 'default' | 'sm' | 'lg' | 'xl'
}

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
