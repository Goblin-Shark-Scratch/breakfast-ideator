import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

class RecipeDetails extends Component {
    constructor(props){
        super(props);
        this.state = {recipe: null, isLoading: true};
    }
    
    componentDidMount(){
        const queryParams = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        axios.get(`/api/recipes/${queryParams.id}`)
        .then(res => {
            console.log(res.data)
            this.setState({recipe: res.data, isLoading: false})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){

        if(this.state.isLoading){
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
            }}>
                <iframe src={this.state.recipe.spoonacularSourceUrl} style={{
                    width: '100%',
                    height: '100vh'
                }}/>
            </div>
        )
    }
}
export default RecipeDetails