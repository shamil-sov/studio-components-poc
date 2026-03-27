<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import type { Ref } from 'vue'
import { useBreakdown } from '@/composables/useBreakdown'
import TrackOverview from '@/components/TrackOverview.vue'
import InstrumentsCard from '@/components/InstrumentsCard.vue'
import EffectsCard from '@/components/EffectsCard.vue'
import EffectPresetsCard from '@/components/EffectPresetsCard.vue'
import EffectPresets2Card from '@/components/EffectPresets2Card.vue'
import MasteringCard from '@/components/MasteringCard.vue'
import AutoPitchCard from '@/components/AutoPitchCard.vue'
import AutoPitch2Card from '@/components/AutoPitch2Card.vue'
import BeatsCard from '@/components/BeatsCard.vue'
import PacksCard from '@/components/PacksCard.vue'
import RawJsonCard from '@/components/RawJsonCard.vue'

const trackUrl = ref('https://test.bandlab.com/track/c1734997-88d7-439d-9b6a-c9cd0133ab1c?revId=7f0083e1-d2de-4b1f-b1d4-2097f6ee099b')

const { breakdown, loading, error, parsedRevisionId, fetchBreakdown, loadSample } = useBreakdown()

function handleLoad() {
  fetchBreakdown(trackUrl.value)
}

// Watch for track selection from the side list
const selectedTrackUrl = inject<Ref<string>>('selectedTrackUrl')
if (selectedTrackUrl) {
  watch(selectedTrackUrl, (url) => {
    if (url) {
      trackUrl.value = url
      fetchBreakdown(url)
    }
  })
}
</script>

<template>
  <!-- Input bar -->
  <v-card class="mb-6" variant="outlined">
    <v-card-text>
      <v-row align="center" no-gutters>
        <v-col cols="12" md="8" class="pr-md-3 mb-3 mb-md-0">
          <v-text-field
            v-model="trackUrl"
            label="Track URL"
            placeholder="https://test.bandlab.com/track/...?revId=..."
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-link"
            hide-details
            @keyup.enter="handleLoad"
          />
        </v-col>
        <v-col cols="12" md="4" class="d-flex ga-2">
          <v-btn
            color="primary"
            size="large"
            :loading="loading"
            prepend-icon="mdi-cloud-download"
            @click="handleLoad"
          >
            Load
          </v-btn>
          <v-btn
            variant="tonal"
            size="large"
            prepend-icon="mdi-test-tube"
            @click="loadSample"
          >
            Sample Data
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

  <!-- Status -->
  <v-alert
    v-if="error"
    type="error"
    variant="tonal"
    closable
    class="mb-4"
  >
    {{ error }}
  </v-alert>

  <v-alert
    v-if="parsedRevisionId && !error && !loading"
    type="success"
    variant="tonal"
    density="compact"
    class="mb-4"
  >
    Revision ID: <code>{{ parsedRevisionId }}</code>
  </v-alert>

  <!-- Loading skeleton -->
  <template v-if="loading">
    <v-skeleton-loader type="card" class="mb-4" />
    <v-skeleton-loader type="card" class="mb-4" />
    <v-skeleton-loader type="card" class="mb-4" />
  </template>

  <!-- Breakdown content -->
  <template v-if="breakdown && !loading">
    <TrackOverview :breakdown="breakdown" />
    <BeatsCard :beats="breakdown.beats ?? []" />
    <InstrumentsCard :instruments="breakdown.instruments" />
    <EffectsCard :effects="breakdown.effects" />
    <EffectPresetsCard :presets="breakdown.effectPresets" />
    <EffectPresets2Card v-if="breakdown.effectPresets2?.length" :presets="breakdown.effectPresets2" />
    <MasteringCard :mastering="breakdown.mastering" />
    <AutoPitchCard :auto-pitches="breakdown.autoPitches" />
    <AutoPitch2Card v-if="breakdown.autoPitches2?.length" :auto-pitches="breakdown.autoPitches2" />
    <PacksCard
      :loop-packs="breakdown.loopPacks"
      :sampler-kits="breakdown.samplerKits"
    />
    <RawJsonCard :breakdown="breakdown" />
  </template>

  <!-- Empty state -->
  <v-card
    v-if="!breakdown && !loading && !error"
    variant="tonal"
    class="text-center pa-12"
  >
    <v-icon size="64" color="primary" class="mb-4">mdi-music-note-plus</v-icon>
    <div class="text-h6 mb-2">No breakdown loaded</div>
    <div class="text-body-2 text-medium-emphasis">
      Paste a BandLab track URL above and click Load, or click Sample Data to preview.
    </div>
  </v-card>
</template>
