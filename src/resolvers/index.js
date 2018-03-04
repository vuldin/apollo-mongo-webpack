import mongoose from 'mongoose'
import { mergeResolvers } from 'merge-graphql-schemas'

import post from './post'
import todo from './todo'

//mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/graphql', err => {
  if (err) return err
  console.log('> mongo connected')
})

const resolvers = [post, todo]
console.log(`> resolvers file count: ${resolvers.length}`)

export default mergeResolvers(resolvers)
