const router = require("express").Router();

const { checkAuth } = require("../middlewares");

const {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage
} = require("../controllers/message.controller")

router
  .get("/", getAllMessages)
  .get("/:id", getMessageById)
  .post("/:id", checkAuth, createMessage)
  .put("/:id", updateMessage)
  .delete("/:id", deleteMessage)

module.exports = router
