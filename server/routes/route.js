const controller = require('../controllers/controller.js');
const express = require('express');
const router = express.Router();

router.get('/sets', controller.getSets);
router.post('/sets', controller.addSet);
router.get('/favorites', controller.getFavorites);
router.post('/favorites', controller.addFavorite);
router.delete('/favorites', controller.deleteFavorite);

module.exports = router;
