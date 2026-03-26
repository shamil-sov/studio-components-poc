<!-- Improved version of EffectPresetsCard — shows nested effects chain, creator info, and description -->
<script setup lang="ts">
import type { EffectPreset2 } from '@/types/breakdown'

defineProps<{ presets: EffectPreset2[] }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="info">mdi-palette-swatch-variant</v-icon>
      Effect Presets (Revisited)
      <v-chip class="ml-2" color="info" size="x-small">{{ presets.length }}</v-chip>
    </v-card-title>
    <v-card-subtitle class="text-caption text-medium-emphasis pb-0">
      Improved version of Effect Presets — includes the effects chain, creator, and description.
    </v-card-subtitle>
    <v-card-text class="pa-0">
      <v-list lines="three" density="comfortable">
        <template v-for="(preset, index) in presets" :key="preset.slug">
          <v-divider v-if="index > 0" />
          <v-list-item>
            <template #prepend>
              <v-avatar size="48" rounded="lg" color="surface-variant" class="mr-3">
                <v-img :src="preset.imageUrl" :alt="preset.name" cover />
              </v-avatar>
            </template>

            <v-list-item-title class="font-weight-medium">
              {{ preset.name }}
              <v-chip size="x-small" variant="tonal" :color="preset.type === 'curated' ? 'info' : 'secondary'" class="ml-2">
                {{ preset.type }}
              </v-chip>
            </v-list-item-title>

            <v-list-item-subtitle v-if="preset.creator">
              <v-icon size="x-small" class="mr-1">mdi-account</v-icon>
              Created by <strong>@{{ preset.creator.username }}</strong>
            </v-list-item-subtitle>

            <v-list-item-subtitle v-if="preset.description" class="mt-1">
              <v-icon size="x-small" class="mr-1">mdi-text</v-icon>
              Description: <em>{{ preset.description }}</em>
            </v-list-item-subtitle>

            <v-list-item-subtitle v-if="preset.link" class="mt-1">
              <v-icon size="x-small" class="mr-1">mdi-link</v-icon>
              Link: <a :href="preset.link" target="_blank" class="text-primary">Open preset ↗</a>
            </v-list-item-subtitle>

            <!-- Effects chain -->
            <div v-if="preset.effects?.length" class="d-flex flex-wrap ga-1 mt-2">
              <v-chip
                v-for="fx in preset.effects"
                :key="fx.slug"
                size="x-small"
                variant="outlined"
                :color="fx.bypass ? 'grey' : 'warning'"
              >
                <v-avatar start size="16" rounded="sm">
                  <v-img :src="fx.imageUrl" />
                </v-avatar>
                {{ fx.slug }}
                <v-icon v-if="fx.bypass" end size="x-small">mdi-eye-off-outline</v-icon>
              </v-chip>
            </div>

          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>
