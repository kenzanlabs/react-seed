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
const ContactInfo: React.SFC<ContactInfoPropsInterface> = (props) => {
  const {firstName, middleName, email, lastName, phone, image} = props.contact;
  const userIcon = <i className='fa fa-user-circle-o fa-4x mx-auto' aria-hidden='true'></i>;

  return (
    <div className='list-group-item'>
      <div className='col-xs-12 col-sm-3'>
        {image ? <img src={image} alt={firstName} className='img-responsive img-circle' /> : userIcon}
      </div>
      <div className='col-xs-12 col-sm-9'>
        <span className='name'>{`${firstName} ${(middleName ? middleName : '')} ${(lastName ? lastName : '')}`}</span><br/>
        <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={phone}></span>
        <span className='visible-xs'> <span className='text-muted'>{phone}</span><br/></span>
        <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title='scott.stevens@example.com'></span>
        <span className='visible-xs'> <span className='text-muted'>{email}</span><br/></span>
      </div>
      <div className='clearfix'></div>
    </div>
  );
};

export default ContactInfo;