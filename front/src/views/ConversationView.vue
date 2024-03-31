<template>
  <div>
    Conversation {{ $route.params.id }}
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRoute } from 'vue-router'
import { useProfileStore } from "../store"
import { useConnectionStore } from "../store/connection"

const store = useProfileStore()
const connectionStore = useConnectionStore()
const route = useRoute()

onMounted(async () => {
  console.log()
  connectionStore.joinChat({id: route.params.id, user: store.getUser})
})
</script>