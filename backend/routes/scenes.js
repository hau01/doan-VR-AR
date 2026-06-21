import express from 'express'
import { getScenes } from '../controllers/sceneController.js'

const router = express.Router()

router.get('/', getScenes)

export default router
