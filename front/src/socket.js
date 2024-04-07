import { io } from "socket.io-client"

//Connection to backend socket
export const socket = io(import.meta.env.VITE_SOCKET_URL)
