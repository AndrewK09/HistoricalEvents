const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://andrew:AI5I0hRkvKCwjqdO@cluster0-yitha.mongodb.net/test?retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

const favoritesSchema = new mongoose.Schema({
  username: String,
  setname: { type: String, unique: true },
  favorites: Array
});

// const setsSchema = new mongoose.Schema({
//   setname: { type: String, unique: true }
// });

const Favorites = mongoose.model('Favorite', favoritesSchema);
// const Sets = mongoose.model('Set', setsSchema);

module.exports.favorites = Favorites;
// module.exports.sets = Sets;
