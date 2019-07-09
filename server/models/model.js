const Favorites = require('../../db/index.js').favorites;
// const Sets = require('../../db/index.js').sets;

module.exports = {
  addSet: favorite => {
    return Favorites.create(favorite);
  },
  getSets: () => {
    return Favorites.distinct('setname');
  },
  addFavorite: favorite => {
    return Favorites.create(favorite);
  },
  getFavorites: () => {
    return Favorites.find();
  },

  deleteFavorite: id => {
    return Favorites.deleteOne(id);
  }
};
