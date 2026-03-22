<script setup lang="ts">
import type { Instrument } from '@/types/breakdown'

defineProps<{ instruments: Instrument[] }>()

const typeIcons: Record<string, string> = {
  piano: 'mdi-piano',
  voice: 'mdi-microphone',
  looper: 'mdi-repeat',
  sampler: 'mdi-grid',
  'guitar-electric': 'mdi-guitar-electric',
  'guitar-acoustic': 'mdi-guitar-acoustic',
  drums: 'mdi-drum',
}
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="secondary">mdi-piano</v-icon>
      Instruments
      <v-chip class="ml-2" color="secondary" size="x-small">{{ instruments.length }}</v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="inst in instruments"
          :key="inst.type"
          cols="6"
          sm="4"
          md="3"
        >
          <v-card variant="outlined" class="text-center pa-3" height="100%">
            <v-avatar size="48" class="mb-2" color="surface-variant">
              <v-img v-if="inst.imageUrl" :src="inst.imageUrl" :alt="inst.name" />
              <v-icon v-else>{{ typeIcons[inst.type] || 'mdi-music' }}</v-icon>
            </v-avatar>
            <div class="text-body-2 font-weight-medium">{{ inst.name }}</div>
            <v-chip size="x-small" variant="tonal" color="info" class="mt-1">
              {{ inst.type }}
            </v-chip>
            <div v-if="inst.soundbankSlug" class="text-caption text-medium-emphasis mt-1">
              {{ inst.soundbankSlug }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
