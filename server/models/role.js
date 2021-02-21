const mongoose = require("mongoose")

// define the Role model schema
const roleSchema = new mongoose.Schema({
  team: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

roleSchema.index({ team: 1, user: 1 })

module.exports = mongoose.model("Role", roleSchema, "Role")
