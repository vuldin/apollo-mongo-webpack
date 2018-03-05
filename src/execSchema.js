import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './type'

//import resolvers from './resolvers-auto.1'
//import resolvers from './resolvers-auto.2'
import resolvers from './resolvers-manual'

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
