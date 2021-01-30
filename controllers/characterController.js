import asyncHandler from 'express-async-handler'
import Character from '../models/characterModel.js'

// @desc    Fetch all characters
// @route   GET /api/characters
// @access  Public
const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Character.find({})

  if (characters) {
    res.json(characters)
  } else {
    res.status(404)
    throw new Error('Characters not found')
  }
})

// @desc    Fetch single Character
// @route   GET /api/character/:id
// @access  Public
const getCharacterById = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (character) {
    res.json(character)
  } else {
    res.status(404)
    throw new Error('Character not found')
  }
})

// @desc    Delete a character
// @route   DELETE /api/characters/:id
// @access  Private/Admin
const deleteCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (character) {
    await character.remove()
    res.json({ message: 'Character removed' })
  } else {
    res.status(404)
    throw new Error('Character not found')
  }
})

// @desc    Create a character
// @route   POST /api/character
// @access  Public
const createCharacter = asyncHandler(async (req, res) => {
  const character = new Character({
    name: 'Sample name',
    realName: 'Sample realName',
    firstAppearance: 'Sample firstAppearance',
    powers: 'Sample powers',
    bio: 'Sample bio',
    publisher: 'Sample age',
    image: '/image/sample.jpg',
    comicList: '',
  })

  const createCharacter = await character.save()
  res.status(201).json(createCharacter)
})

export { getCharacters, getCharacterById, deleteCharacter, createCharacter }
