const User = require("../models/user.model")

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      result: user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      description: error.message,
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json({
      success: true,
      message: "Fetching users OK",
      result: users,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching users",
      description: error.message,
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Fetching user OK",
      result: user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching user",
      description: error.message,
    })
  }
}

const getOwnProfile = async (req, res) => {
  try {
    const user = await User.findById(res.locals.user.id)
      .populate('conversations')
      .populate('friends')
      
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Fetching profile OK",
      result: user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching profile",
      description: error.message,
    })
  }
}

const addFriend = async (req, res) => {
  try {
    const user = res.locals.user
    const friend = await User.findByIdAndUpdate(req.params.id, {
      $push: {
        friends: user._id
      }
    })

    if (!friend) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    user.friends.push(friend._id)
    await user.save()


    return res.status(200).json({
      success: true,
      message: "Friend added successfully",
      result: user.friends,
    })
  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error adding friend",
        description: error.message,
      });
  }
}

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      result: updatedUser,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating user",
      description: error.message,
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: deletedUser,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting user",
      description: error.message,
    })
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getOwnProfile,
  addFriend,
  updateUser,
  deleteUser
}
