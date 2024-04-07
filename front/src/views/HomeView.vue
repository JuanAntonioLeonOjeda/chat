<script setup>
import { onMounted } from 'vue'
import { useProfileStore } from '../store/index'
import { getOwnProfile } from '../services/userService'

import CardComponent from '../components/CardComponent.vue'

const store = useProfileStore()

onMounted(async () => {
  const { result } = await getOwnProfile()
  store.setUser(result)
  store.setConversations(result.conversations)
})
</script>

<template>
  <h1>
    Welcome, {{ store.user?.name }}!
  </h1>
  <div v-if="store.user.friends?.length">
    <CardComponent
      v-for="(friend, idx) in store.user?.friends"
      :key="idx"
      :data="friend" 
    />
  </div>
  <div v-else>
    No friends to display.
  </div>
</template>