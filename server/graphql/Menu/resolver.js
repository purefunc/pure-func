const categoryDAO = require("../../models/category")
const menuDAO = require("../../models/menu")

module.exports = {
  Menu: {
    _id({ _id }) {
      return _id
    },
    title({ title }) {
      return title
    },
    logo({ logo }) {
      return logo
    },
    bgImage({ bgImage }) {
      return bgImage
    },
    categories({ categories }) {
      return categoryDAO.find({_id: categories})
    },
  },
  Query: {
    menus() {
      const menus = menuDAO.find().exec()
      if (!menus) {
        throw new Error("Error")
      }
      return menus
    },
    menu(obj, args) {
      const myMenu = menuDAO.findOne({ _id: { $eq: args.id } })
      if (!myMenu) {
        throw new Error("Error")
      }
      return myMenu
    },
    menuByTitle(obj, args) {
      const myMenu = categoryDAO.findOne({ title: { $eq: args.title } })
      if (!myMenu) {
        throw new Error("Error")
      }
      return myMenu
    },
  }
}
