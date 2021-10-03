const mainController = {};
// import API

mainController.searchRecipe = (req, res, next) => {
  // connect to API to find recipes matching a query

  //https://api.spoonacular.com/recipes/findByIngredients?apikey=API_KEY

  next();
};

// return all ingredients in the user's inventory
mainController.fetchIngredients = (req, res, next) => {
  res.locals.ingredients = req.user.ingredients;
  next();
};

// { eggs: 1 }
// { eggs: 12 }

// update user's ingredients inventory
mainController.updateIngredients = (req, res, next) => {
  req.user.ingredients = { ...req.body, ...req.user.ingredients };
  req.user.save(); // consider await ?
  res.locals.ingredients = req.user.ingredients;
  next();
};

// get the favorites from the fav history
mainController.getFavorites = (req, res, next) => {
  res.locals.favorites = req.user.favorites;
  next();
};

// update the favorites array
mainController.addFavorites = (req, res, next) => {
  req.user.favorites.push(req.body.favorite);
  req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

// get recently viewed recipes
mainController.getRecents = (req, res, next) => {
  next();
};

module.exports = mainController;
