import express from 'express'
import { getHotspots } from '../controllers/hotspotController.js'

const router = express.Router()

router.get('/', getHotspots)

export default router
