import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './type'

import resolvers from './resolvers-manual'
//import resolvers from './resolvers-auto'

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
