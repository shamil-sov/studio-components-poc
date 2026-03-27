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
    <v-card-text class="pa-0">
      <v-list v-if="beats.length" lines="three" density="comfortable">
        <template v-for="(beat, index) in beats" :key="beat.id">
          <v-divider v-if="index > 0" />
          <v-list-item>
            <template #prepend>
              <v-avatar size="56" rounded="lg" class="mr-3" :style="{ backgroundColor: beat.picture?.color || '#ccc' }">
                <v-img v-if="beat.picture?.s" :src="beat.picture.s" :alt="beat.name" cover />
                <v-icon v-else>mdi-music-box</v-icon>
              </v-avatar>
            </template>

            <v-list-item-title class="font-weight-medium">
              {{ beat.name }}
            </v-list-item-title>

            <v-list-item-subtitle>
              <a :href="`https://test.bandlab.com/beats/${beat.id}`" target="_blank" class="text-primary">Open beat ↗</a>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              By <strong>{{ beat.creatorName }}</strong>
            </v-list-item-subtitle>

            <v-list-item-subtitle v-if="beat.genre">
              Genre: <strong>{{ beat.genre }}</strong>
            </v-list-item-subtitle>

            <v-list-item-subtitle v-if="beat.key">
              Key: <strong>{{ beat.key }}</strong>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              BPM: <strong>{{ beat.bpm }}</strong>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              Duration: <strong>{{ formatDuration(beat.duration) }}</strong>
            </v-list-item-subtitle>

            <!-- Audio preview -->
            <div v-if="beat.audioPreviewUrl" class="mt-2">
              <audio controls preload="none" :src="beat.audioPreviewUrl" style="width: 100%; height: 32px;" />
            </div>
          </v-list-item>
        </template>
      </v-list>
      <div v-else class="pa-4 text-caption text-medium-emphasis">No beats used</div>
    </v-card-text>
  </v-card>
</template>
