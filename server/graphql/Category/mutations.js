const categoryDAO = require("../../models/category")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createCategory: async (_, args) => {
      try {
        const categoryData = args
        const res = await categoryDAO.create(categoryData)
        return res
      } catch (e) {
        logger.log("warn", "category creation error", e)
        throw new Error("Error creating category")
      }
    },
    deleteCategory: async (_, args) => {
      try {
        const res = await categoryDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "category deleting error", e)
        throw new Error("Error deleting category")
      }
    },
    editCategory: async (_, args) => {
      try {
        const categoryData = {}
        if (args.name && args.name.length > 0)
          categoryData.name = args.name
        categoryData.description = args.description || ""
        categoryData.price = args.price || ""
        categoryData.images = args.images || []

        const res = await categoryDAO.findByIdAndUpdate(args._id, categoryData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("edit category error")
        logger.error(e)
        throw new Error("Error updating category")
      }
    },
    addNoteToCategory: (_, args) => {
      try {
        categoryDAO
          .updateOne(
            { _id: { $eq: args.categoryId } },
            { $addToSet: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addNoteToCategory error", e)
        return false
      }
    },
    removeNoteFromCategory: (_, args) => {
      try {
        categoryDAO
          .updateOne(
            { _id: { $eq: args.categoryId } },
            { $pull: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeNoteFromCategory error", e)
        return false
      }
    },
    addItemToCategory: (_, args) => {
      try {
        categoryDAO
          .updateOne(
            { _id: { $eq: args.categoryId } },
            { $addToSet: { items: args.itemId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addItemToCategory error", e)
        return false
      }
    },
    removeItemFromCategory: (_, args) => {
      try {
        categoryDAO
          .updateOne(
            { _id: { $eq: args.categoryId } },
            { $pull: { items: args.itemId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeItemFromCategory error", e)
        return false
      }
    }
  }
}
