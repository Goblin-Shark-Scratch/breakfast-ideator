import React, { Component } from 'react';

//mui stuff
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Recipe from './Recipe';
import axios from 'axios';

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.searchRecipes = this.searchRecipes.bind(this);
  }

  searchRecipes() {
    const results = [];
    // /api/recipes GET request
    axios
      .get('/api/recipes')
      .then((res) => {
        res.data.forEach((recipe) => {
          results.push(
            <Recipe
              key={recipe.title}
              image={recipe.image}
              title={recipe.title}
            />
          );
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ recipes: results });
      });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" onClick={this.searchRecipes}>
          Find recipes
        </Button>
        <Divider orientation="horizontal" flexItem />
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          {this.state.recipes}
        </Stack>
      </div>
    );
  }
}

export default RecipeSearch;
