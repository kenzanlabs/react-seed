import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';

interface AboutStateInterface {
}

interface AboutPropsInterface extends RouteComponentProps<{}> {
}

export default class About extends React.Component<AboutPropsInterface, AboutStateInterface> {
  render(): JSX.Element {
    return (
      <div className='container about'>
        <h1>About</h1>
      </div>
    );
  }
}