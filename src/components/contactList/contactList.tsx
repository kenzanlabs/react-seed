import './contactList.scss';
import * as React from 'react';

import ContactInfo from '../contactInfo/contactInfo';

interface ContactListInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactListPropsInterface {
  contacts: ContactListInterface[];
  activeContactIndex: number;
  clickHandler: Function;
}

// TODO, naming convention for variables to be exported TS
// tslint:disable-next-line
const ContactList: React.SFC<ContactListPropsInterface> = (props) => {
  console.log(props.activeContactIndex, '@@@@@@@@@@@@@');
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

export default ContactList;