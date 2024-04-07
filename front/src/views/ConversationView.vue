<template>
  <div>
    Conversation {{ $route.params.id }}
    <div v-for="(message, index) in messages" :key="index">
      <TextCard :message="message.text" :isMe="checkAuthor(message.sender)"/>
    </div>
    <div class="d-flex space-between mt-2">
      <v-text-field v-model="text" @keydown="submit"/>
      <v-btn
        icon
        @click="submit"
      >
        <img 
          src="/reboot_logo.png" 
          alt="Send" 
          class="image-icon"
        />
      </v-btn>
    </div>
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
//List of messages in the conversation to be displayed
const messages = computed(() => connectionStore.messages)

const submit = async (e) => {
  if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
    //API request to save the message in DB
    const { result } = await addMessage(route.params.id, { text:text.value })
    //Emit the socket's 'send' event, to notify other users connected to the same roomId
    connectionStore.sendMessage({ user: store.user, message: result })
    text.value = ''
  }
}

const checkAuthor = (id) => {
  return id === store.user._id
}

onMounted(async () => {
  //Join the chat room, sending the conversation id as roomId
  connectionStore.joinChat({id: route.params.id, user: store.user})
  const { result } = await getConversation(route.params.id)
  //Retrieve the conversation's message list and save it in the store
  connectionStore.setMessages(result.messages)
})
</script>

<style>
.image-icon {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
