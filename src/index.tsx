import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';

render(
  <Router>
    <Route path='/' component={Bootstrap}/>
  </Router>,
  document.getElementById('app')
);