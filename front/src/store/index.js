import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useProfileStore = defineStore("profile", () => {
  const user = ref({})
  const conversations = ref([])

  const getUser = computed(() => user.value)
  const setUser = (obj) => {user.value = obj}

  const getConversations = computed(() => conversations.value)
  const setConversations = (arr) => conversations.value = arr
  
  return { getUser, getConversations, setUser, setConversations }
})
