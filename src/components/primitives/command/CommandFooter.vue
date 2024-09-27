<script setup lang="ts">
</script>

<template>
  <div class="h-10 w-full flex items-center justify-between bg-white/5 px-1">
    <div class="flex gap-1">
      <slot name="left" />
    </div>
    <div class="flex gap-1">
      <slot name="right" />
    </div>
  </div>
</template>
