import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pantry from './components/Pantry';

import Navbar from './components/Navbar';
import RecipeSearch from './components/RecipeSearch';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecipeSearch} />
          <Route exact path="/pantry" component={Pantry} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
