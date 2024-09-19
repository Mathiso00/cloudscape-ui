<script setup lang="ts">
export interface HelloProps {
  hello: string
}

const { hello } = defineProps<HelloProps>()
</script>

<template>
  <div class="bg-red">
    <h1>Hello {{ hello }}</h1>
  </div>
</template>
