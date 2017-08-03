import * as React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Bootstrap from './components/bootstrap/bootstrap';
import About from './views/about/about';
import Home from './views/home/home';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Bootstrap}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);