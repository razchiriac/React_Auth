import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

// Initialize the Stormpath SDK
ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
  </Router>,
  document.getElementById('app-container')
);
