import express from 'express'
const router = express.Router()
import { getComics } from '../controllers/comicController.js'

router.route('/').get(getComics)

export default router
