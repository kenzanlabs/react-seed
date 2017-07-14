import * as React from 'react';
import {shallow} from 'enzyme';
import ContactInfo from './contactInfo';

describe('<ContactInfo />', () => {
  const caseFirstNameOnly = {
    firstName: 'Joe'
  };
  const caseNoMiddleName = {
    firstName: 'Joe',
    lastName: 'Walters'
  };
  const caseNoLastName = {
    firstName: 'Joe',
    middleName: 'Daniel'
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

  const  buildName = (firstName, middleName, lastName) => {
    let _middleName= middleName ? ` ${middleName}` : '';
    let _lastName= lastName ? ` ${lastName}` : '';

    return `${firstName}${_middleName}${_lastName}`;
  };

  it('should throw when contact prop is not passed', () => {
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

    describe('render correct name', () => {
      describe('when contact only has firstName', () => {
        const info = shallow(
          <ContactInfo contact={caseFirstNameOnly}/>
        );

        it('should render a contact name correctly', () => {
          expect(info.find('.name').text()).toEqual(caseFirstNameOnly.firstName);
        });
      });

      describe('when contact has no middleName', () => {
        const info = shallow(
          <ContactInfo contact={caseNoMiddleName}/>
        );

        it('should render a contact name correctly', () => {
          const name = buildName(caseNoMiddleName.firstName, null, caseNoMiddleName.lastName);

          expect(info.find('.name').text()).toEqual(name);
        });
      });

      describe('when contact has no lastName', () => {
        const info = shallow(
          <ContactInfo contact={caseNoLastName}/>
        );

        it('should render a contact name correctly whhen middleName is present', () => {
          const name = buildName(caseNoLastName.firstName, caseNoLastName.middleName);

          expect(info.find('.name').text()).toMatch(name);
        });
      });
    });

    describe('render correct image/icon', () => {
      describe('contact has no image prop', () => {
        const info = shallow(
          <ContactInfo contact={caseNoImg}/>
        );

        it('should render a fontAwesome icon', () => {
          expect(info.find('i').length).toEqual(1);
        });

        it('should not render an image element', () => {
          expect(info.find('img').length).toEqual(0);
        });

      });

      describe('contact has image prop', () => {
        const {image} = caseImg;
        const info = shallow(
          <ContactInfo contact={caseImg}/>
        );

        it('should render an image element', () => {
          expect(info.find('img').length).toEqual(1);
          expect(info.find('img').props().src).toEqual(image);
        });

        it('should not render a fontAwesome icon', () => {
          expect(info.find('i').length).toEqual(0);
        });
      });
    });

    describe('renders correct phone number', () => {
      describe('when phone number is passed', () => {
        const info = shallow(
          <ContactInfo contact={caseFirstNameOnly}/>
        );

        it('should not render a phone number', () => {
          expect(info.find('.phone').text()).toEqual('');
        });
      });

      describe('when no phone number is passed', () => {
        const info = shallow(
          <ContactInfo contact={caseImg}/>
        );

        it('should not render a phone number', () => {
          expect(info.find('.phone').text()).toEqual(caseImg.phone);
        });
      });

    });

    describe('contact renders correctly when all properties are passed correctly', () => {
      const {firstName, middleName, lastName, phone, image, email} = caseImg;
      let info;

      beforeEach(() => {
        info = shallow(
          <ContactInfo contact={caseImg}/>
        );
      });

      it('should render the name propertly', () => {
        const name = buildName(firstName, middleName, lastName);

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