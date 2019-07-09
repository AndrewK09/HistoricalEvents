const Favorites = require('../../db/index.js').favorites;
const Sets = require('../../db/index.js').sets;

module.exports = {
  addSet: set => {
    return Sets.create(set);
  },
  getSets: () => {
    return Sets.find();
  },
  addFavorite: favorite => {
    return Favorites.create(favorite);
  },
  getFavorites: () => {
    return Favorites.find();
  }
};
