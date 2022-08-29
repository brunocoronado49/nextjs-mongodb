import { connectDB } from '../../../utils/mongodb'

connectDB()

export default function handler(req, res) {
  res.status(200).json("tasks")
}
