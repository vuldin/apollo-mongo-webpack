const Todo = require('../models/todo')

const getTodos = () => {
  return new Promise((resolve, reject) => {
    Todo.find((err, todos) => {
      if (err) reject(err)
      else resolve(todos)
    })
  })
}

module.exports = {
  Query: {
    todos: () => {
      return getTodos()
    },
    todo: id => {
      return new Promise((resolve, reject) => {
        Todo.findById(id, (err, todo) => {
          if (err) return reject(err)
          resolve(todo)
        })
      })
    },
  },
  Mutation: {
    addTodo: (_, { title }) => {
      const todo = new Todo({
        title,
        completed: false,
      })
      todo.id = todo_id
      return new Promise((resolve, reject) => {
        todo.save(err => {
          if (err) return reject(err)
          resolve(todo)
        })
      })
    },
    toggleTodo: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Todo.findById(id, (err, todo) => {
          if (err) return reject(err)
          if (!todo) return reject(`Todo ${id} not found`)
          todo.completed = !todo.completed
          todo.save(err => {
            if (err) return reject(err)
            resolve(todo)
          })
        })
      })
    },
    destroyTodo: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Todo.findById(id, (err, todo) => {
          if (err) return reject(err)
          if (!todo) return reject(`Todo ${id} not found`)
          todo.remove(err => {
            if (err) return reject(err)
            resolve(todo)
          })
        })
      })
    },
    setAllTodosCompleted: (_, { completed }) => {
      return new Promise((resolve, reject) => {
        Todo.find((err, todos) => {
          if (err) return reject(err)
          Todo.update(
            { _id: { $in: todos.map(d => d._id) } },
            { completed },
            { multi: true },
            err => {
              if (err) return reject(err)
              resolve(getTodos())
            }
          )
        })
      })
    },
  },
}
