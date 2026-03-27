<script setup lang="ts">
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'

interface SampleTrack {
  label: string
  desc: string
  url: string
}

const sampleTracks: SampleTrack[] = [
  {
    label: 'Track with mixed things',
    desc: 'Mastering, instruments, effects, auto-pitch, loops, presets',
    url: 'https://test.bandlab.com/track/c1734997-88d7-439d-9b6a-c9cd0133ab1c?revId=7f0083e1-d2de-4b1f-b1d4-2097f6ee099b',
  },
  {
    label: 'Track with beats',
    desc: 'Beat by Velvet, curated effect presets (70s Ballad, 70s Pop)',
    url: 'https://test.bandlab.com/track/9c45c312-44a4-453f-a9b9-10d7e49e0f2e?revId=ab1262ed-09b8-4177-89c6-8f3e04aa451a',
  },
  {
    label: 'Track with presets (user & curated)',
    desc: '4 effect presets (2 curated + 2 user-created), 10 effects, Bass Boost Mastering',
    url: 'https://test.bandlab.com/track/9eaf0cd8-5898-4530-b8a5-5a866915157e?revId=6a653d9c-490e-4914-9bb1-a67fc2d52232',
  },
]

const selectedTrackUrl = ref('')
function selectTrack(url: string) {
  selectedTrackUrl.value = url
}
provide('selectedTrackUrl', selectedTrackUrl)
</script>

<template>
  <v-app>
    <v-app-bar flat color="surface" border="b">
      <v-app-bar-title>
        <v-icon start>mdi-music-circle</v-icon>
        Studio Breakdown Viewer
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container class="pa-4 pa-md-6 d-flex" style="max-width: 1120px;">
        <!-- Main content -->
        <div class="flex-grow-1" style="min-width: 0; max-width: 860px;">
          <RouterView />
        </div>

        <!-- Side list -->
        <div class="ml-5 flex-shrink-0 d-none d-md-block" style="width: 240px; position: sticky; top: 80px; align-self: flex-start;">
          <div class="text-overline text-medium-emphasis mb-3">
            <v-icon size="14" class="mr-1">mdi-test-tube</v-icon>
            Sample Tracks
          </div>
          <div class="d-flex flex-column ga-2">
            <v-card
              v-for="(t, i) in sampleTracks"
              :key="i"
              :variant="selectedTrackUrl === t.url ? 'tonal' : 'outlined'"
              :color="selectedTrackUrl === t.url ? 'primary' : undefined"
              rounded="lg"
              hover
              class="cursor-pointer transition-swing"
              @click="selectTrack(t.url)"
            >
              <v-card-text class="pa-3">
                <div class="d-flex align-center ga-2 mb-1">
                  <v-icon size="16" :color="selectedTrackUrl === t.url ? 'primary' : 'medium-emphasis'">mdi-music-note</v-icon>
                  <span class="text-body-2 font-weight-bold">{{ t.label }}</span>
                </div>
                <div class="text-caption" :class="selectedTrackUrl === t.url ? '' : 'text-medium-emphasis'" style="line-height: 1.4;">
                  {{ t.desc }}
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
