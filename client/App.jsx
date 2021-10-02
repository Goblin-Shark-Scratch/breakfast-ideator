import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import IngredientSearch from './components/IngredientSearch';

const App = props => {
    return (
        <div className="router">
            <main>
                <Navbar/>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={IngredientSearch}
                    />
                </Switch>
            </main>
        </div>
    )
}

export default App;