import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Details from '../pages/Details/Details';
import Main from '../pages/Main/Main';
import Results from '../pages/Results/Results';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/React-movie-search" exact>
            <Main />
          </Route>
          <Route path="/React-movie-search/results">
            <Results />
          </Route>
          <Route path="/React-movie-search/details/:movieId">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
