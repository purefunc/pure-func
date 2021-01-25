const mongoose = require("mongoose")

// define the Category model schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [String],
  description: String,
  price: String,
  notes: [String],
  items: [String],
})

categorySchema.index({ name: 1 })

module.exports = mongoose.model("Category", categorySchema, "Category")
