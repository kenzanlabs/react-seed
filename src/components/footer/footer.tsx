import * as React from 'react';
import './footer.scss';

interface BootstrapStateInterface {
  copyright: string;
}

export default class Footer extends React.Component<{}, BootstrapStateInterface> {
  constructor() {
    super();

    const startingYear = 2014;
    const currentYear = new Date().getFullYear();

    this.state = {
      copyright: `${startingYear} - ${currentYear}`
    };
  }

  render() {
    return (
      <footer>
        <div className='navbar-inverse bg-inverse navbar-fixed-bottom'>
          <p className='text-muted text-center my-3'> {this.state.copyright}
            <br/>
            <a href='http://www.github.com/kenzanlabs'>&copy; Kenzanlabs</a>
          </p>
        </div>
      </footer>
    );
  }

}