/*
import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

console.log('in resolvers.js')
//const dir = path.join('src', 'resolvers')
const dir = './src/resolvers'
const resolversArray = fileLoader(dir, {
  extensions: ['.js'],
})
console.log(`> resolvers file count: ${resolversArray.length}`)

export default mergeResolvers(resolversArray, { all: true })
*/

/*
import path from 'path'
import { cwd } from 'process'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(cwd(), 'src', 'resolvers'), {
  extensions: ['.js'],
})

export default mergeResolvers(resolversArray)
*/
