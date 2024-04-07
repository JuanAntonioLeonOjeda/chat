const { verify } = require("jsonwebtoken")
const User = require("../models/user.model")

const checkAuth = (req, res, next) => {
  try {
    if (!req.headers.token) {
      return res.status(401).send({ success: false, message: "Token not found" })
    }

    verify(req.headers.token, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
        return res
          .status(401)
          .send({ success: false, message: "Token not valid" })
      }

      const email = data.email
      const user = await User.findOne({ email })

      if (!user) {
        return res
          .status(500)
          .send({ success: false, message: "Token not valid" })
      }

      res.locals.user = user
      next()
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Unauthorized",
      description: error.message
    })
  }
}

module.exports = {
  checkAuth
}
