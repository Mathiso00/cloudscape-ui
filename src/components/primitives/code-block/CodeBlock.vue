<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { ref, watch } from 'vue'

const props = defineProps<{
  code: string
}>()

const highlightedCode = ref<string>('')

watch(() => props.code, async (code) => {
  codeToHtml(code, {
    theme: 'github-light',
    lang: 'typescript',
  }).then(html => highlightedCode.value = html)
}, { immediate: true })
</script>

<template>
  <div class="relative">
    <div id="input" spellcheck="false" v-html="highlightedCode" />
  </div>
</template>

<style>
.shiki {
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
  min-height: 4em;
  white-space: pre;
  --uno: rounded p5;
}
</style>
