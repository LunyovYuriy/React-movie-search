import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../pages/Details/Details';
import Main from '../pages/Main/Main';

const AppRouter = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search App</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/details/:movieId">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
