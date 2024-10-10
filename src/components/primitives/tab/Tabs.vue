<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

interface KoopsTab {
  value: string
  label: string
  icon?: string
  count?: number
  content?: string
  disabled?: boolean
}

const { tabs, defaultTab } = defineProps<{
  tabs: KoopsTab[]
  defaultTab?: string
}>()

// const controlledTab = defineModel<string>({
//   default: defaultTab || undefined,
// })
</script>

<template>
  <TabsRoot
    class="w-full flex flex-col"
    :default-value="defaultTab || tabs[0].value"
  >
    <TabsList
      class="relative flex shrink-0 py-2"
      aria-label="Manage your account"
    >
      <TabsIndicator class="transition-[translate,width] absolute inset-y-1 left-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-md bg-white/10 shadow-sm duration-200" />
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :disabled="tab.disabled"
        class="relative flex inline-flex flex-row items-center gap-2 rounded-md bg-transparent px-4 py-1 font-medium transition-colors disabled:cursor-not-allowed data-[state=active]:text-white data-[state=inactive]:text-white/50 disabled:opacity-75 focus:outline-none hover:data-[state=inactive]:text-white"
        :value="tab.value"
      >
        <div v-if="tab.icon" :class="tab.icon" />
        {{ tab.label }}
        <div v-if="tab.count" class="h-4 w-4 flex items-center justify-center rounded bg-white/20 text-xs text-white">
          {{ tab.count }}
        </div>
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="(tab, i) in tabs"
      :key="i"
      class="text-white"
      :value="tab.value"
    >
      <template v-if="tab.content && !$slots[tab.value]">
        <div v-html="tab.content" />
      </template>
      <template v-else>
        <slot :tab="tab" :name="tab.value" />
      </template>
    </TabsContent>
  </TabsRoot>
</template>
