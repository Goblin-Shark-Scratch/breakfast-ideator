const { Pool } = require('pg');

const PG_URI = 'postgres://yjxiviyy:Wuud4lQK7q8of1PvwWT-GPhnY4v8v36h@chunee.db.elephantsql.com/yjxiviyy';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  addIngredient: (req, res, next) => {
    //Here we have to add the code to add the ingredient into the user's "pantry"
    //The ingredient to be add will be stored in res.locals.ingredientToAdd, as this will be called after the apiController/validateIngredient middleware
    //req.body.ingredient holds the ingredient name, req.body.quantity holds the quantity
    //The request is made on line 26 of IngredientSearch.jsx
    next();
  }
};
