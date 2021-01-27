const tagDAO = require("../../models/tag")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createTag: async (_, { name }) => {
      try {
        const res = await tagDAO.create({ name, symbol, description })
        return res
      } catch (e) {
        logger.log("warn", "tag creation error", e)
        throw new Error("Error creating account")
      }
    },
    editTag: async (_, args) => {
      const tagData = {}
      if (args.name && args.name.length > 0) tagData.name = args.name
      tagData.symbol = args.symbol
      tagData.description = args.symbol
      try {
        const tag = await tagDAO.findByIdAndUpdate(args._id, tagData, {
          new: true
        })
        return tag
      } catch (e) {
        logger.error("tag update error")
        logger.error(e)
        throw new Error("Error updating tag")
      }
    },
    deleteTag: async (_, args) => {
      try {
        const tag = await tagDAO.findByIdAndDelete(args._id)
        return tag
      } catch (e) {
        logger.error("tag delete error")
        logger.error(e)
        throw new Error("Error deleting tag")
      }
    }
  }
}
