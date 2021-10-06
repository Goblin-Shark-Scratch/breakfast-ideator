import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { 
    Favorite,
    FavoriteBorder
 } from '@mui/icons-material';
 import Checkbox from '@mui/material/Checkbox'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '1em'
}));

const Recipe = (props) => {

    // Handle making/removing a recipe as a favorite
    const handleClick = (recipeID) => {
        // Make call to server to toggle recipe id in user favorites
        fetch('/api/favorites',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({favorite: recipeID})
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <Item>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <h3>{props.title}</h3>
                <Checkbox 
                    onChange={handleClick(props.id)}
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                />
                <Link
                to={{
                    pathname: '/recipe',
                    search: `?id=${props.id}`
                }}>
                <input type="image" src={props.image} alt={props.title}></input>
                </Link>
            </div>
        </Item>
    )
}

export default Recipe;