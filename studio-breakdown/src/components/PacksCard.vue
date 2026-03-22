<script setup lang="ts">
import type { LoopPack, SamplerKit } from '@/types/breakdown'

defineProps<{
  loopPacks: LoopPack[]
  samplerKits: SamplerKit[]
}>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="primary">mdi-package-variant</v-icon>
      Packs &amp; Extras
    </v-card-title>
    <v-card-text>
      <!-- Loop Packs -->
      <div class="mb-4">
        <div class="text-overline text-medium-emphasis mb-2">
          Loop Packs
          <v-chip size="x-small" class="ml-1">{{ loopPacks.length }}</v-chip>
        </div>
        <div v-if="loopPacks.length" class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="pack in loopPacks"
            :key="pack.slug"
            color="primary"
            variant="tonal"
            prepend-icon="mdi-music-box-multiple"
          >
            {{ pack.name }}
          </v-chip>
        </div>
        <div v-else class="text-caption text-medium-emphasis">None</div>
      </div>

      <!-- Sampler Kits -->
      <div>
        <div class="text-overline text-medium-emphasis mb-2">
          Sampler Kits
          <v-chip size="x-small" class="ml-1">{{ samplerKits.length }}</v-chip>
        </div>
        <div v-if="samplerKits.length" class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="kit in samplerKits"
            :key="kit.slug"
            color="info"
            variant="tonal"
            prepend-icon="mdi-grid"
          >
            {{ kit.name }}
          </v-chip>
        </div>
        <div v-else class="text-caption text-medium-emphasis">None</div>
      </div>
    </v-card-text>
  </v-card>
</template>
