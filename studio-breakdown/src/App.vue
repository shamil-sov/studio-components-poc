<script setup lang="ts">
import { RouterView } from 'vue-router'
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
      <v-container class="pa-4 pa-md-6" style="max-width: 860px;">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
