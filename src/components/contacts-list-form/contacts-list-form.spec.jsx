import * as React from 'react';
import { shallow } from 'enzyme';
import ContactsListForm from './contacts-list-form';

describe('Contacts List Form Component', () => {
  const form = shallow(<ContactsListForm />);

  it('should not be null', () => {
    expect(form).not.toBeNull();
  });

});