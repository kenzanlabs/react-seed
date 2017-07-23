import * as React from 'react';

import './footer.scss';

interface FooterStateInterface {
  copyright: string;
}

interface FooterPropsInterface {
}

export default class Footer extends React.Component<FooterPropsInterface, FooterStateInterface> {
  constructor() {
    super();

    const startingYear = 2014;
    const currentYear = new Date().getFullYear();

    this.state = {
      copyright: `${startingYear} - ${currentYear}`
    };
  }

  render(): JSX.Element {
    return (
      <footer className='w-100'>
        <div className='navbar-inverse bg-inverse fixed-bottom'>
          <p className='text-muted text-center my-2'> {this.state.copyright}
            <br/>
            <a href='http://www.github.com/kenzanlabs'>&copy; Kenzanlabs</a>
          </p>
        </div>
      </footer>
    );
  }

}