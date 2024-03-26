const router = require("express").Router();

const { checkAuth } = require("../middlewares");

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getOwnProfile,
  addFriend
} = require("../controllers/user.controller")

router
  .get("/", getAllUsers)
  .get("/profile", checkAuth, getOwnProfile)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/:id", updateUser)
  .put('/add/:id', checkAuth, addFriend)
  .delete("/:id", deleteUser)

module.exports = router
