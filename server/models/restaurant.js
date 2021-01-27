const mongoose = require("mongoose")

// define the Restaurant model schema
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  phone: String,
  menus: [String],
})

restaurantSchema.index({ name: 1 })

module.exports = mongoose.model("Restaurant", restaurantSchema, "Restaurant")
