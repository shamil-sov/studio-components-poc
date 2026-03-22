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
    <v-card-text class="pa-0">
      <v-list lines="two" density="comfortable">
        <v-list-item
          v-for="effect in effects"
          :key="effect.slug"
        >
          <template #prepend>
            <v-avatar size="40" rounded="lg" color="surface-variant" class="mr-3">
              <v-img v-if="effect.imageUrl" :src="effect.imageUrl" :alt="effect.name" />
              <v-icon v-else>mdi-tune-variant</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">
            {{ effect.name }}
            <v-chip
              v-if="effect.isMembershipOnly"
              size="x-small"
              color="warning"
              variant="tonal"
              prepend-icon="mdi-star"
              class="ml-2"
            >
              Premium
            </v-chip>
          </v-list-item-title>
          <v-list-item-subtitle>{{ effect.slug }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
