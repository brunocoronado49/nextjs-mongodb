import { connect, connection } from 'mongoose'

const conn = {
  isConnected: false
}

export const connectDB = async () => {
  if (conn.isConnected)  return

  const db = await connect(process.env.MONGODB_URL)
  conn.isConnected = db.connectio

  console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
  console.log("Mongodb is connected!")
})

connection.on("error", (err) => {
  console.log("Database error: ", err)
})