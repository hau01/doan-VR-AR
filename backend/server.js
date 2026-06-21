// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import scenesRoutes from './routes/scenes.js'
// import hotspotsRoutes from './routes/hotspots.js'
// import mediaRoutes from './routes/media.js'

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.json({ message: 'VR/AR API is running' })
// })

// app.use('/api/scenes', scenesRoutes)
// app.use('/api/hotspots', hotspotsRoutes)
// app.use('/api/media', mediaRoutes)

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`)
// })


// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/virtual-tour')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Scene Schema
const sceneSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  location: String,
  category: String,
  hotspots: [{
    pitch: Number,
    yaw: Number,
    title: String,
    description: String,
    mediaUrl: String,
    type: String // 'image', 'video', 'audio', 'text'
  }],
  linkedScenes: [String] // IDs của các scene liên kết
});

const Scene = mongoose.model('Scene', sceneSchema);

// Routes
app.get('/api/scenes', async (req, res) => {
  try {
    const scenes = await Scene.find();
    res.json(scenes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/scenes/:id', async (req, res) => {
  try {
    const scene = await Scene.findById(req.params.id);
    res.json(scene);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/scenes', async (req, res) => {
  try {
    const newScene = new Scene(req.body);
    await newScene.save();
    res.json(newScene);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});