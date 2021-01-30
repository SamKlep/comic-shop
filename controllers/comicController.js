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

// @desc    Create a comic
// @route   POST /api/comics
// @access  Public
// const createComic = asyncHandler(async (req, res) => {
//   const comic = new Comic({
//     title: 'Sample title',
//     subtitle: 'Sample name',
//     publisher: 'Sample name',
//     issue: 'Sample name',
//     year: 'Sample name',
//     age: 0,
//     author: req.user._id,
//     artist: '/images/sample.jpg',
//     character: 'Sample brand',
//     category: 'Sample category',
//     description: 0,
//     image: 0,
//   })

//   const createComic = await product.save()
//   res.status(201).json(createdProduct)

// })

export { getComics, getComicById }
