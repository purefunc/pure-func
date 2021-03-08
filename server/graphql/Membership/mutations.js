const membershipDAO = require("../../models/membership")
const {MembershipType} = require("./resolver")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createMembership: async (_, args) => {
      try {
        const membershipData = args
        const res = await membershipDAO.create(membershipData)
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
