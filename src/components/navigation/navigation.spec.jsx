import * as React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';

import Navigation from './navigation';

describe('Navigation Component', () => {
  const navigation = mount(<Navigation />);

  it('should have a <nav/> element', () => {
    const nav = navigation.find('nav');

    expect(nav.length).toEqual(1);
  });

  describe('<nav/> element', () => {
    let nav;

    beforeEach(() => {
      nav = navigation.find('nav');
    });

    it('should have a brand Link element', () => {
      const brandLink = <Link className='navbar-brand' to='/'>React Webpack Stack</Link>;
      const brandTitle = 'React Webpack Stack';

      expect(nav.contains(brandLink)).toBeTruthy();
      expect(nav.find('Link').first().text()).toEqual(brandTitle);
    });

    it('should have a navigation list', () => {
      const navList = nav.find('ul');

      expect(navList.length).toEqual(1);
    });

    it('should have one button element', () => {
      expect(nav.find('button').length).toEqual(1);
    });

    describe('navigation list <ul>', () => {
      const homeListItem = {
        text: 'Home',
        path: '/'
      };
      const aboutListItem = {
        text: 'About',
        path: '/about'
      };
      let navList;

      beforeEach(() => {
        navList = nav.find('ul');
      });

      it('should have two list items', () => {
        expect(navList.children().length).toEqual(2);
      });

      it('should have two list items', () => {
        expect(navList.find('li').length).toEqual(2);
      });

      it(`should have first list item display ${homeListItem.text} with href to ${homeListItem.path}`, () => {
        expect(navList.find('ul').childAt(0).text()).toEqual(homeListItem.text);
      });

      it(`should have first list item display ${aboutListItem.text} with href to ${aboutListItem.path}`, () => {
        expect(navList.find('ul').childAt(1).text()).toEqual(aboutListItem.text);
      });

      describe('navigation list item <li>', () => {
        const homeLinkEl = <Link className='nav-link' to='/'>Home</Link>;
        const aboutLinkEl = <Link className='nav-link' to='/about'>About</Link>;
        let listHomeLink, listAboutLink;

        beforeEach(() => {
          listHomeLink = navList.find('ul').childAt(0).find('Link');
          listAboutLink = navList.find('ul').childAt(1).find('Link');
        });

        it(`should have a <Link/> component for route ${homeListItem.path}`, () => {
          expect(listHomeLink.length).toEqual(1);
          expect(listHomeLink.text()).toEqual(homeListItem.text);
          expect(listHomeLink.props().to).toEqual('/');
          expect(listHomeLink.matchesElement(homeLinkEl)).toBeTruthy();
        });

        it(`should have a <Link/> component for route ${aboutListItem.path}`, () => {
          expect(listAboutLink.length).toEqual(1);
          expect(listAboutLink.text()).toEqual(aboutListItem.text);
          expect(listAboutLink.props().to).toEqual('/about');
          expect(listAboutLink.matchesElement(aboutLinkEl)).toBeTruthy();
        });
      });

    });

  });

});