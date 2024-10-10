<script setup lang="ts">
import type { KoopsBreadcrumbProps } from '@/components/primitives/breadcrumb/breadcrumb.types.ts'
import BreadcrumbEllipsis from '@/components/primitives/breadcrumb/BreadcrumbEllipsis.vue'
import BreadcrumbItem from '@/components/primitives/breadcrumb/BreadcrumbItem.vue'
import BreadcrumbLink from '@/components/primitives/breadcrumb/BreadcrumbLink.vue'
import BreadcrumbList from '@/components/primitives/breadcrumb/BreadcrumbList.vue'
import BreadcrumbPage from '@/components/primitives/breadcrumb/BreadcrumbPage.vue'
import BreadcrumbRoot from '@/components/primitives/breadcrumb/BreadcrumbRoot.vue'
import BreadcrumbSeparator from '@/components/primitives/breadcrumb/BreadcrumbSeparator.vue'

const { skip, items } = defineProps<KoopsBreadcrumbProps>()
</script>

<template>
  <BreadcrumbRoot>
    <BreadcrumbList>
      <template
        v-for="(item, k) in items"
        :key="k"
      >
        <BreadcrumbItem v-if="skip && k > skip[0] && k <= skip[1]">
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbItem v-else>
          <BreadcrumbLink v-if="item.to">
            <RouterLink :to="item.to">
              <slot :name="item.text" :item="item">
                {{ item.text }}
              </slot>
            </RouterLink>
          </BreadcrumbLink>
          <BreadcrumbPage v-else>
            <slot :name="item.text" :item="item">
              {{ item.text }}
            </slot>
          </BreadcrumbPage>
        </BreadcrumbItem>
        <!-- if not last item, add separator -->
        <BreadcrumbSeparator v-if="k < items.length - 1" />
      </template>
    </BreadcrumbList>
  </BreadcrumbRoot>
</template>
