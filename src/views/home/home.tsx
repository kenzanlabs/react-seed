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
  id?: number
}

interface HomeStateInterface {
  isFormOpen: boolean;
  currentContact: ContactInterface;
}

interface HomePropsInterface {
  updateContacts: Function;
  contacts: ContactInterface[];
  onListUpdate: Function;
}

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {
  constructor(props: HomePropsInterface) {
    super(props);
    this.state = {
      isFormOpen: false,
      currentContact: null
    }
  }

  private openForm():void {
    this.setState({
      isFormOpen: true
    });
  }

  private cancelNewContact():void {
    this.setState({
      isFormOpen: false
    });
  }

  private updateContacts(contacts: ContactInterface[]) {
    this.props.onListUpdate(contacts);
  }

  private onNewContactSubmit(contact: ContactInterface) {
    contact.id = this.props.contacts.length;
    const newContacts = [...this.props.contacts, contact];

    this.updateContacts(newContacts);
    this.setState({
      isFormOpen: false,
      currentContact: this.props.contacts[contact.id]
    });
  }

  private selectContact(index: number) {
    this.setState({
      currentContact: this.props.contacts[index]
    })
  }

  public componentWillReceiveProps(newProps:{}) {
    if (!this.state.currentContact) {
      // this.setState({
      //   currentContact: newProps.contacts[0]
      // })
    }
  }

  render() {
    if ( this.state.currentContact) {
      const {id, firstName, middleName, lastName, phone, email} = this.state.currentContact;
    }
    function _buildName(firstName: string, middleName: string, lastName: string):string {
      let _middleName: string = middleName ? ` ${middleName}` : '';
      let _lastName: string = lastName ? ` ${lastName}` : '';

      return `${firstName}${_middleName}${_lastName}`;
    }

    return (
      <div className='container home'>
        {
          !this.state.isFormOpen &&
          <div>
            <div className='col-12 text-center'>
              <button className='btn btn-success' onClick={this.openForm.bind(this)}>Add contact</button>
            </div>
            <div className='col-12 col-md-6 col-lg-4 text-center d-inline-block'>
              <ContactList
                contacts={this.props.contacts}
                activeContactIndex={this.state.currentContact ? this.state.currentContact.id : 0}
                clickHandler={this.selectContact.bind(this)}
              />
            </div>
             <div className='col-md-6 col-lg-8 d-inline-block hidden-sm-down'>
               {
                 this.state.currentContact &&
                 <div className='card'>
                     <div className="card-block">
                       <h2 className="card-title">{_buildName(firstName, middleName, lastName)}</h2>
                     </div>
                     <ul className="list-group list-group-flush">
                       <li className="list-group-item">
                         <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={phone}></span>
                         <span className='visible-xs'> <span className='text-muted phone'>{phone}</span></span>
                       </li>
                       <li className="list-group-item">
                         <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title={email}></span>
                         <span className='visible-xs'> <span className='text-muted email'>{email}</span></span>
                       </li>
                     </ul>
                 </div>
               }
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