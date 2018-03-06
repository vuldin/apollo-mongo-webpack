import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017'

export default {
  open() {
    mongoose.connect(`${mongoUrl}/graphql`, err => {
      if (err) return err
      console.log('> mongo connected')
    })
  },
  close() {
    //mongoose.connection.close()
    mongoose.disconnect()
    console.log('> mongo disconnected')
  },
}
