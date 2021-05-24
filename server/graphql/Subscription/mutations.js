const subscriptionDAO = require("../../models/subscription")
const logger = require("../../config/logger")
const stripe = require('../../config/stripe')

module.exports = {
  Mutation: {
    createSubscription: async (_, {priceId}) => {
      logger.info("Creating sub")

      try {
        const session = await stripe.checkout.sessions.create({
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],
          success_url: process.env.STRIPE_SUCCESS,
          cancel_url: process.env.STRIPE_CANCEL,
        });

        const subData = {productId: session.id}
    
        const res = await subscriptionDAO.create(subData)
        return res
      } catch(e) {
        logger.log("warn", "subscription creation error", e)
        throw new Error("Error creating subscription")
      }
    },
    cancelSubscription: async (_, args) => {
      try {
        // TODO: NEED TO ADD STRIPE CODE HERE
        const res = await subscriptionDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "membership deleting error", e)
        throw new Error("Error deleting membership")
      }
    },
  }
}
