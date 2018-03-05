// reimplement according to this link:
// https://github.com/sazzer/graphql-tester/blob/master/src/test/servers/express-server.test.js
import 'babel-polyfill' // needed for async/await
import { addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'

// loads all types/queries/mutations (not just todo)
import schema from '../execSchema'

addMockFunctionsToSchema({ schema })

const main = async () => {
  // create two todos
  const todo1Result = await graphql(
    schema,
    `
      mutation {
        addTodo(title: "todo1") {
          id
          title
          completed
        }
      }
    `
  )
  console.log(`${JSON.stringify(todo1Result.data, null, 2)}`)
  const todo2Result = await graphql(
    schema,
    `
      mutation {
        addTodo(title: "todo2") {
          id
          title
          completed
        }
      }
    `
  )
  console.log(`${JSON.stringify(todo2Result.data, null, 2)}`)

  // query todos
  const todosResult = await graphql(
    schema,
    `
      query {
        todos {
          id
          title
          completed
        }
      }
    `
  )
  console.log(`${JSON.stringify(todosResult.data, null, 2)}`)
}

main()

/*
// create two todos
const todo1 = client.mutate({
  mutation: gql`
    {
      addTodo(title: "test title 1") {
        id
        title
        completed
      }
    }
  `,
})
const todo2 = client.mutate({
  mutation: gql`
    {
      addTodo(title: "test title 2") {
        id
        title
        completed
      }
    }
  `,
})

console.log(todo1, todo2)
*/
