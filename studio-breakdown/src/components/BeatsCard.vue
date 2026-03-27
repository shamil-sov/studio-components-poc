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
      <div v-if="beats.length" class="d-flex flex-column ga-4">
        <v-card
          v-for="beat in beats"
          :key="beat.id"
          variant="outlined"
          rounded="lg"
          class="overflow-hidden"
        >
          <div class="d-flex">
            <!-- Album art -->
            <v-avatar
              size="120"
              rounded="0"
              :style="{ backgroundColor: beat.picture?.color || '#eee', minWidth: '120px' }"
            >
              <v-img v-if="beat.picture?.m" :src="beat.picture.m" :alt="beat.name" cover />
              <v-icon v-else size="48" color="grey">mdi-music-box</v-icon>
            </v-avatar>

            <!-- Details -->
            <div class="pa-3 d-flex flex-column" style="min-width: 0;">
              <div class="text-subtitle-1 font-weight-bold text-truncate">{{ beat.name }}</div>
              <div class="text-body-2 text-medium-emphasis">
                by <strong>{{ beat.creatorName }}</strong>
              </div>

              <div class="d-flex flex-wrap ga-2 mt-2">
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

              <div class="mt-2">
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
          </div>

          <!-- Audio preview -->
          <div v-if="beat.audioPreviewUrl" class="px-3 pb-3">
            <audio controls preload="none" :src="beat.audioPreviewUrl" style="width: 100%; height: 32px;" />
          </div>
        </v-card>
      </div>
      <div v-else class="text-caption text-medium-emphasis">No beats used</div>
    </v-card-text>
  </v-card>
</template>
