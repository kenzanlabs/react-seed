import * as React from 'react';
import {shallow} from 'enzyme';
import ContactList from './contactList';

describe('<ContactList />', () => {
  // Render a checkbox with label in the document
  const list = shallow(
    <ContactList contacts={[]}/>
  );

  it('should not be null', () => {
    expect(list).not.toBeNull();
  });

  it('should render correct classNames', () => {
    const classNames = ['list-group', 'contact-list'];

    expect(classNames.every(c => list.hasClass(c))).toEqual(true);
  });

  describe('should render a <ContactInfo/> component per each contact passed', () => {
    const sampleContacts = [
      {
        firstName: 'Joe'
      },
      {
        firstName: 'Jane',
        middleName: 'Ann',
        lastName: 'Smith',
        phone: '(423)-223-4321',
        email: 'jSmith@email.com'
      },
      {
        firstName: 'Omar',
        middleName: 'Ann',
        lastName: 'James',
        phone: '(423)-223-4321',
        email: 'jSmith@email.com',
        image: 'http:www.randomImg.com/img.png'
      }
    ];

    it('should render no ContactInfo', () => {
      const listItem = shallow(<ContactList contacts={[]} />);
      expect(listItem.find('ContactInfo').length).toEqual(0);
    });

    it('should render one Contact', () => {
      const listItem = shallow(<ContactList contacts={[sampleContacts[0]]} />);
      expect(listItem.find('ContactInfo').length).toEqual(1);
    });

    it('should render two Contact', () => {
      const listItem = shallow(<ContactList contacts={[sampleContacts[0], sampleContacts[1]]} />);
      expect(listItem.find('ContactInfo').length).toEqual(2);
    });

    it('should render all Contact', () => {
      const listItem = shallow(<ContactList contacts={sampleContacts} />);
      expect(listItem.find('ContactInfo').length).toEqual(sampleContacts.length);
    });
  });
});