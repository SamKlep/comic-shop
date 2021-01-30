import asyncHandler from 'express-async-handler'
import Comic from '../models/comicModel.js'

// @desc    Fetch all comics
// @route   GET /api/comics
// @access  Public
const getComics = asyncHandler(async (req, res) => {
  const comics = await Comic.find({})

  if (comics) {
    res.json(comics)
  } else {
    res.status(404)
    throw new Error('Comics not found')
  }
})

export { getComics }
