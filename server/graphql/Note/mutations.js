const noteDAO = require("../../models/note")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createNote: async (_, { description }) => {
      try {
        const res = await noteDAO.create({ description })
        return res
      } catch (e) {
        logger.log("warn", "note creation error", e)
        throw new Error("Error creating note")
      }
    },
    editNote: async (_, args) => {
      const noteData = {}
      if (args.description && args.description.length > 0) noteData.description = args.description

      try {
        const note = await noteDAO.findByIdAndUpdate(args._id, noteData, {
          new: true
        })
        return note
      } catch (e) {
        logger.error("note update error")
        logger.error(e)
        throw new Error("Error updating note")
      }
    },
    deleteNote: async (_, args) => {
      try {
        const note = await noteDAO.findByIdAndDelete(args._id)
        return note
      } catch (e) {
        logger.error("note delete error")
        logger.error(e)
        throw new Error("Error deleting note")
      }
    },
  }
}
