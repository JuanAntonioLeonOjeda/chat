const router = require("express").Router();

const { checkAuth } = require("../middlewares");

const {
  createConversation,
  getAllConversations,
  getConversationById,
  addMessage,
  updateConversation,
  deleteConversation
} = require("../controllers/conversation.controller")

router
  .get("/", getAllConversations)
  .get("/:id", getConversationById)
  .post("/", checkAuth, createConversation)
  .put("/add/:id", checkAuth, addMessage)
  .put("/:id", updateConversation)
  .delete("/:id", deleteConversation)

module.exports = router
