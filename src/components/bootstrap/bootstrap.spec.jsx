import * as React from 'react';
import { shallow } from 'enzyme';

import Bootstrap from './bootstrap';

describe('Bootstrap Component', () => {
  const bootstrap = shallow(<Bootstrap/>);

  it('should not be null', () => {
    expect(bootstrap).not.toBeNull();
  });

});