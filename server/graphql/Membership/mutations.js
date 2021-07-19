const membershipDAO = require("../../models/membership")
const {MembershipType, MembershipStatus} = require("./resolver")
const logger = require("../../config/logger")
const stripe = require('../../config/stripe')

module.exports = {
  Mutation: {
    createMembership: async (_, args) => {
      try {
        const membershipData = args
        membershipData.status = MembershipStatus.INITIALIZED
        const membershipObj = await membershipDAO.create(membershipData)

        let PRICE = process.env.NODE_ENV !== "production" ? process.env.TEST_PRICE_ID :
          args.type == MembershipType.FREE ? process.env.FREE_PRICE_ID :
          args.type == MembershipType.MONTHLY ? process.env.BASIC_PRICE_ID :
          process.env.STARTER_PRICE_ID

        const session = await stripe.checkout.sessions.create({
          mode: 'subscription',
          payment_method_types: ['card'],
          metadata: {
            membershipId: "" + membershipObj._doc._id,
          },
          line_items: [
            {
              price: PRICE,
              quantity: 1,
            },
          ],
          success_url: process.env.STRIPE_SUCCESS + "?session_id={CHECKOUT_SESSION_ID}",
          cancel_url: process.env.STRIPE_CANCEL,
        });

        membershipObj.status = MembershipStatus.PENDING
        const res = await membershipObj.save()
        return res
      } catch (e) {
        logger.log("warn", "membership creation error", e)
        throw new Error("Error creating membership")
      }
    },
    deleteMembership: async (_, args) => {
      try {
        const res = await membershipDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "membership deleting error", e)
        throw new Error("Error deleting membership")
      }
    },
    changeMembershipType: async (_, args) => {
      try {
        const membershipData = {}
        membershipData.type = args.newType

        const res = await membershipDAO.findByIdAndUpdate(args._id, membershipData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("change membership type error")
        logger.error(e)
        throw new Error("Error changing membership type")
      }
    },
  }
}
