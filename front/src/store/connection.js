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
      socket.on('test', (data) => {
        console.log('Test succesful')
        console.log(data)
      })
    },

    connect() {
      socket.connect()
    },

    joinChat(data) {
      socket.emit('join', data)
    }
  },
})
