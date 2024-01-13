import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';

const MainMenuTwo = () => {
  return (
    <Router>
      <Switch>
        <Route path="/desayuno">
          {/* Render Desayuno component */}
          <h2>Desayuno Section</h2>
        </Route>
        <Route path="/lunch">
          {/* Render Lunch component */}
          <h2>Lunch Section</h2>
        </Route>
        {/* Add similar routes for other menu sections */}
        <Route path="/">
          {/* Default route, render MainMenu */}
          <MainMenu />
        </Route>
      </Switch>
    </Router>
  )
}
export default MainMenuTwo