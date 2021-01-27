const availabilityDAO = require("../../models/availability")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createAvailability: async (_, args) => {
      try {
        const availabilityData = args
        if(args.startDate && args.endDate) {
          availabilityData.type = ""
        }
        const res = await availabilityDAO.create(availabilityData)
        return res
      } catch (e) {
        logger.log("warn", "availability creation error", e)
        throw new Error("Error creating availability")
      }
    },
    deleteAvailability: async (_, args) => {
      try {
        const res = await availabilityDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "availability deleting error", e)
        throw new Error("Error deleting availability")
      }
    },
    setAvailabilityDates: async (_, args) => {
      try {
        const availabilityData = {}
        if(args.startDate)
          availabilityData.startDate = args.startDate
        if(args.endDate)
          availabilityData.endDate = args.endDate
        availabilityData.type = "DATE"

        const res = await availabilityDAO.findByIdAndUpdate(args._id, availabilityData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("availability dates error")
        logger.error(e)
        throw new Error("Error updating availability dates")
      }
    },
    setAvailabilityTimes: async (_, args) => {
      try {
        const availabilityData = {}
        if(args.startTime)
          availabilityData.startTime = args.startTime
        if(args.endTime)
          availabilityData.endTime = args.endTime
        availabilityData.type = "TIME"

        const res = await availabilityDAO.findByIdAndUpdate(args._id, availabilityData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("availability times error")
        logger.error(e)
        throw new Error("Error updating availability times")
      }
    },
    setAvailabilityOverride: async (_, args) => {
      try {
        const availabilityData = {}
        availabilityData.isAvailable = args.isAvailable
        availabilityData.type = "MANUAL"

        const res = await availabilityDAO.findByIdAndUpdate(args._id, availabilityData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("availability override error")
        logger.error(e)
        throw new Error("Error updating availability override")
      }
    },
  }
}
