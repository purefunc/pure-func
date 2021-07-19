const mongoose = require("mongoose")

// define the Membership model schema
const membershipSchema = new mongoose.Schema({
  team: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: String,
  renewalDate: Date
})

membershipSchema.index({ team: 1 })

module.exports = mongoose.model("Membership", membershipSchema, "Membership")
