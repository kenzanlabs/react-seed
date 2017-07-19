import 'font-awesome/css/font-awesome.css';
import './bootstrap.scss';

import * as React from 'react';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

interface BootstrapStateInterface {
  contacts: ContactInterface[];
  currentIndex: number;
}

interface BootstrapPropsInterface {
}

interface ContactInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  id?: number;
}

export default class Bootstrap extends React.Component<BootstrapPropsInterface, BootstrapStateInterface> {
  constructor(props: BootstrapPropsInterface) {
    super(props);
    this.state = {
      contacts: [],
      currentIndex: 0
    };
  }

  private updateContacts(contacts: ContactInterface[], index: number): void {
    this.setState({
      contacts: contacts,
      currentIndex: index
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <section className='row'>
          <Navigation />
        </section>

        <section className='row main'>
          { this.props.children }
        </section>

        <section className='row'>
          <Footer />
        </section>
      </div>
    );
  }

}