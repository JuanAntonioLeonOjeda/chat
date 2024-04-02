<template>
  <div>
    Conversation {{ $route.params.id }}
    <div v-for="(message, index) in messages" :key="index">
      <p>{{ message.text }}</p>
    </div>
    <v-text-field v-model="text" @keydown="submit()"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { getConversation, addMessage } from "../services/conversationService"
import { useProfileStore } from "../store"
import { useConnectionStore } from "../store/connection"

const text = ref('')
const messages = ref([])
const store = useProfileStore()
const connectionStore = useConnectionStore()
const route = useRoute()

const submit = async () => {
  const result = await addMessage(route.params.id, text.value)
}

onMounted(async () => {
  connectionStore.joinChat({id: route.params.id, user: store.getUser})
  const { result } = await getConversation(route.params.id)
  messages.value = result.messages
})
</script>