import { defineStore } from "pinia"
import { socket } from "../socket"

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    isConnected: false,
    messages: []
  }),

  actions: {
    //Events to be listening to. They are emitted from the back
    bindEvents() {
      socket.on("connect", () => {
        this.isConnected = true
      }),
      socket.on("disconnect", () => {
        this.isConnected = false
      }),
      socket.on("notify", (data) => {
        this.addMessage(data.message)
      })
    },
    //Events the front can emit to the back
    joinChat(data) {
      socket.emit('join', data)
    },
    sendMessage(data) {
      socket.emit('send', data)
      //Add the message to the conversation's message list
      this.addMessage(data.message)
    },
    addMessage(message) {
      this.messages.push(message)
    },
    setMessages(arr) {
      this.messages = arr
    }
  },
})
