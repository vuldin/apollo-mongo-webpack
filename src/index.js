import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
//import resolvers from './resolvers/todo'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const port = process.env.PORT || 8080
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(port, () => console.log(`> server running on ${port}`))
