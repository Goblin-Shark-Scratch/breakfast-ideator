import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IngredientSearch from './components/IngredientSearch';

const App = props => {
    return (
        <div className="router">
            <main>
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