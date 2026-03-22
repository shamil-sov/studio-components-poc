<script setup lang="ts">
import type { StudioBreakdown } from '@/types/breakdown'

defineProps<{ breakdown: StudioBreakdown }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start>mdi-code-json</v-icon>
      Raw JSON
    </v-card-title>
    <v-card-text>
      <v-sheet
        color="grey-lighten-4"
        rounded="lg"
        class="pa-4 overflow-auto"
        style="max-height: 400px; font-family: monospace; font-size: 12px; white-space: pre-wrap;"
      >
        {{ JSON.stringify(breakdown, null, 2) }}
      </v-sheet>
    </v-card-text>
  </v-card>
</template>
