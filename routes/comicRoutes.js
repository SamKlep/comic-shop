import express from 'express'
const router = express.Router()
import {
  getComics,
  getComicById,
  deleteComic,
  createComic,
} from '../controllers/comicController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getComics).post(protect, admin, createComic)
router.route('/:id').get(getComicById).delete(protect, admin, deleteComic)

export default router
