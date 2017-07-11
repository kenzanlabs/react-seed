import * as React from 'react';
import {shallow} from 'enzyme';
import Navigation from './navigation';

test('<Navigation />', () => {
  // Render a checkbox with label in the document
  const navigation = shallow(
    <Navigation />
  );
  expect(true).not.toBeFalsy();
});