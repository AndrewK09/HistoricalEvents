const model = require('../models/model');

const handleError = (err, res) => {
  console.log(err);
  res.sendStatus(400);
};

module.exports = {
  addSet: (req, res) => {
    model
      .addSet(req.body)
      .then(() => {
        res.send('success');
      })
      .catch(err => handleError(err, res));
  },
  getSets: (req, res) => {
    model
      .getSets()
      .then(result => {
        res.send(result);
      })
      .catch(err => handleError(err, res));
  },
  addFavorite: (req, res) => {
    model
      .addFavorite(req.body)
      .then(result => {
        res.send('success');
      })
      .catch(err => handleError(err, res));
  },
  getFavorites: (req, res) => {
    model
      .getFavorites()
      .then(result => {
        res.send(result);
      })
      .catch(err => handleError(err, res));
  }
};
