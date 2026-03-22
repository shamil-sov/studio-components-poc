<script setup lang="ts">
import type { AutoPitch } from '@/types/breakdown'

defineProps<{ autoPitches: AutoPitch[] }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="secondary">mdi-waveform</v-icon>
      Auto Pitch
      <v-chip class="ml-2" color="secondary" size="x-small">{{ autoPitches.length }}</v-chip>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list v-if="autoPitches.length" density="comfortable">
        <v-list-item
          v-for="pitch in autoPitches"
          :key="pitch.slug"
        >
          <template #prepend>
            <v-icon color="secondary" class="mr-3">mdi-waveform</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">
            {{ pitch.name }}
            <v-chip
              v-if="pitch.isMembershipOnly"
              size="x-small"
              color="warning"
              variant="tonal"
              prepend-icon="mdi-star"
              class="ml-2"
            >
              Premium
            </v-chip>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div v-else class="pa-4 text-caption text-medium-emphasis">None</div>
    </v-card-text>
  </v-card>
</template>
