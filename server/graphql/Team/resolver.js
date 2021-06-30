const teamDAO = require("../../models/team")
const userDAO = require("../../models/user")
const restaurantDAO = require("../../models/restaurant")
const menuDAO = require("../../models/menu")

module.exports = {
  Team: {
    _id({ _id }) {
      return _id
    },
    name({ name }) {
      return name
    },
    owner({ owner }) {
      return userDAO.find({ _id: owner })
    },
    users({ users }) {
      return userDAO.find({ _id: { $in: users } })
    },
    restaurants({ restaurants }) {
      return restaurantDAO.find({ _id: { $in: restaurants } })
    },
    menus({ menus }) {
      return menuDAO.find({ _id: menus })
    },
  },
  Query: {
    allTeams(_, args, { userIsAdmin }) {
      if (!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const teams = teamDAO.find().exec()
      if (!teams) {
        throw new Error("Error")
      }
      return teams
    },
    team(obj, { _id }) {
      const myTeam = teamDAO.findOne({ _id: { $eq: _id } })
      if (!myTeam) {
        throw new Error("Error")
      }
      return myTeam
    },
    teamsForUser(obj, args) {
      const myTeam = teamDAO.find({ user: { $eq: args.userId } })
      if (!myTeam) {
        throw new Error("Error")
      }
      return myTeam
    },
    teamsForOwner(obj, args) {
      const myTeam = teamDAO.find({ owner: { $eq: args.userId } })
      if (!myTeam) {
        throw new Error("Error")
      }
      return myTeam
    },
    teamsByName(obj, args) {
      const myTeam = teamDAO.find({ name: { $eq: args.name } })
      if (!myTeam) {
        throw new Error("Error")
      }
      return myTeam
    },
    teamsForRestaurant(obj, args) {
      const myTeam = teamDAO.find({ restaurant: { $eq: args.restaurantId } })
      if (!myTeam) {
        throw new Error("Error")
      }
      return myTeam
    },
  },
}
