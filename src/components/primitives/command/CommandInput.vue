<script setup lang="ts">
import { cn } from '@/utils'
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper>
    <div class="i-mdi-search mr-2 text-xl text-white/30" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('text-white flex h-11 w-full rounded-md bg-transparent py-5 outline-none placeholder:text-white/40 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>
