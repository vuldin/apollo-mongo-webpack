import path from 'path'
import { cwd } from 'process'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

// modules and all dependencies inside folder passed to fileLoader must be cjs
const resolversArray = fileLoader(path.join(cwd(), 'src', 'resolvers'), {
  extensions: ['.js'],
})

export default mergeResolvers(resolversArray)
