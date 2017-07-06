import './bootstrap.scss';

import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

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

// tslint:disable-next-line:no-any
export default class Bootstrap extends React.Component<any, any> {

  render() {

    return (
      <div className='container-fluid'>
        <section className='row'>
          <Navigation />
        </section>

        <section className='row main'>
          <div className='container'>
            {/* Nested routes are managed at the component level*/}
            <Switch>
              <Route exact path='/' component={App}/>
              <Route path='/home' component={App}/>
              <Route path='/about' component={About}/>
            </Switch>
          </div>
        </section>

        <section className='row'>
          <Footer />
        </section>
      </div>
    );
  }

}