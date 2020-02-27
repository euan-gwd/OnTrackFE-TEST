import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from '../store/reducers';
import { App } from './App';

describe('App', () => {
  it('renders as expected', () => {
    const props = {
      ...initialState,
      fetchBooks: jest.fn().mockReturnValue()
    };

    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
