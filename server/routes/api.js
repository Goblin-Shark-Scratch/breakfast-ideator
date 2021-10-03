const express = require('express');
const authController = require('../controllers/authController');
const mainController = require('../controllers/mainController');
const router = express.Router();

// example: router.get("/page")
console.log(mainController);

router.get('/recipes', authController.sessionRequired, (req, res) => {
  res.status(200).json(res.locals);
});

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

router.get('/favorites', authController.sessionRequired, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/favorites', authController.sessionRequired, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
