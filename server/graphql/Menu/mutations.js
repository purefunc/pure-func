const menuDAO = require("../../models/menu")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createMenu: async (_, args) => {
      try {
        const res = await menuDAO.create(args.menu)
        return res
      } catch (e) {
        logger.log("warn", "menu creation error", e)
        throw new Error("Error creating menu")
      }
    },
    deleteMenu: async (_, args) => {
      try {
        const res = await menuDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "menu deleting error", e)
        throw new Error("Error deleting menu")
      }
    },
    editMenu: async (_, args) => {
      try {
        const menuData = {}
        if (args.title && args.title.length > 0)
          menuData.title = args.title
        menuData.logo = args.logo || ""
        menuData.bgImage = args.bgImage || ""

        const res = await menuDAO.findByIdAndUpdate(args._id, menuData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("edit menu error")
        logger.error(e)
        throw new Error("Error updating menu")
      }
    },
    addCategoryToMenu: (_, args) => {
      try {
        menuDAO
          .updateOne(
            { _id: { $eq: args.menuId } },
            { $addToSet: { categories: args.categoryId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addCategoryToMenu error", e)
        return false
      }
    },
    removeCategoryFromMenu: (_, args) => {
      try {
        menuDAO
          .updateOne(
            { _id: { $eq: args.menuId } },
            { $pull: { categories: args.categoryId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeCategoryFromMenu error", e)
        return false
      }
    },
  }
}
