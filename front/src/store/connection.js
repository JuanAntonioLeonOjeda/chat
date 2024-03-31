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
        socket.emit('test', (res) => {
          console.log(res)
        })
      })

      socket.on("disconnect", () => {
        this.isConnected = false
      })
    },

    connect() {
      socket.connect()
    },
  },
})
