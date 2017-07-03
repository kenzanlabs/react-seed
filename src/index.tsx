import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// TODO, sample components (App, About) to be removed in next pr
// tslint:disable-next-line:variable-name
const App = () => (
  <div>
    <h1>Hello from App!</h1>
    <Link to='/'>App</Link> <br/>
    <Link to='/about'>About</Link>
    <Route path='/about' component={About}></Route>
  </div>
);

// tslint:disable-next-line:variable-name
const About = () => (
  <div>
    <h2>Hello from About!</h2>
  </div>
);

render(
  <Router>
    <Route path='/' component={App}></Route>
  </Router>,
  document.getElementById('app')
);
