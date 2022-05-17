const express = require('express');
const router = express.Router();

const WishlistService = require('../services/wishlist.service');

module.exports = () => {

  router.get('/', WishlistService.getWishlist);
  router.get('/:id', WishlistService.getWishlist);
  router.post('/', WishlistService.addWishlist);
  router.put('/', WishlistService.updateWishlist);
  router.delete('/:id', WishlistService.deleteWishlist);

  return router;
}
