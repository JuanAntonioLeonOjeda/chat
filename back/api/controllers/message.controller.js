const Message = require("../models/message.model")

const createMessage = async (req, res) => {
  try {
    req.body = {
      ...req.body,
      sender: res.locals.user._id,
      conversation: req.params.id
    }
    const message = await Message.create(req.body)

    return res.status(201).json({
      success: true,
      message: "Message created successfully",
      result: message,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating Message",
      description: error.message,
    })
  }
}

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()

    return res.status(200).json({
      success: true,
      message: "Fetching Messages OK",
      result: messages,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Messages",
      description: error.message,
    })
  }
}

const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Fetching Message OK",
      result: message,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Message",
      description: error.message,
    })
  }
}

const updateMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )

    if (!updatedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Message updated successfully",
      result: updatedMessage,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating Message",
      description: error.message,
    })
  }
}

const deleteMessage = async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(
      req.params.id
    )

    if (!deletedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
      result: deletedMessage,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting Message",
      description: error.message,
    })
  }
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
}
