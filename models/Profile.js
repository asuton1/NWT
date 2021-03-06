const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  age: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  interests: {
    type: [String]
  },
  image: {
    type: String,
    default: 'https://res.cloudinary.com/dggse3lsx/image/upload/v1582408095/avatar/default_ft9ben.png'
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);