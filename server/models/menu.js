const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  disclaimer: String,
  logo: String,
  bgImage: String,
  categories: [String],
  teamId: String,
  domains: [String],
})

menuSchema.index({ title: 1 })

module.exports = mongoose.model("Menu", menuSchema, "Menu")
