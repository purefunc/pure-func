const mongoose = require("mongoose")

// define the Availability model schema
const availabilitySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String,
  type: String,
  isAvailable: Boolean,
})

availabilitySchema.index({ item: 1 })

module.exports = mongoose.model("Availability", availabilitySchema, "Availability")
