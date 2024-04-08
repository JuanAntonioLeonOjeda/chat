<template>
  <v-card
    class="mx-auto my-10 w-25"
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
      <v-btn 
        v-if="conversation.length"
        @click="handleConversation()"
      >
        Continue
      </v-btn>
      <v-btn 
        v-else
        @click="handleConversation()"
      >
        Start
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProfileStore } from '../store'
import { createConversation } from '../services/conversationService'

const router = useRouter()

const props = defineProps({
  data: Object
})

const store = useProfileStore()
const conversation = computed(() => store.conversations.filter(c => c.users.includes(props.data._id)))

const handleConversation = async () => {
  store.setConversingWith(props.data.name)
  const existingConversation = conversation.value[0]

  let conversationId

  if (existingConversation) {
    conversationId = existingConversation._id
  } else {
    const { result } = await createConversation({
      users: [props.data._id]
    })
    conversationId = result._id
  }

  router.push(`/conv/${conversationId}`)
}

</script>