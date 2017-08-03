import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from './footer';

describe('Footer Component', () => {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer />);
  });

  it('footer should have a "footer" element', () => {
    expect(footer.find('footer').length).toEqual(1);
  });

  it('should set the initial value for state.copyright', () => {
    const startingYear = 2017;
    const currentYear = new Date().getFullYear();
    const copyright = startingYear === currentYear ? currentYear.toString() : `${startingYear} - ${currentYear}`;

    expect(footer.state('copyright')).toEqual(copyright);
  });

  it('footer should have a "<a>" element that links to Kenzan Labs GitHub', () => {
    const hrefValue = 'http://www.kenzan.com/';

    expect(footer.find('a').length).toEqual(1);
    expect(footer.find('a').text()).toMatch(/Kenzan/);
    expect(footer.find('a').prop('href')).toEqual(hrefValue);
  });

  it('should render the copyright within a <p> element', () => {
    const copyright = footer.state('copyright');

    expect(footer.find('p').text().includes(copyright)).toBeTruthy();
  });

});