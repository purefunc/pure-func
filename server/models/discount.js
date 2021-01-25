const mongoose = require("mongoose")

// define the Discount model schema
const discountSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String,
  priceFixedAdjust: Number,
  pricePercentAdjust: Number,
  priceType: String,
  durationType: String,
})

discountSchema.index({ item: 1 })

module.exports = mongoose.model("Discount", discountSchema, "Discount")
