import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';

// Initialize the Stormpath SDK
ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);
