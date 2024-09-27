<script setup lang="ts">
const props = defineProps<{
  description: string
  title: string
}>()

function handleClick() {
  // logique du bouton
}
</script>

<template>
  <div class="relative max-w-lg border border-white/10 bg-primary p-4 shadow-lg sm:rounded-lg">
    <div class="flex items-center justify-between space-x-4">
      <div class="h-30 w-1 flex-grow bg-white -mb-4 -mt-4" />
      <h5 class="text-2xl text-white font-bold">
        {{ title }}
      </h5>
      <div class="flex-column">
        <p class="break-all text-white font-normal">
          {{ description }}
        </p>
      </div>
      <button class="i-ph:play-circle-bold ml-4 h-15 w-15 flex-shrink-0 text-white" @click="handleClick" />
    </div>
  </div>
</template>
