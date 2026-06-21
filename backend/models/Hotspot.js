import mongoose from 'mongoose'

const hotspotSchema = new mongoose.Schema(
  {
    sceneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scene', required: true },
    label: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    targetSceneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scene' }
  },
  { timestamps: true }
)

const Hotspot = mongoose.model('Hotspot', hotspotSchema)

export default Hotspot
