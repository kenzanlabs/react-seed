import * as React from 'react';
import { shallow } from 'enzyme';
import ContactListForm from './contactListForm';

describe('Contact List Form Component', () => {
  const form = shallow(<ContactListForm />);

  it('should not be null', () => {
    expect(form).not.toBeNull();
  });

});