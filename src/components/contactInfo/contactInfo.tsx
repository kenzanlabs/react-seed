import * as React from 'react';
import './contactInfo.scss';

interface ContactInfoInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactInfoPropsInterface {
  contact: ContactInfoInterface;
}

// tslint:disable-next-line
const ContactInfo: React.SFC<ContactInfoPropsInterface> = ({contact}) => {
  const {firstName, middleName, email, lastName, phone, image} = contact;
  const userIcon = <i className='fa fa-user-circle-o fa-4x mx-auto' aria-hidden='true'></i>;

  return (
    <div className='list-group-item'>
      <div className='col-4'>
        {image ? <img src={image} alt={firstName} className='img-responsive img-circle' /> : userIcon}
      </div>
      <div className='col-8'>
        <span className='name'>{`${firstName} ${(middleName ? middleName : '')} ${(lastName ? lastName : '')}`.trim()}</span><br/>
        <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={phone}></span>
        <span className='visible-xs'> <span className='text-muted phone'>{phone}</span><br/></span>
        <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title={email}></span>
        <span className='visible-xs'> <span className='text-muted email'>{email}</span><br/></span>
      </div>
    </div>
  );
};

export default ContactInfo;