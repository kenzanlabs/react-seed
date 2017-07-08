import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';
import ContactList from './components/contactList/contactList';

// tslint:disable-next-line
const App = () => {
  const contacts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      middleName: 'E',
      phone: '444-333-4444',
      email: 'jDoe@email.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Lou',
      phone: '444-333-4444',
      email: 'janeLou@email.com'
    }
  ];

  return (
    <ContactList contacts={contacts}/>
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