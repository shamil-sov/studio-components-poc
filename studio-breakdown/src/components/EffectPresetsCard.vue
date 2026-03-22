<script setup lang="ts">
import type { EffectPreset } from '@/types/breakdown'

defineProps<{ presets: EffectPreset[] }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="info">mdi-palette-swatch-variant</v-icon>
      Effect Presets
      <v-chip class="ml-2" color="info" size="x-small">{{ presets.length }}</v-chip>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list lines="two" density="comfortable">
        <v-list-item
          v-for="preset in presets"
          :key="preset.slug"
        >
          <template #prepend>
            <v-avatar size="40" rounded="lg" color="surface-variant" class="mr-3">
              <v-img :src="preset.imageUrl" :alt="preset.name" cover />
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">{{ preset.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ preset.slug }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
