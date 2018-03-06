import bodyParser from 'body-parser'
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import Database from './database'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8080
const app = express()

const database = new Database()
database.open()
let stopping = false

import schema from './execSchema'

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const server = app.listen(port, () =>
  console.log(`> server running on ${port}`)
)

// ensure db connection closes along with server
// https://stackoverflow.com/a/13446053/2316606
app.use((req, res, next) => {
  if (!stopping) return next()
  res.setHeader('Connection', 'close')
  res.send(503, 'server restarting')
})

function cleanup() {
  console.log('\n')
  stopping = true
  server.close(() => {
    console.log('> closed remaining connections')
    database.close()
    process.exit()
  })

  setTimeout(() => {
    console.error('error closing connections in time, forcing shut down')
    process.exit(1)
  }, 5000)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
