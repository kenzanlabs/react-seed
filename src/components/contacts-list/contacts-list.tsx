import * as React from 'react';
import './contacts-list.scss';
import ContactInfo from '../contact-info/contact-info';

interface ContactsListInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactsListPropsInterface {
  contacts: ContactsListInterface[];
  activeContactIndex: number;
  clickHandler: Function;
}

// TODO, naming convention for variables to be exported TS
// tslint:disable-next-line
const ContactsList: React.SFC<ContactsListPropsInterface> = (props) => {
  return (
    <div className='list-group contact-list text-left'>
      {props.contacts.map((contact, index) => {
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