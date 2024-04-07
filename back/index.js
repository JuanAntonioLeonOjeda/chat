process.stdout.write("\x1B[2J\x1B[0f")
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const http = require("http")
const socketIo = require("socket.io")

const dbConnect = require("./database")

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200
}

const app = express()
  .use(cors(corsOptions))
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/api", require("./api/routes"))

const httpServer = http.createServer(app)

const io = socketIo(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})

//Define what to do when the front socket connects
io.on("connection", (socket) => {
  console.log("Socket connection succesful")
  
  //When the front emits the 'join' event, it will sent a conversation id in 'data'.
  socket.on('join', data => {
    //Add the attribute 'roomId' to the socket with the id received from the front.
    socket.roomId = data.id
    //Join the 'room'
    socket.join(data.id)

    //After joining the room waiting to receive the event 'send' from the front.
    socket.on('send', data => {
      //When a message is sent to this room, notify the other users connected to this same room
      socket.to(socket.roomId).emit('notify', data)
    })
  })
})

httpServer.listen(process.env.PORT, async (error) => {
  if (error) throw new Error(error)
  await dbConnect()

  console.info(`Chat API running on PORT ${process.env.PORT}`)
})