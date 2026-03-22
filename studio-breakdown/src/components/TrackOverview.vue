<script setup lang="ts">
import type { StudioBreakdown } from '@/types/breakdown'

defineProps<{ breakdown: StudioBreakdown }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="primary">mdi-music-note</v-icon>
      Track Overview
    </v-card-title>
    <v-card-text>
      <div class="d-flex flex-wrap ga-4">
        <v-chip color="primary" variant="tonal" size="large" prepend-icon="mdi-metronome">
          {{ breakdown.bpm }} BPM
        </v-chip>
        <v-chip color="secondary" variant="tonal" size="large" prepend-icon="mdi-music-clef-treble">
          Key: {{ breakdown.key }}
        </v-chip>
        <v-chip color="info" variant="tonal" size="large" prepend-icon="mdi-timer-outline">
          {{ breakdown.timeSignature }}
        </v-chip>
        <v-chip color="success" variant="tonal" size="large" prepend-icon="mdi-music-note-plus">
          {{ breakdown.trackCount }} Tracks
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>
