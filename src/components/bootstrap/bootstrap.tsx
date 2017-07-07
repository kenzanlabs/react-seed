import './bootstrap.scss';

import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';


interface BootstrapStateInterface {
}

interface BootstrapPropsInterface {
}

export default class Bootstrap extends React.Component<BootstrapPropsInterface, BootstrapStateInterface> {

  render() {

    return (
      <div className='container-fluid'>
        <section className='row'>
          <Navigation />
        </section>

        <section className='row main'>
          <div className='container'>
            {/* nested routes passed in as children*/}
            { this.props.children }
          </div>
        </section>

        <section className='row'>
          <Footer />
        </section>
      </div>
    );
  }

}