import './bootstrap.scss';
import * as React from 'react';

import { ContactInterface } from '../../services/contact.service';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

interface BootstrapStateInterface {
  contacts: ContactInterface[];
  currentIndex: number;
}

interface BootstrapPropsInterface {
}

export default class Bootstrap extends React.Component<BootstrapPropsInterface, BootstrapStateInterface> {
  contacts: ContactInterface[];

  constructor(props: BootstrapPropsInterface) {
    super(props);
    this.state = {
      contacts: [],
      currentIndex: null
    };
  }

  private updateContacts(contacts: ContactInterface[], index: number): void {
    this.setState({
      contacts: contacts,
      currentIndex: index
    });
  }

  render(): JSX.Element {
    const childrenWithProps = React.Children.map(this.props.children, (child: JSX.Element) =>
      React.cloneElement(child, {
        contacts: this.state.contacts,
        onListUpdate: this.updateContacts.bind(this),
        currentIndex: this.state.currentIndex
      })
    );

    return (
      <div className='container-fluid'>
        <section className='row'>
          <Navigation />
        </section>

        <section className='row main'>
          { childrenWithProps }
        </section>

        <section className='row'>
          <Footer />
        </section>
      </div>
    );
  }

}