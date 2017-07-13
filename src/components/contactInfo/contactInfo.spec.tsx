import * as React from 'react';
import {shallow} from 'enzyme';
import ContactInfo from './contactInfo';

describe('<ContactInfo />', () => {
  const caseFirstNameOnly = {
    firstName: 'Joe'
  };
  const caseNoImg = {
    firstName: 'Jane',
    middleName: 'Ann',
    lastName: 'Smith',
    phone: '(423)-223-4321',
    email: 'jSmith@email.com'
  };
  const caseImg = {
    firstName: 'Omar',
    middleName: 'Ann',
    lastName: 'James',
    phone: '(423)-223-4321',
    email: 'jSmith@email.com',
    image: 'http:www.randomImg.com/img.png'
  };

  it('should throw if contact prop is not passed', () => {
    expect(() => {
      shallow(<ContactInfo />);
    }).toThrow();
  });

  it('should not throw if correct contact object is passed', () => {
    expect(() => {
      shallow(<ContactInfo contact={caseImg}/>);
    }).not.toThrow();
  });


  describe('use cases', () => {

    describe('contact only has firstName', () => {
      let info;

      beforeEach(() => {
        info = shallow(
          <ContactInfo contact={caseFirstNameOnly}/>
        );
      });

      it('should render a contact name correctly', () => {
        expect(info.find('.name').text()).toMatch(caseFirstNameOnly.firstName);
      });

      it('should render a fontAwesome icon', () => {
        expect(info.find('i').length).toEqual(1);
      });

      it('should not render an image element', () => {
        expect(info.find('img').length).toEqual(0);
      });
    });

    describe('contact has all required props but no image', () => {
      const {firstName, middleName, lastName, phone, image, email} = caseNoImg;
      let info;

      beforeEach(() => {
        info = shallow(
          <ContactInfo contact={caseNoImg}/>
        );
      });

      it('should render the name propertly', () => {
        const name = `${firstName} ${(middleName ? middleName : '')} ${(lastName ? lastName : '')}`.trim()

        expect(info.find('.name').text()).toMatch(name);
      });

      it('should render a fontAwesome icon', () => {
        expect(info.find('i').length).toEqual(1);
      });

      it('should render an email', () => {
        expect(info.find('.email').length).toEqual(1);
        expect(info.find('.email').text()).toEqual(email);
      });

      it('should render an phone', () => {
        expect(info.find('.phone').length).toEqual(1);
        expect(info.find('.phone').text()).toEqual(phone);
      });


      it('should not render an image element', () => {
        expect(info.find('img').length).toEqual(0);
      });

    });

    describe('contact has all required props', () => {
      const {firstName, middleName, lastName, phone, image, email} = caseImg;
      let info;

      beforeEach(() => {
        info = shallow(
          <ContactInfo contact={caseImg}/>
        );
      });

      it('should render the name propertly', () => {
        const name = `${firstName} ${(middleName ? middleName : '')} ${(lastName ? lastName : '')}`.trim()

        expect(info.find('.name').text()).toMatch(name);
      });

      it('should not render a fontAwesome icon', () => {
        expect(info.find('i').length).toEqual(0);
      });

      it('should render an email', () => {
        expect(info.find('.email').length).toEqual(1);
        expect(info.find('.email').text()).toEqual(email);
      });

      it('should render an phone', () => {
        expect(info.find('.phone').length).toEqual(1);
        expect(info.find('.phone').text()).toEqual(phone);
      });


      it('should render an image element', () => {
        expect(info.find('img').length).toEqual(1);
        expect(info.find('img').props().src).toEqual(image);
      });

    });

  });
});