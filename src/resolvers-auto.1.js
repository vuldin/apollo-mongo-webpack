/* fails with the following error:
/Users/joshua/projects/graphql/apollo-mongo-webpack/src/resolvers/post.js:7
export default function() {
^^^^^^

SyntaxError: Unexpected token export
    at new Script (vm.js:51:7)
    at createScript (vm.js:138:10)
    at Object.runInThisContext (vm.js:199:10)
    at Module._compile (module.js:624:28)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at /Users/joshua/projects/graphql/apollo-mongo-webpack/node_modules/merge-graphql-schemas/dist/index.cjs.js:3796:22
    at Array.map (<anonymous>)
    at fileLoader (/Users/joshua/projects/graphql/apollo-mongo-webpack/node_modules/merge-graphql-schemas/dist/index.cjs.js:3786:6)
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:2935)
    at o (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:163)
    at Object.<anonymous> (/Users/joshua/projects/graphql/apollo-mongo-webpack/dist/bundle.js:1:2329)
*/
import path from 'path'
import { cwd } from 'process'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(cwd(), 'src', 'resolvers'), {
  extensions: ['.js'],
})

export default mergeResolvers(resolversArray)
