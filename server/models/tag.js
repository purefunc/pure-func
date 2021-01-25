const mongoose = require("mongoose")

// define the Tag model schema
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  
  },
  symbol: {
    type: String,
    required: true
  },
  description: String,
})

tagSchema.index({ name: 1 })

module.exports = mongoose.model("Tag", tagSchema, "Tag")
