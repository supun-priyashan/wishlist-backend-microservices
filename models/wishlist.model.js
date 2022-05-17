const Mongoose = require('mongoose');

const wishlistSchema = new Mongoose.Schema({
  product: {
    type: String,
    default: null
  },
  user: {
    type: String,
    default: null
  },
  isLiked: {
    type: Boolean,
    default: false
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = Mongoose.model('Wishlist', wishlistSchema);
