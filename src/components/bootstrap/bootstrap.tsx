import 'font-awesome/css/font-awesome.css';
import './bootstrap.scss';

import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Home from '../../views/home/home';
import About from '../../views/about/about';

interface BootstrapStateInterface {
  contacts: ContactInterface[];
}

interface BootstrapPropsInterface {
}

interface ContactInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
}

export default class Bootstrap extends React.Component<BootstrapPropsInterface, BootstrapStateInterface> {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  private updateContacts(contacts: ContactInterface[]): void {
    this.setState({
      contacts: contacts
    });
  }

  public componentDidUpdate(prevProps: {}, prevState: {}): void {
  }

  render() {
    return (
      <div className='container-fluid'>
        <section className='row'>
          <Navigation />
        </section>

        <section className='row main'>
          { this.props.children }
          {/* router moved in order to only manage state in one place*/}
          <Switch>
            <Route exact path='/' render={() => <Home contacts={this.state.contacts} onListUpdate={this.updateContacts.bind(this)}/>}/>
            <Route path='/about' component={About}/>
          </Switch>
        </section>

        <section className='row'>
          <Footer />
        </section>
      </div>
    );
  }

}