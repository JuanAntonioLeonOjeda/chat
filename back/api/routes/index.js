const router = require("express").Router()

const authRouter = require('./auth.router.js')
const userRouter = require("./user.router.js")
const conversationRouter = require('./conversation.router.js')
const messageRouter = require('./message.router.js')

router
  .use("/auth", authRouter)
  .use("/user", userRouter)
  .use("/conversation", conversationRouter)
  .use("/message", messageRouter)

module.exports = router;
