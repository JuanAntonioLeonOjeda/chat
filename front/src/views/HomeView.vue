<script setup>
import { onMounted, ref } from 'vue'
import { useProfileStore } from '../store/index'
import { getAllUsers, getOwnProfile } from '../services/userService'

import CardComponent from '../components/CardComponent.vue'

const store = useProfileStore()
const suggestions = ref([])

onMounted(async () => {
  const { result } = await getOwnProfile()
  const usersArr = await getAllUsers()
  store.setUser(result)
  store.setConversations(result.conversations)

  //Friend sugggestions: any user different from the logged in user and not included in their friends array
  suggestions.value = usersArr.result.filter(u => {
    return u._id !== result._id && 
      !result.friends.some(f => u._id === f._id)
  })
})
</script>

<template>
  <h1>
    Welcome, {{ store.user?.name }}!
  </h1>
  <h3>
    FRIENDS
  </h3>
  <div 
    v-if="store.user.friends?.length"
    class="d-flex"
  >
    <CardComponent
      v-for="(friend, idx) in store.user?.friends"
      :key="idx"
      :data="friend" 
    />
  </div>
  <div v-else>
    No friends to display.
  </div>
  <div>
    <h3>
      SUGGESTIONS
    </h3>
    <div
      v-if="suggestions.length !== 0"
      class="d-flex"
    >
      <CardComponent
        v-for="(user, idx) in suggestions"
        :key="idx"
        :data="user" 
      />
    </div>
  </div>
</template>