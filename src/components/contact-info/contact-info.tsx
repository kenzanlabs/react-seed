import * as React from 'react';

import './contact-info.scss';
import ContactService, { ContactInterface } from '../../services/contact.service';

interface ContactInfoPropsInterface {
  contact: ContactInterface;
  id: number;
  isActive: boolean;
  clickHandler: Function;
}

// tslint:disable-next-line
const ContactInfo: React.SFC<ContactInfoPropsInterface> = ({contact, isActive, id, clickHandler}) => {
  const { firstName, email, phone, image } = contact;
  const userIcon = <i className='fa fa-user-circle-o fa-4x mx-auto' aria-hidden='true'></i>;

  function _handleClick(): void {
    clickHandler(id);
  }

  return (
    <div className={ `list-group-item contact-info ${ isActive ? 'active-contact' : '' }` } onClick={_handleClick}>
      <div className='col-3'>
        { image ? <img src={ image } alt={ firstName } className='img-fluid rounded-circle' /> : userIcon }
      </div>
      <div className='col-9'>
        <h2 className='name'>{ ContactService.buildName(contact) }</h2>
        <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={ phone }></span>
        <span className='visible-xs'> <span className='text-muted phone'>{ phone }</span></span>
        <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title={email}></span>
        <span className='visible-xs'> <span className='text-muted email'>{ email }</span></span>
      </div>
    </div>
  );
};

export default ContactInfo;