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
      <v-row v-if="beats.length">
        <v-col
          v-for="beat in beats"
          :key="beat.id"
          cols="12"
          sm="6"
          lg="4"
        >
        <v-card
          variant="flat"
          color="surface-variant"
          rounded="xl"
          class="overflow-hidden"
          height="100%"
        >
          <!-- Cover image banner -->
          <div
            class="position-relative"
            style="height: 160px;"
            :style="{ backgroundColor: beat.picture?.color || '#ddd' }"
          >
            <v-img
              v-if="beat.picture?.l || beat.picture?.m"
              :src="beat.picture.l || beat.picture.m"
              :alt="beat.name"
              cover
              height="160"
              class="w-100"
              style="opacity: 0.9;"
            />
            <div
              class="position-absolute w-100 h-100 d-flex align-end"
              style="top: 0; left: 0; background: linear-gradient(transparent 40%, rgba(0,0,0,0.6));"
            >
              <div class="pa-4 text-white">
                <div class="text-h6 font-weight-bold" style="text-shadow: 0 1px 4px rgba(0,0,0,0.4);">
                  {{ beat.name }}
                </div>
                <div class="text-body-2" style="opacity: 0.9;">
                  by {{ beat.creatorName }}
                </div>
              </div>
            </div>
          </div>

          <!-- Info section -->
          <div class="pa-4">
            <div class="d-flex flex-column ga-1 mb-3">
              <v-chip v-if="beat.genre" size="small" variant="tonal" color="error" prepend-icon="mdi-music-note">
                {{ beat.genre }}
              </v-chip>
              <v-chip v-if="beat.key" size="small" variant="tonal" color="secondary" prepend-icon="mdi-music-clef-treble">
                {{ beat.key }}
              </v-chip>
              <v-chip size="small" variant="tonal" color="primary" prepend-icon="mdi-metronome">
                {{ beat.bpm }} BPM
              </v-chip>
              <v-chip size="small" variant="tonal" color="info" prepend-icon="mdi-timer-outline">
                {{ formatDuration(beat.duration) }}
              </v-chip>
            </div>

            <!-- Audio preview -->
            <div v-if="beat.audioPreviewUrl" class="mb-3">
              <audio
                controls
                preload="none"
                :src="beat.audioPreviewUrl"
                style="width: 100%; height: 36px; border-radius: 8px;"
              />
            </div>

            <a
              :href="`https://test.bandlab.com/beats/${beat.id}`"
              target="_blank"
              class="text-primary text-body-2 font-weight-medium"
              style="text-decoration: none;"
            >
              Open beat ↗
            </a>
          </div>
        </v-card>
        </v-col>
      </v-row>
      <div v-else class="text-caption text-medium-emphasis">No beats used</div>
    </v-card-text>
  </v-card>
</template>
