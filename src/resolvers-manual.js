import { mergeResolvers } from 'merge-graphql-schemas'

import post from './resolvers/post'
import todo from './resolvers/todo'

const resolvers = [post, todo]
console.log(`> resolvers file count: ${resolvers.length}`)

export default mergeResolvers(resolvers)
