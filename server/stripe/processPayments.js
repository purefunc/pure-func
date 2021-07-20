const membershipDAO = require("../models/membership")
const {MembershipStatus} = require("../graphql/Membership/resolver")
const logger = require("../config/logger")

const processInitialCheckout = (stripePayload) => {
  logger.log("info", "Stripe details", stripePayload)

  const membershipId = stripePayload.metadata.membershipId;
  const subId = stripePayload.subscription

  membershipDAO.findByIdAndUpdate(membershipId, {status: MembershipStatus.ACTIVE, stripeSubId: subId})
}

const processRenewalSuccess = (stripePayload) => {
  const subId = stripePayload.subscription;
  membershipDAO.updateOne({stripeSubId: subId}, {status: MemebershipStatus.ACTIVE})
}

const processRenewalFailure = (stripePayload) => {
  const subId = stripePayload.subscription;
  membershipDAO.updateOne({stripeSubId: subId}, {status: MembershipStatus.FAILED})
}

module.exports = {processInitialCheckout, processRenewalSuccess, processRenewalFailure}