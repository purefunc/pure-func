const roleDAO = require("../../models/role")
const userDAO = require("../../models/user")
const teamDAO = require("../../models/team")

const RoleType = Object.freeze({
  OWNER: "OWNER",
  EDITOR: "EDITOR",
  VIEWER: "VIEWER"
})

module.exports = {
  RoleType,
  Role: {
    _id({ _id }) {
      return _id
    },
    user({ user }) {
      return userDAO.find({_id: user})
    },
    team({ team }) {
      return teamDAO.find({_id: team})
    },
    role({ role }) {
      return role
    },
  },
  Query: {
    allRoles(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const roles = roleDAO.find().exec()
      if (!roles) {
        throw new Error("Error")
      }
      return roles
    },
    role(obj, args) {
      const myRole = roleDAO.findOne({ _id: { $eq: args.id } })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
    rolesForUser(obj, args) {
      const myRole = roleDAO.find({ user: { $eq: args.userId } })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
    rolesForTeam(obj, args) {
      const myRole = roleDAO.find({ team: { $eq: args.teamId } })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
    rolesAsOwner() {
      const myRole = roleDAO.find({ role: { $eq: RoleType.OWNER} })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
    rolesAsEditor() {
      const myRole = roleDAO.find({ role: { $eq: RoleType.EDITOR} })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
    rolesAsViewer() {
      const myRole = roleDAO.find({ role: { $eq: RoleType.VIEWER} })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    },
  }
}
