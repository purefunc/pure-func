const discountDAO = require("../../models/discount")

module.exports = {
  Discount: {
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
    priceFixedAdjust({ priceFixedAdjust }) {
      return priceFixedAdjust
    },
    pricePercentAdjust({ pricePercentAdjust }) {
      return pricePercentAdjust
    },
    priceType({ priceType }) {
      return priceType
    },
    durationType({ durationType }) {
      return durationType
    },
  },
  Query: {
    discount(obj, args) {
      const myDiscount = discountDAO.findOne({_id: { $eq: args.id } })
      if (!myDiscount) {
        throw new Error("Error")
      }
      return myDiscount
    },
    availabilitiesForItem(obj, args) {
      const myDiscount = discountDAO.find({ item: { $eq: args.itemId } })
      if (!myDiscount) {
        throw new Error("Error")
      }
      return myDiscount
    },
  }
}
