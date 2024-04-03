import { defineStore } from "pinia"
import { socket } from "../socket"

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    isConnected: false,
    messages: []
  }),

  actions: {
    bindEvents() {
      socket.on("connect", () => {
        this.isConnected = true;
      }),
      socket.on("disconnect", () => {
        this.isConnected = false;
      }),
      socket.on("notify", (data) => {
        this.addMessage(data.message)
      })
    },
    connect() {
      socket.connect()
    },
    joinChat(data) {
      socket.emit('join', data)
    },
    sendMessage(data) {
      socket.emit('send', data)
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
