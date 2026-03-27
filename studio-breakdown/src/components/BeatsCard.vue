<script setup lang="ts">
import type { Beat } from '@/types/breakdown'

defineProps<{ beats: Beat[] }>()

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="error">mdi-music-box</v-icon>
      Beats
      <v-chip class="ml-2" color="error" size="x-small">{{ beats.length }}</v-chip>
    </v-card-title>
    <v-card-text>
      <div v-if="beats.length" class="d-flex flex-column ga-3">
        <template v-for="beat in beats" :key="beat.id">
          <v-card variant="outlined" rounded="lg" class="overflow-hidden">
            <div class="d-flex">
              <!-- Cover image -->
              <div
                class="flex-shrink-0"
                style="width: 96px; min-height: 96px;"
                :style="{ backgroundColor: beat.picture?.color || '#e0e0e0' }"
              >
                <v-img
                  v-if="beat.picture?.m || beat.picture?.s"
                  :src="beat.picture.m || beat.picture.s"
                  :alt="beat.name"
                  cover
                  width="96"
                  style="min-height: 100%; object-fit: cover;"
                />
                <div v-else class="d-flex align-center justify-center h-100">
                  <v-icon size="32" color="grey">mdi-music-box</v-icon>
                </div>
              </div>

              <!-- Info -->
              <div class="flex-grow-1 pa-3 d-flex flex-column" style="min-width: 0;">
                <div class="d-flex align-center ga-2 mb-1">
                  <span class="text-body-2 font-weight-bold text-truncate">{{ beat.name }}</span>
                  <span class="text-caption text-medium-emphasis flex-shrink-0">by {{ beat.creatorName }}</span>
                </div>

                <div class="d-flex flex-wrap ga-1 mb-2">
                  <v-chip v-if="beat.genre" size="x-small" variant="tonal" color="error">{{ beat.genre }}</v-chip>
                  <v-chip v-if="beat.key" size="x-small" variant="tonal" color="secondary">{{ beat.key }}</v-chip>
                  <v-chip size="x-small" variant="tonal" color="primary">{{ beat.bpm }} BPM</v-chip>
                  <v-chip size="x-small" variant="tonal" color="info">{{ formatDuration(beat.duration) }}</v-chip>
                </div>

                <!-- Audio preview -->
                <div v-if="beat.audioPreviewUrl" class="mb-1">
                  <audio controls preload="none" :src="beat.audioPreviewUrl" style="width: 100%; height: 28px; border-radius: 6px;" />
                </div>

                <a
                  :href="`https://test.bandlab.com/beats/${beat.id}`"
                  target="_blank"
                  class="text-primary text-caption font-weight-medium"
                  style="text-decoration: none;"
                >
                  Open beat ↗
                </a>
              </div>
            </div>
          </v-card>
        </template>
      </div>
      <div v-else class="text-caption text-medium-emphasis">No beats used</div>
    </v-card-text>
  </v-card>
</template>
