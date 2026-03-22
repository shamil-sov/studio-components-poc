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
    <v-card-text class="pa-0">
      <v-list lines="two" density="comfortable">
        <v-list-item
          v-for="inst in instruments"
          :key="inst.type"
        >
          <template #prepend>
            <v-avatar size="40" color="surface-variant" class="mr-3">
              <v-img v-if="inst.imageUrl" :src="inst.imageUrl" :alt="inst.name" />
              <v-icon v-else>{{ typeIcons[inst.type] || 'mdi-music' }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">{{ inst.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ inst.type }}
            <span v-if="inst.soundbankSlug"> · {{ inst.soundbankSlug }}</span>
          </v-list-item-subtitle>
          <template #append>
            <v-chip size="x-small" variant="tonal" color="info">{{ inst.type }}</v-chip>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
