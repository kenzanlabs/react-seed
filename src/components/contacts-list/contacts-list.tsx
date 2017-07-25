import * as React from 'react';
import './contacts-list.scss';
import { ContactInterface } from '../../services/contact.service';
import ContactInfo from '../contact-info/contact-info';

interface ContactsListPropsInterface {
  contacts: ContactInterface[];
  activeContactIndex: number;
  clickHandler: Function;
}

// TODO, naming convention for variables to be exported TS
// tslint:disable-next-line
const ContactsList: React.SFC<ContactsListPropsInterface> = (props) => {
  return (
    <div className='list-group contact-list text-left'>
      {props.contacts.map((contact: ContactInterface, index: number) => {
        return <ContactInfo
          id = {index}
          key = {index}
          contact = {contact}
          isActive = {index === props.activeContactIndex}
          clickHandler = {props.clickHandler}
        />;
      })}
    </div>
  );

};

export default ContactsList;