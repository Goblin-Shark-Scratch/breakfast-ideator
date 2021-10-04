import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';

const App = props => {
    return (
        <div className="router">
            <main>
                <Navbar/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={RecipeSearch}
                    />
                    <Route
                    exact
                    path='/recipe'
                    component={RecipeDetails}
                    />
                </Switch>
            </main>
        </div>
    )
}

export default App;