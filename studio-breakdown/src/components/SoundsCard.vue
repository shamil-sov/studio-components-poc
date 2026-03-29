<script setup lang="ts">
import type { Sound, SoundsUsed } from '@/types/breakdown'

defineProps<{
  sounds: Sound[]
  soundsUsed?: SoundsUsed
}>()

function formatDuration(seconds: number): string {
  if (seconds < 1) {
    return `${Math.round(seconds * 1000)}ms`
  }
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  if (m === 0) {
    return `${s.toFixed(2)}s`
  }
  return `${m}:${s.toFixed(2).padStart(5, '0')}`
}

function typeColor(type: string): string {
  return type === 'loop' ? 'indigo' : 'teal'
}

function typeIcon(type: string): string {
  return type === 'loop' ? 'mdi-sync' : 'mdi-gesture-tap'
}
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="deep-purple">mdi-waveform</v-icon>
      Sounds
      <v-chip class="ml-2" color="deep-purple" size="x-small">{{ sounds.length }}</v-chip>
    </v-card-title>

    <!-- Summary chips -->
    <v-card-text v-if="soundsUsed" class="pt-0 pb-2">
      <div class="d-flex flex-wrap ga-2">
        <v-chip size="small" variant="tonal" color="deep-purple" prepend-icon="mdi-sigma">
          {{ soundsUsed.total }} total
        </v-chip>
        <v-chip size="small" variant="tonal" color="indigo" prepend-icon="mdi-sync">
          {{ soundsUsed.loops }} loops
        </v-chip>
        <v-chip size="small" variant="tonal" color="teal" prepend-icon="mdi-gesture-tap">
          {{ soundsUsed.oneShots }} one-shots
        </v-chip>
      </div>
    </v-card-text>

    <v-card-text>
      <div v-if="sounds.length" class="d-flex flex-wrap ga-3">
        <template v-for="sound in sounds" :key="sound.id">
          <v-card variant="outlined" rounded="lg" class="overflow-hidden" style="width: 220px; flex-shrink: 0;">
            <!-- Sound image -->
            <v-img
              :src="sound.imageUrl"
              :alt="sound.name"
              cover
              height="140"
            />

            <div class="pa-3 d-flex flex-column">
              <!-- Pack name -->
              <div class="mb-1">
                <span class="text-body-2 font-weight-bold" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">{{ sound.pack.name }}</span>
              </div>

              <!-- Pack description -->
              <div v-if="sound.pack.description" class="mb-2 pa-2 rounded" style="background: rgba(var(--v-theme-on-surface), 0.04);">
                <div class="text-caption font-weight-medium mb-1">Description</div>
                <div class="text-caption text-medium-emphasis" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{{ sound.pack.description }}</div>
              </div>

              <!-- Sound name -->
              <div class="d-flex align-center ga-1 mb-1">
                <v-icon size="14" color="deep-purple">mdi-music-note</v-icon>
                <span class="text-caption text-medium-emphasis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">{{ sound.name }}</span>
              </div>

              <!-- Duration -->
              <div class="mb-2">
                <v-chip size="x-small" variant="tonal" color="deep-purple" prepend-icon="mdi-clock-outline">
                  {{ formatDuration(sound.duration) }}
                </v-chip>
              </div>

              <!-- Genres -->
              <div v-if="sound.genres.length" class="d-flex align-center flex-wrap ga-1 mb-1">
                <span class="text-caption font-weight-medium mr-1">Genres</span>
                <v-chip
                  v-for="genre in sound.genres"
                  :key="genre"
                  size="x-small"
                  variant="tonal"
                  color="error"
                >
                  {{ genre }}
                </v-chip>
              </div>

              <!-- Instruments -->
              <div v-if="sound.instruments.length" class="d-flex align-center flex-wrap ga-1 mb-1">
                <span class="text-caption font-weight-medium mr-1">Instruments</span>
                <v-chip
                  v-for="inst in sound.instruments"
                  :key="inst"
                  size="x-small"
                  variant="tonal"
                  color="secondary"
                  prepend-icon="mdi-piano"
                >
                  {{ inst }}
                </v-chip>
              </div>

              <!-- Features -->
              <div v-if="sound.features.length" class="d-flex align-center flex-wrap ga-1 mb-1">
                <span class="text-caption font-weight-medium mr-1">Features</span>
                <template v-for="(feat, i) in sound.features" :key="i">
                  <v-chip size="x-small" variant="tonal" color="deep-purple-lighten-1">
                    {{ feat.name }}
                  </v-chip>
                  <v-chip v-if="feat.bpm" size="x-small" variant="tonal" color="primary">
                    {{ feat.bpm }} BPM
                  </v-chip>
                  <v-chip v-if="feat.key" size="x-small" variant="tonal" color="info">
                    {{ feat.key }}
                  </v-chip>
                </template>
              </div>

              <!-- Audio preview -->
              <div v-if="sound.audioUrl" class="mt-1">
                <audio controls preload="none" :src="sound.audioUrl" style="width: 100%; height: 28px; border-radius: 6px;" />
              </div>
            </div>
          </v-card>
        </template>
      </div>
      <div v-else class="text-caption text-medium-emphasis">No sounds used</div>
    </v-card-text>
  </v-card>
</template>
