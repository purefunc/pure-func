const subscriptionDAO = require("../models/subscription")
const logger = require("../config/logger")

const processInitialCheckout = (stripePayload) => {
  logger.log("info", "Stripe details", stripePayload)
}

module.exports = processInitialCheckout