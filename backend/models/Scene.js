import mongoose from 'mongoose'

const sceneSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
)

const Scene = mongoose.model('Scene', sceneSchema)

export default Scene
