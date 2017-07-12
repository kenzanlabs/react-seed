import * as React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';

describe('<Footer />', () => {
  let footer;
  const footerClasses = ['w-100'];
  const paragraphClasses = ['text-muted', 'text-center', 'my-2'];
  const paragraphWrapperClasses = ['navbar-inverse', 'bg-inverse', 'fixed-bottom'];

  beforeEach(() => {
    footer = shallow(
      <Footer />
    );
  });

  it('should have the proper value for state "copyright"', () => {
    const startingYear = 2014;
    const currentYear = new Date().getFullYear();

    expect(footer).not.toBeNull();
    expect(footer.state('copyright')).toEqual(`${startingYear} - ${currentYear}`);
  });

  it('footer should have a "footer" element', () => {
    expect(footer.find('footer').length).toEqual(1);
  });

  it('footer should have a "paragraph" element', () => {
    const currentYear = new Date().getFullYear();

    expect(footer.find('p').length).toEqual(1);
    expect(footer.find('p').text()).toMatch(`2014 - ${currentYear}`);
  });

  it('footer should have a "link <a>" element', () => {
    const hrefValue = 'http://www.github.com/kenzanlabs';

    expect(footer.find('a').length).toEqual(1);
    expect(footer.find('a').text()).toMatch(/Kenzanlabs/);
    expect(footer.find('a').prop('href')).toEqual(hrefValue);
  });

  it('footer element should have correct classNames', () => {
    expect(footerClasses.every(c => footer.find('footer').hasClass(c))).toEqual(true);
  });

  it('footer <p> element should have correct classNames', () => {
    expect(paragraphClasses.every(c => footer.find('footer p').hasClass(c))).toEqual(true);
  });

  it(`footer <div> should have classNames ${paragraphWrapperClasses}`, () => {
    expect(paragraphWrapperClasses.every(c => footer.find('footer p').parent().hasClass(c))).toEqual(true);
  });
});