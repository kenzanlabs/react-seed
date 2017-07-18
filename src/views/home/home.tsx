import 'font-awesome/css/font-awesome.css';
import './home.scss';

import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import ContactList from '../../components/contactList/contactList';
import ContactListForm from '../../components/contactListForm/contactListForm';

interface ContactInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  id?: number;
}

interface HomeStateInterface {
  isFormOpen: boolean;
  currentContact: ContactInterface;
}

interface HomePropsInterface {
  contacts: ContactInterface[];
  onListUpdate: Function;
  currentIndex?: number;
}

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {
  constructor(props: HomePropsInterface) {
    super(props);
    this.state = {
      isFormOpen: false,
      currentContact: null
    };
  }

  private openForm(): void {
    this.setState({
      isFormOpen: true
    });
  }

  private cancelNewContact(): void {
    this.setState({
      isFormOpen: false
    });
  }

  private updateContacts(contacts: ContactInterface[], index: number) {
    this.props.onListUpdate(contacts, index);
  }

  private onNewContactSubmit(contact: ContactInterface) {
    contact.id = this.props.contacts.length;
    const newContacts = [...this.props.contacts, contact];

    this.updateContacts(newContacts, contact.id);
    this.setState({
      isFormOpen: false,
      currentContact: newContacts[contact.id]
    });
  }

  private selectContact(index: number) {
    this.updateContacts(this.props.contacts, index);
  }

  private buildName(firstName: string, middleName: string, lastName: string): string {
    let _middleName: string = middleName ? ` ${middleName}` : '';
    let _lastName: string = lastName ? ` ${lastName}` : '';

    return `${firstName}${_middleName}${_lastName}`;
  }

  private renderContactCard (contact: ContactInterface) {
    if (contact) {
      return (
        <div className='card'>
          <div className='card-block'>
            <h2 className='card-title'>{this.buildName(contact.firstName, contact.middleName, contact.lastName)}</h2>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={contact.phone}></span>
              <span className='visible-xs'> <span className='text-muted phone'>{ contact.phone}</span></span>
            </li>
            <li className='list-group-item'>
              <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title={contact.email}></span>
              <span className='visible-xs'> <span className='text-muted email'>{ contact.email}</span></span>
            </li>
          </ul>
        </div>
      );
    }
  }

  private renderContactList (contacts: ContactInterface[]) {
    if (contacts.length > 0) {
      return (
        <ContactList
          contacts={this.props.contacts}
          activeContactIndex={this.props.currentIndex}
          clickHandler={this.selectContact.bind(this)}
        />
      );
    }
  }

  public componentWillReceiveProps(newProps: HomePropsInterface) {
    this.setState({
      currentContact: newProps.contacts[newProps.currentIndex]
    });
  }

  render() {

    return (
      <div className='container home'>
        {
          !this.state.isFormOpen &&
          <div>
            <div className='col-12 text-center'>
              <button className='btn btn-success' onClick={this.openForm.bind(this)}>Add contact</button>
            </div>
            <div className='col-12 col-md-6 col-lg-4 text-center d-inline-block'>
              { this.renderContactList(this.props.contacts) }
            </div>
             <div className='col-md-6 col-lg-8 d-inline-block hidden-sm-down'>
               { this.renderContactCard(this.state.currentContact) }
             </div>
          </div>
        }
        {
          this.state.isFormOpen &&
          <ContactListForm onCancel={this.cancelNewContact.bind(this)} onSubmit={this.onNewContactSubmit.bind(this)}/>
        }
      </div>
    );
  }
}