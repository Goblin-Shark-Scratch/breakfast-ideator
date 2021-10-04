const express = require('express');
const authController = require('../controllers/authController');
const mainController = require('../controllers/mainController');
const router = express.Router();

// example: router.get("/page")

router.get(
  '/recipes',
  authController.sessionRequired,
  mainController.searchRecipe,
  (req, res) => {
    res.status(200).json(res.locals.recipes);
  }
);

router.get(
  '/ingredients',
  authController.sessionRequired,
  mainController.fetchIngredients,
  (req, res) => {
    res.status(200).json(res.locals.ingredients);
  }
);

router.put(
  '/ingredients',
  authController.sessionRequired,
  mainController.updateIngredients,
  (req, res) => {
    res.status(200).json(res.locals.ingredients);
  }
);

router.get(
  '/favorites',
  authController.sessionRequired,
  mainController.getFavorites,
  (req, res) => {
    res.status(200).json(res.locals.favorites);
  }
);

router.post(
  '/favorites',
  authController.sessionRequired,
  mainController.addFavorite,
  (req, res) => {
    res.status(200).json(res.locals.favorites);
  }
);

router.delete(
  '/favorites',
  authController.sessionRequired,
  mainController.removeFavorite,
  (req, res) => {
    res.status(200).json(res.locals.favorites);
  }
);

module.exports = router;
