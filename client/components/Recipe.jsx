import React, {Component} from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '1em'
}));

function Recipe(props) {
    return (
        <Item>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <b>{props.title}</b>
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