const categoryDAO = require("../../models/category")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createCategory: async (_, args) => {
      try {
        const categoryData = args.category
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
        if (args.menu.name && args.menu.name.length > 0)
          categoryData.menu.name = args.menu.name
        categoryData.menu.description = args.menu.description || ""
        categoryData.menu.price = args.menu.price || ""
        categoryData.menu.images = args.menu.images || []

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
    addNoteToCategory: async (_, args) => {
      try {
        await categoryDAO
          .findByIdAndUpdate(
            args.categoryId,
            { $addToSet: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addNoteToCategory error", e)
        return false
      }
    },
    removeNoteFromCategory: async (_, args) => {
      try {
        await categoryDAO
          .findByIdAndUpdate(
            args.categoryId,
            { $pull: { notes: args.noteId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeNoteFromCategory error", e)
        return false
      }
    },
    addItemToCategory: async (_, args) => {
      try {
        await categoryDAO
          .findByIdAndUpdate(
            args.categoryId,
            { $addToSet: { items: args.itemId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addItemToCategory error", e)
        return false
      }
    },
    removeItemFromCategory: async (_, args) => {
      try {
        await categoryDAO
          .findByIdAndUpdate(
            args.categoryId,
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
