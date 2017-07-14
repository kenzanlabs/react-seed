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

  it('footer should have a "footer" element', () => {
    expect(footer.find('footer').length).toEqual(1);
  });

  it('should set the initial value for state.copyright', () => {
    const startingYear = 2014;
    const currentYear = new Date().getFullYear();

    expect(footer.state('copyright')).toEqual(`${startingYear} - ${currentYear}`);
  });

  describe('<footer/>', () => {
    let footerEl;

    beforeEach(() => {
      footerEl = footer.find('footer');
    });

    it('should render the copyright within a <p> element', () => {
      const copyright = footer.state('copyright');

      expect(footer.find('p').text().includes(copyright)).toBeTruthy();
    });

    it('footer should have a "<a>" element', () => {
      const hrefValue = 'http://www.github.com/kenzanlabs';

      expect(footer.find('a').length).toEqual(1);
      expect(footer.find('a').text()).toMatch(/Kenzanlabs/);
      expect(footer.find('a').prop('href')).toEqual(hrefValue);
    });
  });
});