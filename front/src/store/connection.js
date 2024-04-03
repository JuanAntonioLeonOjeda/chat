import { defineStore } from "pinia"
import { socket } from "../socket"

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    isConnected: false,
    chats: []
  }),

  actions: {
    bindEvents() {
      socket.on("connect", () => {
        this.isConnected = true
      }),
      socket.on("disconnect", () => {
        this.isConnected = false
      }),
      socket.on('notify', (data) => {
        console.log('notified')
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
    }
  },
})
