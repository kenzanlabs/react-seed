import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';

render(
  <Router>
    {/*here we can also just add the component as <Bootstrap/> and handle routing internally*/}
    <Route path='/' component={Bootstrap}></Route>
  </Router>,
  document.getElementById('app')
);