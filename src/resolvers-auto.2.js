/* fails with the following error:
module.js:557
    throw err;
    ^

Error: Cannot find module 'src/resolvers/post.js'
    at Function.Module._resolveFilename (module.js:555:15)
    at Function.Module._load (module.js:482:25)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at /Users/joshua/projects/graphql/apollo-mongo-webpack/node_modules/merge-graphql-schemas/dist/index.cjs.js:3796:22
    at Array.map (<anonymous>)
    at fileLoader (/Users/joshua/projects/graphql/apollo-mongo-webpack/node_modules/merge-graphql-schemas/dist/index.cjs.js:3786:6)
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:2963)
    at o (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:163)
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:2329)
    at o (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:163)
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:1065)
    at o (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:163)
    at /Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:513
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:522)
    at Module._compile (module.js:660:30)
*/
import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const dir = path.join('src', 'resolvers')
const resolversArray = fileLoader(dir, {
  extensions: ['.js'],
})
console.log(`> resolvers file count: ${resolversArray.length}`)

export default mergeResolvers(resolversArray, { all: true })
