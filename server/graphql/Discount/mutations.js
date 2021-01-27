const discountDAO = require("../../models/discount")
const logger = require("../../config/logger")

module.exports = {
  Mutation: {
    createDiscount: async (_, args) => {
      try {
        const discountData = args
        if(args.startDate || args.endDate) {
          discountData.durationType = "DATE"
        } else if(args.startTime || args.endTime) {
          discountData.durationType = "TIME"
        } else {
          discountData.durationType = "ALWAYS"
        }

        if(args.priceFixedAdjust) {
          discountData.priceType = "FIXED"
        } else if(args.pricePercentAdjust) {
          discountData.priceType = "PERCENT"
        } else {
          discountData.priceType = "NONE"
        }

        const res = await discountDAO.create(discountData)
        return res
      } catch (e) {
        logger.log("warn", "discount creation error", e)
        throw new Error("Error creating discount")
      }
    },
    deleteDiscount: async (_, args) => {
      try {
        const res = await discountDAO.deleteOne({_id: args._id})
        return res
      } catch (e) {
        logger.log("warn", "discount deleting error", e)
        throw new Error("Error deleting discount")
      }
    },
    setDiscountDates: async (_, args) => {
      try {
        const discountData = {}
        if(args.startDate)
          discountData.startDate = args.startDate
        if(args.endDate)
          discountData.endDate = args.endDate
        discountData.durationType = "DATE"

        const res = await discountDAO.findByIdAndUpdate(args._id, discountData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("discount dates error")
        logger.error(e)
        throw new Error("Error updating discount dates")
      }
    },
    setDiscountTimes: async (_, args) => {
      try {
        const discountData = {}
        if(args.startTime)
          discountData.startTime = args.startTime
        if(args.endTime)
          discountData.endTime = args.endTime
        discountData.durationType = "TIME"

        const res = await discountDAO.findByIdAndUpdate(args._id, discountData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("discount times error")
        logger.error(e)
        throw new Error("Error updating discount times")
      }
    },
    setDiscountFixedPrice: async (_, args) => {
      try {
        const discountData = {}
        discountData.priceFixedAdjust = args.priceFixedAdjust
        discountData.priceType = "FIXED"

        const res = await discountDAO.findByIdAndUpdate(args._id, discountData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("discount fixed price error")
        logger.error(e)
        throw new Error("Error updating discount fixed price")
      }
    },
    setDiscountPercentPrice: async (_, args) => {
      try {
        const discountData = {}
        discountData.pricePercentAdjust = args.pricePercentAdjust
        discountData.priceType = "PERCENT"

        const res = await discountDAO.findByIdAndUpdate(args._id, discountData, {
          new: true
        })
        return res
      } catch (e) {
        logger.error("discount percent price error")
        logger.error(e)
        throw new Error("Error updating discount percent price")
      }
    },
  }
}
