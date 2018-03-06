//import mongoose from 'mongoose'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//export default mongoose.model(
module.exports = mongoose.model(
  'Todo',
  new Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: Boolean,
  })
)
