import React, {Component} from 'react';
import ingredients from '../data/ingredients';

class IngredientSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {query: "", searchResults: []};
        this.addIngredient = this.addIngredient.bind(this);
        this.searchResults = this.searchResults.bind(this);
    };
    
    addIngredient(el){
        console.log(el);
    }

    searchResults(){
        const query = document.getElementById('search').value
        const results = []

        const ingredientStyle = {
            display: 'flex',
            justifyContent: 'space-between'
        }

        ingredients.forEach((value, key) => {
            if(key.startsWith(query)){
                results.push(
                    <div id={'ingredient'} style={ingredientStyle} key={key}>
                        <b className={'ingredientName'}>{key}</b>
                        <span style={{float: 'right'}}>
                            <label htmlFor={`${key}Quantity`}>Quantity: </label>
                            <input id={`${key}Quantity`} placeholder={'quantity'}></input>
                            <button onClick={(el) => this.addIngredient(el)}>Add</button>
                        </span>
                    </div>
                    )
            }
        });
        this.setState({searchResults: results});
    }

    render() {
        return (
            <div style={{border: '1px solid black'}}>
                <input placeholder='search' id='search' onChange={() => this.searchResults()}></input>
                <div style={{border: '1px solid black', paddingTop: '5px'}}>
                    {this.state.searchResults}
                </div>
            </div>
        )
    }
}

export default IngredientSearch;