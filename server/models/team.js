const mongoose = require("mongoose")

// define the Team model schema
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: String,
  users: [String],
  restaurants: [String],
  menus: [String],
})

teamSchema.index({ name: 1 })

module.exports = mongoose.model("Team", teamSchema, "Team")
