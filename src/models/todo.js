import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model(
  'Todo',
  new Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: Boolean,
  })
)
