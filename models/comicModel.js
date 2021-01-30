// Title, Sub-title, Publisher, Issue, Year, Author, Artist, Character, Condition, Description, Image

import mongoose from 'mongoose'

const comicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    publisher: {
      type: String,
      required: true,
    },
    issue: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    character: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Comic = mongoose.model('Comic', comicSchema)

export default Comic
