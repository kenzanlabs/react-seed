import './contactListForm.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';

interface ContactListFormPropsInterface {
}
interface ContactListFormStateInterface {
}

class ContactListForm extends React.Component<ContactListFormPropsInterface, ContactListFormStateInterface> {

  render() {
    return (
      <div className='contact-list-form row'>
        <form className='form-horizontal col-md-8 offset-md-2'>
          <fieldset>
            <legend className='row text-center'>
              <h2>Add a contact</h2>
            </legend>

            <div className='form-group'>
              <label className=' control-label' htmlFor='firstname'>First Name</label>
              <div>
                <input id='firstname' name='firstname' type='text' placeholder='First Name' className='form-control input-md' required />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='middlename'>Middle Name</label>
              <div>
                <input id='middlename' name='middlename' type='text' placeholder='Middle Name' className='form-control input-md' />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='lastname'>Last Name</label>
              <div>
                <input id='lastname' name='lastname' type='text' placeholder='Last Name' className='form-control input-md' />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='email'>Email</label>
              <div>
                <input id='email' name='email' type='text' placeholder='email@email.com' className='form-control input-md' />
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='imgupload'>Photo</label>
              <div>
                <input id='imgupload' name='imgupload' className='input-file' type='file' />
              </div>
            </div>

            <div className='form-group'>
              <div className='btn-toolbar'>
                <button id='addContactBtn' name='addContactBtn' className='btn btn-success'>Add Contact</button>
                <Link to='/' id='cancel' className='btn btn-danger'>Cancel</Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }

}

export default ContactListForm;