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
      <v-row>
        <v-col cols="6" sm="3">
          <v-card variant="tonal" color="primary" class="text-center pa-4">
            <div class="text-h4 font-weight-bold">{{ breakdown.bpm }}</div>
            <div class="text-caption text-uppercase">BPM</div>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card variant="tonal" color="secondary" class="text-center pa-4">
            <div class="text-h4 font-weight-bold">{{ breakdown.key }}</div>
            <div class="text-caption text-uppercase">Key</div>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card variant="tonal" color="info" class="text-center pa-4">
            <div class="text-h4 font-weight-bold">{{ breakdown.timeSignature }}</div>
            <div class="text-caption text-uppercase">Time Sig</div>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card variant="tonal" color="success" class="text-center pa-4">
            <div class="text-h4 font-weight-bold">{{ breakdown.trackCount }}</div>
            <div class="text-caption text-uppercase">Tracks</div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
