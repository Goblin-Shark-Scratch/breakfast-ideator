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
              id={recipe.id}
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
      <div>
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            // justifyContent: 'space-between'
            // display: 'grid',
            // gridTemplate: 'auto / repeat(auto-fit, 300px)',
            // maxWidth: '1500px'
          }}
        >
          <Stack
            display="flex"
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
            divider={<Divider orientation="horizontal" flexItem />}
            width="1800px"
            height="1000px"
          >
            {this.state.recipes}
          </Stack>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;
