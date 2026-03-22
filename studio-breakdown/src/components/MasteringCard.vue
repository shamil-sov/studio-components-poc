<script setup lang="ts">
import type { Mastering } from '@/types/breakdown'

defineProps<{ mastering: Mastering | null }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="success">mdi-equalizer</v-icon>
      Mastering
    </v-card-title>
    <v-card-text>
      <template v-if="mastering">
        <div class="d-flex align-center ga-4 mb-4">
          <v-avatar size="64" rounded="lg" color="surface-variant">
            <v-img :src="mastering.imageUrl" :alt="mastering.name" />
          </v-avatar>
          <div>
            <div class="text-h6">{{ mastering.name }}</div>
            <div class="text-caption text-medium-emphasis">{{ mastering.slug }}</div>
          </div>
        </div>
        <div class="text-body-2 mb-1">
          Intensity: <strong>{{ mastering.intensity }}%</strong>
        </div>
        <v-progress-linear
          :model-value="mastering.intensity"
          color="success"
          height="10"
          rounded
        />
      </template>
      <v-alert v-else type="info" variant="tonal" density="compact">
        No mastering applied
      </v-alert>
    </v-card-text>
  </v-card>
</template>
