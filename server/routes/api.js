const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController');
const apiController = require('../controllers/apiController');


// example: router.get("/page")

router.get('/recipes',
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.get('/ingredients',
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.put('/ingredients', apiController.validateIngredient, userController.addIngredient,
  (req, res) => {
    console.log(req.body);
    res.status(200).json(res.locals);
  }
);


router.get('/favorites',
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.put('/favorites',
  (req, res) => {
    res.status(200).json(res.locals);
  }
);




module.exports = router
