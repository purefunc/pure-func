const subscriptionDAO = require("../../models/subscription")

module.exports = {
  Subscription: {
    _id({ _id }) {
      return _id
    },
    productId({ productId }) {
      return productId
    },
  },
  Query: {
    allSubscriptions(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const subscriptions = subscriptionDAO.find().exec()
      if (!subscriptions) {
        throw new Error("Error")
      }
      return subscriptions
    },
    subscription(obj, args) {
      const mySub = subscriptionDAO.findOne({ _id: { $eq: args.id } })
      if (!mySub) {
        throw new Error("Error")
      }
      return mySub
    },
  }
}
