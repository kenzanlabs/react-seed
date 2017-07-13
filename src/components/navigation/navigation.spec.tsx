import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Navigation from './navigation';
import {MemoryRouter, Link} from 'react-router-dom';

describe('<Navigation />', () => {
  const navigation = mount(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

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
      const brandLink = <Link className='navbar-brand' to='/'>React Seed</Link>;
      const brandTitle = 'React Seed';

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
      const newListItem = {
        text: 'New Contact',
        path: '/new'
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

      it(`should have first list item display ${newListItem.text} with href to ${newListItem.path}`, () => {
        expect(navList.find('ul').childAt(1).text()).toEqual(newListItem.text);
      });

      describe('navigation list item <li>', () => {
        const homeLinkEl = <Link className='nav-link' to='/'>Home</Link>;
        const newLinkEl = <Link className='nav-link' to='/new'>New Contact</Link>;
        let listHomeLink, listNewLink;

        beforeEach(() => {
          listHomeLink = navList.find('ul').childAt(0).find('Link');
          listNewLink = navList.find('ul').childAt(1).find('Link');
        });

        it(`should have a <Link/> component for route ${homeListItem.path}`, () => {
          expect(listHomeLink.length).toEqual(1);
          expect(listHomeLink.text()).toEqual(homeListItem.text);
          expect(listHomeLink.props().to).toEqual('/');
          expect(listHomeLink.matchesElement(homeLinkEl)).toBeTruthy();
        });

        it(`should have a <Link/> component for route ${newListItem.path}`, () => {
          expect(listNewLink.length).toEqual(1);
          expect(listNewLink.text()).toEqual(newListItem.text);
          expect(listNewLink.props().to).toEqual('/new');
          expect(listNewLink.matchesElement(newLinkEl)).toBeTruthy();
        });
      });
    });
  });
});