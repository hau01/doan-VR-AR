// import express from 'express'
// import { getScenes } from '../controllers/sceneController.js'

// const router = express.Router()

// router.get('/', getScenes)

// export default router

const mongoose = require('mongoose');

// Schema cho Hotspot (điểm tương tác)
const hotspotSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  pitch: {
    type: Number,
    required: true,
    min: -90,
    max: 90
  },
  yaw: {
    type: Number,
    required: true,
    min: 0,
    max: 360
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'audio', 'link'],
    default: 'text'
  },
  mediaUrl: String,
  linkedSceneId: String, // ID của scene liên kết nếu là link
  linkedSceneName: String,
  icon: {
    type: String,
    enum: ['info', 'camera', 'sound', 'link', 'warning'],
    default: 'info'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Schema chính cho Scene
const sceneSchema = new mongoose.Schema({
  sceneId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nameEn: String,
  description: {
    type: String,
    required: true
  },
  descriptionEn: String,
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: String,
  category: {
    type: String,
    enum: [
      'entrance',
      'classroom',
      'laboratory',
      'library',
      'cafeteria',
      'sports',
      'administrative',
      'dormitory',
      'outdoor',
      'parking'
    ],
    required: true
  },
  building: {
    type: String,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  location: {
    description: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  // Các điểm tương tác (Hotspots)
  hotspots: [hotspotSchema],
  
  // Scene liên kết (điều hướng giữa các scene)
  linkedScenes: [{
    sceneId: String,
    direction: {
      type: String,
      enum: ['forward', 'backward', 'left', 'right', 'up', 'down']
    }
  }],
  
  // Thông tin chi tiết
  specifications: {
    capacity: Number,
    equipment: [String], // ['Máy tính', 'Projector', 'Whiteboard']
    openingHours: String,
    responsible: String // Người phụ trách
  },
  
  // Hiệu ứng và cấu hình
  effects: {
    enableZoom: { type: Boolean, default: true },
    enableRotation: { type: Boolean, default: true },
    enablePan: { type: Boolean, default: true },
    backgroundColor: { type: String, default: '#000000' }
  },
  
  // SEO và metadata
  metadata: {
    tags: [String],
    keywords: [String],
    popularity: { type: Number, default: 0 }
  },
  
  status: {
    type: String,
    enum: ['active', 'inactive', 'maintenance'],
    default: 'active'
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index để tìm kiếm nhanh
sceneSchema.index({ building: 1, floor: 1 });
sceneSchema.index({ category: 1 });
sceneSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Scene', sceneSchema);
