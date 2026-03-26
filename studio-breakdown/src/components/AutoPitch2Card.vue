<!-- Improved version of AutoPitchCard — shows detailed pitch parameters: key, scale, response time, mix, algorithm -->
<script setup lang="ts">
import type { AutoPitch2 } from '@/types/breakdown'

defineProps<{ autoPitches: AutoPitch2[] }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="secondary">mdi-waveform</v-icon>
      Auto Pitch (Revisited)
      <v-chip class="ml-2" color="secondary" size="x-small">{{ autoPitches.length }}</v-chip>
    </v-card-title>
    <v-card-subtitle class="text-caption text-medium-emphasis pb-0">
      Improved version of Auto Pitch — includes key, scale, response time, mix, and algorithm.
    </v-card-subtitle>
    <v-card-text class="pa-0">
      <v-list lines="three" density="comfortable">
        <template v-for="(pitch, index) in autoPitches" :key="pitch.slug">
          <v-divider v-if="index > 0" />
          <v-list-item>
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

            <v-list-item-subtitle>Key: <strong>{{ pitch.key }}</strong></v-list-item-subtitle>
            <v-list-item-subtitle>Scale: <strong>{{ pitch.scale }}</strong></v-list-item-subtitle>
            <v-list-item-subtitle>Algorithm: <strong>{{ pitch.algorithm }}</strong></v-list-item-subtitle>
            <v-list-item-subtitle>Response Time: <strong>{{ pitch.responseTime }}</strong></v-list-item-subtitle>
            <v-list-item-subtitle>Mix: <strong>{{ (pitch.mix * 100).toFixed(0) }}%</strong></v-list-item-subtitle>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>
