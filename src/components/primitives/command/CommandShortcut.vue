<script setup lang="ts">
import type { KbdEvents, KbdProps } from '@/components/typography/kbd/Kbd.vue'
import { Kbd } from '@/components'
import { useForwardPropsEmits } from 'reka-ui'

const props = defineProps<Omit<KbdProps, 'noMargin'> & { name: string }>()
const emits = defineEmits<KbdEvents>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <div class="flex select-none items-center gap-2 rounded-md transition-all hover:op-80">
    <Kbd no-margin v-bind="forwarded" class="min-h-5 min-w-5 flex items-center justify-center px-1 text-xl text-white/40" filled />
    <span class="mr-1 text-xs text-white opacity-50">{{ props.name }}</span>
  </div>
</template>
