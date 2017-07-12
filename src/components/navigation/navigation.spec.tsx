import * as React from 'react';
import {shallow} from 'enzyme';
import Navigation from './navigation';
import {MemoryRouter, Link} from 'react-router-dom';

describe('<Navigation />', () => {
  // Render a checkbox with label in the document
  const navigation = shallow(
    <Navigation />
  );

  const routerNav = shallow(
    <MemoryRouter
      initialEntries={[ '/', '/home', '/new', { pathname: '/' } ]}
      initialIndex={1}
    >
      <Navigation />
    </MemoryRouter>
  );

  it('should have a <Nav/> component', () => {
    const nav = navigation.find('nav');
    const navClasses = ['navbar', 'navbar-toggleable-md', 'navbar-inverse', 'bg-inverse', 'w-100'];

    expect(navigation).not.toBeNull();
    expect(nav.length).toEqual(1);
    expect(navClasses.every(c => nav.hasClass(c))).toEqual(true);
  });

  it('should have a hamburger button', () => {
    const hamButton = navigation.find('nav button');
    const btnSpan = navigation.find('nav button span');
    const btnClasses = ['navbar-toggler', 'navbar-toggler-right'];
    const spanClasses = ['navbar-toggler-icon'];

    expect(hamButton).not.toBeNull();
    expect(btnSpan).not.toBeNull();
    expect(btnClasses.every(c => hamButton.hasClass(c))).toEqual(true);
    expect(spanClasses.every(c => btnSpan.hasClass(c))).toEqual(true);
  });

  it('should render appropriate <Link/> elements', () => {
    const brandLink = <Link className='navbar-brand' to='/'>React Seed</Link>;
    const homeLink = <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>;
    const newLink = <li className='nav-item'><Link className='nav-link' to='/new'>New Contact</Link></li>;

    expect(navigation.contains(brandLink)).toBeTruthy();
    expect(navigation.contains(homeLink)).toBeTruthy();
    expect(navigation.contains(newLink)).toBeTruthy();
  });
});