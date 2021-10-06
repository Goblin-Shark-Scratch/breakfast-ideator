import React, { Component } from 'react';

//mui stuff
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// import Recipe from '../components/Recipe';
import { ImageList } from '@mui/material';

const RecipeSearch = (props) => {

  // Get recipes from server and build recipe component array
  const searchRecipes = () => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(recipes => props.buildRecipes(recipes))
      .catch(err => console.log(err))
  }

    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" onClick={searchRecipes}>
            Find recipes
          </Button>
          <Divider orientation="horizontal" flexItem />
        </div>
        <div>
          {/* Display Recipe Search results in an @mui image list */}
          <ImageList>
            {props.recipes}
          </ImageList>
        </div>
      </div>
    );
  }

export default RecipeSearch;
