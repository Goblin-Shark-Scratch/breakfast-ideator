const express = require("express")
const router = express.Router()


// example: router.get("/page")

router.get('/signup',
  (req, res) => {
    res.status(200).json(res.locals.characters);
  }
);


router.get('/signup',
  (req, res) => {
    res.status(200).json(res.locals.characters);
  }
);


router.get('/signup',
  (req, res) => {
    res.status(200).json(res.locals.characters);
  }
);





module.exports = router
