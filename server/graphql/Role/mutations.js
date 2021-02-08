const roleDAO = require("../../models/role")
const {RoleType} = require("./resolver")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createRole: async (_, args) => {
      try {
        const roleData = args
        const res = await roleDAO.create(roleData)
        return res
      } catch (e) {
        logger.log("warn", "role creation error", e)
        throw new Error("Error creating role")
      }
    },
    deleteRole: async (_, args) => {
      try {
        const res = await roleDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "role deleting error", e)
        throw new Error("Error deleting role")
      }
    },
    changeRole: async (_, args) => {
      try {
        const roleData = {}
        roleData.role = args.newRole

        const res = await roleDAO.findByIdAndUpdate(args._id, roleData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("change role error")
        logger.error(e)
        throw new Error("Error changing role")
      }
    },
  }
}
