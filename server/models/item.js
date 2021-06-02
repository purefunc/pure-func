const mongoose = require("mongoose")

// define the Item model schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: String,
  description: String,
  price: String,
  images: [String],
  notes: [String],
  tags: [String],
  isAvailable: Boolean,
})

itemSchema.index({ name: 1 })

module.exports = mongoose.model("Item", itemSchema, "Item")
