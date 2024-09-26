<script lang="ts" setup>
import { cn } from '@/utils'
import { tv } from 'tailwind-variants'
import { computed, onBeforeUnmount, onMounted, ref, type Ref, watch } from 'vue'

const props = defineProps<KbdProps>()

// Define the emits function for handling custom events
const emit = defineEmits<{
  (e: 'keyPressed'): void
}>()

// Define the enum for key variants
enum KbdVariant {
  ARROW_RIGHT = 'arrow-right',
  ARROW_LEFT = 'arrow-left',
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',
  COMMAND = 'command',
  META = 'meta',
  SHIFT = 'shift',
  OPTION = 'option',
}

// Define the key variant class mapping
const kbdVariants: Record<string, string> = {
  [KbdVariant.ARROW_RIGHT]: 'i-material-symbols:keyboard-arrow-right',
  [KbdVariant.ARROW_LEFT]: 'i-material-symbols:keyboard-arrow-left',
  [KbdVariant.ARROW_UP]: 'i-material-symbols:keyboard-arrow-up',
  [KbdVariant.ARROW_DOWN]: 'i-material-symbols:keyboard-arrow-down',
  [KbdVariant.SHIFT]: 'i-material-symbols:shift-outline-rounded',
  [KbdVariant.OPTION]: 'i-material-symbols:keyboard-option-key',
  [KbdVariant.COMMAND]: 'i-material-symbols:keyboard-command-key',
  [KbdVariant.META]: 'i-material-symbols:keyboard-command-key',
}

// Define the props interface with proper types
export interface KbdProps {
  keys?: (KbdVariant | string)[]
  filled?: boolean
  preventDefault?: boolean
  class?: string
}

// Reactive reference for tracking pressed keys
const pressedKeys: Ref<Set<string>> = ref(new Set())

// Define Tailwind class variants using tailwind-variants
const kbdClasses = tv({
  base: 'select-none w-fit h-5 flex font-sans items-center justify-center px-1.5 py-2 text-xs rounded-md',
  variants: {
    filled: {
      true: 'bg-secondary-950 border border-white/10 text-white',
      false: 'bg-transparent border-none text-white/50',
    },
  },
})

// Event handler for the 'keydown' event
function handleKeyDown(event: KeyboardEvent) {
  if (props.preventDefault) {
    event.preventDefault() // Prevent default behavior if preventDefault is true
  }
  pressedKeys.value.add(event.key.toLowerCase())
}

// Event handler for the 'keyup' event
function handleKeyUp(event: KeyboardEvent) {
  pressedKeys.value.delete(event.key.toLowerCase())
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})

// Compute the classes for the component based on the filled prop
const computedClasses = computed(() => cn(kbdClasses({ filled: props.filled }), props.class))

// Watch for changes in the pressed keys and emit the 'keyPressed' event when a key combination is pressed
watch(
  pressedKeys,
  () => {
    const normalizedCombination = props.keys?.map(key =>
      key.toLowerCase() === 'command' ? 'meta' : key.toLowerCase(),
    )

    // Check if all keys in the combination are pressed
    if (normalizedCombination && normalizedCombination.every(key => pressedKeys.value.has(key))) {
      emit('keyPressed') // Emit the 'keyPressed' event
    }
  },
  { deep: true },
)
</script>

<template>
  <kbd :class="computedClasses">
    <template v-for="(key, index) in keys" :key="index">
      <div
        v-if="kbdVariants[key.toLowerCase()]"
        class="mr-0.5 h-3 w-3" :class="[kbdVariants[key.toLowerCase()]]"
      />
      <span v-else class="mr-0.5 capitalize">{{ key.toLowerCase() }}</span>
    </template>
    <slot />
  </kbd>
</template>
