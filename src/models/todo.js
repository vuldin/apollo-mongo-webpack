const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model(
  'Todo',
  new Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: Boolean,
  })
)
