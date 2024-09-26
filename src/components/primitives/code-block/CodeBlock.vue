<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { ref, watch } from 'vue'

const { code, lang = 'typescript' } = defineProps<{
  code: string
  lang?: string
}>()

const highlightedCode = ref<string>('')
const isMouseOver = ref<boolean>(false)
const isCopied = ref<boolean>(false)
let copyTimeout: ReturnType<typeof setTimeout> | null = null

function copyCode() {
  isCopied.value = true
  navigator.clipboard.writeText(code)

  if (copyTimeout !== null) {
    clearTimeout(copyTimeout)
  }

  copyTimeout = setTimeout(() => {
    isCopied.value = false
  }, 1000)
}

watch([() => code, () => lang], async ([code, lang]) => {
  codeToHtml(code, {
    theme: 'vitesse-dark',
    lang: lang || 'typescript',
  }).then(html => highlightedCode.value = html)
}, { immediate: true })
</script>

<template>
  <div class="relative" @mouseover="isMouseOver = true" @mouseleave="isMouseOver = false">
    <Transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-if="isMouseOver"
        title="Copy Code"
        class="absolute right-4 top-4 h-10 w-10 flex cursor-pointer items-center justify-center overflow-hidden border border-white/10 rounded-md bg-primary-950 text-lg text-white transition-all hover:bg-primary-950/50"
        :class="{
          'w-10': !isCopied,
          'w-24 px-2': isCopied,
        }"
        @click="copyCode"
      >
        <template v-if="!isCopied">
          <div class="i-mdi:clipboard-outline min-w-5" />
        </template>
        <template v-else>
          <p class="mr-2 text-xs">
            Copied!
          </p>
          <div class="i-mdi:clipboard-check-outline min-w-5" />
        </template>
      </div>
    </Transition>
    <div v-html="highlightedCode" />
  </div>
</template>

<style>
.shiki {
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
  min-height: 4em;
  white-space: pre;
  --uno: rounded-md p5 py-6;
}
</style>
