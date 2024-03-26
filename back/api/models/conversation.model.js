const mongoose = require("mongoose")

const conversationSchema = new mongoose.Schema({
  title: {
    type: String
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
  ],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "message"
  }
})

const ConversationModel = mongoose.model("conversation", conversationSchema)

module.exports = ConversationModel
