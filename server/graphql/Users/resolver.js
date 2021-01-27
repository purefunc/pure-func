const userDAO = require("../../models/user")
const restaurantDAO = require("../../models/restaurant")
const logger = require('../../config/logger')

module.exports = {
  User: {
    _id({ _id }) {
      return _id
    },
    username({ username }) {
      return username
    },
    displayName({ displayName }) {
      return displayName
    },
    email({ email }) {
      return email
    },
    restaurants({ restaurants }) {
      return restaurantDAO.find({ _id: restaurants })
    },
    isAdmin({ isAdmin }) {
      return isAdmin
    }
  },
  Query: {
    users() {
      const users = userDAO.find().exec()
      if (!users) {
        throw new Error("Error")
      }
      return users
    },
    user(obj, args) {
      const myUser = userDAO.findOne({ username: { $eq: args.username } })
      if (!myUser) {
        throw new Error("Error")
      }
      return myUser
    },
    me(_, args, { userId }) {
      if (!userId) {
        throw new Error("You are not authenticated")
      }
      
      try {
        return userDAO.findById(userId)
      } catch(e) {
        logger.error("Me error")
        logger.error(e)
        throw new Error("Error retrieving user")
      }
    }
  }
}
