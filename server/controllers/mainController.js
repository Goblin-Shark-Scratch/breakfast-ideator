const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const mainController = {};
// import API

mainController.searchRecipe = async (req, res, next) => {
  // connect to API to find recipes matching a query
  try {
    const OPTIONS = {
      ranking: 2, // ranking 2 orders by least missing ingredients
      ignorePantry: true, // ignore pantry ignores common pantry items like water, flour, sugar, etc.
    };

    const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
    const ingredientsAsParams =
      'ingredients=' + Object.keys(req.user.ingredients).join(',+');
    const optionsAsParams = new URLSearchParams(OPTIONS).toString();

    const response = await fetch(
      `${baseUrl}?${apiKeyAsParam}&${ingredientsAsParams}&${optionsAsParams}`
    );
    res.locals.recipes = await response.json();
    next();
  } catch (err) {
    return next({
      log: `mainController.searchRecipes ERROR: ${err}`,
    });
  }
};

mainController.getMoreRecipeInfo = async (req, res, next) => {
  try {
    const baseUrl = `https://api.spoonacular.com/recipes/${req.params.id}/analyzedInstructions`;
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
    const response = await fetch(`${baseUrl}?${apiKeyAsParam}`);
    res.locals.instructions = await response.json();
    next();
  } catch (err) {
    return next({
      log: `mainController.getMoreRecipeInfo ERROR: ${err}`,
    });
  }
};

// return all ingredients in the user's inventory
mainController.fetchIngredients = (req, res, next) => {
  res.locals.ingredients = req.user.ingredients;
  next();
};

// { eggs: 1 }
// { eggs: 12 }

// update user's ingredients inventory
mainController.updateIngredients = async (req, res, next) => {
  try {
    const { ingredient, quantity } = req.body;
    res.locals.ingredients = { ...req.user.ingredients };
    res.locals.ingredients[ingredient] = +quantity;
    req.user.ingredients = res.locals.ingredients;
    await req.user.save(); // consider await ?

    next();
  } catch (err) {
    return next({
      log: `mainController.updateIngredients ERROR: ${err}`,
    });
  }
};

// get the favorites from the fav history
mainController.getFavorites = (req, res, next) => {
  res.locals.favorites = req.user.favorites;
  next();
};

// update the favorites array
mainController.addFavorite = (req, res, next) => {
  req.user.favorites.push(req.body.favorite);
  req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

mainController.removeFavorite = (req, res, next) => {
  req.user.favorites = req.user.favorites.filter(
    (fav) => fav !== req.body.favorite
  );
  req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

// get recently viewed recipes
mainController.getRecents = (req, res, next) => {
  next();
};

module.exports = mainController;
