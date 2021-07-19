const membershipDAO = require("../models/membership")
const {MembershipStatus} = require("../graphql/Membership/resolver")
const logger = require("../config/logger")

const processInitialCheckout = (stripePayload) => {
  logger.log("info", "Stripe details", stripePayload)

  const membershipId = stripePayload.metadata.membershipId;

  membershipDAO.findByIdAndUpdate(membershipId, {status: MembershipStatus.ACTIVE})
}

module.exports = processInitialCheckout