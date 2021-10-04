module.exports = {
    validateIngredient: (req, res, next) => {
        if(req.body.hasOwnProperty('ingredient') && typeof parseInt(req.body.quantity) == 'number'){
            res.locals.ingredientToAdd = {ingredient: req.body.ingredient, quantity: parseInt(req.body.ingredient)}
            return next();
        }else{
            return next({
                log: 'Request parameters illegal',
                status: 400,
                err: {message: 'Invalid request'}
            });
          }
    }
}