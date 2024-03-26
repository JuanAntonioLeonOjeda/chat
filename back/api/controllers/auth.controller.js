
const { sign } = require("jsonwebtoken")

const User = require("../models/user.model")


const login = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })

    const token = sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })

    return res.status(200).json({
      success: true,
      message: "User logged in",
      result: { token, user },
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Failed login in",
      description: error.message,
    })
  }
}

module.exports = {
  login,
}
