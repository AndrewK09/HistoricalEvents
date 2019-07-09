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
  setname: String,
  favorite: Object
});

const Favorites = mongoose.model('Favorite', favoritesSchema);

module.exports.favorites = Favorites;
