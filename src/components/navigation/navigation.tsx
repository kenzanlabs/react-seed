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
      <div className='navigation'>
        <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse navbar-static-top pull-md-right'>
          <div className='container'>
            <button className='navbar-toggler navbar-toggler-right' type='button'
                    data-toggle='collapse' data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <Link className='navbar-brand' to='/'>React Seed</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='nav navbar-nav navbar-right'>
                <li className='nav-item'><Link to='/'>Home</Link></li>
                <li className='nav-item'><Link to='/about'>About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

}

export default Navigation;