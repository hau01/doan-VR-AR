import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    images: ['/images/360/scene-1.jpg'],
    videos: [],
    audio: []
  })
})

export default router
