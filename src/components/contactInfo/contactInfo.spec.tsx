import * as React from 'react';
import {shallow} from 'enzyme';
import ContactInfo from './contactInfo';

describe('<ContactInfo />', () => {
  // Render a checkbox with label in the document

  it('should not be null', () => {
    const info = shallow(
      <ContactInfo contact={{firstName: 'john'}}/>
    );
    expect(info).not.toBeNull();
  });

  it('should throw if contact prop is not passed or if contact prop has no firstName', () => {
    expect(() => {
      shallow(<ContactInfo />);
    }).toThrow();
  });

  describe('use cases', () => {
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

    it('should render a contact that only has a firstName prop', () => {
      const info = shallow(
        <ContactInfo contact={sampleContacts[0]}/>
      );
      expect(info.find('.name').text()).toMatch(sampleContacts[0].firstName);
    });

    it('should render a contact icon when no image url is passed', () => {
      const info = shallow(
        <ContactInfo contact={sampleContacts[0]}/>
      );
      expect(info.find('i').length).toEqual(1);
      expect(['fa', 'fa-user-circle-o', 'fa-4x', 'mx-auto'].every(c => info.find('i').hasClass(c))).toEqual(true);
    });

    it('should render a contact img when image url is passed', () => {
      const info = shallow(
        <ContactInfo contact={sampleContacts[2]}/>
      );
      expect(info.find('i').length).toEqual(0);
      expect(info.find('img').length).toEqual(1);
      expect(['img-responsive', 'img-circle'].every(c => info.find('img').hasClass(c))).toEqual(true);
    });

    for (let contact of sampleContacts) {
      it(`should render correctly for sampleContacts case ${contact.firstName}`, () => {
        const info = shallow(
          <ContactInfo contact={contact}/>
        );
        const {firstName, middleName, lastName} = contact;
        const name = `${firstName} ${(middleName ? middleName : '')} ${(lastName ? lastName : '')}`.trim();

        expect(info.find('.name').text()).toMatch(name);
      });
    }
  });
});