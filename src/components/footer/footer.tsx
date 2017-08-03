import * as React from 'react';

interface FooterStateInterface {
  copyright: string;
}

interface FooterPropsInterface {
}

export default class Footer extends React.Component<FooterPropsInterface, FooterStateInterface> {
  constructor() {
    super();

    const startingYear = 2017;
    const currentYear = new Date().getFullYear();
    const copyright = startingYear === currentYear ? currentYear.toString() : `${startingYear} - ${currentYear}`;

    this.state = {
      copyright: copyright
    };
  }

  render(): JSX.Element {
    return (
      <footer className='w-100'>
        <div className='navbar-inverse bg-inverse fixed-bottom'>
          <p className='text-muted text-center my-2'> &copy; {this.state.copyright}
            <a href='http://www.kenzan.com/'> Kenzan, LLC</a>
          </p>
        </div>
      </footer>
    );
  }

}