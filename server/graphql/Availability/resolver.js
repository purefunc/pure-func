const availabilityDAO = require("../../models/availability")

module.exports = {
  Availability: {
    _id({ _id }) {
      return _id
    },
    item({ item }) {
      return item
    },
    startDate({ startDate }) {
      return startDate
    },
    endDate({ endDate }) {
      return endDate
    },
    startTime({ startTime }) {
      return startTime
    },
    endTime({ endTime }) {
      return endTime
    },
    type({ type }) {
      return type
    },
    isAvailable({isAvailable}) {
      return isAvailable
    }
  },
  Query: {
    availability(obj, args) {
      const myAvailability = availabilityDAO.findOne({_id: { $eq: args.id } })
      if (!myAvailability) {
        throw new Error("Error")
      }
      return myAvailability
    },
    availabilitiesForItem(obj, args) {
      const myAvailability = availabilityDAO.find({ item: { $eq: args.itemId } })
      if (!myAvailability) {
        throw new Error("Error")
      }
      return myAvailability
    },
  }
}
