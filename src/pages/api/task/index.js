import { connectDB } from 'utils/mongodb'
import Task from 'models/Task'

connectDB()

export default async function handler(req, res) {
  const tasks = await Task.find()
  console.log(tasks)
  res.status(200).json("tasks")
}
