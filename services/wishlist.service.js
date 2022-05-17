const Wishlist = require('../models/wishlist.model');

const addWishlist = async (request, response) => {

  const wishlist = new Wishlist(request.body);

  console.log(wishlist);


  await wishlist.save((error, wishlist) => {
    if(error){
      response.status(500).json({ error: error.message });
      console.log(error.message)
    }
    else{
      response.status(200).
      json({
        success: true,
        wishlist: wishlist
      })
    }
  });
}

const getWishlist = async(request, response) => {
  try {
    Wishlist.findById(request.params.id, (error, data) => {
      if (error) {
        response.status(500).json({error: error.message});
      } else {
        response.status(200).json({
          success: true,
          wishlist: data
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
}

const updateWishlist = async (request, response) => {
  const wishlist = new Wishlist(request.body);

  await Wishlist.findByIdAndUpdate(request.body._id,wishlist,
    (error,wishlist) => {
      if(error){
        console.log(error);
        response.status(500).json({ error: error.message });
      }
      else{
        response.status(200).
        json({
          success: true,
          wishlist: wishlist
        })
      }
    });
}

const deleteWishlist = async (request, response) => {
  await Wishlist.findByIdAndRemove(request.params.id,(error,wishlist) => {
    if(error){
      response.status(500).json({ error: error.message });
    }
    else{
      response.status(200).
      json({
        success: true,
        wishlist: wishlist
      })
    }
  })
}




module.exports = {
  getWishlist,
  addWishlist,
  updateWishlist,
  deleteWishlist
}
