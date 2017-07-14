import './contactListForm.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';

interface ContactListFormPropsInterface {
  onCancel: Function;
  onSubmit: Function;
}
interface ContactListFormStateInterface {
}

class ContactListForm extends React.Component<ContactListFormPropsInterface, ContactListFormStateInterface> {
  constructor(props: any) {
      super(props);
    }

  private handleSubmit(e: Event){
    e.preventDefault();
    const formData: {} = {};

    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.props.onSubmit(formData);
  }

  public render() {
    return (
      <div className='contact-list-form row'>
        <form className='form-horizontal col-md-8 offset-md-2' onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <legend className='row text-center'>
              <h2>Add a contact</h2>
            </legend>

            <div className='form-group'>
              <label className=' control-label' htmlFor='firstname'>First Name</label>
              <div>
                <input ref='firstName' id='firstname' name='firstname' type='text' placeholder='First Name'
                       className='form-control input-md' required/>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='middlename'>Middle Name</label>
              <div>
                <input ref='middleName' id='middlename' name='middlename' type='text' placeholder='Middle Name'
                       className='form-control input-md'/>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='lastname'>Last Name</label>
              <div>
                <input ref='lastName' id='lastname' name='lastname' type='text' placeholder='Last Name'
                       className='form-control input-md'/>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='email'>Email</label>
              <div>
                <input ref='email' id='email' name='email' type='text' placeholder='email@email.com'
                       className='form-control input-md'/>
              </div>
            </div>

            <div className='form-group'>
              <label className=' control-label' htmlFor='phone'>Phone</label>
              <div>
                <input ref='phone' id='phone' name='phone' type='text' placeholder='(000)-000-0000'
                       className='form-control input-md'/>
              </div>
            </div>

            <div className='form-group'>
              <div className='btn-toolbar'>
                <button id='addContactBtn' name='addContactBtn' className='btn btn-success' type='submit'>Add Contact
                </button>
                <button id='cancel' className='btn btn-danger' onClick={this.props.onCancel}>Cancel</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactListForm;