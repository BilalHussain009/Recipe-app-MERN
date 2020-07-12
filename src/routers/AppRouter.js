import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/Homepage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>

      <div>
        <Switch>
          <PublicRoute path="/" component={HomePage} exact={true} />
        </Switch>
      </div>
  </Router>
);

export default AppRouter;
