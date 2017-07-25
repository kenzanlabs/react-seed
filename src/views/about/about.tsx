import * as React from 'react';

interface AboutStateInterface {
}

interface AboutPropsInterface {
}

export default class About extends React.Component<AboutPropsInterface, AboutStateInterface> {
  render(): JSX.Element {
    return (
      <div className='container about'>
        <h1>About</h1>

        <p>This project and application are intended to demonstrate the integration of various technologies working
          together build a functioning UI using <a href='https://facebook.github.io/react/'>React</a>.</p>

        <h5>The underlying technologies used are:</h5>
        <ul>
          <li><a href='https://yarnpkg.com/'>Yarn</a></li>
          <li><a href='https://www.typescriptlang.org/'>TypeScript</a></li>
          <li><a href='https://webpack.js.org/'>Webpack</a></li>
        </ul>

        <h5>The available features (both technical and user) of the app are:</h5>
        <ul>
          <li>Adding a new contact (with Gravatar integration based on a supported email address)</li>
          <li>See a list of contacts grow as they are added</li>
          <li>Forms, HTTP requests, and routing</li>
          <li>Integration with a CSS framework</li>
          <li>Directory structure and build architecture</li>
          <li>Classes, modules, access modifiers, and other various ES2015+ / TypeScript features</li>
          <li>Best practices around linting, unit tests, and developer experience / workflows</li>
        </ul>

      </div>
    );
  }
}