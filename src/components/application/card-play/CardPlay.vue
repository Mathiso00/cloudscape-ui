<script setup lang="ts">
</script>

<template>
  <div class="relative z-50 max-w-lg transform border border-white/10 bg-primary p-6 shadow-lg sm:rounded-lg">
    <div class="flex items-center justify-between space-x-2xl">
      <div class="h-32 w-2 rounded-sm bg-white" />
      <h5 class="text-2xl text-white font-bold">
        lorem ipsum
      </h5>
      <p class="text-white font-normal">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do dolore magna aliqua.
      </p>
      <button class="i-ph:play-circle-bold h-32 w-30 text-white" @click="handleClick" />
    </div>
  </div>
</template>
