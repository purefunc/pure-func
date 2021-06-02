const noteDAO = require("../../models/note")

module.exports = {
  Note: {
    _id({ _id }) {
      return _id
    },
    description({ description }) {
      return description
    },
  },
  Query: {
    allNotes(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const notes = noteDAO.find().exec()
      if (!notes) {
        throw new Error("Error")
      }
      return notes
    },
    note(obj, args) {
      const myNote = noteDAO.findOne({ _id: { $eq: args.id } })
      if (!myNote) {
        throw new Error("Error")
      }
      return myNote
    },
  }
}
