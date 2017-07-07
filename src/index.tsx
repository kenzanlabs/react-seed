import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';

// tslint:disable-next-line
const App = () => {
  return (
    <h1>Content</h1>
  );
};

// tslint:disable-next-line
const About = () => {
  return (
    <h1>About</h1>
  );
};

render(
  <Router>
    <Bootstrap>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/home' component={App}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Bootstrap>
  </Router>,
  document.getElementById('app')
);