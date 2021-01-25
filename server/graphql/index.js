const { ApolloServer } = require("apollo-server-express")
const { merge } = require("lodash")

const commonResolver = require("./Common/resolvers")
const tagResolver = require("./Tag/resolver")
const noteResolver = require("./Note/resolver")
const itemResolver = require("./Item/resolver")
const categoryResolver = require("./Category/resolver")
const menuResolver = require("./Menu/resolver")
const restaurantResolver = require("./Restaurant/resolver")
const userResolver = require("./Users/resolver")
const availabilityResolver = require("./Availability/resolver")
const discountResolver = require("./Discount/resolver")

const commonTypeDef = require("./Common/schema.gql")
const tagTypeDef = require("./Tag/schema.gql")
const noteTypeDef = require("./Note/schema.gql")
const itemTypeDef = require("./Item/schema.gql")
const categoryTypeDef = require("./Category/schema.gql")
const menuTypeDef = require("./Menu/schema.gql")
const restaurantTypeDef = require("./Restaurant/schema.gql")
const userTypeDef = require("./Users/schema.gql")
const availabilityTypeDef = require("./Availability/schema.gql")
const discountTypeDef = require("./Discount/schema.gql")

const commonMutations = require("./Common/mutation")
const tagMutations = require("./Tag/mutations")
const noteMutations = require("./Note/mutations")
const itemMutations = require("./Item/mutations")
const categoryMutations = require("./Category/mutations")
const menuMutations = require("./Menu/mutations")
const restaurantMutations = require("./Restaurant/mutations")
const userMutations = require("./Users/mutations")
const availabilityMutations = require("./Availability/mutations")
const discountMutations = require("./Discount/mutations")

const queries = merge(
  commonResolver,
  tagResolver,
  noteResolver,
  itemResolver,
  categoryResolver,
  menuResolver,
  restaurantResolver,
  userResolver,
  availabilityResolver,
  discountResolver
)
const mutations = merge(
  commonMutations,
  tagMutations,
  noteMutations,
  itemMutations,
  categoryMutations,
  menuMutations,
  restaurantMutations,
  userMutations,
  availabilityMutations,
  discountMutations
)
const resolvers = merge(queries, mutations)

const context = request => {
  const userId = request.req.userId
  const username = request.req.username
  const userIsAdmin = request.req.isAdmin

  return { request, userId, username, userIsAdmin }
}

const apolloServer = new ApolloServer({
  context,
  resolvers,
  typeDefs: [
    commonTypeDef,
    tagTypeDef,
    noteTypeDef,
    itemTypeDef,
    categoryTypeDef,
    menuTypeDef,
    restaurantTypeDef,
    userTypeDef,
    availabilityTypeDef,
    discountTypeDef
  ]
})

module.exports = { apolloServer }
