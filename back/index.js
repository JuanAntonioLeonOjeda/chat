process.stdout.write("\x1B[2J\x1B[0f")

require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const http = require("http")

const dbConnect = require("./database")
const socketIo = require("socket.io")


const app = express()
  .use(cors())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/api", require("./api/routes"))

const httpServer = http.createServer(app)

const io = socketIo(httpServer, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {
  console.log("Socket connection succesful")
  
  socket.on('join', data => {
    socket.roomId = data.id
    socket.join(data.id)

    socket.on('send', data => {
      socket.to(socket.roomId).emit('notify', data)
    })
  })

  socket.on

})

httpServer.listen(process.env.PORT, async (error) => {
  if (error) throw new Error(error)
  await dbConnect()

  console.info(`Chat API running on PORT ${process.env.PORT}`)
})