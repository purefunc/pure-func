const mongoose = require("mongoose")

// define the model schema
const subscriptionSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
})

subscriptionSchema.index({ productId: 1 })

module.exports = mongoose.model("Subscription", subscriptionSchema, "Subscription")
