import mongoose from 'mongoose'

const characterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    realName: {
      type: String,
    },
    firstAppearance: {
      type: String,
      required: true,
    },
    powers: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    comicList: [
      {
        issue: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comic',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Character = mongoose.model('Character', characterSchema)

export default Character
