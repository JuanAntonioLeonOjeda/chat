<template>
  <v-card
    class="mx-auto my-10"
    max-width="344"
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
        @click="continueConversation()"
      >
        Continue
      </v-btn>
      <v-btn 
        v-else
        @click="newConversation()"
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
const conversation = computed(() => store.getConversations.filter(c => c.users.includes(props.data._id)))

const continueConversation = () => {
  const id = conversation.value[0]._id
  router.push(`/conv/${id}`)
}

const newConversation = async () => {
  const { result } = await createConversation({
    users: [ props.data._id ]
  })
  router.push(`/conv/${result._id}`)
}

</script>