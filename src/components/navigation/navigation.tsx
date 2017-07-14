import './navigation.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';

interface NavigationPropsInterface {
}
interface NavigationStateInterface {
}

class Navigation extends React.Component<NavigationPropsInterface, NavigationStateInterface> {

  render() {
    return (
      <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse w-100'>
        <div className='container'>
          <button className='navbar-toggler navbar-toggler-right' type='button'
                  data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                  aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <Link className='navbar-brand' to='/'>React Seed</Link>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/about'>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Navigation;