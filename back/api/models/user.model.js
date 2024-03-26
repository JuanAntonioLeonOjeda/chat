const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "Email address already exists"],
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  conversations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversation",
      index: true
    },
  ],
  online: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default:
      "https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-2048x2048.jpeg",
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
