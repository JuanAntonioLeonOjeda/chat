<script setup>
import { ref, onMounted} from 'vue'
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
    Welcome, {{ store.getUser?.name }}!
  </h1>
  <div v-if="store.getUser.friends?.length">
    <CardComponent
      v-for="(friend, idx) in store.getUser?.friends"
      :key="idx"
      :data="friend" 
    />
  </div>
  <div v-else>
    No friends to display.
  </div>
</template>