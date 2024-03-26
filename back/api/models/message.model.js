const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "conversation",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  text: { 
    type:String 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  attachment: {
    type: String
  }
});

const Message = mongoose.model("message", messageSchema)

module.exports = Message
