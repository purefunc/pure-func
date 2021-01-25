const categoryDAO = require("../../models/category")
const noteDAO = require("../../models/note")
const itemDAO = require("../../models/item")

module.exports = {
  Category: {
    _id({ _id }) {
      return _id
    },
    name({ name }) {
      return name
    },
    images({ images }) {
      return images
    },
    description({ description }) {
      return description
    },
    price({ price }) {
      return price
    },
    notes({ notes }) {
      return noteDAO.find({_id: notes})
    },
    items({items}) {
      return itemDAO.find({_id: items})
    }
  },
  Query: {
    categories() {
      const categories = categoryDAO.find().exec()
      if (!categories) {
        throw new Error("Error")
      }
      return categories
    },
    category(obj, args) {
      const myCategory = categoryDAO.findOne({ _id: { $eq: args.id } })
      if (!myCategory) {
        throw new Error("Error")
      }
      return myCategory
    },
    categoryByName(obj, args) {
      const myCategory = categoryDAO.findOne({ name: { $eq: args.name } })
      if (!myCategory) {
        throw new Error("Error")
      }
      return myCategory
    },
  }
}
