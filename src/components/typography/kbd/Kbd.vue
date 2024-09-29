<script lang="ts" setup>
import { cn } from '@/utils'
import { tv } from 'tailwind-variants'
import { computed, onBeforeUnmount, onMounted, ref, type Ref, watch } from 'vue'

const props = defineProps<KbdProps>()

// Define the emits function for handling custom events
const emit = defineEmits<KbdEvents>()

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
  ENTER = 'enter',
  ESCAPE = 'escape',
  BACKSPACE = 'backspace',
}

// Define the key variant class mapping
const kbdVariants: Record<string, string> = {
  [KbdVariant.ARROW_RIGHT]: 'i-mdi:arrow-right-bold-outline',
  [KbdVariant.ARROW_LEFT]: 'i-mdi:arrow-left-bold-outline',
  [KbdVariant.ARROW_UP]: 'i-mdi:arrow-up-bold-outline',
  [KbdVariant.ARROW_DOWN]: 'i-mdi:arrow-down-bold-outline',
  [KbdVariant.ENTER]: 'i-material-symbols:keyboard-return',
  [KbdVariant.SHIFT]: 'i-material-symbols:shift-outline-rounded',
  [KbdVariant.OPTION]: 'i-material-symbols:keyboard-option-key',
  [KbdVariant.COMMAND]: 'i-material-symbols:keyboard-command-key',
  [KbdVariant.META]: 'i-material-symbols:keyboard-command-key',
  [KbdVariant.ESCAPE]: 'i-mdi:keyboard-esc',
  [KbdVariant.BACKSPACE]: 'i-material-symbols:backspace-outline',
}

// Define the props interface with proper types
export interface KbdProps {
  keys?: (KbdVariant | string)[]
  filled?: boolean
  preventDefault?: boolean
  class?: string
  noMargin?: boolean
}

export interface KbdEvents {
  (e: 'keyPressed'): void
}

function isIOS(): boolean {
  const userAgent = navigator.userAgent

  return /iPhone|iPad|iPod|Mac/i.test(userAgent)
}

// Reactive reference for tracking pressed keys
const pressedKeys: Ref<Set<string>> = ref(new Set())

// Define Tailwind class variants using tailwind-variants
const kbdClasses = tv({
  base: 'select-none w-fit h-5 flex gap-.5 font-sans items-center justify-center px-1.5 py-2 text-xs rounded-md',
  variants: {
    filled: {
      true: 'bg-secondary-950 border border-white/10 text-white',
      false: 'bg-transparent border-none text-white/50',
    },
  },
})

// Helper function to normalize key names for comparison
function normalizeKey(key: string) {
  if (key.toLowerCase() === 'command')
    return 'meta'
  if (key.toLowerCase() === 'ctrl')
    return isIOS() ? 'meta' : 'control' // Replace 'ctrl' with 'meta' on iOS
  return key.toLowerCase()
}

// Event handler for the 'keydown' event
function handleKeyDown(event: KeyboardEvent) {
  const normalizedKey = normalizeKey(event.key)

  // Check if the key is in the `keys` prop before preventing default
  if (props.preventDefault && props.keys?.map(normalizeKey).includes(normalizedKey)) {
    event.preventDefault() // Prevent default behavior only for specific keys
  }

  pressedKeys.value.add(normalizedKey)
}

// Event handler for the 'keyup' event
function handleKeyUp(event: KeyboardEvent) {
  pressedKeys.value.delete(normalizeKey(event.key))
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
    const normalizedCombination = props.keys?.map(normalizeKey)

    // Check if all keys in the combination are pressed
    if (normalizedCombination && normalizedCombination.every(key => pressedKeys.value.has(key))) {
      emit('keyPressed')
      pressedKeys.value.clear()
    }
  },
  { deep: true },
)
</script>

<template>
  <kbd :class="computedClasses">
    <template v-for="(key, index) in keys?.map(k => normalizeKey(k))" :key="index">
      <div
        v-if="kbdVariants[key.toLowerCase()]"
        :class="[{ 'mr-0.5': noMargin === false }, kbdVariants[key.toLowerCase()]]"
        class="h-3 w-3"
      />
      <span
        v-else
        :class="{ 'mr-0.5': noMargin === false }"
        class="capitalize"
      >{{ key.toLowerCase() }}</span>
    </template>
    <slot />
  </kbd>
</template>
