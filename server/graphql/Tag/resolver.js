const tagDAO = require("../../models/tag")

module.exports = {
  Tag: {
    _id({ _id }) {
      return _id
    },
    name({ name }) {
      return name
    },
    symbol({symbol}) {
      return symbol
    },
    description({ description }) {
      return description
    },
  },
  Query: {
    allTags(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const tags = tagDAO.find().exec()
      if (!tags) {
        throw new Error("Error")
      }
      return tags
    },
    tag(obj, args) {
      const myTag = tagDAO.findOne({ _id: { $eq: args.id } })
      if (!myTag) {
        throw new Error("Error")
      }
      return myTag
    },
    tagByName(obj, args) {
      const myTag = tagDAO.findOne({ name: { $eq: args.name } })
      if (!myTag) {
        throw new Error("Error")
      }
      return myTag
    }
  }
}
