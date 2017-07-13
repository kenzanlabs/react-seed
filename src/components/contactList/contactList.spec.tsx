import * as React from 'react';
import {shallow} from 'enzyme';
import ContactList from './contactList';

describe('<ContactList />', () => {
  const list = shallow(
    <ContactList contacts={[]}/>
  );

  it('should render correct classNames', () => {
    const classNames = ['list-group', 'contact-list'];

    expect(list).not.toBeNull();
    expect(classNames.every(c => list.hasClass(c))).toEqual(true);
  });

  describe('should render a <ContactInfo/> component per each contact passed in the contacts prop', () => {
    const sampleContacts = [
      {
        firstName: 'Joe',
        lastName: 'Lane',
        phone: '(423)-223-4321',
        email: 'jLane@email.com'
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

    it('should render no ContactInfo when contacts array is empty', () => {
      const listItem = shallow(<ContactList contacts={[]} />);
      expect(listItem.find('ContactInfo').length).toEqual(0);
    });

    it('should render one ContactList component when contacts array has one contacts', () => {
      const listItem = shallow(<ContactList contacts={[sampleContacts[0]]} />);
      expect(listItem.find('ContactInfo').length).toEqual(1);
    });

    it('should render two ContactList component when contacts array has two contacts', () => {
      const listItem = shallow(<ContactList contacts={[sampleContacts[0], sampleContacts[1]]} />);
      expect(listItem.find('ContactInfo').length).toEqual(2);
    });

    it('should render all Contact', () => {
      const listItem = shallow(<ContactList contacts={sampleContacts} />);
      expect(listItem.find('ContactInfo').length).toEqual(sampleContacts.length);
    });

    it('should throw an error when a string is passed, case "contacts"', () => {
      const fn = () => shallow(<ContactList contacts={'contacts'}/>);

      expect(fn).toThrow();
    });

    it('should throw an error when a number is passed case "1"', () => {
      const fn = () => shallow(<ContactList contacts={1}/>);

      expect(fn).toThrow();
    });

    it(`should throw an error when a object is passed case ${sampleContacts[0]}`, () => {
      const fn = () => shallow(<ContactList contacts={sampleContacts[0]}/>);

      expect(fn).toThrow();
    });
  });
});