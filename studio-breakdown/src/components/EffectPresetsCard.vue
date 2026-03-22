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
    <v-card-text>
      <v-row>
        <v-col
          v-for="preset in presets"
          :key="preset.slug"
          cols="6"
          sm="4"
        >
          <v-card variant="outlined" class="pa-3" height="100%">
            <div class="d-flex align-center ga-3">
              <v-avatar size="56" rounded="lg" color="surface-variant">
                <v-img :src="preset.imageUrl" :alt="preset.name" cover />
              </v-avatar>
              <div>
                <div class="text-body-2 font-weight-medium">{{ preset.name }}</div>
                <div class="text-caption text-medium-emphasis">{{ preset.slug }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
