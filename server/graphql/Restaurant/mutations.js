const restaurantDAO = require("../../models/restaurant")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createRestaurant: async (_, args) => {
      try {
        const restaurantData = args
        const res = await restaurantDAO.create(restaurantData)
        return res
      } catch (e) {
        logger.log("warn", "restaurant creation error", e)
        throw new Error("Error creating restaurant")
      }
    },
    deleteRestaurant: async (_, args) => {
      try {
        const res = await restaurantDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "restaurant deleting error", e)
        throw new Error("Error deleting restaurant")
      }
    },
    editRestaurant: async (_, args) => {
      try {
        const restaurantData = {}
        if (args.name && args.name.length > 0)
          restaurantData.name = args.name
        restaurantData.email = args.email || ""
        restaurantData.phone = args.phone || ""

        const res = await restaurantDAO.findByIdAndUpdate(args._id, restaurantData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("edit restaurant error")
        logger.error(e)
        throw new Error("Error updating restaurant")
      }
    },
    addMenuToRestaurant: async (_, args) => {
      try {
        await restaurantDAO
          .findByIdAndUpdate(
            args.restaurantId,
            { $addToSet: { menus: args.menuId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "addMenuToRestaurant error", e)
        return false
      }
    },
    removeMenuFromRestaurant: async (_, args) => {
      try {
        await restaurantDAO
          .findByIdAndUpdate(
            args.restaurantId,
            { $pull: { menus: args.menuId } }
          )
          .exec()
        return true
      } catch (e) {
        logger.log("warn", "removeMenuFromRestaurant error", e)
        return false
      }
    },
  }
}
