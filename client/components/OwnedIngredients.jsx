import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ingredients from '../data/ingredients';
import axios from 'axios';

class OwnedIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = { ingredients: {} };
    this.addIngredient = this.addIngredient.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/ingredients')
      .then((res) => res.data)
      .then((data) => this.setState({ ingredients: data }));
  }

  addIngredient(el) {
    const tableRow = el.target.parentElement.parentElement.parentElement;
    const ingredientToAdd = tableRow.querySelector('b').innerHTML;
    const quantity = tableRow.querySelector('input').value;
    const addButton = tableRow.querySelector('button');
    addButton.innerText = 'Adding....';
    axios
      .put('/api/ingredients', {
        ingredient: ingredientToAdd,
        quantity: quantity,
      })
      .then((res) => {
        addButton.innerText = 'Success!!';
      })
      .catch((err) => {
        addButton.innerText = 'Error';
        console.error('Error adding ingredient to stock');
      })
      .finally(() => {
        setTimeout(() => {
          addButton.innerText = 'ADD INGREDIENT';
        }, 1500);
      });
    console.log(ingredientToAdd);
  }

  prepareIngredients(ingredients) {
    const results = [];
    Object.entries(ingredients).forEach(([key, value]) => {
      results.push(
        <TableRow
          key={key}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <b
              style={{
                textTransform: 'capitalize',
                fontSize: '1.2em',
              }}
            >
              {key}
            </b>
          </TableCell>
          <TableCell align="right">
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <TextField
                onChange={this.handleChange}
                id={`${key}Quantity`}
                label="Quantity"
                type="number"
                variant="filled"
                defaultValue={value}
                style={{
                  paddingRight: '1em',
                }}
              />
              <Button variant="contained" onClick={this.addIngredient}>
                Add Ingredient
              </Button>
            </div>
          </TableCell>
        </TableRow>
      );
    });
    return results;
  }

  render() {
    const preparedIngredients = this.prepareIngredients(this.state.ingredients);
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{preparedIngredients}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default OwnedIngredients;
