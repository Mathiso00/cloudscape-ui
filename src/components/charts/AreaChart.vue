<script setup lang="ts">
import { VisArea, VisAxis, VisCrosshair, VisLine, VisTooltip, VisXYContainer } from '@unovis/vue'

const template = (d: DataRecord) => `${d.percentage}%`

interface DataRecord {
  date: Date
  percentage: number
}

const data: DataRecord[] = []
let basePercentage = 0 // Starting percentage for CPU usage

for (let i = 0; i < 12; i++) {
  // Create a new date for each month in 2021
  const date = new Date(2021, i, 1)

  // Add some randomness to the percentage, simulating fluctuating CPU usage
  const randomFluctuation = Math.random() * 30 - 10 // Random value between -10 and 10
  basePercentage = Math.min(100, Math.max(0, basePercentage + randomFluctuation)) // Keep percentage within bounds

  data.push({
    date,
    percentage: Math.round(basePercentage), // Round to the nearest whole number
  })
}

// format date to day number
const x = (_: DataRecord) => _.date.getMonth()
const y = (d: DataRecord) => d.percentage
</script>

<template>
  <VisXYContainer
    :data="data"
    class="h-40 w-full rounded"
  >
    <VisLine :x="x" :y="y" />
    <VisArea :x="x" :y="y" :opacity="0.1">
      cc
    </VisArea>

    <VisAxis type="x" :x="x" />
    <VisAxis type="y" :y="y" :tick-format="(_y: number) => `${_y}%`" />

    <VisCrosshair
      color="white"
      :template="template"
    >
      ddd
    </VisCrosshair>

    <!--    <VisAnnotations :items="[{ x: 0, y: 350, content: { text: pkg, color: 'var(&#45;&#45;vis-annotation-text-color)' } }]" /> -->

    <VisTooltip />
  </VisXYContainer>
</template>

<style>
.unovis-xy-container {
  --vis-crosshair-circle-stroke-color: #fff;

  --vis-axis-grid-color: transparent;
  --vis-axis-tick-color: transparent;

  --vis-tooltip-text-color: theme('colors.white');
  --vis-tooltip-border-color: rgba(255, 255, 255, 0.1);
  --vis-tooltip-background-color: theme('colors.secondary.950');
  --vis-tooltip-padding: 4px 10px;
  --vis-tooltip-font-size: 5px !important;
}
</style>
