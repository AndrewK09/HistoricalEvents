const Favorites = require('../../db/index.js').favorites;
// const Sets = require('../../db/index.js').sets;

module.exports = {
  addSet: set => {
    console.log(set);
    return Sets.create(set);
  },
  getSets: () => {
    return Favorites.find({}, 'setname');
  },
  addFavorite: favorite => {
    return Favorites.create(favorite);
  },
  getFavorites: () => {
    return Favorites.find();
  },
  updateFavorite: ({ username, setname, favorite }) => {
    return Favorites.findOneAndUpdate(
      { username, setname },
      { $push: { favorites: favorite } }
    );
  }
};
