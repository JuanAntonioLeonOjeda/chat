<template>
  <v-card :text="message" :class="checkAuthor"></v-card>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  message: String,
  isMe: Boolean
})

const checkAuthor = computed(() => {
  return props.isMe ? 'text-end bg-light-blue-lighten-3' : 'text-start bg-green-darken-1'
})
</script>

<style scoped>

</style>