import { shallow } from 'enzyme';
import React from 'react';
import { PageTest } from '../src/pages/Test/Test.tsx';

describe('TestComponent', () => {
  it('Render Title, get Props', () => {
    const component = shallow(<PageTest />);
    expect(component).toBeTruthy();
  });
});
