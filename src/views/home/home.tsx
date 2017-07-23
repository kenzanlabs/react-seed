import 'font-awesome/css/font-awesome.css';
import './home.scss';
import * as React from 'react';

import ContactService, { ContactInterface } from '../../services/contact.service';
import ContactsList from '../../components/contacts-list/contacts-list';
import ContactsListForm from '../../components/contacts-list-form/contacts-list-form';
import GravatarService from '../../services/gravatar.service';

interface HomeStateInterface {
  isFormOpen: boolean;
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
      isFormOpen: false
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

  private updateContacts(contacts: ContactInterface[], index: number): void {
    this.props.onListUpdate(contacts, index);
  }

  private setContacts(contact: ContactInterface): void {
    const newContacts = [...this.props.contacts, contact];
    this.props.onListUpdate(newContacts, contact.id);
    this.setState({
      isFormOpen: false
    });
  }

  private onNewContactSubmit(contact: ContactInterface): void {
    contact.id = this.props.contacts.length;

    if (contact.email) {
      GravatarService.getAvatar(contact.email)
        .then((url: string) => {
          contact.image = url;
          this.setContacts(contact);
        })
        .catch(e => {
          console.error(e);
          this.setContacts(contact);
        });
    } else {
      this.setContacts(contact);
    }
  }

  private selectContact(index: number): void {
    this.updateContacts(this.props.contacts, index);
  }

  private renderContactCard (contact: ContactInterface): JSX.Element {
    if (contact) {
      return (
        <div className='card'>
          <div className='card-block'>
            <h2 className='card-title'>{ContactService.buildName(contact)}</h2>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='fa fa-phone text-muted c-info mr-1' data-toggle='tooltip' title={contact.phone}></span>
              <span className='visible-xs'> <span className='text-muted phone'>{ contact.phone}</span></span>
            </li>
            <li className='list-group-item'>
              <span className='fa fa-comments text-muted c-info mr-1' data-toggle='tooltip' title={contact.email}></span>
              <span className='visible-xs'> <span className='text-muted email'>{ contact.email}</span></span>
            </li>
          </ul>
        </div>
      );
    }
  }

  render(): JSX.Element {
    const contacts: ContactInterface[] = this.props.contacts;
    const currentIndex: number = this.props.currentIndex;

    return (
      <div className='container home'>
        {
          !this.state.isFormOpen &&
          <div>
            <div className='col-12 text-center'>
              <button className='btn btn-success' onClick={this.openForm.bind(this)}>Add contact</button>
            </div>
            <div className='col-12 col-md-6 col-lg-4 text-center d-inline-block'>
              {
                <ContactsList
                  contacts={contacts}
                  activeContactIndex={currentIndex}
                  clickHandler={this.selectContact.bind(this)}
                />
              }
            </div>
             <div className='col-md-6 col-lg-8 d-inline-block hidden-sm-down h-75'>
               { this.renderContactCard(contacts[currentIndex]) }
             </div>
          </div>
        }
        {
          this.state.isFormOpen &&
          <ContactsListForm onCancel={this.cancelNewContact.bind(this)} onSubmit={this.onNewContactSubmit.bind(this)}/>
        }
      </div>
    );
  }
}