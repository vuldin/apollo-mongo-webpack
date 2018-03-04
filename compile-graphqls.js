import readfiles from 'node-readfiles'
import { cwd } from 'process'
import { writeFile } from 'fs'

const schemaFile = `${cwd()}/dist/compiled.gql`
let schemaText = ''

// concat all schema files into ${schemaFile}
readfiles(cwd(), { filter: 'schema/**.gql' }, (err, filename, content) => {
  if (err) throw err
  schemaText += `\n${content}`
}).then(files => {
  console.log(`> schema file count: ${files.length}`)
  writeFile(schemaFile, schemaText, err => {
    if (err) return console.log(err)
  })
})
