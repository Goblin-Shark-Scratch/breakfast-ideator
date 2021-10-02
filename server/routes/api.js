const express = require("express")
const router = express.Router()


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

router.put('/ingredients',
  (req, res) => {
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
