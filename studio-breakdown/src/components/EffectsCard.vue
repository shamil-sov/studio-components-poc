<script setup lang="ts">
import type { Effect } from '@/types/breakdown'

defineProps<{ effects: Effect[] }>()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="d-flex align-center">
      <v-icon start color="warning">mdi-tune-variant</v-icon>
      Effects
      <v-chip class="ml-2" color="warning" size="x-small">{{ effects.length }}</v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="effect in effects"
          :key="effect.slug"
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <v-card variant="outlined" class="text-center pa-3" height="100%">
            <v-img
              v-if="effect.imageUrl"
              :src="effect.imageUrl"
              :alt="effect.name"
              height="64"
              class="rounded mb-2 mx-auto"
              contain
            />
            <div class="text-body-2 font-weight-medium">{{ effect.name }}</div>
            <v-chip
              v-if="effect.isMembershipOnly"
              size="x-small"
              color="warning"
              variant="tonal"
              prepend-icon="mdi-star"
              class="mt-1"
            >
              Members
            </v-chip>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
