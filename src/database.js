import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017'

export default class {
  constructor() {
    this._connection = null
    this.open.bind(this)
    this.close.bind(this)
  }
  open() {
    this._connection = mongoose.createConnection(`${mongoUrl}/graphql`, err => {
      if (err) return err
      console.log('> mongo connected')
    })
  }
  close() {
    this._connection.close()
    console.log('> mongo disconnected')
  }
}
