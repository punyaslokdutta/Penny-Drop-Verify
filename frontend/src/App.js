import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/screen1" component={Screen1} />
        <Route path="/screen2" component={Screen2} />
      </Switch>
    </Router>
  );
};

export default App;
