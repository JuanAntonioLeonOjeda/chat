<template>
  <v-card
    class="mx-auto my-10"
    max-width="344"
    :title="data.name"
  >
    <template v-slot:prepend>
      <v-avatar size="24">
        <v-img
          alt="Avatar"
          :src="data.avatar"
        ></v-img>
      </v-avatar>
    </template>
    <v-card-actions class="flex justify-center">
      <v-btn>
        Start
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: Object
})
</script>