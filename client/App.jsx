import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';

const App = props => {
    return (
        <div className="router">
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Login}
                    />
                </Switch>
            </main>
        </div>
    )
}

export default App;