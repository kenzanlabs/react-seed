import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';
import ContactList from './components/contactList/contactList';
import ContactListForm from './components/contactListForm/contactListForm'


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
    },
    {
      firstName: 'Sarah',
      lastName: 'Smith',
      middleName: 'A',
      phone: '444-333-4444',
      email: 'sSmith@email.com'
    },
    {
      firstName: 'Ed',
      lastName: 'Lou',
      phone: '444-333-4444',
      email: 'eLou@email.com'
    }
  ];

  return (
    <ContactList contacts={contacts}/>
  );
};

// tslint:disable-next-line
const newContact = () => {
  return (
    <ContactListForm />
  );
};

render(
  <Router>
    <Bootstrap>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/home' component={App}/>
        <Route path='/new' component={newContact}/>
      </Switch>
    </Bootstrap>
  </Router>,
  document.getElementById('app')
);