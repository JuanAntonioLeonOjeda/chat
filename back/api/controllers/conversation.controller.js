const Conversation = require("../models/conversation.model")
const Message = require("../models/message.model")
const User = require('../models/user.model')

const createConversation = async (req, res) => {
  try {
    req.body.users.push(res.locals.user._id)
    const conversation = await Conversation.create(req.body)

    await Promise.all(
      req.body.users.map(async (userId) => {
        await User.findByIdAndUpdate(userId, {
          $push: { conversations: conversation._id }
        })
      })
    )

    return res.status(201).json({
      success: true,
      message: "Conversation created successfully",
      result: conversation,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating conversation",
      description: error.message,
    })
  }
}

const getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find()

    return res.status(200).json({
      success: true,
      message: "Fetching conversations OK",
      result: conversations,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching conversations",
      description: error.message,
    })
  }
}

const getConversationById = async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.id)
      .populate('users')
      .populate('lastMessage')
      .populate('messages')

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Fetching conversation OK",
      result: conversation,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching conversation",
      description: error.message,
    })
  }
}

const addMessage = async (req,res) => {
  try {
    const conversation = await Conversation.findById(req.params.id)

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      })
    }

    req.body = {
      ...req.body,
      sender: res.locals.user._id,
      conversation: conversation._id,
    }

    const message = await createMessage(req.body)

    conversation.messages.push(message._id)
    conversation.lastMessage = message._id
    conversation.updatedAt = Date.now()
    await conversation.save()

    return res.status(201).json({
      success: true,
      message: "Message added successfully",
      result: message,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding message",
      description: error.message,
    })
  }
}

const createMessage = async (body) => {
    const message = await Message.create(body)
    return message
}

const updateConversation = async (req, res) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(
      req.params.id, 
      req.body, {
      new : true,
    })

    if (!updatedConversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Conversation updated successfully",
      result: updatedConversation,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating conversation",
      description: error.message,
    })
  }
}

const deleteConversation = async (req, res) => {
  try {
    const deletedConversation = await Conversation.findByIdAndDelete(req.params.id)

    if (!deletedconversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Conversation deleted successfully",
      result: deletedConversation,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting conversation",
      description: error.message,
    })
  }
}

module.exports = {
  createConversation,
  getAllConversations,
  getConversationById,
  addMessage,
  updateConversation,
  deleteConversation
}
