const itemDAO = require("../../models/item")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createItem: async (_, args) => {
      try {
        const itemData = args.item
        const res = await itemDAO.create(itemData)
        return res
      } catch (e) {
        logger.log("warn", "item creation error", e)
        throw new Error("Error creating item")
      }
    },
    deleteItem: async (_, args) => {
      try {
        const res = await itemDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "item deleting error", e)
        throw new Error("Error deleting item")
      }
    },
    editItem: async (_, args) => {
      try {
        const itemData = {}
        if (args.name && args.name.length > 0)
          itemData.name = args.name
        itemData.description = args.description || ""
        itemData.price = args.price || ""
        itemData.images = args.images || ""

        const res = await itemDAO.findByIdAndUpdate(args._id, itemData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("edit item error")
        logger.error(e)
        throw new Error("Error updating item")
      }
    },
    addNoteToItem: (_, args) => {
      try {
        itemDAO
          .updateOne(
            { _id: { $eq: args.itemId } },
            { $addToSet: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addNoteToItem error", e)
        return false
      }
    },
    removeNoteFromItem: (_, args) => {
      try {
        itemDAO
          .updateOne(
            { _id: { $eq: args.itemId } },
            { $pull: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeNoteFromItem error", e)
        return false
      }
    },
    addTagToItem: (_, args) => {
      try {
        itemDAO
          .updateOne(
            { _id: { $eq: args.itemId } },
            { $addToSet: { tags: args.tagId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addTagToItem error", e)
        return false
      }
    },
    removeTagFromItem: (_, args) => {
      try {
        itemDAO
          .updateOne(
            { _id: { $eq: args.itemId } },
            { $pull: { tags: args.tagId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeTagFromItem error", e)
        return false
      }
    }
  }
}
