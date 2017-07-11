import * as React from 'react';
import {shallow} from 'enzyme';
import Bootstrap from './bootstrap';

describe('<Bootstrap />', () => {
  // Render a checkbox with label in the document
  const bootstrap = shallow(
    <Bootstrap/>
  );
  it('should not be null', () => {
    expect(bootstrap).not.toBeNull();
  });
});