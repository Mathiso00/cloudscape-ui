<script setup lang="ts">
import { cn } from '@/utils'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'fixed left-[50%] top-[50%] z-100 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-primary-950 border-white/10 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',
          props.class,
        )"
    >
      <slot />

      <!--      <DialogClose -->
      <!--        class="ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity disabled:pointer-events-none hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2" -->
      <!--      > -->
      <!--        <div class="i-mdi:close h-4 w-4" /> -->
      <!--        <span class="sr-only">Close</span> -->
      <!--      </DialogClose> -->
    </DialogContent>
  </DialogPortal>
</template>
