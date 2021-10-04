import React, { Component } from 'react';
import IngredientSearch from './IngredientSearch';
import OwnedIngredients from './OwnedIngredients';

export default class Pantry extends Component {
  render() {
    return (
      <div>
        <IngredientSearch />
        <OwnedIngredients />
      </div>
    );
  }
}
