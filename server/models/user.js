const mongoose = require("mongoose")

// define the User model schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    index: { unique: true }
  },
  displayName: String,
  email: String,
  password: { type: String, required: true },
  teams: [String],
  isAdmin: Boolean
})

userSchema.index({ username: 1 })

module.exports = mongoose.model("User", userSchema)
