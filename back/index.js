process.stdout.write("\x1B[2J\x1B[0f")

require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
 const http = require("http")

const dbConnect = require("./database")
const socketIo = require("socket.io")

// const httpServer = require('http').createServer()
// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: '*'
//   }
// })

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
  console.log("Connection event")
  
  socket.on('join', data => {
    console.log('room join')
    console.log(data)
    socket.emit('test', data)
  })
})

httpServer.listen(process.env.PORT, async (error) => {
  if (error) throw new Error(error)
  await dbConnect()

  console.info(`Atrineo API running on PORT ${process.env.PORT}`)
})