import express from 'express'
const router = express.Router()
import { getComics, getComicById } from '../controllers/comicController.js'

router.route('/').get(getComics)
router.route('/:id').get(getComicById)

export default router
