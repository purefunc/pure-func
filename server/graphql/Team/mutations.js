const teamDAO = require("../../models/team")
const userDAO = require("../../models/user")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createTeam: async (_, args) => {
      try {
        const teamData = args
        const res = await teamDAO.create(teamData)
        return res
      } catch (e) {
        logger.log("warn", "team creation error", e)
        throw new Error("Error creating team")
      }
    },
    deleteTeam: async (_, args) => {
      try {
        const res = await teamDAO.deleteOne({ _id: args._id })
        return res
      } catch (e) {
        logger.log("warn", "team deleting error", e)
        throw new Error("Error deleting team")
      }
    },
    updateTeam: async (_, args) => {
      try {
        const teamData = {}
        if (args.name && args.name.length > 0) teamData.name = args.name

        const res = await teamDAO.findByIdAndUpdate(args._id, teamData, {
          new: true,
        })
        return res
      } catch (e) {
        logger.error("edit team error")
        logger.error(e)
        throw new Error("Error updating team")
      }
    },
    addRestaurantToTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $addToSet: { restaurants: args.restaurantId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "addRestaurantToTeam error", e)
        return false
      }
    },
    removeRestaurantFromTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $pull: { restaurants: args.restaurantId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "removeRestaurantFromTeam error", e)
        return false
      }
    },
    addMenuToTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $addToSet: { menus: args.menuId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "addMenuToTeam error", e)
        return false
      }
    },
    removeMenuFromTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $pull: { menus: args.menuId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "removeMenuFromTeam error", e)
        return false
      }
    },
    addUserToTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $addToSet: { users: args.userId } }).exec()
        await userDAO.findByIdAndUpdate(args.userId, { $addToSet: { teams: args.teamId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "addUserToTeam error", e)
        return false
      }
    },
    removeUserFromTeam: async (_, args) => {
      try {
        await teamDAO.findByIdAndUpdate(args.teamId, { $pull: { users: args.userId } }).exec()
        await userDAO.findByIdAndUpdate(args.userId, { $pull: { teams: args.teamId } }).exec()
        return true
      } catch (e) {
        logger.log("warn", "removeUserFromTeam error", e)
        return false
      }
    },
    changeTeamOwner: async (_, args) => {
      try {
        const teamData = {}
        teamData.owner = args.userId

        const res = await teamDAO.findByIdAndUpdate(args._id, teamData, {
          new: true,
        })
        return res
      } catch (e) {
        logger.error("change team owner error")
        logger.error(e)
        throw new Error("Error updating team owner")
      }
    },
  },
}
