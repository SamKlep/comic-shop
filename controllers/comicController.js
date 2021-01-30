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

// @desc    Fetch single comic
// @route   GET /api/comics/:id
// @access  Public
const getComicById = asyncHandler(async (req, res) => {
  const comic = await Comic.findById(req.params.id)

  if (comic) {
    res.json(comic)
  } else {
    res.status(404)
    throw new Error('Comic not found')
  }
})

// @desc    Delete a comic
// @route   DELETE /api/comics/:id
// @access  Private/Admin
const deleteComic = asyncHandler(async (req, res) => {
  const comic = await Comic.findById(req.params.id)

  if (comic) {
    await comic.remove()
    res.json({ message: 'Comic removed' })
  } else {
    res.status(404)
    throw new Error('Comic not found')
  }
})

// @desc    Create a comic
// @route   POST /api/comics
// @access  Public
const createComic = asyncHandler(async (req, res) => {
  const comic = new Comic({
    title: 'Sample title',
    subtitle: 'Sample subtitle',
    publisher: 'Sample publisher',
    issue: 0,
    year: 0,
    age: 'Sample age',
    author: 'Sample author',
    artist: 'Sample artist',
    character: 'Sample',
    category: 'Sample category',
    description: 'Sample description',
    image: '/images/sample.jpg',
  })

  const createComic = await comic.save()
  res.status(201).json(createComic)
})

export { getComics, getComicById, deleteComic, createComic }
