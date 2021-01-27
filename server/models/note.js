const mongoose = require("mongoose")

// define the Note model schema
const noteSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
})

noteSchema.index({ description: 1 })

module.exports = mongoose.model("Note", noteSchema, "Note")
