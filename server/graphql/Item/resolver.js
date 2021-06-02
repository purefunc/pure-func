const itemDAO = require("../../models/item")
const noteDAO = require("../../models/note")
const tagDAO = require("../../models/tag")
const availabilityDAO = require("../../models/availability")
const discountDAO = require("../../models/discount")
const availability = require("../../models/availability")

module.exports = {
  Item: {
    _id({ _id }) {
      return _id
    },
    name({ name }) {
      return name
    },
    description({ description }) {
      return description
    },
    async price({ _id, price }) {
      const discounts = await discountDAO.find({item: {$eq: _id}}).exec()
      let adjustedPrice = price
      const now = new Date()

      const adjustPrice = discount => {
        if(discount.priceType === "FIXED") {
            return price - discount.priceFixedAdjust
          } else if( discount.priceType === "PERCENT") {
            return price * discount.pricePercentAdjust
          }
          return price
      }

      const checkTime = (startTime, endTime) => {
        const [startHours, startMinutes] = startTime.split(":")
        const [endHours, endMinutes] = endTime.split(":")
        if((startHours < now.getHours()
        ) || (startHours === now.getHours() && startMinutes < now.getMinutes())) {
          // After start time
          if(endHours > now.getHours() || (endHours === now.getHours() && endMinutes > now.getMinutes())) {
            // Before end time
            return true
          }
        }

        return false
      }

      discounts.forEach(discount => {
        if(discount.durationType === "DATE" &&
          discount.startDate.getTime() < now.getTime() &&
          discount.endDate.getTime() > now.getTime()
        ) {
          adjustedPrice = adjustPrice(discount)
        } else if (discount.durationType === "TIME" &&
          checkTime(discount.startTime, discount.endTime)) {
            adjustedPrice = adjustPrice(discount)
          }
      })

      if(adjustedPrice < 0) {
        adjustedPrice = 0
      }

      return adjustedPrice
    },
    images({ images }) {
      return images
    },
    notes({ notes }) {
      return noteDAO.find({_id: notes})
    },
    tags({tags}) {
      return tagDAO.find({_id: tags})
    },
    async isAvailable({_id}) {
      const avails = await availabilityDAO.find({item: {$eq: _id}}).exec()
      let isAvail = true
      const now = new Date()

      const checkTime = (startTime, endTime) => {
        const [startHours, startMinutes] = startTime.split(":")
        const [endHours, endMinutes] = endTime.split(":")
        if((startHours < now.getHours()
        ) || (startHours === now.getHours() && startMinutes < now.getMinutes())) {
          // After start time
          if(endHours > now.getHours() || (endHours === now.getHours() && endMinutes > now.getMinutes())) {
            // Before end time
            return true
          }
        }

        return false
      }

      avails.sort((a,b) => {
        const map = {}
        map["TIME"] = 1
        map["DATE"] = 2
        map["ALWAYS"] = 3

        if(map[a.type] < map[b.type]) {
          return -1
        }
        if(map[a.type] > map[b.type]) {
          return 1
        }
        return 0
      }).forEach(availabilty => {
        if(availability.type === "DATE" &&
          availability.startDate.getTime() < now.getTime() &&
          availability.endDate.getTime() > now.getTime()
        ) {
          isAvail = availabilty.isAvailable
        } else if (availability.type === "TIME" &&
          checkTime(availability.startTime, availability.endTime)) {
            isAvail = availabilty.isAvailable
          } else if(availabilty.type === "ALWAYS") {
            isAvail = availabilty.isAvailable
          }
      })

      return isAvail
    }
  },
  Query: {
    allItems(_, args, {userIsAdmin}) {
      if(!userIsAdmin) {
        throw new Error("Only admins can see this")
      }
      const items = itemDAO.find().exec()
      if (!items) {
        throw new Error("Error")
      }
      return items
    },
    item(obj, args) {
      const myItem = itemDAO.findOne({ _id: { $eq: args.id } })
      if (!myItem) {
        throw new Error("Error")
      }
      return myItem
    },
    itemByName(obj, args) {
      const myItem = itemDAO.findOne({ name: { $eq: args.name } })
      if (!myItem) {
        throw new Error("Error")
      }
      return myItem
    },
  }
}
