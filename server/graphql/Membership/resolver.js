const membershipDAO = require("../../models/membership")
const teamDAO = require("../../models/team")

const MembershipType = Object.freeze({
  FREE: "FREE",
  STARTER: "STARTER",
  MONTHLY: "MONTHLY",
})

module.exports = {
  MembershipType,
  Membership: {
    _id({ _id }) {
      return _id
    },
    team({ team }) {
      return teamDAO.find({ _id: team })
    },
    type({ type }) {
      return type
    },
  },
  Query: {
    allMemberships(_, __, { userIsAdmin }) {
      if (!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const memberships = membershipDAO.find().exec()
      if (!memberships) {
        throw new Error("Error")
      }
      return memberships
    },
    membership(_, args) {
      const myMembership = membershipDAO.findOne({ _id: { $eq: args.id } })
      if (!myMembership) {
        throw new Error("Error")
      }
      return myMembership
    },
    membershipsForTeam(_, args) {
      const myMemberships = membershipDAO.find({ team: { $eq: args.teamId } })
      if (!myMemberships) {
        throw new Error("Error")
      }
      return myMemberships
    },
  },
}
