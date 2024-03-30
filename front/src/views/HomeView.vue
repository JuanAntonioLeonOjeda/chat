<script setup>
import { ref, onMounted } from 'vue'
import { getOwnProfile } from '../services/userService'

import CardComponent from '../components/CardComponent.vue'

const user = ref({})

onMounted(async () => {
  const { result } = await getOwnProfile()
  console.log(result)
  user.value = result
})
</script>

<template>
  <h1>
    Home View
  </h1>
  <div v-if="user.friends && user.friends.length">
    <CardComponent
      v-for="(friend, idx) in user.friends"
      :key="idx"
      :data="friend" />
  </div>
  <div v-else>
    No friends to display.
  </div>
</template>