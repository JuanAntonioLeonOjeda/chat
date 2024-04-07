<template>
  <div>
    Conversation {{ $route.params.id }}
    <div v-for="(message, index) in messages" :key="index">
      <TextCard :message="message.text" :isMe="checkAuthor(message.sender)"/>
    </div>
    <v-text-field v-model="text" @keydown="submit"/>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue"
import { useRoute } from 'vue-router'
import { getConversation, addMessage } from "../services/conversationService"
import { useProfileStore } from "../store"
import { useConnectionStore } from "../store/connection"

import TextCard from '../components/TextCard.vue'

const text = ref('')
const store = useProfileStore()
const connectionStore = useConnectionStore()
const route = useRoute()
const messages = computed(() => connectionStore.messages)

const submit = async (e) => {
  if (e.key === 'Enter') {
    const { result } = await addMessage(route.params.id, { text:text.value })
    connectionStore.sendMessage({ user: store.user, message: result })
    text.value = ''
  }
}

const checkAuthor = (id) => {
  return id === store.user._id
}

onMounted(async () => {
  connectionStore.joinChat({id: route.params.id, user: store.user})
  const { result } = await getConversation(route.params.id)
  connectionStore.setMessages(result.messages)
})
</script>