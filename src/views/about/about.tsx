import * as React from 'react';

interface AboutStateInterface {
}

interface AboutPropsInterface {
}

export default class About extends React.Component<AboutPropsInterface, AboutStateInterface> {
  render() {
    return (
      <div className='container about'>
        <h1>About</h1>
      </div>
    );
  }
}