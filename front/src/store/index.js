import { defineStore } from "pinia"

export const useProfileStore = defineStore("profile", {
  state: () => ({
    user: {},
    conversations: [],
  }),
  actions: {
    setUser(obj) {
      this.user = obj
    },
    setConversations(arr) {
      this.conversations = arr
    }
  }
})
