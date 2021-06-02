const restaurantDAO = require("../../models/restaurant")
const menuDAO = require("../../models/menu")

module.exports = {
  Restaurant: {
    _id({ _id }) {
      return _id
    },
    name({ name }) {
      return name
    },
    email({ email }) {
      return email
    },
    phone({ phone }) {
      return phone
    },
    menus({ menus }) {
      return menuDAO.find({_id: menus})
    },
  },
  Query: {
    allRestaurants(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const restaurants = restaurantDAO.find().exec()
      if (!restaurants) {
        throw new Error("Error")
      }
      return restaurants
    },
    restaurant(obj, args) {
      const myRestaurant = restaurantDAO.findOne({ _id: { $eq: args.id } })
      if (!myRestaurant) {
        throw new Error("Error")
      }
      return myRestaurant
    },
    restaurantsByEmail(obj, args) {
      const myRestaurant = restaurantDAO.find({ email: { $eq: args.email } })
      if (!myRestaurant) {
        throw new Error("Error")
      }
      return myRestaurant
    },
    restaurantsByName(obj, args) {
      const myRestaurant = restaurantDAO.find({ name: { $eq: args.name } })
      if (!myRestaurant) {
        throw new Error("Error")
      }
      return myRestaurant
    },
    restaurantsByPhone(obj, args) {
      const myRestaurant = restaurantDAO.find({ phone: { $eq: args.phone } })
      if (!myRestaurant) {
        throw new Error("Error")
      }
      return myRestaurant
    },
  }
}
