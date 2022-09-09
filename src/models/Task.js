import { Schema, model, models } from 'mongoose'

const taskSchema = new Schema({
  title: {
    type: String, 
    required: [true, "Title is required!"],
    trim: true,
    maxlength: [40, "Max 40 characters"]
  },
  description: {
    type: String, 
    required: [true, "Description is required!"],
    trim: true,
    maxlength: [200, "Max 200 characters"]
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model("Task", taskSchema)