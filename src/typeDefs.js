import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join('src', 'types'))
console.log(`> types file count: ${typesArray.length}`)

export default mergeTypes(typesArray, { all: true })
